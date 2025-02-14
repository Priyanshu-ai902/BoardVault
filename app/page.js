import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";


const faqs = [
  {
    question: "What is BoardVault?",
    answer:
      "BoardVault is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does BoardVault compare to other project management tools?",
    answer:
      "BoardVault offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is BoardVault suitable for small teams?",
    answer:
      "Absolutely! BoardVault is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from BoardVault features.",
  },
  {
    question: "What key features does BoardVault offer?",
    answer:
      "BoardVault provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can BoardVault handle multiple projects simultaneously?",
    answer:
      "Yes, BoardVault is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes BoardVault ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While BoardVault is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Build organization and Projects",
    description:
      "Set up and organize your team structure, create projects, and manage workflows for efficient collaboration and task management.",
    image: "kanban1.png",
  },
  {
    title: "Kanban Board Setup",
    description:
      "Organize tasks visually with a Kanban board for streamlined project management and workflow tracking.",
    image: "kanban2.png",
  },
  {
    title: "Sprint Management",
    description:
      "Plan, track, and manage sprints to ensure timely delivery and efficient progress throughout the project.",
    image: "sprint.png",
  }
]; 

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-20 text-center pt-36">


        <h1 className="text-7xl sm:text-7xl lg:text-7xl font-extrabold pb-6">
          <span className="gradient-title">
            Enhance your productivity with
          </span>
          <br />
          <span className="text-6xl font-bold">
            <span className="text-purple-400 dark:text-purple-700">Board</span>
            <span className="text-cyan-400 dark:text-cyan-300">Vault</span>
          </span>
        </h1>
        <p className="text-xl text-blue-300 mb-10 max-w-3xl mx-auto">
          Transform team productivity with our easy-to-use project management platform.
        </p>

        <img
          src="hero.png"
          alt="image"
          height={900} 
          width={1000}
          className="mx-auto block "
        />
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

      <section id="features" className="bg-black py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900">
                <CardContent className="pt-6">
                  <img src={feature.image} alt="Comprehensive Reporting" className="h-40 w-full mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Connect every team, task, and project together with BoardVault
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      <section className="py-20 px-6 ">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-zinc-400 mb-10">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold hover:text-indigo-300 transition duration-200 ease-in-out">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-sm">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>


      <footer className="bg-slate-950 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <span className="text-3xl font-bold ">
              <span className="text-purple-400 dark:text-purple-700">Board</span>
              <span className="text-cyan-400 dark:text-cyan-300">Vault</span>
            </span>
            <h3 className="font-bold pt-4">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>Careers</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Investor Relations</li>
              <li>Atlassian Foundation</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-200">Products</h3>
            <ul className="mt-2 space-y-2">
              <li>Rovo</li>
              <li>Jira</li>
              <li>Jira Align</li>
              <li>Jira Service Management</li>
              <li>Confluence</li>
              <li>Trello</li>
              <li>Bitbucket</li>
            </ul>
            
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-200">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>Technical support</li>
              <li>Purchasing & licensing</li>
              <li>Atlassian Community</li>
              <li>Knowledge base</li>
              <li>Marketplace</li>
              <li>My account</li>
            </ul>
            
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-200">Learn</h3>
            <ul className="mt-2 space-y-2">
              <li>Partners</li>
              <li>Training & certification</li>
              <li>Documentation</li>
              <li>Developer resources</li>
              <li>Enterprise services</li>
            </ul>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
