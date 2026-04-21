import { useEffect, useState } from "react";

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/arkaprabha2005/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 4); // top 4 projects

        setRepos(sorted);
      });
  }, []);

  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10">GitHub Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="p-6 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="font-semibold">{repo.name}</h3>

              <p className="text-sm opacity-60 mt-2">
                {repo.description || "No description"}
              </p>

              <div className="text-xs mt-4 opacity-40">
                ⭐ {repo.stargazers_count}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}