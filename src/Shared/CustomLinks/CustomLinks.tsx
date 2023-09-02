import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from 'react';

type CustomLinksProps = {
  children: ReactNode;
  to: string;
  [key: string]: unknown;
};

const CustomLinks = ({ children, to, ...props }: CustomLinksProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ backgroundColor: match ? "green" : "" }}
      to={to}
      {...props}
    >
      <div className={match ? "bg-[#3E2EDF] rounded-md p-4 text-white" : "p-4"}>
        {children}
      </div>
    </Link>
  );
};

export default CustomLinks;
