import { Footballer } from "./footballer";

const FootballerList = () => {
    const footbalerList = [
        {
          name: "Lionel Messi",
          age: 36,
          nationality: "Argentina",
          player_status: "Active",
          club: "Inter Miami",
          position: "Forward",
        },
        {
          name: "Cristiano Ronaldo",
          age: 39,
          nationality: "Portugal",
          player_status: "Active",
          club: "Al-Nassr",
          position: "Forward",
        },
        {
          name: "Kylian Mbappé",
          age: 25,
          nationality: "France",
          player_status: "Active",
          club: "Paris Saint-Germain",
          position: "Forward",
        },
        {
          name: "Erling Haaland",
          age: 23,
          nationality: "Norway",
          player_status: "Active",
          club: "Manchester City",
          position: "Forward",
        },
        {
          name: "Kevin De Bruyne",
          age: 32,
          nationality: "Belgium",
          player_status: "Active",
          club: "Manchester City",
          position: "Midfielder",
        },
        {
          name: "Mohamed Salah",
          age: 31,
          nationality: "Egypt",
          player_status: "Active",
          club: "Liverpool",
          position: "Forward",
        },
        {
          name: "Robert Lewandowski",
          age: 35,
          nationality: "Poland",
          player_status: "Active",
          club: "Barcelona",
          position: "Forward",
        },
        {
          name: "Neymar Jr",
          age: 32,
          nationality: "Brazil",
          player_status: "Active",
          club: "Al-Hilal",
          position: "Forward",
        },
        {
          name: "Vinícius Jr",
          age: 23,
          nationality: "Brazil",
          player_status: "Active",
          club: "Real Madrid",
          position: "Forward",
        },
        {
          name: "Jude Bellingham",
          age: 20,
          nationality: "England",
          player_status: "Active",
          club: "Real Madrid",
          position: "Midfielder",
        },
        {
          name: "Harry Kane",
          age: 30,
          nationality: "England",
          player_status: "Active",
          club: "Bayern Munich",
          position: "Forward",
        },
        {
          name: "Luka Modrić",
          age: 38,
          nationality: "Croatia",
          player_status: "Active",
          club: "Real Madrid",
          position: "Midfielder",
        },
        {
          name: "Bruno Fernandes",
          age: 29,
          nationality: "Portugal",
          player_status: "Active",
          club: "Manchester United",
          position: "Midfielder",
        },
        {
          name: "Marcus Rashford",
          age: 26,
          nationality: "England",
          player_status: "Active",
          club: "Manchester United",
          position: "Forward",
        },
        {
          name: "Antoine Griezmann",
          age: 33,
          nationality: "France",
          player_status: "Active",
          club: "Atletico Madrid",
          position: "Forward",
        },
        {
          name: "Pedri",
          age: 21,
          nationality: "Spain",
          player_status: "Active",
          club: "Barcelona",
          position: "Midfielder",
        },
        {
          name: "Joshua Kimmich",
          age: 29,
          nationality: "Germany",
          player_status: "Active",
          club: "Bayern Munich",
          position: "Midfielder",
        },
        {
          name: "Alisson Becker",
          age: 31,
          nationality: "Brazil",
          player_status: "Active",
          club: "Liverpool",
          position: "Goalkeeper",
        },
        {
          name: "Thibaut Courtois",
          age: 32,
          nationality: "Belgium",
          player_status: "Active",
          club: "Real Madrid",
          position: "Goalkeeper",
        },
        {
          name: "Virgil van Dijk",
          age: 32,
          nationality: "Netherlands",
          player_status: "Active",
          club: "Liverpool",
          position: "Defender",
        },
      ];
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
            {
                footbalerList.map(footballer=><Footballer key={footballer.id} footballer={footballer}></Footballer>)
               
            }
        </div>
    );
};

export default FootballerList;
