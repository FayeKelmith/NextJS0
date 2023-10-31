//GET PATCH DELETE
import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();
    const prompts = await Prompt.findById(params.id).populate("creator");

    if (!prompts) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDb();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    console.log("updated");
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Did not update propmt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDb;

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Successfully Deleted", { status: 200 });
  } catch (error) {
    return new Response("Could not Delete Prompt", { status: 500 });
  }
};
