import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  footer?: string;
  contentCard: React.ReactNode;
};

export const CardItem = ({
  title,
  description,
  footer,
  contentCard,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>{contentCard}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
