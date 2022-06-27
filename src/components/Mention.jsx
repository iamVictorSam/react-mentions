import { useState } from "react";
import {
  Mention,
  MentionsInput,
} from "react-mentions/dist/react-mentions.cjs.dev";
import defaultMentionStyle from "../defaultMentionStyle";
import defaultStyle from "../defaultStyle";

const Mentions = () => {
  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel@nobody.com",
    },
    // {
    //   id: "isaac",
    //   display: "Isaac Newton",
    // },
    // {
    //   id: "isaac",
    //   display: "Isaac Newton",
    // },
    // {
    //   id: "isaac",
    //   display: "Isaac Newton",
    // },
    // {
    //   id: "isaac",
    //   display: "Isaac Newton",
    // },
  ];

  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div>
      <MentionsInput
        style={defaultStyle}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <Mention style={defaultMentionStyle} data={users} />
      </MentionsInput>
    </div>
  );
};

export default Mentions;
