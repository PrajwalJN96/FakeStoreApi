import React, { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import Count from "./Count";

import { cilArrowCircleTop, cilArrowCircleBottom } from "@coreui/icons";

const Cards = ({ prdData }) => {
  const [display, setDisplay] = useState([]);
  const [up, setUp] = useState(true);
  const [num, setNum] = useState(true);
  const [searchContact, setSearchContact] = useState("");

  let handleSort = () => {
    setUp(!up);
  };
  let handleSortChange = () => {
    setNum(!num);
  };
  useEffect(() => {
    let filter = prdData.filter((person) => {
      if (searchContact == "") {
        return person;
      } else if (
        person.title
          .toLocaleLowerCase()
          .includes(searchContact.toLocaleLowerCase())
      ) {
        return person;
      }
    });

    let sort;
    if (num) {
      sort = up
        ? filter.sort((a, b) => Number(a.id) - Number(b.id))
        : filter.sort((a, b) => Number(b.id) - Number(a.id));
    } else {
      sort = up
        ? filter.sort((a, b) => a.title.localeCompare(b.title))
        : filter.sort((a, b) => b.title.localeCompare(a.title));
    }

    setDisplay(
      sort.map((person) => {
        return (
          <div className="card" key={person.id}>
            <div className="heading">
              <span className="def">Item No : </span>
              {person.id}
            </div>
            <div>
              <span className="def">Name : </span>
              {person.title}
            </div>
            <div>
              <span className="def">Price : </span>
              {person.price}
            </div>
            <div>
              <span className="def">Category : </span>
              {person.category}
            </div>
            <div>
              <Count price={person.price} />
            </div>
          </div>
        );
      })
    );
  }, [num, up, searchContact, prdData]);

  return (
    <>
      <h1> Filter Products App </h1>
      <input
        type="text"
        placeholder="search name"
        onChange={(e) => setSearchContact(e.target.value)}
        className="search"
      />
      <CIcon
        icon={up ? cilArrowCircleTop : cilArrowCircleBottom}
        id="sorter"
        onClick={handleSort}
      />
      <button id="specSort" onClick={handleSortChange}>
        {num ? "id" : "name"}
      </button>
      <div className="card-container">{display}</div>
    </>
  );
};

export default Cards;
