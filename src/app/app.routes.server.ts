import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'gallery/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { category: 'cars' },
      { category: 'hotels' },
      { category: 'handicrafts' }
    ]
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
