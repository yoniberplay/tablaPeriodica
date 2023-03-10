const express = require("express");
const router = express.Router();

const elements = [
  ["1", "H", "otros-no-metales"],
  ["18", "He", "bg-gases-nobles"],
  ["19", "Li", "bg-alcalinos"],
  ["20", "Be", "bg-alcalinoterreos"],
  ["31", "B", "bg-metaloides"],
  ["32", "C", "otros-no-metales"],
  ["33", "N", "otros-no-metales"],
  ["34", "O", "otros-no-metales"],
  ["35", "F", "bg-halogenos"],
  ["36", "Ne", "bg-gases-nobles"],
  ["37", "Na", "bg-alcalinos"],
  ["38", "Mg", "bg-alcalinoterreos"],
  ["49", "Al", "bg-otros-metales"],
  ["50", "Si", "bg-metaloides"],
  ["51", "P", "otros-no-metales"],
  ["52", "S", "otros-no-metales"],
  ["53", "Cl", "bg-halogenos"],
  ["54", "Ar", "bg-gases-nobles"],
  ["55", "K", "bg-alcalinos"],
  ["56", "Ca", "bg-alcalinoterreos"],
  ["57", "Sc", "bg-metalestransicion"],
  ["58", "Ti", "bg-metalestransicion"],
  ["59", "V", "bg-metalestransicion"],
  ["60", "Cr", "bg-metalestransicion"],
  ["61", "Mn", "bg-metalestransicion"],
  ["62", "Fe", "bg-metalestransicion"],
  ["63", "Co", "bg-metalestransicion"],
  ["64", "Ni", "bg-metalestransicion"],
  ["65", "Cu", "bg-metalestransicion"],
  ["66", "Zn", "bg-metalestransicion"],
  ["67", "Ga", "bg-otros-metales"],
  ["68", "Ge", "bg-metaloides"],
  ["69", "As", "bg-metaloides"],
  ["70", "Se", "otros-no-metales"],
  ["71", "Br", "bg-halogenos"],
  ["72", "Kr", "bg-gases-nobles"],
  ["73", "Rb", "bg-alcalinos"],
  ["74", "Sr", "bg-alcalinoterreos"],
  ["75", "Y", "bg-metalestransicion"],
  ["76", "Zr", "bg-metalestransicion"],
  ["77", "Nb", "bg-metalestransicion"],
  ["78", "Mo", "bg-metalestransicion"],
  ["79", "Tc", "bg-metalestransicion"],
  ["80", "Ru", "bg-metalestransicion"],
  ["81", "Rh", "bg-metalestransicion"],
  ["82", "Pd", "bg-metalestransicion"],
  ["83", "Ag", "bg-metalestransicion"],
  ["84", "Cd", "bg-metalestransicion"],
  ["85", "In", "bg-otros-metales"],
  ["86", "Sn", "bg-otros-metales"],
  ["87", "Sb", "bg-metaloides"],
  ["88", "Te", "bg-metaloides"],
  ["89", "I", "bg-halogenos"],
  ["90", "Xe", "bg-gases-nobles"],
  ["91", "Cs", "bg-alcalinos"],
  ["92", "Ba", "bg-alcalinoterreos"],
  ["130", "La", "bg-lantanidose"],
  ["131", "Ce", "bg-lantanidose"],
  ["132", "Pr", "bg-lantanidose"],
  ["133", "Nd", "bg-lantanidose"],
  ["134", "Pm", "bg-lantanidose"],
  ["135", "Sm", "bg-lantanidose"],
  ["136", "Eu", "bg-lantanidose"],
  ["137", "Gd", "bg-lantanidose"],
  ["138", "Tb", "bg-lantanidose"],
  ["139", "Dy", "bg-lantanidose"],
  ["140", "Ho", "bg-lantanidose"],
  ["141", "Er", "bg-lantanidose"],
  ["142", "Tm", "bg-lantanidose"],
  ["143", "Yb", "bg-lantanidose"],
  ["144", "Lu", "bg-lantanidose"],
  ["94", "Hf", "bg-metalestransicion"],
  ["95", "Ta", "bg-metalestransicion"],
  ["96", "W", "bg-metalestransicion"],
  ["97", "Re", "bg-metalestransicion"],
  ["98", "Os", "bg-metalestransicion"],
  ["99", "Ir", "bg-metalestransicion"],
  ["100", "Pt", "bg-metalestransicion"],
  ["101", "Au", "bg-metalestransicion"],
  ["102", "Hg", "bg-metalestransicion"],
  ["103", "Tl", "bg-otros-metales"],
  ["104", "Pb", "bg-otros-metales"],
  ["105", "Bi", "bg-otros-metales"],
  ["106", "Po", "bg-metaloides"],
  ["107", "At", "bg-halogenos"],
  ["108", "Rn", "bg-gases-nobles"],
  ["109", "Fr", "bg-alcalinos"],
  ["110", "Ra", "bg-alcalinoterreos"],
  ["148", "Ac", "bg-actinidos"],
  ["149", "Th", "bg-actinidos"],
  ["150", "Pa", "bg-actinidos"],
  ["151", "U", "bg-actinidos"],
  ["152", "Np", "bg-actinidos"],
  ["153", "Pu", "bg-actinidos"],
  ["154", "Am", "bg-actinidos"],
  ["155", "Cm", "bg-actinidos"],
  ["156", "Bk", "bg-actinidos"],
  ["157", "Cf", "bg-actinidos"],
  ["158", "Es", "bg-actinidos"],
  ["159", "Fm", "bg-actinidos"],
  ["160", "Md", "bg-actinidos"],
  ["161", "No", "bg-actinidos"],
  ["162", "Lr", "bg-actinidos"],
  ["112", "Rf", "bg-metalestransicion"],
  ["113", "Db", "bg-metalestransicion"],
  ["114", "Sg", "bg-metalestransicion"],
  ["115", "Bh", "bg-metalestransicion"],
  ["116", "Hs", "bg-metalestransicion"],
  ["117", "Mt", "bg-metalestransicion"],
  ["118", "Ds", "bg-metalestransicion"],
  ["119", "Rg", "bg-metalestransicion"],
  ["120", "Cn", "bg-metalestransicion"],
  ["121", "Nh", "bg-otros-metales"],
  ["122", "Fl", "bg-otros-metales"],
  ["123", "Mc", "bg-otros-metales"],
  ["124", "Lv", "bg-otros-metales"],
  ["125", "Ts", "bg-halogenos"],
  ["126", "Og", "bg-gases-nobles"],
  ["93", "La-Lu", "bg-lantanidose"],
  ["111", "Ac-Lr", "bg-actinidos"],
];


router.get("/", (req, res, next) => {
  res.status(200).render("home", { layout: false, title: 'Tabla Periodica',elements});
});

exports.Router = router;
exports.elements = elements;
