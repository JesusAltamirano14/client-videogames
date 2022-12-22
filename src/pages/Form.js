import React, { useState } from "react";
import { apiUrl } from "../redux/actions";

const Form = () => {
  const [name, setName] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [released, setReleased] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [rating, setRating] = useState(3);
  const [website, setWebsite] = useState(undefined);
  const [developers, setDevelopers] = useState(undefined);
  const [genres, setGenres] = useState('Action');

  const nameHtml = document.querySelector('#name');
  const descriptionHtml = document.querySelector('#description');
  const releasedHtml = document.querySelector('#released');
  const imageHtml = document.querySelector('#image');
  const ratingHtml = document.querySelector('#rating');
  const websiteHtml = document.querySelector('#website');
  const developersHtml = document.querySelector('#developers');
  const genresHtml = document.querySelector('#genres');
  const alertHtml = document.querySelector('#alert');



  const handleChangeName = (e) => {
    setName(e.target.value);
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
  const handleChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };
  const handleChangeDevelopers = (e) => {
    setDevelopers(e.target.value);
  };
  const handleChangeGenres = (e) => {
    setGenres(e.target.value);
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
        name,
        description,
        background_image:image,
        rating,
        website,
        developers,
        genres,
        released,
      }),
    };
    const res = await fetch(
      `${apiUrl}/db/games`,
      requestOptions
    )
      .then((data) => data.json())
      .then((info) => (info))
      .catch(error=>{console.log(error)});  // there's no needed to add catch here.
    
      console.log(res);
    const boolean = res.hasOwnProperty('message');

    if(!boolean){
    nameHtml.value='';
    setName(undefined);
    descriptionHtml.value='';
    setDescription(undefined);
    releasedHtml.value='';
    setReleased(undefined);
    imageHtml.value='';
    setImage(undefined)
    ratingHtml.value='';
    setRating(3);
    websiteHtml.value='';
    setWebsite(undefined);
    developersHtml.value='';
    setDevelopers(undefined)
    genresHtml.value='Action';
    setGenres('Action');
    alertHtml.innerHTML='All fields marked with (*) are mandatory'
    }else{
      alertHtml.innerHTML='Faltan completar datos'
    }

  };

  return (
    <>
      <div className="form">
        <div className="form__title">Formulario</div>
        <div className="form__inputs">
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Title</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <input
            className="form__inputs__input"
            type="text"
            id='name'
            onChange={handleChangeName}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Description</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <textarea
            className="form__inputs__input"
            type="text"
            id='description'
            onChange={handleChangeDescription}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Released</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <input
            className="form__inputs__input"
            type="date"
            id="released"
            onChange={handleChangeReleased}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Image</div>
          </div>
          <input
            className="form__inputs__input"
            type="text"
            id='image'
            onChange={handleChangeImage}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Rating</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <input
            className="form__inputs__input"
            type="number"
            min="1"
            max="5"
            id='rating'
            onChange={handleChangeRating}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Official Page</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <input
            className="form__inputs__input"
            type="text"
            id='website'
            onChange={handleChangeWebsite}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Company</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <input
            className="form__inputs__input"
            type="text"
            id='developers'
            onChange={handleChangeDevelopers}
          />
          <div className="form__inputs__title">
            <div className="form__inputs__title__text">Genre</div>
            <div className="form__inputs__title__asterisco">*</div>
          </div>
          <select
            className="form__inputs__input"
            type="text"
            id='genres'
            onChange={handleChangeGenres}
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
          <div className="form__inputs__alert" id="alert">
          {'All fields marked with (*) are mandatory'}
          </div>
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
