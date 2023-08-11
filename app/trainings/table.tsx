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

export default async function TrainingsTable({ users }: { users: User[] }) {
  const fakeExercises = [
    {
      id: 1,
      name: 'Push-ups',
      category: 'Strength',
      duration: 5,
      caloriesBurned: 10,
      description: 'Classic bodyweight exercise targeting upper body muscles.'
    },
    {
      id: 2,
      name: 'Running',
      category: 'Cardio',
      duration: 20,
      caloriesBurned: 150,
      description: 'Outdoor or treadmill running for cardiovascular fitness.'
    },
    {
      id: 3,
      name: 'Yoga',
      category: 'Flexibility',
      duration: 30,
      caloriesBurned: 80,
      description:
        'Mind-body practice for flexibility, balance, and relaxation.'
    },
    {
      id: 4,
      name: 'Squats',
      category: 'Strength',
      duration: 10,
      caloriesBurned: 20,
      description: 'Compound exercise for lower body strength and muscle tone.'
    },
    {
      id: 5,
      name: 'Cycling',
      category: 'Cardio',
      duration: 45,
      caloriesBurned: 300,
      description: 'Indoor or outdoor cycling for cardiovascular endurance.'
    },
    {
      id: 6,
      name: 'Plank',
      category: 'Core',
      duration: 1,
      caloriesBurned: 5,
      description: 'Isometric core exercise for stability and strength.'
    },
    {
      id: 7,
      name: 'Jumping Jacks',
      category: 'Cardio',
      duration: 8,
      caloriesBurned: 15,
      description:
        'Full-body exercise to elevate heart rate and improve coordination.'
    },
    {
      id: 8,
      name: 'Lunges',
      category: 'Strength',
      duration: 15,
      caloriesBurned: 30,
      description: 'Lower body exercise targeting thighs and glutes.'
    },
    {
      id: 9,
      name: 'Pilates',
      category: 'Flexibility',
      duration: 40,
      caloriesBurned: 70,
      description:
        'Low-impact exercise focusing on core strength and flexibility.'
    },
    {
      id: 10,
      name: 'Burpees',
      category: 'Cardio',
      duration: 12,
      caloriesBurned: 25,
      description: 'High-intensity full-body exercise for strength and cardio.'
    }
    // Add more fake exercises here
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Duration</TableHeaderCell>
          <TableHeaderCell>Calories</TableHeaderCell>
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
        {fakeExercises.map((exercise) => (
          <TableRow key={exercise.id}>
            <TableCell>
              <Text>{exercise.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{exercise.description}</Text>
            </TableCell>
            <TableCell>
              <Text>{exercise.category}</Text>
            </TableCell>
            <TableCell>
              <Text>{exercise.duration}</Text>
            </TableCell>
            <TableCell>
              <Text>{exercise.caloriesBurned}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
