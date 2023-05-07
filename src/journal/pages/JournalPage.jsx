import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>

      {
      (!!active)
      ? <NoteView />
      : <NothingSelectedView />
      }

      <IconButton
      onClick={onClickNewNote}
      disabled={ isSaving }
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

// Con el useSelector tome el isSaving y active del journalSlice.
// Con estos pude crear la condición para que el boton se bloquee por un momento al crear una nota
// Y el estado de active para mostrar la vista de crear una nueva nota o mostrar el titulo, descripcion, imagenes, etc.