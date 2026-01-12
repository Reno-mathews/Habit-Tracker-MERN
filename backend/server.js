const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const habitRoutes = require("./routes/habits");

const app = express();

// Middle