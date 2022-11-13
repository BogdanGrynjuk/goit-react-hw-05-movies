import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ children }) => {
  return (
    <Message>
      {children}
    </Message>
  );
};

export default Notification;

Notification.propTypes = {
  children: PropTypes.node.isRequired
}