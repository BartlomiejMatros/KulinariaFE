interface Dish {
    id: number;
    name: string;
    label: string;
}

interface Category {
    id: number;
    name: string;
    label: string;
    dishes: Dish[];
}

interface Menu {
    id: number;
    categories: Category[];
}

export type { Menu, Category, Dish }