import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-500">
        This is a protected page
      </h1>
      <UserButton />
    </div>
  );
}
