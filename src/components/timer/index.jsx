import PropTypes from "prop-types";
import * as C from "./style";

const Timer = ({ timeLeft }) => {
  return (
    <C.Timer>
      <C.ProgressBar progress={timeLeft}>{timeLeft.toFixed(1)}s</C.ProgressBar>
    </C.Timer>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default Timer;
