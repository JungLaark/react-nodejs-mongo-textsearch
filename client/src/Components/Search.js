import React, {useState} from 'react';
import SearchResult from './SearchResult';
import {Form} from 'react-bootstrap';

const Search = () => {

    const [inputText, setInputText] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <>
            <Form.Control style={{
                                  width: "700px",
                                  height:"50px",
                                  fontSize:"40px", 
                                  padding:"500", 
                                  display:"flex", 
                                  justifyContent:"center", 
                                  position:"relative", 
                                  marginBottom:"20px", 
                                  margin:"0 auto",
                                  marginTop:"50px"
                                }} 
                          id="inputtext" size="lg" type="text" placeholder="검색할 문장을 입력하세요." onChange={onChange}>
            </Form.Control>
            <SearchResult inputText={inputText}/>
        </>
    );
};

export default Search;