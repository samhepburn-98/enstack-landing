export const metadata = {
    title: "Privacy Policy - Enstack",
    description: "Enstack privacy policy.",
};

const sections = [
    {
        title: "1. Introduction",
        content:
            "Welcome to Enstack. We respect your privacy and are committed to protecting any personal data you provide.",
    },
    {
        title: "2. Information We Collect",
        content: "We may collect:",
        list: [
            "Basic personal information (e.g. name, email) if you contact us or sign up",
            "Usage data (e.g. pages visited, interactions)",
            "Technical data (e.g. IP address, browser type)",
        ],
    },
    {
        title: "3. How We Use Your Information",
        content: "We use your data to:",
        list: [
            "Provide and improve the service",
            "Respond to enquiries",
            "Monitor usage and performance",
        ],
    },
    {
        title: "4. Cookies",
        content:
            "We may use cookies or similar technologies to enhance your experience and analyse traffic.",
    },
    {
        title: "5. Third-Party Services",
        content:
            "We may use third-party tools (e.g. analytics providers) that process data on our behalf.",
    },
    {
        title: "6. Data Sharing",
        content:
            "We do not sell your personal data. We only share data where necessary to operate the service or comply with legal obligations.",
    },
    {
        title: "7. Data Security",
        content:
            "We take reasonable steps to protect your data, but no method of transmission over the internet is 100% secure.",
    },
    {
        title: "8. Your Rights",
        content:
            "You may request access, correction, or deletion of your personal data by contacting us.",
    },
    {
        title: "9. Contact",
        content: "If you have any questions, contact:",
        email: "hello@enstack.co.uk",
    },
];

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-36 pb-20">
            <h1 className="text-4xl font-semibold">Privacy Policy</h1>
            <p className="text-slate-500 mt-2">Last updated: March 2026</p>

            <div className="mt-12 space-y-10">
                {sections.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                        <p className="text-slate-600 dark:text-slate-300">{section.content}</p>
                        {section.list && (
                            <ul className="mt-3 space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
                                {section.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {"email" in section && section.email && (
                            <a
                                href={`mailto:${section.email}`}
                                className="inline-block mt-2 text-[#00DCC2] hover:underline"
                            >
                                {section.email}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
