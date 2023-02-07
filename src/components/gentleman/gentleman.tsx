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

export function GentlemanX(props: GentlemanStructure) {
  return (
    <ul className="list__gentleman">
      <li>
        <div>
          <img
            className="list__img"
            src={gentlemen[0].picture}
            alt={gentlemen[0].alternativeText}
          />
        </div>
        <div>
          <h2 className="list__name"> {gentlemen[0].name}</h2>
          <ul>
            <li className="list__proffesion">
              Profession: {gentlemen[0].profession}
            </li>
            <li className="list__status">Status:{gentlemen[0].status}</li>
            <li className="list__twitter">Twitter:{gentlemen[0].twitter}</li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export function GentlemanXX() {
  return (
    <ul className="list__gentleman">
      <li>Ave, React, morituri te salutant</li>
    </ul>
  );
}
