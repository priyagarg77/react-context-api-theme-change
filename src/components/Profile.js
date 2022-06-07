import React, { useContext } from 'react';
import Layout from './page-layout/Layout';
import { ThemeContext } from '../App';

export default function Profile() {
  const { color } = useContext(ThemeContext);
  console.log('profile', color);
  return (
    <Layout>
      <p>Profile component</p>
    </Layout>
  );
}
