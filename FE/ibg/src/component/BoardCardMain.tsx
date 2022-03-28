import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "../page/Main";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";
import LikeButton from "./LikeButton";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

const StyledCard = styled(Card)(() => ({
  position: "relative",
  "&:hover": {
    animation: "circlemove 1.5s infinite linear",
  },
  "@keyframes circlemove": {
    "0%,100%": { transform: "translate(-1%,-1%)" },
    "50%": {
      transform: "translate(-1%,-2%)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },
}));

const ImgWrapper = styled("div")(() => ({
  position: "relative",
  width: "100%",
  height: 0,
  overflow: "hidden",
  paddingBottom: "100%",
}));

const GameTitle = styled("div")(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginBottom: theme.spacing(1),
}));

const Category = styled("div")(({ theme }) => ({
  fontSize: "0.85rem",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginBottom: theme.spacing(1.3),
}));

const AddInfo = styled("div")(() => ({
  fontSize: "0.8rem",
  display: "flex",
  alignItems: "center",
}));

const LikeButtonPosition = styled("span")(() => ({
  position: "absolute",
  right: "16px",
  bottom: "10px",
}));

export default function BoardCard(props: { game: Game }) {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate(`detail/${props.game.gameNo}`);
  };
  return (
    <Grid item xs={12} sm={4} md={3} lg={2.5}>
      <StyledCard variant="outlined" onClick={moveToDetail}>
        <CardActionArea>
          <ImgWrapper>
            <CardMedia
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              component="img"
              image={props.game.gameImg}
              alt={props.game.gameName}
            />
          </ImgWrapper>
          <CardContent>
            <GameTitle>{props.game.gameName}</GameTitle>
            <Category>{props.game.gameCategory}</Category>
            <AddInfo>
              <PersonIcon color="warning" fontSize="small" sx={{ mr: 0.5 }} />
              {props.game.gameMinPlayer}~{props.game.gameMaxPlayer}명
              <StarIcon color="warning" fontSize="small" sx={{ mx: 0.5 }} />
              {props.game.gameTotalScore}
            </AddInfo>
            <LikeButtonPosition>
              <LikeButton initLike={props.game.isLike} />
            </LikeButtonPosition>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
}
