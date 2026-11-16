import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { login } from "@/service/login";

interface ICard{
    id: string
    titulo: string
}

export const Card = ({id, titulo}: ICard) =>{
    return(
        <>
        <div className={id}>
            <h1 className="text-center">{titulo}</h1>
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
            <Button 
            onClick={login}
            id="login"
            label="LOGIN"
            color="#fdfdfd"
            />
      </div>
    </>
    );
}