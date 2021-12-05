import Video from "./Video";
import PropTypes from "prop-types";

const VideoList = (props) => {
    return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
    list: PropTypes.array.isRequired
}

export default VideoList;