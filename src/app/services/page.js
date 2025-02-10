"use client"
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import ServiceCard from "./Components/ServiceCard";

export default function ServiceSection(){
    const contentData = [
        {
          "title": "Enhanced External Counterpulsation1 (EECP)",
          "description": "Enhanced External Counterpulsation1 (EECP) is a non-invasive therapy designed to improve blood flow and reduce symptoms of angina. It uses pressure cuffs to assist circulation and support heart health. EECP has shown promising results with minimal side effects.",
          "questions": [
              {
                  "question": "Are there any side effects to EECP?",
                  "answer": "EECP is generally safe, but some may experience mild discomfort, skin irritation, or fatigue during treatment."
              },
              {
                  "question": "How soon can I return to normal activities?",
                  "answer": "Most patients can resume normal activities immediately after an EECP session without downtime."
              },
              {
                  "question": "Is EECP covered by insurance?",
                  "answer": "In many cases, EECP is covered by insurance, especially for conditions like angina or heart failure. Check with your provider."
              },
              {
                  "question": "What maintenance sessions are recommended?",
                  "answer": "After completing the initial treatment course, maintenance sessions may be recommended monthly or as advised by your physician."
              }
          ]
      }
      ,
        {
          "title": "Chelation Therapy",
          "description": "Chelation Therapy is a treatment that removes heavy metals and toxins from the bloodstream, often used for cardiovascular health. It is minimally invasive and aims to enhance circulation. This therapy has been researched for its benefits in reducing arterial plaque.",
          "questions": [
              {
                  "question": "What conditions can Chelation Therapy treat?",
                  "answer": "Chelation Therapy is often used for heavy metal poisoning and is being studied for its potential benefits in improving cardiovascular health."
              },
              {
                  "question": "Are there risks associated with Chelation Therapy?",
                  "answer": "When administered by professionals, risks are minimal but may include mild side effects like nausea, headache, or fatigue."
              },
              {
                  "question": "How long does a typical session last?",
                  "answer": "A typical session lasts 1–3 hours, depending on the treatment plan and the patient’s condition."
              },
              {
                  "question": "Is Chelation Therapy FDA-approved?",
                  "answer": "Chelation is FDA-approved for heavy metal poisoning but not specifically for treating cardiovascular conditions."
              }
          ]
      },
      {
        "title": "Electrocardiogram (ECG/EKG)",
        "description": "An Electrocardiogram is a non-invasive test that records the electrical activity of the heart. It is a quick and painless way to detect irregular rhythms or signs of heart disease. ECG is a vital diagnostic tool for monitoring cardiac health.",
        "questions": [
            {
                "question": "What does an ECG detect?",
                "answer": "An ECG detects abnormal heart rhythms, blockages, and signs of previous or current heart attacks."
            },
            {
                "question": "How should I prepare for an ECG?",
                "answer": "You should wear comfortable clothing and avoid applying lotions or oils to the chest area before the test."
            },
            {
                "question": "Is an ECG painful or uncomfortable?",
                "answer": "No, the ECG is completely painless and involves placing small electrodes on the skin."
            },
            {
                "question": "How long does it take to get results from an ECG?",
                "answer": "Results are usually available immediately after the test is completed."
            }
        ]
      },
      {
        "title": "Arterial Clearance Therapy",
        "description": "Arterial Clearance Therapy is designed to enhance blood flow by addressing blockages in the arteries. This therapy combines medical procedures and lifestyle modifications to improve cardiovascular health. It is often used alongside other heart treatments.",
        "questions": [
            {
                "question": "How does Arterial Clearance Therapy work?",
                "answer": "The therapy works by reducing arterial blockages, improving circulation, and supporting overall heart health."
            },
            {
                "question": "Can this therapy prevent heart attacks?",
                "answer": "While not a guarantee, the therapy can significantly lower the risk of heart attacks by improving arterial health."
            },
            {
                "question": "What lifestyle changes are recommended alongside the therapy?",
                "answer": "A heart-healthy diet, regular exercise, and avoiding smoking are highly recommended to maximize therapy benefits."
            },
            {
                "question": "How many sessions are typically required?",
                "answer": "The number of sessions varies based on individual needs but usually ranges from 10–20."
            }
        ]
      },
      {
        "title": "Periscope Cardiovascular Testing",
        "description": "Periscope Cardiovascular Testing offers a detailed assessment of heart and vascular health. Using advanced diagnostic tools, it evaluates cardiac risks and guides treatment planning. This non-invasive test provides accurate and reliable results.",
        "questions": [
            {
                "question": "What is Periscope Cardiovascular Testing used for?",
                "answer": "It is used to assess heart and vascular health, detect risks, and guide personalized treatment plans."
            },
            {
                "question": "How is this test performed?",
                "answer": "The test is non-invasive and involves using sensors and monitors to evaluate heart and vascular function."
            },
            {
                "question": "Are there any risks involved with the test?",
                "answer": "No, the procedure is safe, painless, and carries no risks."
            },
            {
                "question": "How accurate is Periscope Cardiovascular Testing?",
                "answer": "The test is highly accurate and provides detailed insights into cardiovascular health and potential risks."
            }
        ]
      }
      
      ];
    return(
        <div className=" w-full min-h-screen ">
            <HeaderSection/>
            <div className="min-h-screen bg-rose-50/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Cardiovascular Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-[1.1rem]">
            Advanced cardiac care solutions using cutting-edge technology and proven therapeutic approaches
          </p>
        </header>
        
        <div className="grid gap-8 md:grid-cols-2 ">
          {contentData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
            <FooterSection/>
        </div>
    )
}