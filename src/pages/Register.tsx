import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNavigateToMain = (e: any) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (allFieldsFilled) {
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 w-96">
        <div className="w-screen lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
            Register
          </h2>
          <form className="mt-8 space-y-6" action="#">
            <div className="flex justify-between gap-4">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="name"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <button
              onClick={handleNavigateToMain}
              type="submit"
              className="w-auto px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"></div>
      </section>
    </div>
  );
};

export default Register;

{
  /* <form className="mt-8 space-y-6" action="#">
<div className="flex justify-between gap-4">
  <div className="w-full">
    <label
      htmlFor="name"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Name
    </label>
    <input
      type="name"
      name="name"
      id="name"
      placeholder="Your Name"
      className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
  <div className="w-full">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Username
    </label>
    <input
      type="name"
      name="username"
      id="username"
      placeholder="username"
      className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
</div>
<div className="flex justify-between gap-4 ">
  <div className="w-full">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@company.com"
      required
    />
  </div>

  <div className="w-full">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="••••••••"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
</div>
<button
  onClick={handleNavigateToMain}
  type="submit"
  className="w-auto px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Register
</button>
</form> */
}
