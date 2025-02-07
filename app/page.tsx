import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello World
      </h1>
      <Button variant="default" size="default" type="button">
        Hello World
      </Button>
    </div>
  );
}
