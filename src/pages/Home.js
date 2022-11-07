import React, { useEffect, useState } from "react";
import Games from "../components/Games";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import image from "../images/busqueda.png";
import imageLoading from "../images/loading.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteFiltersGames, fetchDataGames, fetchGetAllGames, fetchSearchGames, filterGenreGames, sortNameGame, sortRatingGame } from "../redux/actions";


const Home = () => {

  const [changeSort, setChangeSort] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

// trayendo al redux

const games = useSelector((state)=>state.allVideoGames);
const dispatch = useDispatch();

//
  let numberPages = Math.ceil(games.length / postsPerPage);
  let lastIndex = currentPage * postsPerPage;
  let index = lastIndex - postsPerPage;
  const newGames = games.slice(index, lastIndex);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClickSearch = (e) => {
    const searchHtml = document.querySelector('#home__search');
    e.preventDefault();
    dispatch(fetchSearchGames(search));
    searchHtml.value='';
  }

  const handleChangeSelectName = (e) => {
    setChangeSort(!changeSort);
    dispatch(sortNameGame(e.target.value));
  }

  const handleChangeSelectRating = (e) => {
    setChangeSort(!changeSort);
    dispatch(sortRatingGame(e.target.value));
  }

  const handleClickClean = (e) => {
    e.preventDefault();
    setChangeSort(!changeSort);
    dispatch(deleteFiltersGames());
  }

  const handleChangeFilter = (e) => {
    dispatch(filterGenreGames(e.target.value));
  }

  const handleChangeSelectType = (e) => {
    if(e.target.value==='getData'){
      dispatch(fetchDataGames());
    }else{
      dispatch(deleteFiltersGames());
    }
  }

  function LoadingGames() {
    if (games.length===0) {
      return (
        <img src={imageLoading} alt={"loading"} className="home__loading" />
      );
    } else {
      return (
        <>
          <Pagination
            key={1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            numberPages={numberPages}
          />
          <div className="home__games">
            {newGames?.map((data) => (
              <Link className="home__games-links" to={`/detail/${data.id}`}>
                <Games data={data} key={data.id}></Games>
              </Link>
            ))}
          </div>
          <Pagination
            key={2}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            numberPages={numberPages}
          />
        </>
      );
    }
  }

  useEffect(()=>{
    dispatch(fetchGetAllGames());
  },[]);

  return (
    <div className="home">
      <div className="home__nav">
        <div className="home__nav-search">
          <div className="home__search">
            <input
              type="text"
              className="home__search-input"
              id="home__search"
              placeholder="Find your videogame here"
              onChange={handleChange}
            />
            <img
              className="home__search-icon"
              src={image}
              alt={"search"}
              onClick={handleClickSearch}
            />
          </div>
        </div>
        <div className="home__filters">
          <div className="home__button">
            <input type='button' value='Clear filters' onClick={handleClickClean}/>
          </div>
          <div className="home__filters-container">
            <select className="home_filters-container__select" onChange={handleChangeSelectType}>
              <option value="getAll">All videogames</option>
              <option value="getData">Created by user</option>
              <option value="getApi">Videogames api</option>
            </select>
          </div>
          <div className="home__filters-container">
            <select className="home_filters-container__select" onChange={handleChangeFilter}>
              <option value="All">All genres</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Arcade">Arcade</option>
              <option value="Casual">Casual</option>
              <option value="Family">Family</option>
              <option value="Puzzle">Puzzle</option>
              <option value='Shooter'>Shooter</option>
              <option value="RPG">RPG</option>
            </select>
          </div>
          <div className="home__filters-container">
            <select className="home_filters-container__select" onChange={handleChangeSelectName}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
          <div className="home__filters-container">
            <select className="home_filters-container__select" onChange={handleChangeSelectRating}>
              <option value="higher">Higher ratings</option>
              <option value="lower">Lower ratings</option>
            </select>
          </div>
        </div>
      </div>
      <LoadingGames />
    </div>
  );
};

export default Home;
