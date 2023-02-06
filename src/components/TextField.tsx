import { useRef, useState } from "react";
import Draggable from "react-draggable";

const TextField = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [text, setText] = useState<string>("Edit This text");
    const nodeRef = useRef(null);

    return (
        <Draggable  nodeRef={nodeRef}>
            <div className="position-absolute" style={{textShadow: "1px 1px 2px black"}} ref={nodeRef}>
                {editMode ? (
                    <input
                        style={{cursor:"pointer"}}
                        onBlur={() => setEditMode(false)}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        onDoubleClick={() => setEditMode(false)}
                        onTouchEnd={() => setEditMode(false)}
                        autoFocus={true}
                    />
                ) : (
                    <h1
                        onDoubleClick={() => setEditMode(true)}
                        onTouchEnd={() => setEditMode(true)}
                        style={{fontSize: "calc((1vw + 1vh) * 1.5)"}}
                    >
                        {text}
                    </h1>
                )}
            </div>
        </Draggable>
    );
};

export default TextField;
