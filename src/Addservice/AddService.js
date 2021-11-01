// import { queryAllByAttribute } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import {useForm} from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('https://obscure-coast-41851.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-service-area">
                <h2>Please add a service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true, maxLength: 20 })}
                        placeholder="Name"/>
                    <textarea {...register("discription")} placeholder="Discription"/>
                    <input type="number" {...register("price")} placeholder="Price"/>
                    <input {...register("img")} placeholder="Img url"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;