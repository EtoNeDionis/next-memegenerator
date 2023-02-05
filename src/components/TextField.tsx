import { useRef, useState } from "react";
import Draggable from "react-draggable";

const TextField = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [text, setText] = useState<string>("Edit This text");
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="d-inline-block drop-shadow" style={{textShadow: "1px 1px 2px black"}} ref={nodeRef}>
                {editMode ? (
                    <input
                        onBlur={() => setEditMode(false)}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        onDoubleClick={() => setEditMode(false)}
                    />
                ) : (
                    <h1
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {text}
                    </h1>
                )}
            </div>
        </Draggable>
    );
};

export default TextField;
