export interface ItemProps {
  title: string;
  amount: number;
  hexColor: string;
  expenses?: {
    title: string;
    amount: number;
  }[];
}
