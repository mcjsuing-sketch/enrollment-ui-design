import './App.css';

function App() {
  return (
    <div className="container">
      <h1>ADEi University Digital Registrar</h1>

      <form>

        {/* PERSONAL INFORMATION */}
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

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>

          <div className="grid-2">
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>

            <div>
              <label>Mobile Number</label>
              <input type="tel" required />
            </div>
          </div>
        </fieldset>

        {/* ENROLLMENT */}
        <fieldset>
          <legend>Enrollment Choices</legend>

          <div>
            <label>Academic Level</label>
            <div className="radio-group">
              <label><input type="radio" name="level" required /> Undergraduate</label>
              <label><input type="radio" name="level" /> Graduate</label>
            </div>
          </div>

          <div>
            <label>Campus</label>
            <div className="radio-group">
              <label><input type="radio" name="campus" required /> Manila</label>
              <label><input type="radio" name="campus" /> Quezon City</label>
            </div>
          </div>

          <div>
            <label>College Department</label>
            <select required>
              <option value="">Select</option>
              <option>College of Engineering</option>
              <option>College of Computer Studies</option>
              <option>College of Business</option>
              <option>College of Arts</option>
            </select>
          </div>
        </fieldset>

        <button type="submit">Submit Registration</button>

      </form>
    </div>
  );
}

export default App;
