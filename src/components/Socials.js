import React from 'react';

import {
  ImGithub,
  ImInstagram,
  ImYoutube,
  ImLinkedin
} from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.linkedin.com/in/jordanharris00/' target='_blank'>
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/jielongjp' target='_blank'>
            <ImGithub />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/jielong_/' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UC1qHXN-WjKK1uZ6yfemUdhg/' target='_blank'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
