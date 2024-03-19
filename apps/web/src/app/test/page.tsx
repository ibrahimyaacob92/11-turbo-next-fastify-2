import { add } from "@packages/utils";
import React from "react";

type Props = {};

const Test = (props: Props) => {
  const res = add(13, 43);
  return (
    <div>
      <p>Testing page: {res}</p>
    </div>
  );
};

export default Test;
