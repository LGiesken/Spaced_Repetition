import React from "react";
import { useParams } from "react-router-dom";

function QuestionPage() {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <p>QuestionPage</p>
    </div>
  );
}

export default QuestionPage;
