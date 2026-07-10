import {RecipesStyled} from "./styled.js";
import RecipesItem from "./RecipesItem.jsx";

export default function Recipes({data}) {
    return(
        <RecipesStyled>
            {data.map(itemData => (<RecipesItem itemData={itemData}/>))}
        </RecipesStyled>
    );
}