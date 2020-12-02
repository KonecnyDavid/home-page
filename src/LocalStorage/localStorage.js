import { useState, useEffect } from 'react';

const storage = window.localStorage;

export const useItems = () => {
  
    const [items, setItems] = useState([])

    const addItem = (item) => {
        const newItems = [...items, item];
        setItems(newItems)
    }

    const removeItem = (idx) => {
        setItems(items.filter((_, index) => index !== idx))
    }

    useEffect(() => {
        const items = JSON.parse(storage.getItem("items"));
        if (items)
            setItems(items)
    }, [])

    useEffect(() => {
        storage.setItem("items", JSON.stringify(items))
    }, [items])

  return [items, addItem, removeItem];
}