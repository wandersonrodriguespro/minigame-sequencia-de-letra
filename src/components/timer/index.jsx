import PropTypes from "prop-types";
import * as C from "./style";

const Timer = ({ timeLeft }) => {
  const progress = (timeLeft / 6) * 100;

  return (
    <C.Timer>
      <C.ProgressBar progress={progress}>{timeLeft.toFixed(1)}s</C.ProgressBar>
    </C.Timer>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default Timer;
