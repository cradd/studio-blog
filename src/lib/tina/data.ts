// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getPost = (slug: string) =>
  requestWithMetadata(client.queries.post({ relativePath: slug + '.mdx' }), {
    priority: 'primary',
  });

export const getPostList = () =>
  requestWithMetadata(client.queries.postConnection(), {
    priority: 'primary',
  });

export const getPage = (slug: string) =>
  requestWithMetadata(client.queries.page({ relativePath: slug + '.mdx' }), {
    priority: 'primary',
  });
