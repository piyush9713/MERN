import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (data) => {
    const user = await loginUser(data);
    if (user) {
      reset();
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-sm w-full">
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />

        <button type="submit" className="border p-2 bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
