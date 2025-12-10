import type { FC } from "react";
import pic from "../../public/shared image (1).jpg"
import { Progress } from 'antd';
import { ArrowBigRight } from "lucide-react"

interface ProgressBar {
    data: { title: string, rating: number, tooltip?: string }[],
    title: string
}
const commonColor = "#FFB400"

const ProgressBar: FC<ProgressBar> = ({ data, title }) => {
    return (
        <div>
            <p className="text-start mb-1 font-serif text-2xl !text-black">{title}</p>
            {
                data?.map((ele) =>
                    <div className="flex justify-between gap-1">
                        <p className="font-mono w-20 text-start !text-black" title={ele?.tooltip}>{ele?.title}</p>
                        <Progress percent={ele?.rating} size="small" strokeColor={commonColor} />
                    </div>

                )
            }
        </div>
    )
}
const MyProfile = () => {
    const details = [
        {
            title: "Age",
            value: "24"
        },
        {
            title: "Current Organization",
            value: "Flynava Technologies"
        },
        {
            title: "Address",
            value: "BTM, Bengaluru"
        },
    ]
    const languages = [
        {
            title: "English",
            rating: 80
        },
        {
            title: "Kannada",
            rating: 90
        },
        {
            title: "Hindi",
            rating: 100
        },
        {
            title: "Urdu",
            rating: 50
        },
    ]

    const skills = [
        {
            title: "HTML",
            rating: 90,
            tooltip: "HTML"
        },
        {
            title: "CSS",
            rating: 80,
            tooltip: "CSS",

        },
        {
            title: "JS",
            rating: 80,
            tooltip: "JavaScript"
        },
        {
            title: "React",
            rating: 90,
            tooltip: "React+typescript"

        },
    ]

    const extraSkills = [
        {
            title: "Bootstrap",
            rating: 90,
            tooltip: "Bootstrap"
        },
        {
            title: "Tailwind CSS",
            rating: 90,
            tooltip: "ailwind CSS",

        },
        {
            title: " ReduxToolkit",
            rating: 100,
            tooltip: " ReduxToolkit"
        },
        {
            title: "RTKQuery",
            rating: 50,
            tooltip: "RTKQuery"

        },
        {
            title: "useContext",
            rating: 50,
            tooltip: "useContext"
        },
        {
            title: "REST API Integration",
            rating: 50,
            tooltip: "REST API Integration"
        },
        {
            title: "Git",
            rating: 50,
            tooltip: "Git"
        },
        {
            title: "AntdDesign",
            rating: 50,
            tooltip: "AntdDesign"
        },
        {
            title: "Recharts",
            rating: 50,
            tooltip: "Recharts"
        },
        {
            title: "Code Optimization",
            rating: 50,
            tooltip: "Code Optimization"
        },
    ]

    return (
        <div className="bg-white p-2">
            <div className="grid p-8 justify-center">
                <img className="rounded-full size-48 object-cover" src={pic} alt="aura" loading="lazy" />
                <p className="font-serif text-2xl !text-black">Mushaheed Khan N</p>
                <p className="font-mono !text-black">Front-End Developer</p>
            </div>
            <div>
                {details?.map((ele) =>
                    <div className="grid grid-cols-2 justify-start items-center">
                        <p className="p-2 bg-amber-400 m-1 font-serif">{ele?.title}</p>
                        <p>{ele?.value}</p>
                    </div>
                )}
            </div>
            <div className="border border-double border-gray-100 mt-3 mb-3" />
            <ProgressBar data={languages} title="Languages" />
            <div className="border border-double border-gray-100 mt-3 mb-3" />
            <ProgressBar data={skills} title="Skills" />
            <div className="border border-double border-gray-100 mt-3 mb-3" />
            <div>
                <p className="text-start mb-1 font-serif text-2xl">Extra Skills</p>
                {
                    extraSkills?.map((ele) =>
                        <div className="flex justify-start items-center gap-1">
                            <ArrowBigRight color={commonColor} />
                            <p className="font-mono text-start !text-black" title={ele?.tooltip}>{ele?.title}</p>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default MyProfile