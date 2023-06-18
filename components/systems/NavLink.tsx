import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type Props = {
  className?: string;
  href: string;
  icon?: ReactNode;
  isHome?: boolean;
  children: ReactNode;
  [props: string]: any;
};

export default function NavLink({ className, href, icon, isHome, children, ...props }: Props) {
  const router = useRouter();
  // const hrefSplit = href.split('/');
  // const lastHref = hrefSplit[hrefSplit.length - 1];
  // const pathnameSplit = router.pathname.split('/');
  // const lastPathname = pathnameSplit[pathnameSplit.length - 1];
  // console.log("href", href)
  // console.log("hrefSplit", hrefSplit)
  // console.log("lastHref", lastHref)
  // console.log('pathnameSplit',  pathnameSplit);
  // console.log('lastPathname',  lastPathname);
  // console.log('------------------------------------');

  if (router.pathname.split('/')[1] == 'dashboard') {
    return (
      <Link
        passHref
        {...props}
        href={href}
        className={clsx(
          className,
          'flex w-full items-center justify-start gap-2 rounded px-3 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500',
          isHome && 'bg-gray-100 font-medium text-emerald-600 dark:bg-neutral-800 dark:text-emerald-500',
          !isHome &&
            'text-gray-700 hover:bg-gray-100 hover:text-emerald-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-emerald-500'
        )}
      >
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <Link
      passHref
      {...props}
      href={href}
      className={clsx(
        className,
        'flex w-full items-center justify-start gap-2 rounded px-3 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500',
        router.pathname.includes(href) && !isHome
          ? // current route that not home
            'bg-gray-100 font-medium text-emerald-600 dark:bg-neutral-800 dark:text-emerald-500'
          : router.pathname === href && isHome
          ? // current route that home
            'bg-gray-100 font-medium text-emerald-600 dark:bg-neutral-800 dark:text-emerald-500 dark:hover:text-emerald-500'
          : // not current route
            'text-gray-700 hover:bg-gray-100 hover:text-emerald-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-emerald-500'
      )}
      // className={`${
      //   className ? className : ''
      // } flex w-full items-center justify-start gap-2 rounded px-3 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500
      //  ${
      //    router.pathname.includes(href) && !isHome
      //      ? // current route that not home
      //        'bg-gray-100 font-medium text-emerald-600 dark:bg-neutral-800 dark:text-emerald-500'
      //      : router.pathname === href && isHome
      //      ? // current route that home
      //        'bg-gray-100 font-medium text-emerald-600 dark:bg-neutral-800 dark:text-emerald-500 dark:hover:text-emerald-500'
      //      : // not current route
      //        'text-gray-700 hover:bg-gray-100 hover:text-emerald-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-emerald-500'
      //  }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

type Logout = {
  className?: string;
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  [props: string]: any;
};

NavLink.logout = ({ href, icon, className, children, ...props }: Logout) => {
  return (
    <Link
      {...props}
      passHref
      href={href}
      className={clsx(
        className,
        'flex w-full items-center justify-start px-4 py-2 transition-all',
        'gap-3 rounded text-sm hover:bg-red-100 dark:hover:bg-neutral-800',
        'text-red-800 dark:text-red-500 dark:hover:text-red-400'
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};
