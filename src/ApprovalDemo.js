import "./App.css";
import { Suspense } from "react";
import ApprovalCard from "./Approve";
import Counter from "./counter";
import React from "react";
const Comment = React.lazy(() => import("./comment"));

function App() {
  return (
    <div className="ui container">
      <ApprovalCard>
        <Suspense fallback={<div>Loading...</div>}>
          <Comment
            time="Today at 1:40pm"
            name="Wafula Allan Isaac"
            info="this is the best......"
          />
        </Suspense>
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          time="Today at 2:30pm"
          name="Wafula"
          info="My data is looking cool..."
        />
      </ApprovalCard>
      <ApprovalCard>
        <Suspense fallback={<div>Loading...</div>}>
          <Comment
            time="Today at 1:40pm"
            name="Wafula Allan Isaac"
            info="this is the best......"
          />
        </Suspense>
      </ApprovalCard>
      <Counter initialCount={2} />
    </div>
  );
}

export default App;
