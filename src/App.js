import './App.css';

function App() {
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
                <option>Japanese</option>
                <option>French</option>
                <option>Chinese</option>
                <option>Indian</option>
                <option>Korean</option>
                <option>Thai</option>
                <option>Vietnamese</option>
                <option>Italian</option>
                <option>Spanish</option>
                <option>Dutch</option>
                <option>Danish</option>
                <option>Swedish</option>
                <option>German</option>
                <option>Canadian</option>
                <option>Mexican</option>
                <option>Brazilian</option>
                <option>Egyptian</option>
                <option>Nigerian</option>
                <option>Australian</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* ================= ACADEMIC HISTORY ================= */}
        <fieldset>
          <legend>Academic History</legend>

          {/* Grade School */}
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

          {/* Junior High */}
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

          {/* Senior High */}
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
              <label><input type="radio" name="level" required /> Undergraduate</label>
              <label><input type="radio" name="level" /> Graduate</label>
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

          {/* College Department */}
          <div>
            <label>College Department</label>
            <select required>
              <option value="">Select Department</option>
              <option>College of Engineering and Architecture</option>
              <option>College of Computer Studies</option>
              <option>College of Business Education</option>
              <option>College of Arts</option>
              <option>Graduate Program</option>
            </select>
          </div>

          {/* Degree Program */}
          <div>
            <label>Degree Program</label>
            <select required>
              <option value="">Select Degree</option>

              {/* ENGINEERING */}
              <optgroup label="College of Engineering and Architecture">
                <option>BS Architecture</option>
                <option>BS Chemical Engineering</option>
                <option>BS Civil Engineering</option>
                <option>BS Computer Engineering</option>
                <option>BS Electrical Engineering</option>
                <option>BS Electronics Engineering</option>
                <option>BS Industrial Engineering</option>
                <option>BS Mechanical Engineering</option>
              </optgroup>

              {/* COMPUTER STUDIES */}
              <optgroup label="College of Computer Studies">
                <option>BS Computer Science</option>
                <option>BS Data Science and Analytics</option>
                <option>BS Entertainment and Multimedia Computing</option>
                <option>BS Information Technology</option>
              </optgroup>

              {/* BUSINESS */}
              <optgroup label="College of Business Education">
                <option>BS Accountancy</option>
                <option>BS Accounting Information System</option>
                <option>BS Business Administration</option>
                <option>Financial Management</option>
                <option>Human Resource Management</option>
                <option>Logistics and Supply Chain Management</option>
                <option>Marketing Management</option>
              </optgroup>

              {/* ARTS */}
              <optgroup label="College of Arts">
                <option>Bachelor of Arts in English Language</option>
                <option>Bachelor of Arts in Political Science</option>
              </optgroup>

              {/* GRADUATE */}
              <optgroup label="Doctorate Degrees">
                <option>Doctor in Information Technology</option>
                <option>Doctor of Engineering (Computer Engineering)</option>
                <option>Doctor of Philosophy in Computer Science</option>
              </optgroup>

              <optgroup label="Master's Degrees">
                <option>Master in Information Systems</option>
                <option>Master in Information Technology</option>
                <option>Master in Logistics and Supply Chain Management</option>
                <option>Master of Engineering (Civil Engineering)</option>
                <option>Master of Engineering (Computer Engineering)</option>
                <option>Master of Engineering (Electrical Engineering)</option>
                <option>Master of Engineering (Electronics Engineering)</option>
                <option>Master of Engineering (Industrial Engineering)</option>
                <option>Master of Engineering (Mechanical Engineering)</option>
                <option>Master of Science in Computer Science</option>
              </optgroup>

            </select>
          </div>

        </fieldset>

        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
