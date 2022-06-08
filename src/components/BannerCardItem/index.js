// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="user-name">{headerText}</h1>
      <p className="user-designation">{description}</p>
      <button className="show-more-btn" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
