import React from "react";

const Pagination = ({ setCurrentPage, currentPage ,numberPages }) => {
  const pages = [];

  for (let i = 1; i <= numberPages; i++) {
    pages.push(i);
  }

  const handleLess =()=>{
    if(currentPage===1){
      setCurrentPage(1);
    }else{
      setCurrentPage(currentPage-1)
    }
  }

  const handlePlus=()=>{
    if(currentPage===numberPages){
      setCurrentPage(numberPages);
    }else{
      setCurrentPage(currentPage+1);
    }
  }

  const handleStart = () =>{
    setCurrentPage(1);
  }
  
  const handleEnd = ()=>{
    setCurrentPage(numberPages);
  }

  return (
    <div className="pagination">
      <button className="pagination__element" onClick={()=>{handleStart()}}>{'<<'}</button>
      <button className="pagination__element" onClick={()=>{handleLess()}}>{'<'}</button>
      <div className="pagination__numbers">
        {pages?.map((data) => (
          <button
            key={data}
            onClick={() => setCurrentPage(data)}
            className={currentPage===data?'pagination__element pagination__element-active':'pagination__element'}
          >
            {data}
          </button>
        ))}
      </div>
      <button className="pagination__element" onClick={()=>{handlePlus()}}>{'>'}</button>
      <button className="pagination__element" onClick={()=>{handleEnd()}}>{'>>'}</button>

    </div>
  );
};

export default Pagination;
