import { useState } from "react";
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={`contribution-toggle-button  ${
          isOpen && "contribution-toggle-active"
        }`}
        onClick={(e) => handleToggle(e)}
      >
        <span>i</span>
      </div>
      <div
        className={`contribution-info ${isOpen && "contribution-is-active"}`}
      >
        Purple Dream by{" "}
        <a
          href="https://www.youtube.com/c/GhostrifterOfficial"
          target="_blank"
          className="contribution_links"
        >
          Ghostrifter Official
        </a>{" "}
        | Creative Commons — Attribution-NoDerivs 3.0 Unported — CC BY-ND 3.0
        Music promoted by | Music promoted by{" "}
        <a
          href="https://www.chosic.com/free-music/all/"
          target="_blank"
          className="contribution_links"
        >
          Chosic
        </a>
      </div>
    </>
  );
};
