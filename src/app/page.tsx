import Posts from "@/components/posts/posts";
import Image from "next/image";
import styles from '@/components/posts/posts.module.css';
import PostsCount from "@/components/postscount/postsCount"


export default function Home() {
  return (
    <main className={styles.main}>
         <Posts/>
         <PostsCount/>
    </main>
  );
}
