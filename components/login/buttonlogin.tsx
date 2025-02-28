import { Button } from "@nextui-org/react";
import "./buttonlogin.css";

export default function Login() {
  return (
    <div className="flex gap-2 ">
      <Button 
        color="primary" 
        size="sm" 
        className="w-[65px] h-[30px] text-[12px] bg-[#c5e0f8] text-blue-600 min-w-5 font-semibold hide-login"
      >
        Login
      </Button>
      <Button 
        color="secondary" 
        size="sm" 
        className="w-[90px] h-[30px] text-[12px] bg-[#306fd5] text-white min-w-0 font-semibold hide-cadastre-se"
      >
        Cadastre-se
      </Button>
    </div>
  );
}
