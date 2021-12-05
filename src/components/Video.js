import withDateTimePretty from "./withDateTimePretty";
import DateTime from "./DateTime";
import PropTypes from "prop-types";

const DateTimePretty = withDateTimePretty(DateTime);

const Video = (props) => {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            <DateTimePretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Video;