import { useState } from "react";
import Modal from "react-modal";
import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  const [openAddEditModdal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-6">
          <NoteCard
            title="Meeting on 7th April"
            date="28 Apr 2025"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-900 hover:bg-indigo-600 absolute right-10 bottom-10 cursor-pointer"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[25px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModdal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0,1)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white  border-slate-200 border rounded-2xl mx-auto mt-28 p-5 "
      >
        <AddEditNotes
          type={openAddEditModdal.type}
          noteData={openAddEditModdal.data}
          onclose={() => {
            setOpenAddEditModal([{ isShown: false, type: "add", data: null }]);
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
