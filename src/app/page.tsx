import Button from "@/components/Button";
import { OpenAI } from "langchain/llms/openai";

export default function Home() {
  async function handlePrompt() {
    "use server";

    const model = new OpenAI();

    const fetchModel = async () => {
      const res = await model.call(
        "What would be a good company name a company that makes colorful socks?"
      );
      console.log(res);
    };
    await fetchModel();
  }
  return (
    <div>
      <Button handlePrompt={handlePrompt} />
    </div>
  );
}
