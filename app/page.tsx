import { Linkedin, Mail, Send } from 'lucide-react'; // Import icons

const Header = () => (
  <header className="bg-white shadow">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">Felicity LIMS</div>
      <div>
        <a href="#features" className="text-gray-600 hover:text-gray-800 px-3 py-2">Features</a>
        <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2">About</a>
        <a href="#getting-started" className="text-gray-600 hover:text-gray-800 px-3 py-2">Getting Started</a>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4">Contact</a>
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="bg-blue-600 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Felicity LIMS</h1>
      <p className="text-xl mb-8">Open-source Laboratory Information Management System</p>
      <a href="https://github.com/beak-insights/felicity-lims" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
        View on GitHub
      </a>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Sample Management" description="Efficiently track and manage laboratory samples throughout their lifecycle." />
        <FeatureCard title="Workflow Automation" description="Streamline laboratory processes with customizable workflow automation." />
        <FeatureCard title="Reporting & Analytics" description="Generate comprehensive reports and gain insights from your laboratory data." />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => (
  <section id="about" className="bg-gray-200 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Felicity LIMS</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Felicity LIMS is an open-source Laboratory Information Management System designed to streamline laboratory operations, improve efficiency, and enhance data management in various scientific disciplines.
      </p>
    </div>
  </section>
);

const GettingStartedSection = () => (
  <section id="getting-started" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Getting Started</h2>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Prerequisites</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Python 3.10+</li>
          <li>PostgreSQL 13+</li>
          <li>Node.js 18+</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Installation</h3>
        <ol className="list-decimal list-inside space-y-4">
          <InstallationStep 
            step="Clone the repository:"
            code="git clone https://github.com/beak-insights/felicity-lims.git\ncd felicity-lims"
          />
          <InstallationStep 
            step="Create a virtual environment and activate it:"
            code="python -m venv venv\nsource venv/bin/activate  # On Windows, use `venv\Scripts\activate`"
          />
          <InstallationStep 
            step="Install the required packages:"
            code="pip install -r requirements.txt"
          />
          <InstallationStep 
            step="Set up the database:"
            code="createdb felicity_lims\nalembic upgrade head"
          />
          <InstallationStep 
            step="Start the development server:"
            code="uvicorn felicity.main:app --reload"
          />
        </ol>

        <p className="mt-6">
          For more detailed instructions and configuration options, please refer to our <a href="https://github.com/beak-insights/felicity-lims/blob/main/README.md" className="text-blue-600 hover:underline">
            full documentation
          </a>.
        </p>
      </div>
    </div>
  </section>
);

const InstallationStep = ({ step, code }) => (
  <li>
    {step}
    <pre className="bg-gray-100 p-2 rounded mt-2">{code}</pre>
  </li>
);

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-600 mb-6">
          We&apos;d love to hear from you! Feel free to reach out through any of the following channels:
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a 
            href="https://www.linkedin.com/in/aurthurmusendame" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Linkedin className="mr-2" size={24} />:
            aurthurmusendame
          </a>
          <a 
            href="https://t.me/aurthurm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Send className="mr-2" size={24} />:
            aurthurm
          </a>
          <a 
            href="mailto:aurthurmusendame@gmail.com"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Mail className="mr-2" size={24} />:
             aurthurmusendame@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2024 Beak Insights. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://github.com/beak-insights/felicity-lims" className="text-gray-400 hover:text-white mx-2">GitHub</a>
        {/* <a href="#" className="text-gray-400 hover:text-white mx-2">Documentation</a>
        <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a> */}
      </div>
    </div>
  </footer>
);
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <GettingStartedSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
