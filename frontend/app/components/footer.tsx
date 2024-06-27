import React from "react";

export default function Footer()
{
    return(
        <React.Fragment>
            <div className="bg-green-500 h-1/2 w-full flex md:flex-row flex-col justify-around items-left text-left p-20">
            <div className="p-5">
                    <p className="text-white">
                        All rights reserved
                    </p>
                </div>
                <div className="flex space-x-4 p-5">
                    <a className="text-white">Facebook</a>
                    <a className="text-white">Instagram</a>
                    <a className="text-white">Twitter</a>
                    <a className="text-white">Threads</a>
                </div>

            </div>
        </React.Fragment>
    );
}