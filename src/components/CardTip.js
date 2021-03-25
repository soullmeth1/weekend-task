import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowIcon from '../assets/oval-icon.svg';

function CardTip({ data }) {
  return (
    <CardStyle>
      <img src={data.image} alt={data.title} />
      <div className="flex">
        <p>{data.title}</p>
        <img src={ArrowIcon} alt="See more" />
      </div>
    </CardStyle>
  );
}

export default CardTip;

CardTip.propTypes = {
  data: PropTypes.object.isRequired,
};

const CardStyle = styled.div`
  position: relative;
  max-width: max-content;
  > img {
    width: 100%;
    max-width: 311px;
    display: block;
  }
  > div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    right: 0;
    height: 7.2rem;
    p {
      max-width: 21.8rem;
      margin: 0 1.6rem 0 2.5rem;
      text-align: left;
      font-weight: 600;
    }
  }
`;
