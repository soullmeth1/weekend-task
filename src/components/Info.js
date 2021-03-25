import PropTypes from 'prop-types';
import styled from 'styled-components';

function Info({ title, desc }) {
  return (
    <InfoStyle>
      <h2 className="title">{title}</h2>
      <p>{desc}</p>
    </InfoStyle>
  );
}

export default Info;

Info.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const InfoStyle = styled.div`
  max-width: 619px;
  margin: 0 auto;
  margin-bottom: 6.7rem;
  opacity: 0;
  @media only screen and (min-width: 400px) {
    text-align: center;
  }
`;
