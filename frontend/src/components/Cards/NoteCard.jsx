import moment from "moment";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border-slate-200 border rounded bg-white hover:shadow-sm transition-all ease-linear p-2">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-sky-900" : "text-slate-400"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-900 my-2"> {content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item}`)}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="hover:text-green-600 icon-btn"
            onClick={onEdit}
          />
          <MdDelete
            className="hover:text-red-600 icon-btn"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
