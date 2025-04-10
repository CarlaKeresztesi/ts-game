import './styles.css'


//Capturing elements on the elements on the DOM/
const australiaTxt = document.querySelector<HTMLElement>(".australia-txt");
const franceTxt = document.querySelector<HTMLElement>(".france-txt");
const brazilTxt = document.querySelector<HTMLElement>(".brazil-txt");
const canadaTxt = document.querySelector<HTMLElement>(".canada-txt");
const japanTxt = document.querySelector<HTMLElement>("japan-txt");

const markerAustralia = document.querySelector<HTMLElement>(".marker-australia");
const markerFrance = document.querySelector<HTMLElement>(".marker-france");
const markerBrazil = document.querySelector<HTMLElement>(".marker-brazil");
const markerCanada = document.querySelector<HTMLElement>(".marker-canada");
const markerJapan = document.querySelector<HTMLElement>("marker-japan");

//Creating function that handles the clicks on markers/

    function setupMarkerHover() {
//   Get the marker and the div elements
  
    if (!markerAustralia || !australiaTxt) {
    console.error("Marker or Div element not found");
    return;
     }
    };

    const registerClick = (event: Event) => {
    const target = event.currentTarget as HTMLElement;
    console.log(target);
    }

    markerAustralia?.forEach((markerAustralia) => marker.addEventListener('click', registerClick));
    
//     marker.addEventListener("mouseover", () => {
//         australiaDiv.style.visibility = "hidden";
//     });
//     marker.addEventListener("mouseout", () => {
//         australiaDiv.visibility = hidden;
//     });
// }
// setupMarkerHover();



// var divs = document.getElementsByTagName('div');
// for(var i = 0; i < divs.length; i++) {
//   divs[i].style.display = "none";
// }

// // Interface for marker and map elements
// interface Marker {
//   element: HTMLElement; // The marker's DOM element
// }

// // Function to handle hover effect
// function attachHoverEffectToMarker(marker: Marker, divClass: string) {
//   // Find the div with the given class
//   const targetDiv = document.querySelector(`.${divClass}`) as HTMLElement;

//   if (!targetDiv) {
//     console.error(`Div with class “${divClass}” not found.`);
//     return;
//   }

//   // Add event listeners to the marker's element
//   marker.element.addEventListener("mouseenter", () => {
//     targetDiv.style.display = "block"; // Show the div on hover
//   });

//   marker.element.addEventListener("mouseleave", () => {
//     targetDiv.style.display = "none"; // Hide the div when hover ends
//   });
// }

// // Example usage for a marker called markerAustralia
// const markerAustralia: Marker = {
//   element: document.getElementById("markerAustralia")!, // Assuming your marker has an ID of "markerAustralia"
// };

// // Attach hover effect to markerAustralia/
// attachHoverEffectToMarker(markerAustralia, "hide"); // Replace "hide" with the class of your target div/

