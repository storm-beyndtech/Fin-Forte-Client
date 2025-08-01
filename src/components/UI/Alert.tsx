import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

type dataProp = {
	type: "simple" | "danger" | "warning" | "success";
	message: string;
	toggleAlert?: boolean;
	showToggle?: boolean;
};

export default function Alert({ type, message, toggleAlert, showToggle }: dataProp) {
	const [showAlert, setShowAlert] = useState<boolean>(toggleAlert || true);

	switch (type) {
		case "simple":
			return (
				showAlert && (
					<div className="flex items-center max-sm:px-1 p-4 py-2 my-3 text-blue-800 rounded-md bg-blue-50/10">
						<TbInfoSquareRoundedFilled className="w-5 h-5 flex-shrink-0" />
						<div className="ms-3 text-xs font-semibold font-inter">{message}</div>
						{showToggle && (
							<button
								type="button"
								className="bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex justify-center h-8 w-8 dark:bg-black dark:text-blue-400 dark:hover:bg-gray-700"
								onClick={() => setShowAlert(false)}
							>
								<span className="sr-only">Dismiss</span>

								<IoMdClose className="w-5 h-5 flex-shrink-0" />
							</button>
						)}
					</div>
				)
			);

		case "danger":
			return (
				showAlert && (
					<div className="flex items-center max-sm:px-1 p-4 py-2 my-3 text-red-700 rounded-md bg-red-500/10">
						<TbInfoSquareRoundedFilled className="w-5 h-5 flex-shrink-0" />
						<div className="ms-3 text-xs font-semibold font-inter">{message}</div>
						{showToggle && (
							<button
								type="button"
								className="bg-red-500/10 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-400/10 inline-flex justify-center h-8 w-8"
								data-dismiss-target="#alert-border-2"
								onClick={() => setShowAlert(false)}
							>
								<span className="sr-only">Dismiss</span>

								<IoMdClose className="w-5 h-5 flex-shrink-0" />
							</button>
						)}
					</div>
				)
			);

		case "success":
			return (
				showAlert && (
					<div className="flex items-center max-sm:px-1 p-4 py-2 my-3 text-green-600 rounded-md bg-green-500/10">
						<TbInfoSquareRoundedFilled className="w-5 h-5 flex-shrink-0" />
						<div className="ms-3 text-xs font-semibold font-inter">{message}</div>
						{showToggle && (
							<button
								type="button"
								className="bg-green-500/10 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-400/10 inline-flex justify-center h-8 w-8 dark:bg-black dark:text-green-400 dark:hover:bg-gray-700"
								data-dismiss-target="#alert-border-3"
								onClick={() => setShowAlert(false)}
							>
								<span className="sr-only">Dismiss</span>

								<IoMdClose className="w-5 h-5 flex-shrink-0" />
							</button>
						)}
					</div>
				)
			);

		case "warning":
			return (
				showAlert && (
					<div className="flex items-center max-sm:px-1 p-4 py-2 my-3 text-yellow-500 rounded-md bg-yellow-100/10">
						<TbInfoSquareRoundedFilled className="w-5 h-5 flex-shrink-0" />
						<div className="ms-3 text-xs font-semibold font-inter">{message}</div>
						{showToggle && (
							<button
								type="button"
								className="bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex justify-center h-8 w-8 dark:bg-black dark:text-yellow-300 dark:hover:bg-gray-700"
								data-dismiss-target="#alert-border-4"
								onClick={() => setShowAlert(false)}
							>
								<span className="sr-only">Dismiss</span>

								<IoMdClose className="w-5 h-5 flex-shrink-0" />
							</button>
						)}
					</div>
				)
			);
		default:
			return;
	}
}
