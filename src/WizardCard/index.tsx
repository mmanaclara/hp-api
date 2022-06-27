import axios from "axios";
import { useEffect, useState } from "react";

import { WizardCards, WizardInfo } from "./style";

interface DataProps {
    name: string;
    image: string;
    house: string;
    ancestry: string;
    dateOfBirth: string;
    wand: {
      core: string;
    };
    patronus: string;
  }

export function WizardCard() {

    const [data, setData] = useState<DataProps[]>([]);

useEffect(() => {
  const getWizards = async () => {
    const response = await axios.get(
      "https://hp-api.herokuapp.com/api/characters"
    );
    setData(response.data.slice(0, 20));
  };
  getWizards();
}, []);

  return (
    <WizardCards>
        {data.map((data: DataProps, idx) => (
          <main key={idx}>
            <WizardInfo>
              <div className="wizardProfile">
                <h4>{data.name}</h4>
                <div className="imgWizard">
                  <img src={data.image} alt={data.name} />
                </div>

                <p>House: {data.house || 'Unknown'} </p>
                <p>Ancestry: {data.ancestry || 'unknown'} </p>
                <p>Date of birth: {data.dateOfBirth || 'dd-mm-yyyy'} </p>
                <p>Wand: {data.wand.core || 'unknown'} </p>
                <p>Patronus: {data.patronus || 'unknown'} </p>
              </div>
            </WizardInfo>
          </main>
        ))}
    </WizardCards>
  )
}

