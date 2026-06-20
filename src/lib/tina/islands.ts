// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';
import type { PostQuery, PageQuery, PostConnectionQuery } from '../../../tina/__generated__/types';
import PostBody from '../../components/tina/PostBody.astro';
import PageBody from '../../components/tina/PageBody.astro';
import { getPost, getPage } from './data';

export const islands: IslandRegistry = {
  post: {
    fetch: (_request, params) => getPost(params.get('slug') ?? 'starting-the-studio-blog'),
    component: PostBody,
    wrapper: { tag: 'article' },
    propsFromData: (data) => ({
      data: (data as QueryResult<PostQuery>).data?.post,
    }),
  },
  page: {
    fetch: (_request, params) => getPage(params.get('slug') ?? 'about'),
    component: PageBody,
    wrapper: { tag: 'article' },
    propsFromData: (data) => ({
      data: (data as QueryResult<PageQuery>).data?.page,
    }),
  },
};
