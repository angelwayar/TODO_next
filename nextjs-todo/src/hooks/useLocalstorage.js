import { useState, useEffect } from "react";

export function useLocalstorage(key, initialState) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const item = localStorage.getItem(key);
        const task = JSON.parse(item);
        if (task) {
            setState(task);
        }
    }, []);

    useEffect(() => {
        if (state.length > 0) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [state]);

    return [state, setState];
}