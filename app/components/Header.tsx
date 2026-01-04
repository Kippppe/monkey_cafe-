import Link from "next/link";

export default function Header(){
    return (
        <header>
            <nav>
                <h1>Monkey Cafe</h1>
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/menu">menu</Link></li>
                    <li><Link href="/news">news</Link></li>
                </ul>
            </nav>
        </header>
    );
}