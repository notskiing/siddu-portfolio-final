import { ProjectLayout } from "@/components/ProjectLayout";

export default function chessbotProject() {
  const projectData = {
    title: "Chessbot",
    category: "Engineering",
    year: "2024",
    images: [
      "../images/chessboard2.png",
      "../images/chessboard4.png", 
      "../images/chessboard3.jpeg",
      "../images/chessboard1.jpeg"
    ],
    content: `Our project was accepted to the prestigious IEEE (Institute of Electrical and Electronics Engineers) AIxSET conference in October 2025. I worked alongside Sonoma State University students Antonio Kassis, Emmanuel Barajas, and Dr. Farid Farahmand, a visiting faculty member at the Lawrence Berkeley National Laboratory.
    

My role within this research project was twofold: I was the principal computer vision engineer, testing generative AI and openCV to determine the best solution for move detection, and acted as a manufacturing engineer, working in the manufacture of our physical robot arm.
    

The arm was constructed within Fusion360 and sliced with PrusaSlicer, after much engineering and analysis to ensure it balanced on the rest of our robot's chassis. The arm was printed on a Prusa MK4 with PETG filament, chosen for its strength and durability. The chassis also houses a Raspberry Pi 4 that runs the computer vision system and controls the arm's movements via input/output to a basic Adeept motor controller. The entire assembly is powered by a 12V DC power supply, ensuring stable operation during chess games.

Our computer vision system addresses the challenge of digitizing physical chess games in real-time without specialized hardware, manual calibration, or fixed camera setups. The solution employs a multi-stage automatic board detection pipeline combining HSV color segmentation, adaptive contour analysis, and Hough line transformation to achieve 83% move detection accuracy across varying lighting conditions and board designs, making extremely high level chess analysis accessible on standard hardware including Raspberry Pi devices.

I designed the computer vision system with a three-tiered detection strategy with intelligent fallbacks: primary detection targets green-bordered boards using HSV color space masking with morphological operations, secondary detection leverages CLAHE-enhanced edge detection with multiple Canny parameter sweeps for maximum robustness, and tertiary detection employs Hough line clustering to construct board boundaries from grid intersections. Once the board is located, perspective warping with automatic 90-degree rotation normalizes the view, followed by tile-wise Sobel edge operator analysis that computes directional energy changes across all 64 squares to identify moved pieces. In practice, the FROM square exhibits maximum negative edge delta (a piece moves, changing its color density) while the TO square shows maximum positive delta.

I have no relationship to any SSU faculty, students, or other interested parties.`
  };

  return <ProjectLayout {...projectData} />;
}
