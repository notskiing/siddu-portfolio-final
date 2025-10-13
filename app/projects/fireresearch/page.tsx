import { ProjectLayout } from "@/components/ProjectLayout";

export default function firebreakerProject() {
  const projectData = {
    title: "ML Fire Spread Prediction Research",
    category: "Fire Management",
    year: "2024",
    images: [
      "../images/goes.jpg",
      "../images/SWIR750.jpg", 
    ],
    content: `The idea of this research project was to reduce the barriers to actionable fire data which currently exist in the industry. At the moment, it is quite hard to get an accurate survey of fire spread (with specific information) absent uniquely trained experts and machinery, which are quite cost-prohibitive to the average climate watchdog. This research attempts to test the best vision models which are readily available (most are free) in order to determine the best possible for cutting edge, qualitative predictions.


    
Our wildfire analysis system leverages Vision Language Models to extract predictive insights from GOES-18 satellite thermal imagery, addressing the critical challenge of rapid fire spread assessment during active wildfire events. The system processes GOES Fire Temperature Detection maps to automatically identify active fire coordinates and generate qualitative spread predictions, combining advanced satellite data with local meteorological conditions to assess fire behavior without requiring manual analysis or specialized domain expertise. The implementation employs a dual-model architecture comparing Google's Gemini 2.5 Pro, Ollama's LLaVA, and other vision models, both prompted to extract geographic coordinates from thermal hotspot imagery and provide qualitative fire spread assessments based on visual indicators like smoke direction and thermal intensity patterns.​​

Once fire coordinates are identified, the system integrates Meteostat weather data retrieval to contextualize local atmospheric conditions at the fire location, including wind speed, temperature, and precipitation metrics that critically influence fire propagation rates. Key technical innovations include zero-shot VLM prompting strategies that enable immediate deployment without training data collection, structured output formatting that ensures parseable coordinate extraction for downstream weather API integration, and multi-perspective analysis capabilities where the model interprets smoke plume directionality to forecast 12-hour fire boundary evolution. This automated pipeline eliminates the time lag inherent in traditional fire perimeter mapping while providing actionable spread predictions for emergency response coordination.`


};

  return <ProjectLayout {...projectData} />;
}
