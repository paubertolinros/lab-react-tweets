import "./App.css";
import Tweet from "./components/Tweet";
import { tweetsArrayData as tweetsArray} from './data/dataTweet';

function App() {
  return (
    <div className="App">
      {tweetsArray.map((elem, i) => {
        return (
          <Tweet tweet={elem} />
        )
      })}
    </div>
  );
}

export default App;
