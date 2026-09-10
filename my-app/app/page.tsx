// import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <>
      <div className="login">
        <h1 className="text-center">FAÇA O LOGIN</h1>
        <div className="inputs">
          <div className="grid grid-col gap-8 place-content-center">
            <Input
              id="emailInput"
              label="Email"
              description=" Adicione o email"
              type="email"
            />
            <Input
              id="passwordInput"
              label="Senha"
              description=" Informe a senha"
              type="password"
            />
        </div>
        </div>
      </div>
    </>
  );
}
