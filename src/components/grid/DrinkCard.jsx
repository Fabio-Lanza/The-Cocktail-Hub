import "./DrinkCard.css";

function DrinkCard({ data }) {
  return (
    <section>
      <div className="cocktail">
        <div>
          <img src={data.strDrinkThumb} alt="" />
        </div>
        <div>
          <h3>{data.strDrink}</h3>
          <h4>{data.strGlass}</h4>
          <div className="ingredients">
            <span>Ingredients:</span>
            <span>-{data.strIngredient1}</span>
            <span>-{data.strIngredient2}</span>
            <span>-{data.strIngredient3}</span>
            <span>-{data.strIngredient4}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrinkCard;
