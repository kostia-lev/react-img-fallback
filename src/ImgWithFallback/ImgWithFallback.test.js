import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ImgWithFallback from './ImgWithFallback';

describe("ImgWithFallback", () => {
  test('renders with fallback image prop', async () => {
   render(<ImgWithFallback src="ads" alt="the_alt_text" dummyurl="http://iamdummy/" />);

    const imgEl = screen.getByAltText('the_alt_text');

    fireEvent.error(imgEl, {
      target: imgEl,
    });

    await waitFor(() => {
      expect(imgEl.src).toEqual(
          'http://iamdummy/'
      );
    });
  });
  test('renders with fallback default fallback image', async () => {
    render(<ImgWithFallback src="ads" alt="the_alt_text" />);

    const imgEl = screen.getByAltText('the_alt_text');

    fireEvent.error(imgEl, {
      target: imgEl,
    });

    await waitFor(() => {
      expect(imgEl.src).toEqual(
          "https://vahrushev.info/wp-content/uploads/2016/07/cropped-20140507_204840-e1468861419467-180x180.jpg"
      );
    });
  });

})