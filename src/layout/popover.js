import React from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Stack, Button, Chip } from "@mui/material";

export function TypePopover() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
            Type
          </Button>
          <Popover
            sx={{ width: 1000 }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "start",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "start",
            }}
          >
            <Stack direction={"row"} spacing={1} px={1} py={1} sx={{maxWidth: 400, flexWrap: 'wrap'}}>
              {["ALL", "TV Show", "Movies"].map((type) => {
                return <Chip component={'button'}  label={type} variant="outlined" />;
              })}
            </Stack>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
export function CaregoryPopover() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
          Category
          </Button>
          <Popover
            sx={{ width: 1000 }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "start",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "start",
            }}
          >
            <Stack direction={"row"} spacing={1} px={1} py={1} sx={{maxWidth: 400, flexWrap: 'wrap'}}>
              {[
                "Comedy",
                "Romance",
                "Romantic Comedy",
                "Drama",
                "Fantasy",
                "Horror",
                "Action",
                "Adventure",
                "Sci-Fi",
                "Biography",
                "History",
                "Crime",
                "Thriller",
              ].map((type) => {
                return <Chip component={'button'} label={type} variant="outlined" />;
              })}
            </Stack>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export function CertificationPopover() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
            Certification
          </Button>
          <Popover
            sx={{ width: 1000 }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "start",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "start",
            }}
          >
            <Stack direction={"row"} spacing={1} px={1} py={1} sx={{maxWidth: 400, flexWrap: 'wrap'}}>
              {["SA", "PG-13", "S+", "TV-MA", "TV-14", "R"].map((type) => {
                return <Chip component={'button'} label={type} variant="outlined" />;
              })}
            </Stack>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
