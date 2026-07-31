import { Card } from "@/components/Card";

 export default function Home() {
  return (
    <>
    <div>
      <h1>Hello world</h1>
      <Card 
        id={1}
        paragraph="Aqui é um exemplo de paragrafo!"
        detais="Este é o detalhe do card."
      />
      <Card 
        id={2}
        paragraph="Aqui é um exemplo de paragrafo!"
        detais="Este é o detalhe do card."
      />
      <Card 
        id={3}
        paragraph="Aqui é um exemplo de paragrafo!"
        detais="Este é o detalhe do card."
      />
      <Card 
        id={4}
        paragraph="Aqui é um exemplo de paragrafo!"
        detais="Este é o detalhe do card."
      />
    </div>
    </>
  );
}
