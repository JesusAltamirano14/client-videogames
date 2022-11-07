import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [released, setReleased] = useState('Jesus');
  const [image, setImage] = useState(undefined);
  const [rating, setRating] = useState();
  const [page, setPage] = useState(undefined);
  const [developer, setDeveloper] = useState();
  const [genre, setGenre] = useState('Action');

  const titleHtml = document.querySelector('#title');
  const descriptionHtml = document.querySelector('#description');
  const releasedHtml = document.querySelector('#released');
  const imageHtml = document.querySelector('#image');
  const ratingHtml = document.querySelector('#rating');
  const websiteHtml = document.querySelector('#website');
  const developerHtml = document.querySelector('#developer');
  const genresHtml = document.querySelector('#genres');



  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };
  const handleChangePage = (e) => {
    setPage(e.target.value);
  };
  const handleChangeDeveloper = (e) => {
    setDeveloper(e.target.value);
  };
  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleChangeReleased = (e) => {
    setReleased(e.target.value);
  };
  const handleClickPost = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: title,
        description,
        background_image:image,
        rating,
        website:page,
        developers:developer,
        genres:genre,
        released,
      }),
    };
    const res = await fetch(
      "https://api-videogames-jes.herokuapp.com/db/games",
      requestOptions
    )
      .then((data) => data.json())
      .then((info) => info)
      .catch(error=>{console.log(error)})
    console.log(res);
    // titleHtml.value='';
    // descriptionHtml.value='';
    // releasedHtml.value='';
    // imageHtml.value='';
    // ratingHtml.value='';
    // websiteHtml.value='';
    // developerHtml.value='';
    // genresHtml.value='';
  };

  return (
    <>
      <div className="form">
        <div className="form__title">Formulario</div>
        <div className="form__inputs">
          <div className="form__inputs__title">Title</div>
          <input
            className="form__inputs__input"
            type="text"

            id='title'
            onChange={handleChangeTitle}
          />
          <div className="form__inputs__title">Description</div>
          <textarea
            className="form__inputs__input"
            type="text"
            id='description'
            onChange={handleChangeDescription}
          />
          <div className="form__inputs__title">Released</div>
          <input
            className="form__inputs__input"
            type="date"
            onChange={handleChangeReleased}
          />
          <div className="form__inputs__title">Image</div>
          <input
            className="form__inputs__input"
            type="text"
            id='image'
            onChange={handleChangeImage}
          />
          <div className="form__inputs__title">Rating</div>
          <input
            className="form__inputs__input"
            type="number"
            min="1"
            max="5"
            id='rating'
            onChange={handleChangeRating}
          />
          <div className="form__inputs__title">Official Page</div>
          <input
            className="form__inputs__input"
            type="text"
            id='website'
            onChange={handleChangePage}
          />
          <div className="form__inputs__title">Developer</div>
          <input
            className="form__inputs__input"
            type="text"
            id='developer'
            onChange={handleChangeDeveloper}
          />
          <div className="form__inputs__title">Genre</div>
          <select
            className="form__inputs__input"
            type="text"
            id='genre'
            onChange={handleChangeGenre}
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Arcade">Arcade</option>
            <option value="Casual">Casual</option>
            <option value="Family">Family</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooter">Shooter</option>
            <option value="RPG">RPG</option>
          </select>
        </div>
        <div className="form__container-button">
          <input
            className="form__container-button__button"
            type="submit"
            value="save"
            onClick={handleClickPost}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
