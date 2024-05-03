import { useState } from 'react';
import Input from "./Input";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Home() {
	const { register, handleSubmit } = useForm();
	const [result, setResult] = useState({});
	const predict = async (data) => {
		console.log(data);
		const response = (await axios.post('http://localhost:8000/predict', data)).data;
		setResult(response);
	};
	return (
		<div className="bg-white pb-10">
			<div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
					<div className="group relative">
						<form className='flex flex-col w-full max-w-md mx-auto space-y-4' onSubmit={handleSubmit(predict)}>
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Propane Mole Flow (kmol/hr)" {...register("propane", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Butane Mole Flow (kmol/hr)" {...register("butane", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Pentane Mole Flow (kmol/hr)" {...register("pentane", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Hexane Mole Flow (kmol/hr)" {...register("hexane", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Top Temperature (C)" {...register("topTemp", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Bottom Temperature (C)" {...register("btmTemp", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Reflux Ratio" {...register("rr", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Heat Duty (cal/sec)" {...register("heatDuty", { required: true })} />
							<Input type="number" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" label="Bottom Pressure (bar)" {...register("btmPr", { required: true })} />
							<div className="flex justify-center">
								<button type="submit" className="hover:bg-green-400 justify-center items-center px-4 py-2 rounded-lg bg-indigo-500">
									<h1 className="text-white">Predict</h1>
								</button>
							</div>
						</form>
					</div>
					{/* <div className="group relative">
						<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
								<img
									src='https://neutrium.net/images/unit-operations/basic-distillation-column.png'
									alt="Image"
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
						<div className="mt-28 flex justify-between items-center">
							<Button type="submit" bgColor="bg-indigo-500" className="w-full hover:bg-green-400">
								<h1 className="text-white">Predict</h1>
							</Button>
						</div>
					</div> */}
					<div className="group relative flex flex-col justify-center bg-slate-200 rounded-xl">
						<h1 className="text-2xl font-bold text-gray-900 text-center">Output</h1>
						<div className="flex flex-col">
							<h1 className="text-xl text-gray-900 text-center">Propane Top Composition %: {result.propaneTop ? (result.propaneTop*100).toFixed(4) : 0}</h1>

							<h1 className="text-xl text-gray-900 text-center">Propane Bottom Composition %: {result.propaneBtm ? (result.propaneBtm*100).toFixed(4) : 0}</h1>

							<h1 className="text-xl text-gray-900 text-center">Butane Top Composition %: {result.butaneTop ? (result.butaneTop*100).toFixed(4) : 0}</h1>

							<h1 className="text-xl text-gray-900 text-center">Butane Bottom Composition %: {result.butaneBtm ? (result.butaneBtm*100).toFixed(4) : 0}</h1>
						</div>
						<h1 className="text-2xl font-bold text-gray-900 text-center mt-10">Recommendations</h1>
						<div className="flex flex-col">
							<h1 className="text-xl text-gray-900 text-center">Reflux Ratio: {result.rr ? result.rr.toFixed(4) : 0}</h1>

							<h1 className="text-xl text-gray-900 text-center">Reboiler Duty (cal/sec): {result.qn ? result.qn.toFixed(4) : 0}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
