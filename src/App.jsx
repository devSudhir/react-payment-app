import "./App.css";
import { SendDate } from "./components/Date";
import { SendButton } from "./components/Button";
import { SendH1 } from "./components/Sendh1";
import { SendH2 } from "./components/SendH2";
import { SendH3 } from "./components/SendH3";
//import { amazon } from "../public/Amazon-logo.jpg";
function App() {
  const arr = [
    {
      date: "28/10/2020",
      logo: "./Amazon-logo.jpg",
      button: "Case Study",
      heading: "Amazon Gift",
      subHeading: "Pay",
      type: "Desktop - Mobile",
      color: "#ffa500",
    },
    {
      date: "28/10/2020",
      logo: "./Amazon-logo.jpg",
      button: "Case Study",
      heading: "Amazon Gift",
      subHeading: "Pay",
      type: "Desktop - Mobile",
      color: "#ffa500",
    },
    {
      date: "17 Sep 2020",
      logo: "./Amazon-logo.jpg",
      button: "Case Study",
      heading: "Apple Gift",
      subHeading: "Payment",
      type: "MacOS - Mobile",
      color: "#aaa",
    },
  ];
  return (
    <>
      {arr.map((ele) => {
        return (
          <div style={{ backgroundColor: `${ele.color}` }}>
            <span>
              <SendDate date={ele.date} />
              <img src={ele.logo} alt="logo" />
            </span>
            <SendButton text={ele.button} />
            <SendH1 heading={ele.heading} />
            <SendH2 subHeading={ele.subHeading} />
            <span>
              <SendH3 type={ele.type} />
              <p>&#129154;</p>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default App;
