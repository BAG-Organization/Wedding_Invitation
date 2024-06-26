import React from "react";

export default function Header() {

    return (
        <React.Fragment>
            <nav className="bg-pink-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a className="text-pink-800">Wedding Invitation</a>
                            </div>
                        </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center space-x-4">
                                    <a className="text-pink-800 hover:text-blue-800 rounded-lg p-2">Home</a>
                                    <a className="text-pink-800 hover:text-blue-800 rounded-lg p-2">Template</a>
                                    <a className="text-pink-800 hover:text-blue-800 rounded-lg p-2">Login</a>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}