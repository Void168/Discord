"use client";

interface SearchServerProps {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
}

export const SearchServer = ({ data }: SearchServerProps) => {
  return <div>Server Search Component</div>;
};
