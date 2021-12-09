let topics = [
  { _id: 1, name: "Einführung Wirtschaftsinformatik" },
  { _id: 2, name: "Mathematik" },
  { _id: 3, name: "Betriebliche Steuerlehre" },
  { _id: 4, name: "Grundlagen Wirtschaftsrecht" },
  { _id: 5, name: "Systemanalyse" },
  { _id: 6, name: "Introduction Networking" },
  { _id: 7, name: "Datenbanken" },
  { _id: 8, name: "B2B-Marketing" },
  { _id: 9, name: "Externes Rechnungswesen" },
];

export function getTopics() {
  return topics;
}

export default {
  getTopics,
};
