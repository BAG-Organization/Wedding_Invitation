import Image from "next/image";

export default function HomePage() {
  return (
    
    <main className="flex flex-row items-start justify-between p-6">
      <div className="w-2/3 p-4 bg-gray-100 text-center justify-center">
        Left section
        <div className="grid grid-cols-2 gap-4">
            <div className= "">
                <Image src="https://www.brides.com/thmb/_uM9hifSqxxSmN6lVQ_5wrO3QP4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/must-take-wedding-photos-wedding-bouquet-mo-davis-0723-909710d0aa204bc4b31881ce6e2e7c57.jpg" 
                alt="wedding" 
                width={100} 
                height={50} />
            </div>
            <div className= "">
                <Image src="https://www.brides.com/thmb/_uM9hifSqxxSmN6lVQ_5wrO3QP4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/must-take-wedding-photos-wedding-bouquet-mo-davis-0723-909710d0aa204bc4b31881ce6e2e7c57.jpg" 
                alt="wedding" 
                width={100} 
                height={70} />
            </div>
        </div>
        <div className= "">
            <Image src="https://www.brides.com/thmb/_uM9hifSqxxSmN6lVQ_5wrO3QP4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/must-take-wedding-photos-wedding-bouquet-mo-davis-0723-909710d0aa204bc4b31881ce6e2e7c57.jpg" 
            alt="wedding" 
            width={100} 
            height={70} />
        </div>
      </div>

      <div className="w-1/3 p-4 bg-gray-200">
        <p>
          Impress your guests with a gorgeous invite to a beautiful wedding!
        </p>
        <p>
            Find your perfect fit !

        </p>
      </div>
    </main>
  );
}
