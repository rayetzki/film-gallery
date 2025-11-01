import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import cx from "classnames";
import FilmRollIcon from '../public/film-roll.svg';

const Routes = [
	{ link: "/animals", caption: "Animals" },
	{ link: "/people", caption: "People" },
	{ link: "/minimalism", caption: "Minimalism" },
	{ link: "/plants", caption: "Plants" },
	{ link: "/blacknwhite", caption: "Black and White" },
	{ link: "/landscape", caption: "Landscape" }
];

const MobileRoutes = [
	{ link: "/animals", caption: "Animals" },
	{ link: "/people", caption: "People" },
	{ link: "/minimalism", caption: "Minimalism" },
	{ link: "/plants", caption: "Plants" },
	{ link: "/blacknwhite", caption: "Black and White" },
	{ link: "/landscape", caption: "Landscape" },
];

function DesktopNav() {
  const { asPath: currentRoute } = useRouter();

	return (
		<ul role="menu" className={styles.DesktopNav}>
			{Routes.map(route => (
				<li key={route.caption} role="menuitem" className={cx(styles.LinkBlock, {
					[styles.Active]: route.link === currentRoute
				})}>
					<Link href={route.link} className={styles.Link}>
						{route.caption}
					</Link>
				</li>
			))}
		</ul>
	);
}

function MobileNav() {
	const [isMobileMenuExpanded, setMobileMenuExpanded] = useState(false);
	const { asPath: currentRoute } = useRouter();

	useEffect(() => {
		if (isMobileMenuExpanded) {
			setTimeout(() => setMobileMenuExpanded(!isMobileMenuExpanded), 2000);
		}
	}, [currentRoute]);

	const handleOpenMenu = () => {
		setMobileMenuExpanded(!isMobileMenuExpanded);
	}

	return (
		<div className={styles.NavMobileBlock}>
			<Link href="/">
				<span className={styles.NavMobileLogoTitle} aria-label="Logo">
					<FilmRollIcon className={styles.NavMobileLogo} />
					<h2 className={styles.NavMobileTitle}>Film Lobby by I & 0</h2>
				</span>
			</Link>
			<button
				role="navigation"
				onKeyDown={e => e.key === 'Enter' ? handleOpenMenu() : null}
				tabIndex={0} 
				onClick={handleOpenMenu} 
				className={cx(styles.NavMobile, {
					[styles.NavMobileOpening]: isMobileMenuExpanded,
				})}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			{isMobileMenuExpanded && (
				<menu className={styles.NavMobileExpanded} onKeyDown={e => e.key === 'Escape' && setMobileMenuExpanded(false)}>
					{MobileRoutes.map(route => (
						<span key={route.caption} aria-current={route.link === currentRoute} role="menuitem" className={cx({
							[styles.NavMobileActive]: route.link === currentRoute
						})}>
							<Link href={route.link || '/'} className={styles.Link}>
								{route.caption}
							</Link>
						</span>
					))}
				</menu>
			)}
		</div>
	)
}

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className={styles.Nav}>
      <MobileNav />
			<DesktopNav />
    </nav>
  );
};
