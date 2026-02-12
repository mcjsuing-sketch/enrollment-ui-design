import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");

  // ================= COUNTRY LIST (ALL RECOGNIZED COUNTRIES) =================
  const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
    "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
    "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
    "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
    "Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada",
    "Central African Republic","Chad","Chile","China","Colombia","Comoros",
    "Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
    "El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
    "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
    "Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
    "Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
    "Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati",
    "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia",
    "Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
    "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
    "Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
    "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal",
    "Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
    "North Macedonia","Norway","Oman","Pakistan","Palau","Panama",
    "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
    "Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
    "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
    "South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname",
    "Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
    "Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia",
    "Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
    "United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
    "Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];

  // ================= PROGRAM DATA =================
  const undergraduatePrograms = {
    "College of Engineering and Architecture": [
      "BS Architecture","BS Chemical Engineering","BS Civil Engineering",
      "BS Computer Engineering","BS Electrical Engineering",
      "BS Electronics Engineering","BS Industrial Engineering",
      "BS Mechanical Engineering",
    ],
    "College of Computer Studies": [
      "BS Computer Science","BS Data Science and Analytics",
      "BS Entertainment and Multimedia Computing","BS Information Technology",
    ],
    "College of Business Education": [
      "BS Accountancy","BS Accounting Information System",
      "BS Business Administration","Financial Management",
      "Human Resource Management","Logistics and Supply Chain Management",
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
      "Master in Information Systems","Master in Information Technology",
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
    if (level === "Undergraduate" && department)
      return undergraduatePrograms[department] || [];
    if (level === "Graduate" && department)
      return graduatePrograms[department] || [];
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
            <div><label>First Name</label><input type="text" required /></div>
            <div><label>Middle Name</label><input type="text" /></div>
            <div><label>Last Name</label><input type="text" required /></div>
            <div><label>Suffix</label><input type="text" /></div>
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
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* ================= CONTACT DETAILS ================= */}
        <fieldset>
          <legend>Contact Details</legend>

          <div className="grid-2">
            <div>
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div>
              <label>Mobile Number</label>
              <input type="tel" required />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Landline</label>
              <input type="tel" />
            </div>
          </div>

          <h3>Complete Home Address</h3>
          <div className="grid-3">
            <div><label>Street</label><input type="text" required /></div>
            <div><label>Barangay</label><input type="text" required /></div>
            <div><label>City</label><input type="text" required /></div>
            <div><label>Province</label><input type="text" required /></div>
            <div><label>Zip Code</label><input type="text" required /></div>
          </div>
        </fieldset>

        {/* ================= ENROLLMENT CHOICES ================= */}
        <fieldset>
          <legend>Enrollment Choices</legend>

          <div>
            <label>Academic Level</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="level" value="Undergraduate" required
                  onChange={(e)=>{setLevel(e.target.value);setDepartment("");setDegree("");}}/>
                Undergraduate
              </label>
              <label>
                <input type="radio" name="level" value="Graduate"
                  onChange={(e)=>{setLevel(e.target.value);setDepartment("");setDegree("");}}/>
                Graduate
              </label>
            </div>
          </div>

          <div>
            <label>Semester</label>
            <div className="radio-group">
              <label><input type="radio" name="semester" required /> 1st Semester</label>
              <label><input type="radio" name="semester" /> 2nd Semester</label>
            </div>
          </div>

          <div>
            <label>Campus</label>
            <div className="radio-group">
              <label><input type="radio" name="campus" required /> Manila</label>
              <label><input type="radio" name="campus" /> Quezon City</label>
            </div>
          </div>

          {level === "Undergraduate" && (
            <div>
              <label>College Department</label>
              <select value={department} required
                onChange={(e)=>{setDepartment(e.target.value);setDegree("");}}>
                <option value="">Select Department</option>
                {Object.keys(undergraduatePrograms).map((dept)=>(
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
          )}

          {level === "Graduate" && (
            <div>
              <label>Graduate Category</label>
              <select value={department} required
                onChange={(e)=>{setDepartment(e.target.value);setDegree("");}}>
                <option value="">Select Category</option>
                {Object.keys(graduatePrograms).map((dept)=>(
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
          )}

          {department && (
            <div>
              <label>Degree Program</label>
              <select value={degree} required
                onChange={(e)=>setDegree(e.target.value)}>
                <option value="">Select Degree</option>
                {getPrograms().map((prog)=>(
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
