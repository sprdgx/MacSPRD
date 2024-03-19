import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              I'm Boujelouah Massinissa, a dynamic Fullstack Developer & Blockchain
              Specialist, With X years of experience. I craft seamless user experiences
              and integrate cutting-edge blockchain tech. Let's explore my portfolio where
              code meets creativity and blockchain shapes the future.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Beutiful Interfices And 3D Website / Blockchain Structure / Machine Learning"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:massi.bjl@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                massi.bjl@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/sprdgx"
                target="_blank"
                rel="noreferrer"
              >
                @Sprdgx
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://dz.linkedin.com/in/massinissa-boujelouah-947a0923a"
                target="_blank"
                rel="noreferrer"
              >
                Massinissa Boujelouah
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
