import React, { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import RowOfMovies from "./RowOfMovies";

class Main extends Component {
  render() {
    return (
      <main className="bg-secondary mt-3">
        <Container>
          <div className="container mb-3">
            <div className="row text-light align-items-center">
              <div className="col d-flex justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center gap-4">
                  <h3 className="fw-bold">Movies</h3>
                  <Dropdown className="border mb-2">
                    <Dropdown.Toggle
                      variant="secondary"
                      className="bg-black py-0"
                    >
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-black">
                      <Dropdown.Item className="text-white">
                        Fiction
                      </Dropdown.Item>
                      <Dropdown.Item className="text-white">
                        Drama
                      </Dropdown.Item>
                      <Dropdown.Item className="text-white">
                        Thriller
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="col col-1 text-grey d-none d-md-flex">
                <div>
                  <i className="bi bi-justify-left border border-grey py-1 px-2 cursor"></i>
                </div>
                <div>
                  <i className="bi bi-grid-fill border border-grey py-1 px-2 cursor"></i>
                </div>
              </div>
            </div>
          </div>

          <Container className="text-light">
            <p className="mb-2 fw-bold text-center text-md-start">
              Lord Of The Rings' Saga
            </p>
            <RowOfMovies
              urlToUSe={
                "https://www.omdbapi.com/?apikey=ec74177a&s=lord+of+the+rings"
              }
            />
          </Container>

          <Container className="text-light mt-5">
            <p className="mb-2 fw-bold text-center text-md-start">
              Harry Potter's Saga
            </p>
            <RowOfMovies
              urlToUSe={
                "https://www.omdbapi.com/?apikey=ec74177a&s=harry%20potter"
              }
            />
          </Container>

          <Container className="text-light mt-5">
            <p className="mb-2 fw-bold text-center text-md-start">
              Star Wars' Saga{" "}
            </p>
            <RowOfMovies
              urlToUSe={
                "https://www.omdbapi.com/?apikey=ec74177a&s=star%20wars"
              }
            />
          </Container>
        </Container>
      </main>
    );
  }
}

export default Main;
