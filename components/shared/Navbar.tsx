import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey flex items-center bg-white">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/">Mimosa.</Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex gap-5 justify-end">
            <li>
              <Link href="/">Link 4</Link>
            </li>
            <li>
              <Link href="/">Link 5</Link>
            </li>
            <li>
              <Link href="/user/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
