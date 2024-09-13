import React, { useEffect, useMemo, useState } from "react";


// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array




const words=["hiii","my","name","is","rishabh","dubey"]
const MAX_WORDS=1000
const ALL_WORDS=[]

for(let i=0; i<MAX_WORDS; i++){
  let sentences = " "
  for(let j=0; j<words.length; j++){
    sentences+=(words[Math.floor(words.length * Math.random())])
    sentences+= " "
  }

  ALL_WORDS.push(sentences)
}

const Assignment2 = () => {

  const [sentence,setsentence] = useState(ALL_WORDS);
  const [filter,setfilter]= useState("");

  const filterSentences= useMemo(()=>{
    return sentence.filter(x=>x.includes(filter))
  },[sentence,filter])
  
  
  return (
    <div>
      <input type="text" placeholder="enter your number here" onChange={(e)=>{
        setfilter(e.target.value)}
      }/>
      {filterSentences.map(word=><div>
        {word}</div>)}
    </div>

  )
}

export default Assignment2