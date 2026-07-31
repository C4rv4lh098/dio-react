// import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

 export default function Home() {
  return (
    <>
    <h1>Faça o login</h1>
    <div className="controll">
      <Input  
        id="emailInput" 
        label="Email" 
        type="email"
      />
      <Input
        id="passwordInput"
        label="Senha"
        type="password"
      />
    </div>
    </>
  );
}
