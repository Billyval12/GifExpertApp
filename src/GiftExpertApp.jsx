import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import React from 'react'
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = ()=>{
    const [categories, setCategories] =  useState(['One piece']);

    const addCategory = (newCategory) =>{
        if (categories.includes(newCategory)) {
            return
        }
        setCategories([...categories, newCategory])
    }
    return(
        <>
            {/*titulo*/}
            <h1>GiftExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                // setCategories = {setCategories}
                onNewCategory = {addCategory}
            /> 

            {/*Listado de Gif*/} 
            
            {
                categories.map( category => {
                    return (
                        <GifGrid 
                        key ={category}
                        category ={category}
                        />
                    )
                })
            }
        

            {/*Gif item*/} 
        </>
    )
}  