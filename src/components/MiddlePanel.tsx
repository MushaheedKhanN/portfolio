import CustomButton from '../customs/CusotmButton'
import aura from "../../public/transparentImage.png"
import CustomCard from '../customs/CustomCard'
import { useState } from 'react'
import CustomModal from '../customs/CustomModal'
import Contacts from './Contacts'



const MiddlePanel = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [viewMore, setViewMore] = useState<string[]>([])

  const projects = [
    {
      project_name: "Jupiter(Product)",
      role: "React Senior Developer",
      details: ["Jupiter is the flagship product of Flynava Technologies, an AI-driven company specializing in innovative pricing solutions for the airline industry.Designed to transform pricing distribution functions, Jupiter automates pricing decisions, integrates real- time market data, and provides strategic insights to maximize revenue and operational efficiency.",
        "Utilizes advanced algorithms to automate fare creation and adjustments, reducing manual workload and enabling rapid responses to market changes.",
        "Collaborated with other developers to update the product and create new features",
        "Collaboration & Reporting: Partnered with cross-functional teams, including data scientists and actuaries, to deliver actionable insights via dashboards and complex, claims trends, and customer behaviour.",
        "Developed a dynamic and interactive user interface. Implemented various functionalities such as form validation, upload, download.",
        "Userscanalsoupload an Excel file in the ATPCO format and extend dates for all rule ID tariff combinations."
      ]
    },
    {
      project_name: "MI(Market Intelligence Integration)",
      role: "UI Lead",
      details: ["Part of Jupiter, Incorporates real-time market data through its Market Intelligence (MI) module, offering comprehensive analysis across various sales channels, including B2C, B2B, and B2B2C.",
        "Performance Analytics, Offers insightful dashboards and key performance indicators (KPIs) to monitor and assess the effectiveness of pricing strategies, facilitating data-driven decision-making.",
        "Developedfully functional screens by consuming REST APIs to fetch data",
        "Importedvarious charts into the screens using packages such as ApexCharts and Chart.js, Antd design charts and Recharts, etc.",
        "Integrated RESTful APIs to connect the frontend with backend services. Implemented RTQ Query to avoid prop drilling using React typescript.",
      ]
    },
    {
      project_name: "Flynava Website",
      role: "React Senior Developer",
      details: ["Developed adynamic and interactive user interface using React and Typescript along with related technologies.",
        "Built numerous screens using storyBlok",
        "Ability to write clean and maintainable code.",
        "Optimize the Code and worked on SEO",
        "Integrated RESTful APIs to connect the frontend with backend services.",
      ]
    },
    {
      project_name: "IJ(IndiaJets)",
      role: "React Senior Developer",
      details: ["Developed adynamic and interactive user interface using React and Typescript along with related technologies.",
        "Built numerous screens and have basic knowledge of Redux",
        "Solvedconflicts and made screens functional by integrating APIs using Swagger.",
        "Ability to write clean and maintainable code.",
        "Integrated RESTful APIs to connect the frontend with backend services.",
        "Assistedthe team in developing a web application using React typescript, implementing responsive design and ensuring cross-browser compatibility",
        "Implemented redux toolkit for State Management to avoid prop drilling using React typescript."
      ]
    },
    {
      project_name: "Employee Performance Tracker",
      role: "React Developer",
      details: [
        "Developedaperformance tracking tool to measure employee working hours, task progress, and milestones.",
        "Built andoptimized the Minutes of Meeting (MOM) scheduling feature with search, filters, and CRUDoperations",
        "Implementedform validations and enhanced team collaboration features.",
        "Ability to write clean and maintainable code.",
        "Integrated Redux for efficient state management and used Velzon Templates for UI design",
        "Ensuredseamless user experience with interactive and responsive UI components.",
        "Technologies Used: React.js, Redux, Velzon Templates."
      ]
    }
  ]
  return (
    <>
      <CustomModal
        title="Details"
        open={openModal}
        okCancel={() => setOpenModal(!openModal)}
        modalBody={
          <CustomCard
            title='Details'
            children={<>{
              viewMore?.map((ele) =>
                <div className='flex justify-start gap-1 items-start'>
                  <span className='mt-[0.15rem]'>→</span>
                  <span className='font-mono text-base p-1'>{ele}</span>
                </div>
              )
            }</>}
          />
        }
      />
      <div className='bg-white p-2  lg:flex lg:!justify-between rounded-md'>

        <div>
          <h1 className='font-extrabold mt-1 mb-1 !text-black'>I'm Mushaheed Khan N <p> <span className='font-mono text-amber-400'>Front-End</span> <span>Developer</span>  </p></h1>
          <p className='font-mono mb-2 !text-black'>React Developer with approximately 3 years of experience in building, maintaining, and enhancing web
            applications and software architecture. Proficient in React.js and React Typescript, with a strong
            background in developing scalable, high-performance solutions. Currently serving as a UI Lead,
            demonstrating expertise in leading teams, driving front-end development strategies, and delivering
            successful projects. Experienced in collaborating with cross-functional teams, ensuring seamless
            integration of UI components, and maintaining code quality through best practices. Passionate about
            creating intuitive user experiences and continuously improving development processes</p>
          <CustomButton label="Hire me →" onClick={() => {
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }} />
        </div>
        <img className='lg:w-[22%] w-full rounded-full self-center' src={aura} height={5} width={100} alt="" />

      </div>
      <h1 className='text-start mb-1 mt-3 font-serif text-2xl !text-black' id='projects'>My Projects</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
        {
          projects?.map((ele) =>
            <CustomCard
              title={ele?.project_name}
              children={
                <>
                  <p className='text-start mb-1 font-serif text-xl !text-black'>{ele?.project_name}</p>
                  <p className='font-mono !text-black'>{ele?.role}</p>
                  <CustomButton
                    label='View More'
                    onClick={() => { setViewMore(ele?.details); setOpenModal(true) }}
                  />
                </>
              }
            />
          )
        }
      </div>
      <Contacts />
    </>
  )
}

export default MiddlePanel