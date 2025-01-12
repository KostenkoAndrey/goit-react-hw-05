import React from 'react';
import { Blocks } from 'react-loader-spinner';
import s from "./Loader.module.css"
const Loader = () => {
  return (
    <div className={s.loaderCont}>
<Blocks
  height="120"
  width="120"
  color=""
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
    </div>
  )
}

export default Loader;
