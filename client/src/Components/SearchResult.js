import React, {useEffect, useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';


const SearchResult = (props) => {

    //useEffect 를 써야하나? 
    //props를 가지고 와서 바로 검색을 한다. 
    //검색을 하고 리턴된 값들을 뿌려준다. 
    //이 함수는 언제 호출? 텍스트가 바뀔 때 마다? 
    //그때 그때 호출을 할 것입니다.   

    const {inputText} = props;

    const [result, setResult] = useState([]);

    useEffect(() => {
        searchText(inputText);
    }, [inputText]);

    const searchText = (inputText) => {
        //db.products.find({name:{$regex:"sd"}) --> name 키값에 sd가 포함되어 있는 것을 찾아라
        console.log('searchText 함수 실행');

        // const data = {
        //     userId: "",
        //     noteIndex: 1,
        //     contents : {
        //         markUp: "",
        //         indexing: ""
        //     }
        // }

        axios.get('http://localhost:5000/note', {params: {text: inputText}})
            .then((res) => {
                console.log(res);
                console.log('frontend SearchResult : ' + res.data.data);
                setResult(res.data.data);
                //console.log('result array : ' + result[0].indexing);
                
            })
            .catch((err) => {console.log(err)})
    }

    return (
        <div> 
            {/* {props.inputText} */}
            
              {/* {result && result.map((data) => {
                     <ListGroup style={{
                        width: "700px",
                        height:"50px",
                        fontSize:"30px", 
                        display:"flex", 
                        justifyContent:"left", 
                        position:"relative", 
                        marginBottom:"20px", 
                        margin:"0 auto",
                        marginTop:"50px"
                      }}>
                        <ListGroup.Item key={data.noteIndex}>This ListGroup {data}</ListGroup.Item>
                 </ListGroup>
              })} */}

            {result.map(data => (
                <div style={{
                    width: "700px",
                    height:"50px",
                    fontSize:"20px", 
                    padding:"50", 
                    display:"flex", 
                    justifyContent:"center", 
                    position:"relative", 
                    
                    margin:"0 auto",
                    marginTop:"10px"
                  }} > 
                    <div key={data.noteIndex}>indexing: {data.markUp}</div>
                    <div key={data.noteIndex}>indexing: {data.indexing}</div>
                    <br/>
                </div>
                
                
            ))}

        </div>
    );
};

export default SearchResult;


// ['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint, idx) => (
//     <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
//       <ListGroup.Item>This ListGroup</ListGroup.Item>
//       <ListGroup.Item>renders horizontally</ListGroup.Item>
//       <ListGroup.Item>on {breakpoint}</ListGroup.Item>
//       <ListGroup.Item>and above!</ListGroup.Item>
//     </ListGroup>
//   ));