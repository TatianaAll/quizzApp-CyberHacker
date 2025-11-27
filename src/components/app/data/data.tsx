export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: number;
}

export const questions: Question[] = [
    {
        id: 1,
        question: "What is a firewall?",
        answers: ["A wall of fire", "Network protection", "A virus"],
        correctAnswer: 1,
    },
    {
        id: 2,
        question: "What does VPN stand for?",
        answers: ["Virtual Private Network", "Very Public Network", "Virus Protection Now"],
        correctAnswer: 0,
    },
    {
        id: 3,
        question: "What is malware?",
        answers: ["Good software", "Malicious software", "An antivirus"],
        correctAnswer: 1,
    },
    {
        id: 4,
        question: "SSL stands for?",
        answers: ["Secure Socket Layer", "Super Safe Link", "System Security Lock"],
        correctAnswer: 0,
    },
    {
        id: 5,
        question: "What is phishing?",
        answers: ["Fishing", "A video game", "An email scam"],
        correctAnswer: 2,
    },
    {
        id: 6,
        question: "What does an antivirus do?",
        answers: ["Creates viruses", "Protects against viruses", "Slows down the computer"],
        correctAnswer: 1,
    },
    {
        id: 7,
        question: "Is HTTPS safer than HTTP?",
        answers: ["True", "False", "Sometimes"],
        correctAnswer: 0,
    },
    {
        id: 8,
        question: "What is ransomware?",
        answers: ["Free software", "A virus that demands a ransom", "A security tool"],
        correctAnswer: 1,
    },
    {
        id: 9,
        question: "What does DDoS stand for?",
        answers: ["Distributed Denial of Service", "Direct Data of System", "Delete Data on Server"],
        correctAnswer: 0,
    },
    {
        id: 10,
        question: "A strong password contains:",
        answers: ["Only letters", "Letters, numbers and symbols", "Only numbers"],
        correctAnswer: 1,
    },
    {
        id: 11,
        question: "What is two-factor authentication?",
        answers: ["Two passwords", "Password + verification code", "Two accounts"],
        correctAnswer: 1,
    },
    {
        id: 12,
        question: "What is a cookie?",
        answers: ["A biscuit", "A web data file", "A virus"],
        correctAnswer: 1,
    },
    {
        id: 13,
        question: "Encryption protects:",
        answers: ["Data", "Hardware", "Power grid"],
        correctAnswer: 0,
    },
    {
        id: 14,
        question: "What is a trojan?",
        answers: ["A horse", "A type of malware", "An antivirus"],
        correctAnswer: 1,
    },
    {
        id: 15,
        question: "What does IP stand for?",
        answers: ["Internet Protocol", "Internal Process", "Information Private"],
        correctAnswer: 0,
    },
    {
        id: 16,
        question: "A VPN hides:",
        answers: ["Your identity", "Your IP address", "Your computer"],
        correctAnswer: 1,
    },
    {
        id: 17,
        question: "What is spam?",
        answers: ["Ham", "Unsolicited emails", "A game"],
        correctAnswer: 1,
    },
    {
        id: 18,
        question: "A firewall can be:",
        answers: ["Hardware or software", "Only hardware", "Only software"],
        correctAnswer: 0,
    },
    {
        id: 19,
        question: "What is a backdoor?",
        answers: ["A back door", "Secret access to a system", "An emergency exit"],
        correctAnswer: 1,
    },
    {
        id: 20,
        question: "The purpose of ethical hacking is:",
        answers: ["Steal data", "Test security", "Create viruses"],
        correctAnswer: 1,
    },
];