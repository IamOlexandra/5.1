import {BsAlarm, BsPieChart, BsBarChart} from "react-icons/bs";
import {
    RecipesItemStyled,
        RecipesImageWrapStyled,
            RecipesImageStyled,
        RecipesNameStyled,
        RecipesInfoStyled,
            RecipesInfoItemStyled,
            RecipesInfoIconWrapStyled,
            RecipesInfoTextStyled,
        RecipesDifficultyStyled,
            RecipesDifficultyTextStyled,
    } from "./styled.js";
import RecipesDifficultyList from "./RecipesDifficultyList.jsx";

export default function RecipesItem({itemData}) {
    return(
        <RecipesItemStyled>
            <RecipesImageWrapStyled>
                <RecipesImageStyled src={itemData.image} alt={itemData.name}/>
            </RecipesImageWrapStyled>
            <RecipesNameStyled>{itemData.name}</RecipesNameStyled>
            <RecipesInfoStyled>
                <RecipesInfoItemStyled>
                    <RecipesInfoIconWrapStyled><BsAlarm/></RecipesInfoIconWrapStyled>
                    <RecipesInfoTextStyled>{itemData.time} minutes</RecipesInfoTextStyled>
                </RecipesInfoItemStyled>
                <RecipesInfoItemStyled>
                    <RecipesInfoIconWrapStyled><BsPieChart/></RecipesInfoIconWrapStyled>
                    <RecipesInfoTextStyled>{itemData.servings} servings</RecipesInfoTextStyled>
                </RecipesInfoItemStyled>
                <RecipesInfoItemStyled>
                    <RecipesInfoIconWrapStyled><BsBarChart/></RecipesInfoIconWrapStyled>
                    <RecipesInfoTextStyled>{itemData.calories} calories</RecipesInfoTextStyled>
                </RecipesInfoItemStyled>
            </RecipesInfoStyled>
            <RecipesDifficultyStyled>
                <RecipesDifficultyTextStyled>Difficulty</RecipesDifficultyTextStyled>
                <RecipesDifficultyList difficulty={itemData.difficulty}/>
            </RecipesDifficultyStyled>
        </RecipesItemStyled>
    );
}