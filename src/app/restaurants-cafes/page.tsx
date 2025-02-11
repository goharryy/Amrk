import ServiceHero from "@/src/components/services/hero";
import ServiceSummary from "@/src/components/services/service-summary";
import { BusinessContentType } from "@/src/types/interfaces";
import RACHero from '@/public/business-types/restaurants-cafes/rac-hero.png'

import PromoSection from "@/src/components/promotion-section/promotion-section";
import BusinessBulletPoints from "@/src/components/business.-types/details-components/bullet-points";
import ServicesDetails from "@/src/components/business.-types/details-components/service-details";

const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مطاعم ومقاهي",
            description: "قم بتشغيل مطعمك بكفاءة ورفع مستوى رضا العملاء",
            image: {
                src: RACHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading:{
                text: "حسّن كل جزء من عمليات مطعمك، بدءًا من إدارة المخزون إلى التفاعل مع العملاء، باستخدام منصة إدارة المطاعم الشاملة من أمـركـ",
                highlited: "إدارة المطاعم الشاملة"
            } ,
            listItems: [
                "تسريع معالجة الطلبات لتقليل أوقات الانتظار وزيادة رضا العملاء.",
                "الحفاظ على دقة المخزون لتقليل الهدر وإدارة التكاليف بفعالية.",
                "تسهيل الدفع السريع والآمن باستخدام أنظمة اجهزة المدفوعات المدمجة لتسريع عمليات الدفع.",
                "تتبع اتجاهات المبيعات وأداء القائمة لتعديل العروض حسب تفضيلات العملاء.",
                "أتمتة برامج الولاء لتشجيع العملاء على العودة وبناء ولاء العملاء."
            ]
        }
    },
    {
        type: "ServiceDetails",
        props: {
            heading: {
                primary: "ميزات مصممة لتلبية احتياجات عملك",
                secondary: "اكتشف الميزات المصممة لدعم نوع عملك وتحقيق أهدافك"
            },
            listItems: [
                {
                    heading: "نظام نقاط البيع",
                    paragraph: "يشمل نقاط البيع عبر الهاتف المحمول، الجهاز اللوحي، والويب لتسهيل إدارة البيع."
                },
                {
                    heading: "جهاز دفع مدمج",
                    paragraph: "يدعم جميع أجهزة الدفع المدمجة لتسريع عمليات الدفع."
                },
                {
                    heading: "إدارة المنيو",
                    paragraph: "تخصيص قوائم الطعام بسهولة، إضافة وتعديل الأسعار، وتصميم أوصاف الأصناف."
                },
                {
                    heading: "إدارة الطاولات",
                    paragraph: "يشمل إدارة الطاولات وتطبيق النادل، حجوزات الطاولات، قائمة انتظار العملاء، طلب ودفع وتقسيم الفاتورة عبر QR، وتحليلات الطاولات."
                },
                {
                    heading: "أمرك أونلاين",
                    paragraph: "يشمل طلب ودفع عبر QR، الطلبات للاستلام أو عبر وسائل التواصل، توصيل منزلي، تحديد المناطق جغرافياً، مدفوعات إلكترونية، برامج الولاء، وقوائم طعام رقمية."
                },
                {
                    heading: "إدارة متطورة للمخزون",
                    paragraph: "تشمل المشتريات والموردين، مراقبة المخزون، إدارة المستودعات والمطابخ المركزية والسحابية، وإجراءات الموافقات."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "تنفيذ العروض التسويقية المرنة، العروض الخاصة، والقسائم الرقمية."
                },
                {
                    heading: "بطاقات الهدايا",
                    paragraph: "تشمل بطاقات الهدايا الرقمية والفيزيائية لتشجيع ولاء العملاء."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم أوامر المطبخ لتحسين الإنتاجية وتقليل الأخطاء."
                },
                {
                    heading: "شاشة الخدمة",
                    paragraph: "تسهيل التواصل بين النادل والمطبخ لتسريع الخدمة."
                },
                {
                    heading: "ورديات الموظفين",
                    paragraph: "تشمل إدارة سجلات حضور الموظفين وتحسين تسجيل ساعات العمل لزيادة الكفاءة."
                },
                {
                    heading: "صفحات ويب لنقاط البيع",
                    paragraph: "عرض معلومات متنوعة على شاشات الويب لتحسين تجربة البيع."
                },
                {
                    heading: "فواتير ZATCA",
                    paragraph: "تضم إصدار الفواتير المعتمدة من هيئة الزكاة والضريبة والجمارك السعودية (زاتكا) بما يتوافق مع المتطلبات القانونية."
                },
                {
                    heading: "وضع عدم الاتصال",
                    paragraph: "تضمن استمرار العمليات وإدارة المبيعات حتى في حالة انقطاع الإنترنت."
                },
                {
                    heading: "ووك توك مدمج",
                    paragraph: "يدعم التواصل السريع بين الموظفين في المطعم."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تشمل إرسال رسائل نصية تلقائية للتأكيد، التحديثات، أو العروض."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "تشمل إدارة حسابات العملاء، تفضيلاتهم، وتحليل بياناتهم لتحسين خدماتهم."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تشمل تحليل البيانات والأداء باستخدام تقارير مفصلة لتمكين اتخاذ قرارات استراتيجية."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "تشمل تكاملات API المخصصة التي تربط المنصة مع أنظمة خارجية أخرى لزيادة المرونة."
                },
                {
                    heading: "ربط تطبيقات التوصيل",
                    paragraph: "تشمل ربط المنصة مع تطبيقات توصيل الطعام لتحسين الكفاءة والسرعة في إدارة الطلبات."
                }
            ]
        }
    }
];



export default function PosPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-special md:w-[95%] justify-between gap-[120px] mt-[120px] mb-[80px]">
                {contentData.map((content, index) => {
                        switch (content.type) {
                            case "ServiceHero":
                                return <ServiceHero key={index} {...content.props} />;
                            case "BulletPoints":
                                return <BusinessBulletPoints key={index} {...content.props} />;
                            case "ServiceDetails":
                                return <ServicesDetails key={index} {...content.props} />;
                            default:
                                return null;
                        }
                    })}
            </div>
            <PromoSection />
        </section>
    );
}
