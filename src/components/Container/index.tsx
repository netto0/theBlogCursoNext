type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className=" max-w-screen-lg mx-auto px-8">
        {children}
      </div>
    </div>
  );
}
