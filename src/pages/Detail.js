import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailOneDataGame, fetchDetailOneGame } from "../redux/actions";

const Detail = () => {
  const { codigo } = useParams();
  const arrayStars = [];
  
  function DetailContent() {
    if (objeto !== 0) {
      const {
        name: title,
        description,
        background_image: image,
        developers,
        website,
        rating,
      } = objeto;

      for (let i = 0; i < Math.floor(rating); i++) {
        arrayStars.push(i);
      }

      const FunctionDevelopers = () => {
        if(Array.isArray(developers)){
          return (developers.map(info=>(<div>{info.name}</div>)))
        }else{
          return (<div>{developers}</div>)
        }
      }

      return (
        <div className="detail">
          <img className="detail__image" src={image} alt={objeto.id}></img>
          <div className="detail__container-information">
            <div className="detail__container">
              <div className="detail__title">{title}</div>
              <div className="detail__companies">
                <FunctionDevelopers/>
              </div>
              <div className="detail__stars">
                <div className="detail__stars__title">Rating:</div>
                {arrayStars?.map((data) => (
                  <div className="detail__stars__individual">⭐</div>
                ))}
              </div>
            </div>
            <div className="detail__button">
              <a className="detail__button__link" href={website}>
                Ir a la pagina oficial
              </a>
            </div>
          </div>
          <div className="detail__description">
            <div className="detail__description__title">
              Informacion del juego
            </div>
            <div className="detail__description__container-subtitle">
              <div className="detail__description__container-subtitle__subtitle">
                {description}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  // trayendo el redux
  const dispatch = useDispatch();
  let objeto = useSelector((state) => state.oneVideoGame);

  useEffect(() => {
    if (codigo > 200) {
      dispatch(fetchDetailOneGame(codigo));
    } else {
      dispatch(fetchDetailOneDataGame(codigo));
    }
  }, []);

  return <DetailContent></DetailContent>;
};

export default Detail;
