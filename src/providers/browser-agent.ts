// import { SerpAPI } from "langchain/tools";
import { RequestsGetTool } from "langchain/tools"; // alternativa simples sem API key
import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutor } from "langchain/agents";

export default class BrowserAgentProvider {
	// Substitui SerpAPI por RequestsGetTool
	tools = [
		new RequestsGetTool()
	];

	model = new OpenAI({ temperature: 0 });

	fetch = async (query) => {
		const executor = await initializeAgentExecutor(this.tools, this.model, "zero-shot-react-description", true);
		const result = await executor.call({ input: query });

		return result.output;
	};
}
