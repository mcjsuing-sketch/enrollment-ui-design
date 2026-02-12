import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");

  // ================= PROGRAM DATA =================

  const undergraduatePrograms = {
    "College of Engineering and Architecture": [
      "BS Architecture",
      "BS Chemical Engineering",
      "BS Civil Engineering",
      "BS Computer Engineering",
      "BS Electrical Engineering",
      "BS Electronics Engineering",
      "BS Industrial Engineering",
      "BS Mechanical Engineering",
    ],
    "College of Computer Studies": [
      "BS Computer Science",
      "BS Data Science and Analytics",
      "BS Entertainment and Multimedia Computing",
      "BS Information Technology",
    ],
    "College of Business Education": [
      "BS Accountancy",
      "BS Accounting Information System",
      "BS Business Administration",
      "Financial Management",
      "Human Resource Management",
      "Logistics and Supply Chain Management",
      "Marketing Management",
    ],
    "College of Arts": [
      "Bachelor of Arts in English Language",
      "Bachelor of Arts in Political Science",
    ],
  };

  const graduatePrograms = {
    "Doctorate Degrees": [
      "Doctor in Information Technology",
      "Doctor of Engineering with Specialization in Computer Engineering",
      "Doctor of Philosophy in Computer Science",
    ],
    "Master's Degrees": [
      "Master in Information Systems",
      "Master in Information Technology",
      "Master in Logistics and Supply Chain Management",
      "Master of Engineering (Civil Engineering)",
      "Master of Engineering (Computer Engineering)",
      "Master of Engineering (Electrical Engineering)",
      "Master of Engineering (Electronics Engineering)",
      "Master of Engineering (Industrial Engineering)",
      "Master of Engineering (Mechanical Engineering)",
      "Master of Science in Computer Science",
    ],
  };

  const getPrograms = () => {
    if (level === "Undergraduate" && department) {
      return undergraduatePrograms[department] || [];
    }
    if (level === "Graduate" && department) {
      return graduatePrograms[department] || [];
    }
    return [];
  };

  return (
    <div className="container">
      <h1>ADEi University Digital Registrar</h1>

      <form>

        {/* ================= PERSONAL INFORMATION ================= */}
        <fieldset>
          <legend>Personal Information</legend>

          <div className="grid-4">
            <div>
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Middle Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Suffix</label>
              <input type="text" />
            </div>
          </div>

          <div className="grid-3">
            <div>
              <label>Date of Birth</label>
              <input type="date" required onKeyDown={(e)=>e.preventDefault()} />
            </div>

            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>

            <div>
              <label>Nationality</label>
              <select required>
                <option value="">Select</option>
                <option>Filipino</option>
                <option>American</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* ================= ACADEMIC HISTORY ================= */}
        <fieldset>
          <legend>Academic History</legend>

          <h3>Grade School</h3>
          <div className="grid-3">
            <div>
              <label>Grade School Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Grade School Address</label>
              <input type="text" required />
            </div>
          </div>

          <h3>Junior High School</h3>
          <div className="grid-3">
            <div>
              <label>Junior High School Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Junior High School Address</label>
              <input type="text" required />
            </div>
          </div>

          <h3>Senior High School</h3>
          <div className="grid-4">
            <div>
              <label>Senior High School Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Year Graduated</label>
              <input type="number" min="1900" max="2026" required />
            </div>
            <div>
              <label>Grade Average</label>
              <input type="number" step="0.01" min="0" max="100" required />
            </div>
            <div>
              <label>Senior High School Address</label>
              <input type="text" required />
            </div>
          </div>
        </fieldset>

        {/* ================= ENROLLMENT CHOICES ================= */}
        <fieldset>
          <legend>Enrollment Choices</legend>

          {/* Academic Level */}
          <div>
            <label>Academic Level</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="level"
                  value="Undergraduate"
                  required
                  onChange={(e) => {
                    setLevel(e.target.value);
                    setDepartment("");
                    setDegree("");
                  }}
                />
                Undergraduate
              </label>

              <label>
                <input
                  type="radio"
                  name="level"
                  value="Graduate"
                  onChange={(e) => {
                    setLevel(e.target.value);
                    setDepartment("");
                    setDegree("");
                  }}
                />
                Graduate
              </label>
            </div>
          </div>

          {/* Semester */}
          <div>
            <label>Semester</label>
            <div className="radio-group">
              <label><input type="radio" name="semester" required /> 1st Semester</label>
              <label><input type="radio" name="semester" /> 2nd Semester</label>
            </div>
          </div>

          {/* Campus */}
          <div>
            <label>Campus</label>
            <div className="radio-group">
              <label><input type="radio" name="campus" required /> Manila</label>
              <label><input type="radio" name="campus" /> Quezon City</label>
            </div>
          </div>

          {/* Department Dropdown */}
          {level === "Undergraduate" && (
            <div>
              <label>College Department</label>
              <select
                value={department}
                required
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDegree("");
                }}
              >
                <option value="">Select Department</option>
                {Object.keys(undergraduatePrograms).map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
          )}

          {level === "Graduate" && (
            <div>
              <label>Graduate Category</label>
              <select
                value={department}
                required
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDegree("");
                }}
              >
                <option value="">Select Category</option>
                {Object.keys(graduatePrograms).map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
          )}

          {/* Degree Program */}
          {department && (
            <div>
              <label>Degree Program</label>
              <select
                value={degree}
                required
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="">Select Degree</option>
                {getPrograms().map((prog) => (
                  <option key={prog}>{prog}</option>
                ))}
              </select>
            </div>
          )}
        </fieldset>

        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
