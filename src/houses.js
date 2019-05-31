import React from 'react';
import './houses.css';

const Houses = () => {
    return (
        <div>
            <div className="row">
                <div className="col">

                    <button
                        className=" btn btn-outline-dark buttonHouses gryffindorButton"
                        type="button"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1">Gryffindor</button>
                </div>
                <div className="col">
                    <button
                        className="btn btn-outline-dark buttonHouses hufflepuffButton"
                        type="button"
                        data-toggle="collapse"
                        data-target="#multiCollapseExample2"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample2">Hufflepuff</button>
                </div>
                <div className="col">
                    <button
                        className="btn btn-outline-dark buttonHouses ravenclawButton"
                        type="button"
                        data-toggle="collapse"
                        data-target="#multiCollapseExample3"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample3">Ravenclaw</button>
                </div>
                <div className="col">

                    <button
                        className="btn btn-outline-dark buttonHouses slytherinButton"
                        type="button"
                        data-toggle="collapse"
                        data-target="#multiCollapseExample4"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample4">Slytherin</button>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="card card-body">
                            <ul></ul>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body">
                            <ul></ul>
                        </div>
                    </div>

                </div>

                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample3">
                        <div className="card card-body">
                            <ul></ul>
                        </div>
                    </div>

                </div>

                < div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample4">
                        <div className="card card-body">
                            <ul></ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Houses;