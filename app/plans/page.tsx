import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from './search';
import PlansTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('users')
    .select(['id', 'name', 'username', 'email'])
    .where('name', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Plans</Title>
      <Text>
        A list of plans
        {/* retrieved from a MySQL database (PlanetScale). */}
      </Text>
      <Search />
      <Card className="mt-6">
        <PlansTable users={users} />
      </Card>
    </main>
  );
}
