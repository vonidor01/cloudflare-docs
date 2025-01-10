import { createGraphiQLFetcher } from "@graphiql/toolkit";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import { useState } from "react";

const fetcher = createGraphiQLFetcher({
	url: "https://api.cloudflare.com/client/v4/graphql",
});

export function GraphiQLClient({ schema }: { schema: any }) {
	const [authToken, setAuthToken] = useState("");
	return (
		<div className="flex h-screen flex-col">
			<div className="flex items-center gap-4 bg-gray-100 p-4">
				<label
					htmlFor="password"
					className="text-sm/6 font-medium text-gray-900"
				>
					Auth Token:
				</label>
				<div className="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						onChange={(e) => setAuthToken(e.target.value)}
						className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
					/>
				</div>
			</div>
			<div className="flex-1">
				<GraphiQL
					fetcher={fetcher}
					schema={schema}
					headers={JSON.stringify({
						authorization: `Bearer ${authToken}`,
					})}
				/>
			</div>
		</div>
	);
}
