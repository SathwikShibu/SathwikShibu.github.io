const tournaments = [
	{
		name: "PUBG Global Championship",
		date: "November 1-20, 2023",
		prize: "$2,000,000"
	},
	{
		name: "PUBG Nations Cup",
		date: "December 8-11, 2023",
		prize: "$500,000"
	}
];

const tournamentList = document.getElementById("tournaments");

tournaments.forEach(tournament => {
	const listItem = document.createElement("li");
	listItem.innerHTML = `<strong>${tournament.name}</strong> - ${tournament.date} - Prize: ${tournament.prize}`;
	tournamentList.appendChild(listItem);
});