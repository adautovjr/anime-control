import { Link } from 'react-router-dom'

const CustomLink = ({ className, to, children }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
)

export default CustomLink
