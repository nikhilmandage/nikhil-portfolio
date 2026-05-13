export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="bg-white rounded-3xl shadow-lg p-10 mb-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />

          <h1 className="text-4xl font-bold mb-2">Nikhil Mandage</h1>
          <p className="text-lg text-gray-600 mb-4">
            Resume Designer, AI Image Creator, Web and Java Developer
          </p>

          <p className="max-w-2xl mx-auto text-gray-700">
            I help students, creators, and businesses with ATS-friendly resumes,
            AI-generated designs, portfolio websites, logos, and Java mini projects.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90"
            >
              Contact Me
            </a>

            <a
              href="https://www.fiverr.com"
              target="_blank"
              className="border border-black px-6 py-3 rounded-2xl hover:bg-black hover:text-white"
            >
              Fiverr Profile
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'ATS Resume Design',
                desc: 'Professional resumes for jobs and internships.',
              },
              {
                title: 'AI Image & Logo Design',
                desc: 'Creative AI-generated logos, posters, and social graphics.',
              },
              {
                title: 'Web & Java Projects',
                desc: 'Portfolio websites and Java/JDBC mini projects.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Resume Design',
              'Canva',
              'AI Image Generation',
              'Logo Design',
              'HTML',
              'CSS',
              'Java',
              'JDBC',
              'Web Development',
              'Thumbnail Design',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Student CRUD System</h3>
              <p className="text-gray-600">
                Java JDBC project for student data management with insert, update,
                delete, and retrieve operations.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">ATS Resume Templates</h3>
              <p className="text-gray-600">
                Modern professional resume templates designed for internship and
                fresher applications.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-black text-white rounded-3xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>

          <p className="mb-6 text-gray-300">
            Available for freelance projects, resume design, AI artwork, and web
            development.
          </p>

          <div className="space-y-2">
            <p>Email: yourmail@example.com</p>
            <p>Instagram: @nikhil_mandage</p>
            <p>Location: India</p>
          </div>
        </section>
      </div>
    </div>
  )
}
