
import { useState } from "react";
import "./App.css";

function App() {
  const [issues, setIssues] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "Road Damage",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.location.trim() ||
        !form.description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newIssue = {
      ...form,
      id: Date.now(),
      status: "Submitted",
    };

    setIssues([newIssue, ...issues]);

    setForm({
      title: "",
      category: "Road Damage",
      location: "",
      description: "",
    });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>🏛️ CivicConnect</h2>
        <a href="#report">Report an Issue</a>
      </nav>

      <header className="hero">
        <p className="tag">A BETTER ANANTAPUR STARTS WITH US</p>
        <h1>Your City. Your Voice.</h1>
        <p>
          Report civic problems and help make our communities
          cleaner, safer, and better.
        </p>
        <a className="button" href="#report">Report a Problem</a>
      </header>

      <section className="features">
        <div className="feature">
          <span>🛣️</span>
          <h3>Report Issues</h3>
          <p>Report damaged roads and other civic problems.</p>
        </div>

        <div className="feature">
          <span>📍</span>
          <h3>Share Location</h3>
          <p>Tell authorities where the issue is happening.</p>
        </div>

        <div className="feature">
          <span>📋</span>
          <h3>Track Reports</h3>
          <p>View the reports submitted during your session.</p>
        </div>
      </section>

      <section className="report-section" id="report">
        <h2>Report a Civic Issue</h2>
        <p>Help us identify problems in your neighborhood.</p>

        <form onSubmit={handleSubmit}>
          <label>Issue Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Damaged road near bus stand"
            required
          />

          <label>Issue Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Road Damage</option>
            <option>Garbage</option>
            <option>Water Leakage</option>
            <option>Drainage</option>
            <option>Streetlight</option>
            <option>Other</option>
          </select>

          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter area or landmark"
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the problem..."
            rows="4"
            required
          />

          <button type="submit">Submit Report</button>
        </form>
      </section>

      <section className="issues-section">
        <h2>Community Reports</h2>

        {issues.length === 0 ? (
          <p>No reports submitted in this session yet.</p>
        ) : (
          <div className="issue-list">
            {issues.map((issue) => (
              <article className="issue-card" key={issue.id}>
                <span className="status">{issue.status}</span>
                <h3>{issue.title}</h3>
                <p><strong>Category:</strong> {issue.category}</p>
                <p><strong>Location:</strong> {issue.location}</p>
                <p>{issue.description}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer>
        <p>© 2026 CivicConnect Anantapur | Building Better Communities</p>
      </footer>
    </div>
  );
}

export default App;
