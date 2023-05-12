import {
  ListContact,
  ListContactItem,
  ListContactInfo,
  ListRemoveBtn,
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ConatctList = ({ contactsArray, handleDelete }) => {
  return (
    <ListContact>
      {contactsArray.map(contact => (
        <ListContactItem key={contact.id}>
          <ListContactInfo>
            {contact.name}: {contact.number}
          </ListContactInfo>
          <ListRemoveBtn
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            remove
          </ListRemoveBtn>
        </ListContactItem>
      ))}
    </ListContact>
  );
};

export default ConatctList;

ConatctList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
