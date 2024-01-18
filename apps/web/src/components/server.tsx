import { trpcServer } from '@/trpc/server';

export const Server = async () => {
  const users = await trpcServer.user.findMany.query();

  return (
    <div>
      <h3>Query From Server</h3>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.firstName} {u.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
