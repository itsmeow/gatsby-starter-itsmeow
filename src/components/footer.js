import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="topfooter">
        <Link to="/" className="link-no-style">
          <StaticImage
            src="./../data/modslogo.png"
            alt="itsmeow mods logo"
            layout="fixed"
            width={211}
            height={60}
          ></StaticImage>
        </Link>
        <div className="github">
          <a
            href="https://github.com/itsmeow/gatsby-starter-itsmeow"
            className="link-no-style"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub logo"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
      <div className="bottomfooter">
        <div className="left-text">
          by itsmeow - © {new Date().getFullYear()} - MIT License - Thanks for
          visiting!
        </div>
      </div>
    </footer>
  )
}

export default Footer
