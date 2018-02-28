import styled from 'styled-components';
import { Wrapper } from '../ShowMovies/styles';

const MovieWrapper = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 5% auto;
`;

const ImageParent = Wrapper.extend`
  width: 50%;
  margin: 0 3% 0 0;
`;

const Content = styled.div`
  width: 47%;
  display: inline-block;
  float: right;
`;

export { MovieWrapper, ImageParent, Content };