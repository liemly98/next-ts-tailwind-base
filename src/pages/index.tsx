import type { NextPage } from "next";
import { useContext } from "react";
import { ACTION_TYPES, appContext } from "../states";

const Home: NextPage = () => {
  const [state, dispatch] = useContext(appContext);

  const onClick = () => {
    dispatch({
      type: ACTION_TYPES.SET_COUNT,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{state.count}</h1>
      <button onClick={onClick} className="btn">
        Count
      </button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  );
};

export default Home;
