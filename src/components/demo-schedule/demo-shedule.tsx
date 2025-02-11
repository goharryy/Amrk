import Image from "next/image";
import BG from '@/public/bg/Mask group-2.png'
import DemoForm from "./demo-form";
export default function DemoSchedule() {
    return(
        <section className="flex flex-col relative justify-start items-center w-full h-[876px] mb-[100px]">
            <div className="flex items-start justify-end w-full h-full absolute" aria-labelledby="demo-form-background">
                <div className="xl:w-[50%] w-[550px] background-1 h-[750px] absolute z-0">
                    <Image 
                        src={BG}
                        height={750}
                        width={788}
                        alt="Amrk Restaurant Systems"
                        placeholder="blur"
                        priority={true}
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-[95%] w-special justify-center items-start gap-[80px] z-10 mt-[80px]" aria-labelledby="Amrk-Demo-Schedule-Form-Body">

                <div className="flex flex-col w-full h-[672px] gap-[24px]" aria-labelledby="Amrk-Demo-Schedule-Form">
                    <div className="flex flex-row w-full h-[574px] gap-[24px]">
                        <div className="flex flex-col justify-center items-start gap-[24px] h-full" aria-labelledby="Amrk-Demo-Schedule-Form-Heading">
                            <h2 className="text-5xl font-bold text-primText">
                                استمتع ببساطة أمـركـ    
                            </h2>
                            <p className="text-2xl text-primText font-normal">
                                جرب نظامنا الآن واختبر بنفسك سهولة استخدامه.
                                <br />
                                 فريقنا يسعد بالإجابة على استفساراتك في أي وقت.
                            </p>
                        </div>

                        <DemoForm />
                    </div>

                    <article className="flex flex-col gap-4">
                        <h3 className="text-primText font-semibold text-xl">
                            تواصل معنا
                        </h3>
                        <p className="flex flex-row items-center text-base gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2364 12.2748L13.6913 11.9842C13.392 11.949 13.0887 11.9822 12.8041 12.0811C12.5195 12.18 12.2609 12.3422 12.048 12.5553L10.2043 14.3991C7.35992 12.9521 5.04792 10.6401 3.60094 7.79573L5.45468 5.94199C5.88555 5.51112 6.09598 4.90991 6.02583 4.29868L5.73525 1.77358C5.67865 1.28468 5.44413 0.833708 5.07638 0.506618C4.70864 0.179528 4.23339 -0.000801689 3.74122 2.67936e-06H2.00773C0.875441 2.67936e-06 -0.0664607 0.941903 0.00368091 2.07419C0.534753 10.6315 7.37857 17.4652 15.9258 17.9963C17.0581 18.0665 18 17.1246 18 15.9923V14.2588C18.01 13.2467 17.2485 12.395 16.2364 12.2748Z" fill="#B0438A"/>
                            </svg>
                            <span dir="ltr">
                                +966 11 xxx xxxx
                            </span>
                        </p>
                        <p className="flex flex-row items-center text-base gap-4">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2 0H1.8C0.81 0 0.00899999 0.7875 0.00899999 1.75L0 12.25C0 13.2125 0.81 14 1.8 14H16.2C17.19 14 18 13.2125 18 12.25V1.75C18 0.7875 17.19 0 16.2 0ZM15.84 3.71875L9.477 7.58625C9.189 7.76125 8.811 7.76125 8.523 7.58625L2.16 3.71875C2.06975 3.6695 1.99073 3.60295 1.9277 3.52315C1.86467 3.44334 1.81896 3.35193 1.79332 3.25445C1.76768 3.15697 1.76265 3.05544 1.77854 2.95602C1.79443 2.85659 1.8309 2.76134 1.88575 2.67601C1.9406 2.59069 2.01269 2.51707 2.09765 2.45962C2.18262 2.40217 2.27868 2.36207 2.38005 2.34176C2.48141 2.32145 2.58595 2.32135 2.68736 2.34145C2.78876 2.36156 2.88492 2.40147 2.97 2.45875L9 6.125L15.03 2.45875C15.1151 2.40147 15.2112 2.36156 15.3126 2.34145C15.414 2.32135 15.5186 2.32145 15.62 2.34176C15.7213 2.36207 15.8174 2.40217 15.9023 2.45962C15.9873 2.51707 16.0594 2.59069 16.1142 2.67601C16.1691 2.76134 16.2056 2.85659 16.2215 2.95602C16.2373 3.05544 16.2323 3.15697 16.2067 3.25445C16.181 3.35193 16.1353 3.44334 16.0723 3.52315C16.0093 3.60295 15.9302 3.6695 15.84 3.71875Z" fill="#B0438A"/>
                            </svg>
                            contactus@amrk.co
                        </p>
                    </article>

                </div>
            

                <article className="flex flex-col gap-4">
                    <h3 className="text-primText font-semibold text-xl">
                        سياسة الخصوصية                    
                    </h3>
                    <p className="flex flex-row items-center text-xl gap-4">
                        تلتزم أمرك بحماية خصوصيتك. لن نقوم بأي حال من الأحوال بمشاركة معلوماتك الشخصية مع أي طرف ثالث دون موافقتك.
                    </p>
                </article>
            </div>
        </section>
    );
}