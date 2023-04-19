import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    


    // useEffect(()=>{
    //   setInput(params.search)
    //   console.log(params);
    // }, [])

    

    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        navigate('/searched/'+input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input type="text" value={input} onChange={(e)=>{inputChange(e)}}/>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    ouline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
