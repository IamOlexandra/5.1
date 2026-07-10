import styled from "styled-components";

export const RecipesStyled = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 9px 0;
`;
    export const RecipesItemStyled = styled.li `
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 235px;
    `;
        export const RecipesImageWrapStyled = styled.div `
            max-width: 220px;
            max-height: 220px;
            border-radius: 12px;
            margin-bottom: 8px;
            overflow: hidden;
        `;
            export const RecipesImageStyled = styled.img `
                width: 100%
            `;
        export const RecipesNameStyled = styled.h2 `
            font-size: 12px;
            margin-bottom: 8px;
            text-align: center;
        `;
        export const RecipesInfoStyled = styled.ul `
            display: flex;
            justify-content: center;
            gap: 6px;
            width: 100%;
            border-radius: 12px;
            background-color: #fff;
            padding: 8px 0;
            margin-bottom: 8px;
        `;
            export const RecipesInfoItemStyled = styled.li `
                display: flex;
                align-items: center;
            `;
                export const RecipesInfoIconWrapStyled = styled.div `
                    display: flex;
                    aling-items: center;
                    width: 15px;
                    margin-right: 3px;
                `;
                export const RecipesInfoTextStyled = styled.p `
                    font-size: 9px;
                    color: #8d8d8d;
                `;
        export const RecipesDifficultyStyled = styled.div `
            width: 143px;
            background-color: #fff;
            padding: 9px 9px 17px;
            border-radius: 12px;
        `;
            export const RecipesDifficultyTextStyled = styled.h3 `
                font-size: 12px;
                margin-bottom: 6px;
            `;
            export const RecipesDifficultyListStyled = styled.ul `
                display: flex;
                justify-content: center;
                gap: 5px;
            `;
                export const RecipesDifficultyItemStyled = styled.li `
                    background-color: #fff7d9;
                    font-size: 8px;
                    padding: 4px 6px;
                    border-radius: 8px;
                `;
                export const RecipesDifficultySelectedStyled = styled.li `
                    background-color: #fa7070;
                    color: #fff;
                    font-size: 9px;
                    padding: 4px 5px;
                    border-radius: 8px;
                `;
                export const RecipesDifficultyUnknownStyled = styled.p `
                
                `;