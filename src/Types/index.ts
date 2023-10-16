type ChartType = { name: string; investment: number; revenue: number };

type ContactType = { title: string; desc: string };

type ReviewType = {
    id: number;
    name: string;
    images: string;
    point: number;
    message: string;
};

type PostType = {
    id: number;
    title: string;
    body: string;
};

export type { ChartType, ContactType, ReviewType, PostType };
