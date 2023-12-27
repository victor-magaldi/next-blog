import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSuitcher';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <ThemeSwitcher />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <br/>
        <Link href="/">
          <a>{name}</a>
        </Link>
      
      </p>
    </header>
  );
}
