import React, {useEffect, useState} from 'react'
import { usePlayerStore } from "../GlobalStateManager/usePlayerStore";

export const useMovementHandler = () => {
  const keys = {KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right", Space: "spacebar"}
  const moveFieldByKey = (key) => keys[key];
  const [movement, setMovement] = useState({forward: false, backward: false, left: false, right: false, spacebar: false})
  

  const setMovementStatus = (codeKey, boolean) => {
    setMovement((m) => ({...m, [codeKey]: boolean}))
  }

  useEffect(() => {
    const handleKeyDown = (ev) => {
      setMovementStatus(moveFieldByKey(ev.code), true);
    }

    const handleKeyUp = (ev) => {
      setMovementStatus(moveFieldByKey(ev.code), false);
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
  }, []);

  return movement;
}
