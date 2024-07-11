import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className=" w-full  bg-gray-700">
      <div
        x-data="{ open: false }"
        className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <div>
            <Image
              src="https://th.bing.com/th/id/OIP.57Y2gCkQuNRyiN9avZixOwHaBg?rs=1&pid=ImgDetMain"
              width={300}
              height={500}
              alt="logo bolsa de comercio de Mendoza"
            />
          </div>
        </div>
        <nav className="flex-col flex-grow hidden md:flex md:justify-end md:flex-row">
          <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
            <li>
              <a
                href="#"
                className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-300 leading-[22px] md:px-3 text-white hover:text-blue-300"
              >
                {" "}
                Quienes<span className="hidden lg:inline"> somos </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-300 leading-[22px] md:px-3 text-white hover:text-blue-300"
              >
                {" "}
                Sucursales{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.wickedtemplates.com/"
                className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-300 leading-[22px] md:px-3 text-white hover:text-blue-300"
              >
                {" "}
                <span className="hidden lg:inline">Contacto</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
