import { useState } from "react";

const Init = () => {
    const [modal, setModal] = useState(false)
    let toggle = () => {
        setModal(!modal)
    }

    return { modal, toggle }
}

export { Init }