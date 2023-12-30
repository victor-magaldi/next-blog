import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSuitcher';

export default function Header({ name }) {
  return (
    <header className="p-4 mb-4 bg-cyan-800 w-full mx-auto">
      <ul className="text-2xl dark:text-white text-center flex flex-row justify-between items-center">
        <li>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
}

