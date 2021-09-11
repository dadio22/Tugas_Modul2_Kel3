import React from "react";
export default function Button(props) {
	const { tombol, close, size } = props;
	return(
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-0 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-0 px-8 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-32">
          {tombol.map((product) => (
            <div className="w-full min-h-80 bg-white-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-32 lg:aspect-none">
              <button class="bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
               {product.nama}
              </button>
              <div className="mt-4 flex justify-between">
                <a>Available sizes: {product.size}</a>
              </div>
            </div>
          ))}
        </div>
      <div className="mx-auto py-24 px-2">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 flex justify-center">
          T-Shirt Size Chart
        </h2>
        {size.map((size) => (
        <div className="mt-4 text-2xl flex font-semibold justify-between">
          <div>
            {size.small}
            {size.medium}
            {size.large}
            {size.xlarge}
            {size.xxlarge}
          </div>
        </div>
        ))}
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 flex justify-center">
        {close}
      </h2>
      </div>
    </div>
  )
}