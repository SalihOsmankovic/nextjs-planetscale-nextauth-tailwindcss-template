import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from './search';
import TrainingsTable from './table';

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
      <Title>Trainings</Title>
      <Text>
        A list of trainings
        {/* retrieved from a MySQL database (PlanetScale). */}
      </Text>
      <Search />
      <Card className="mt-6">
        <TrainingsTable users={users} />
      </Card>
    </main>
  );
}
