import "./App.css";
import Listings from "./components/Listings";
import { useStateContext } from "./context/StateContext";
import data from "./data.json";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
function App() {
  const { tags, onRemove, db, setDb, onClear, searchJob } = useStateContext();

  useEffect(() => {
    setDb(data);
  });

  return (
    <div className="container">
      <div className="header">
        {tags.length > 0 && (
          <div className="search">
            {tags.map((item) => (
              <div className="tags">
                <p>{item}</p>
                <span onClick={() => onRemove(item)}>
                  <AiOutlineClose />
                </span>
              </div>
            ))}
            <p className="clear" onClick={() => onClear()}>
              clear
            </p>
          </div>
        )}
      </div>

      <div className="body">
        {searchJob(db).map((job) => (
          <Listings key={job.id} listings={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
