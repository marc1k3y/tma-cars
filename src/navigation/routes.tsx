import type { ComponentType, JSX } from 'react';

import { ClickerPage } from '@/pages/clicker';
import { GaragePage } from '@/pages/garage';
import { FriendsPage } from '@/pages/friends';
import { RatingPage } from '@/pages/rating';
import { TasksPage } from '@/pages/tasks';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: ClickerPage },
  { path: '/garage', Component: GaragePage, title: "Garage" },
  { path: '/friends', Component: FriendsPage, title: 'Friends' },
  { path: '/rating', Component: RatingPage, title: 'Rating' },
  { path: '/tasks', Component: TasksPage, title: 'Tasks' },
];
