import moment from "moment";
import 'moment/locale/ru';
import PropTypes from "prop-types";

const withDateTimePretty = (Component) => {
    const HOCComponent = (props) => {
        const updateDateTime = moment(props.date).fromNow();

        return <Component {...props} date={updateDateTime} />;
    }
    HOCComponent.displayName = 'withDateTimePrettyHOC';
    return HOCComponent;
};

withDateTimePretty.propTypes = {
    date: PropTypes.string.isRequired
}

export default withDateTimePretty;