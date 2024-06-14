import PropTypes from "prop-types";
import * as C from "./style";

const SequenceDisplay = ({ sequence, currentIndex }) => {
  return (
    <C.Sequence>
      {sequence.split("").map((char, index) => (
        <C.ItemSquence
          key={index}
          style={{
            color: index === currentIndex ? "#fff" : index < currentIndex ? "#fff" : "black",
            fontWeight: index === currentIndex ? "bold" : "normal",
            backgroundColor: index === currentIndex ? "#eb7506" : index < currentIndex ? "green" : "#ccc",
          }}
        >
          {char}
        </C.ItemSquence>
      ))}
    </C.Sequence>
  );
};

SequenceDisplay.propTypes = {
  sequence: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default SequenceDisplay;
