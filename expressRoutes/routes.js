const express = require("express");
const router = express.Router();

//controllers
const CelebretiesWithBirthdayThisMonth = require("../controllers/celebretyWithBirthdatThisMonth");
const PopularCelebreties = require("../controllers/popularCelebreties");
const GetActorDetails = require("../controllers/getActorDetails");
const MoviesActedByCelebreties = require("../controllers/moviesActedByCelebreties");
const GetMovieDetails = require("../controllers/getMovieDetails");
const GetPopularMoviesByActor = require("../controllers/getPopularMoviesByActor");
const GetCelebretyGallery = require("../controllers/getCelebretyGallery");
const GetImageDetails = require("../controllers/getImageDetails");
const GetAwardsByActorName = require("../controllers/getAwardsByActorName");
const GetAwardDetails = require("../controllers/getAwardDetails");

//celebreties born on this month
router.get(
  "/celebreties-with-birthday-this-month",
  CelebretiesWithBirthdayThisMonth
);

//popular celebreties
router.get("/popular-celebreties", PopularCelebreties);

//get actor details
router.get("/get-actor", GetActorDetails);

//movies acted by celebrety
router.get("/get-movies-by-actor", MoviesActedByCelebreties);

//get-movie-details
router.get("/get-movie-details", GetMovieDetails);

//get popular movies by actor
router.get("/get-popular-movies", GetPopularMoviesByActor);

//get celebrety gallery
router.get("/get-celebrety-gallery", GetCelebretyGallery);

//get Image Details
router.get("/get-image-details", GetImageDetails);

//get awards
router.get("/get-awards", GetAwardsByActorName);

//get award details
router.get("/get-award-details", GetAwardDetails);

module.exports = router;
