import {
    RecipesDifficultyListStyled,
        RecipesDifficultyItemStyled,
        RecipesDifficultySelectedStyled,
    RecipesDifficultyUnknownStyled
    } from "./styled.js";

export default function RecipesDifficultyList({difficulty}) {
    switch (difficulty) {
        case 0:
            return(
                <RecipesDifficultyListStyled>
                    <RecipesDifficultySelectedStyled>Easy</RecipesDifficultySelectedStyled>
                    <RecipesDifficultyItemStyled>Medium</RecipesDifficultyItemStyled>
                    <RecipesDifficultyItemStyled>Hard</RecipesDifficultyItemStyled>
                </RecipesDifficultyListStyled>
            );
            break;
        case 1:
            return(
                <RecipesDifficultyListStyled>
                    <RecipesDifficultyItemStyled>Easy</RecipesDifficultyItemStyled>
                    <RecipesDifficultySelectedStyled>Medium</RecipesDifficultySelectedStyled>
                    <RecipesDifficultyItemStyled>Hard</RecipesDifficultyItemStyled>
                </RecipesDifficultyListStyled>
            );
            break;
        case 3:
            return(
                <RecipesDifficultyListStyled>
                    <RecipesDifficultyItemStyled>Easy</RecipesDifficultyItemStyled>
                    <RecipesDifficultyItemStyled>Medium</RecipesDifficultyItemStyled>
                    <RecipesDifficultySelectedStyled>Hard</RecipesDifficultySelectedStyled>
                </RecipesDifficultyListStyled>
            );
            break;
        default:
            return(
                <RecipesDifficultyUnknownStyled>???</RecipesDifficultyUnknownStyled>
            )
    }
}