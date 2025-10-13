import { ProjectLayout } from "@/components/ProjectLayout";

export default function debateProject() {
  const projectData = {
    title: "DebateAIR",
    category: "Humanities",
    year: "2024",
    images: [
      "../images/debategpt2.png",
      "../images/debategpt.png",
      "../images/debategpt3.png"
    ],
    content: `DebateAIR was a project I was the co-lead of on my Policy Debate team at Sonoma Academy as a sophomore.

DebateAIR (artificial intelligence researcher) was a fine-tuned ChatGPT plugin designed to streamline competitive debate research by automatically generating structured arguments and counterarguments across diverse topics. The system used custom prompt engineering to transform general queries into targeted research outputs, identifying evidence that aligned with user standards without involving itself in the “card-cutting”, or evidence handling, process which is usually left to the debaters themselves. 

By fine-tuning the base model on debate-specific patterns, DebateAIR reduced research time from hours to minutes while maintaining argument quality, enabling debaters to explore multiple perspectives rapidly through quick synthesis of information on a topic. It worked within a goal context of high-impact arguments and suggested strategic angles that might be overlooked in traditional research workflows.

`
  };

  return <ProjectLayout {...projectData} />;
}
