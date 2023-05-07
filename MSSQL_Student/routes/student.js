const express = require("express");
const router = express.Router();
const sql = require("msnodesqlv8");
//using procedures to benefit from the execution plan
//get ALL Students
router.get("/Students", async (req, res) => {
  const query = "SELECT * FROM Students";
  sql.query(process.env.CONNECTION_STRING, query, (err, rows) => {
    res.json(rows);
  });
});
//Add a student
router.post("/Students", (req, res) => {
  console.log(req.body);
  const query = `EXECUTE insertStudents @FirstName='${req.body.firstName}',
    @LastName='${req.body.lastName}',@course='${req.body.course}',
    @address='${req.body.address}',@BLOOD_TYPE='${req.body.blood}'
    `;
  sql.query(process.env.CONNECTION_STRING, query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json(rows);
  });
});
//get singleStudent
router.get("/Students/:id", (req, res) => {
  try {
    const query = `EXECUTE selectStudent ${req.params.id}`;
    sql.query(process.env.CONNECTION_STRING, query, (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.json(rows);
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Update a Student
router.put("/Students/:id", (req, res) => {
  try {
    const query = `Exec UpdateStudentDetails @ID=${req.params.id},@FirstName='${req.body.firstName}',
        @LastName='${req.body.lastName}',@course='${req.body.course}',
        @address='${req.body.address}',@BLOOD_TYPE='${req.body.blood}'
        `;
    sql.query(process.env.CONNECTION_STRING, query, (err, rows) => {
      res.send(rows);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//delete a student
router.delete("/Students/:id", (req, res) => {
  const query = `EXECUTE deleteStudent ${req.params.id}`;
  sql.query(process.env.CONNECTION_STRING, query, (err, rows) => {
    res.send(rows);
  });
});
module.exports = router;
