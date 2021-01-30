import PropTypes from "prop-types";

const Notification = ({ showNotification }) => (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
        <p>You have already entered this letter</p>
    </div>
);

Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired,
};

export default Notification;
