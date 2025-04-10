type Quiz = {
  title: string;
  interrogate: string;
  correct: string;
  false: string;
};

export const questions: Quiz[] = [
  { title: "Welcome to AUSTRALIA", interrogate: "What is the capital of Australia?", correct: "Canberra", false: "Sydney" },
  { title: "Welcome to FRANCE", interrogate: "What is the capital of France?", correct: "Paris", false: "Bordeaux" },
  { title: "Welcome to BRAZIL", interrogate: "What is the capital of Brazil?", correct: "Brasília", false: "Rio de Janeiro"},
  { title: "Welcome to CANADA", interrogate: "What is the capital of Canada?", correct: "Ottawa", false: "Toronto"},
  { title: "Welcome to JAPAN", interrogate: "What is the capital of Japan?", correct: "Tokyo", false: "Kyoto" },
 ];
