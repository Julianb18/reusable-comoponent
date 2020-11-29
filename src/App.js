import "./App.css";
import { Article } from "./components/Article";

const articles = [
  {
    id: 1,
    title: "Galio Support",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4a-Wxp-PeF00IwXQWmz7_vobTd2vsx5uTw&usqp=CAU",
    content:
      "Galio designates an allied champion's position as his landing spot, granting all allied champions in the area Shield of Durand's passive Shield for n seconds. Galio then flies to his landing zone. When Galio lands, he Knocks Up for r seconds and deals magic damage.",
  },
  {
    id: 2,
    title: "Thresh Support",
    image:
      "data:image/jpeg;base64,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",
    content:
      "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he sought a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness.",
  },
  {
    id: 3,
    title: "Soraka Support",
    image:
      "data:image/jpeg;base64,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",
    content:
      "A wanderer from the celestial realm, Soraka gave up her immortal form to protect the mortal races from their own ignorance and violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—guiding the lost, and healing the wounded.",
  },
];

function App() {
  return (
    <div className="App">
      {articles.map((article) => (
        <Article
          title={article.title}
          image={article.image}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default App;
