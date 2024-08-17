"use client"
import React from 'react'
import { usePostsStore } from '@/store/Posts'

const postsCount = () => {
    const {posts} = usePostsStore();
  return <div>{posts.length}</div>
}

export default postsCount
