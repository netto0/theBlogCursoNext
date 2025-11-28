import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div className="prose-invert prose-slate w-full max-w-none overflow-hidden prose-pre:overflow-x-auto prose-a:text-blue-300 prose-a:hover:text-blue-500 prose-a:hover:underline prose-a:transition prose-img:mx-auto prose-img:rounded-xl prose-img:my-4 md:prose-lg">
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
