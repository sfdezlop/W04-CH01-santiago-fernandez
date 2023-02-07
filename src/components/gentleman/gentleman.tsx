import { GentlemanStructure } from "../../models/gentlemen";
import { gentlemen } from "../../mocks/gentlemen";

export function Gentleman(props: GentlemanStructure) {
  for (let item = 0; item < gentlemen.length; item++) {
    let gentleman = gentlemen[item];
    return (
      <ul className="list__gentleman">
        <li>
          <div>
            <img
              className="list__img"
              src={gentleman.picture}
              alt={gentleman.alternativeText}
            />
          </div>
          <div>
            <h2 className="list__name"> {gentleman.name}</h2>
            <ul>
              <li className="list__proffesion">
                Profession: {gentleman.profession}
              </li>
              <li className="list__status">Status:{gentleman.status}</li>
              <li className="list__twitter">Twitter:{gentleman.twitter}</li>
            </ul>
          </div>
        </li>
      </ul>
    );
  }
}
