import {useState} from "react";

export const ImgWithFallback = (props) => {
  const {
    src,
    ...other
  } = props
  const [erroredImage, setErroredImage] = useState(false)
  const dummyurl = other.dummyurl || "https://vahrushev.info/wp-content/uploads/2016/07/cropped-20140507_204840-e1468861419467-180x180.jpg"
      return <img alt="" onError={() => setErroredImage(true)} src={erroredImage ? dummyurl : src} {...other} />
}

export default ImgWithFallback;
