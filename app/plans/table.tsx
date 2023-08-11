import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function PlansTable({ users }: { users: User[] }) {
  const fakePricingPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      description: 'Access to basic fitness features',
      price: 19.99,
      features: ['Workout Videos', 'Basic Nutrition Tips', 'Community Forum']
    },
    {
      id: 2,
      name: 'Pro Plan',
      description: 'Unlock advanced workouts and personalized coaching',
      price: 39.99,
      features: [
        'Full Workout Library',
        'Personalized Coaching',
        'Nutrition Plans',
        'Community Forum'
      ]
    },
    {
      id: 3,
      name: 'Premium Plan',
      description: 'All-in-one package for serious fitness enthusiasts',
      price: 59.99,
      features: [
        'Unlimited Workouts',
        'One-on-One Coaching',
        'Customized Nutrition',
        'Access to Workshops',
        'Community Forum'
      ]
    }
    // Add more fake pricing plans here
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Features</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
          </TableRow>
        ))} */}
        {fakePricingPlans.map((plan) => (
          <TableRow key={plan.id}>
            <TableCell>
              <Text>{plan.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{plan.description}</Text>
            </TableCell>
            <TableCell>
              <Text>${plan.price}</Text>
            </TableCell>
            <TableCell>
              <Text className="truncate w-96">{plan.features.join(', ')}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
