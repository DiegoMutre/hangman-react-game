import PropTypes from "prop-types";

const Notification = ({ message = "", show = false }) => (
    <div className={`notification-container ${show && "show"}`}>
        <p>{message}</p>
    </div>
);

Notification.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
};

export default Notification;
