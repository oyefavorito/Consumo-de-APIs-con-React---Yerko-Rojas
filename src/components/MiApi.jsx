import { useEffect } from "react";

const MiApi = ({ info, setInfo, busqueda }) => {
  const url = "https://thronesapi.com/api/v2/characters";

  const apiData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Hay un error en la API");
      }
      const data = await resp.json();
      const sortedData = data.sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      );
      setInfo(sortedData);
    } catch (error) {
      console.error({ message: error });
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const filteredInfo = info.filter(
    (character) =>
      character.fullName.toLowerCase().includes(busqueda.toLowerCase()) ||
      character.family.toLowerCase().includes(busqueda.toLowerCase()) ||
      character.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5 justify-content-cener">
          {filteredInfo.map((e) => (
            <div key={e.id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={e.imageUrl}
                  className="card-img-top"
                  alt={e.fullName}
                />
                <div className="textosobrepuesto">
                  <p>
                    {e.fullName} <br />
                    Título {e.title} <br />
                    Familia {e.family}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MiApi;
