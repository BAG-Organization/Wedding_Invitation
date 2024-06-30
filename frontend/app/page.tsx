import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flex flex-row items-start justify-between p-6">
      <div className="w-2/3 h-25 p-4 bg-gray-100 text-center">
        <p>
          Left section
        </p>
      </div>
      <div className="w-1/3 p-4 bg-gray-200">
        <p>
          Right section
        </p>
      
      </div>
    </main>
  );
}
