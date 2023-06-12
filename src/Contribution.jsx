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
        Afternoon Nap by{" "}
        <a
          href=" https://soundcloud.com/ghostrifter-official"
          target="_blank"
          className="contribution_links"
        >
          Ghostrifter Official
        </a>{" "}
        | Music promoted by{" "}
        <a
          href="https://www.chosic.com/free-music/all/"
          target="_blank"
          className="contribution_links"
        >
          Chosic
        </a>{" "}
        |{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          className="contribution_links"
        >
          Creative Commons CC BY-SA 3.0
        </a>
      </div>
    </>
  );
};
