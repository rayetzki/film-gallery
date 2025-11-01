import Head from "next/head";
import Image from "next/image";
import Link  from 'next/link';
import cx from 'classnames';
import styles from '../layout/Home.module.css';
import InstagramIcon from '../public/instagram.svg';
import FilmRollIcon from '../public/film-roll.svg';
import UpwardsIcon from '../public/upwards.svg';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Film Lobby by I & O</title>
        <meta name="description" content="Film Lobby by I & O" />
      </Head>
		<nav className={styles.Navigation}>
			<Link className={styles.Link} href='/'>
				<span className={styles.TitleLogo}>
					<FilmRollIcon className={styles.Logo} />
					<h1 className={styles.Title}>Film Lobby by I & 0</h1>
				</span>
			</Link>
			<div className={styles.NavLinks}>
				<Link href='/animals' aria-label="Gallery" className={styles.NavLink}>
					<p className={styles.NavLinkText}>To Gallery</p>
					<UpwardsIcon className={styles.NavLinkIcon} />
				</Link>
				<Link href='/travel' aria-label="Trips" className={styles.NavLink}>
					<p className={styles.NavLinkText}>Trips</p>
					<UpwardsIcon className={styles.NavLinkIcon} />
				</Link>
			</div>
		</nav>
		<div className={styles.Authors}>
			<h2 className={styles.AuthorsTitle}>Who are we?</h2>
			<section className={styles.AuthorsGrid}>
				<article className={styles.Author}>
					<Image
						src='/i.jpg'
						alt="Illia"
						priority
						width={940}
						height={600}
						layout="responsive"
					/>
					<div className={styles.AuthorFooter}>
						<Link href='https://instagram.com/kit_horoshko' target="_blank" rel="noopener noreferrer" className={cx(styles.Link, styles.AuthorLink)}>
							<InstagramIcon className={styles.InstagramIcon} />
							<p>@kit_horoshko</p>
						</Link>
						<p className={styles.AuthorName}>Illia</p>
					</div>
				</article>
				<article className={styles.Author}>
					<Image
						src='/o.jpg'
						alt='Helena'
						priority
						width={940}
						height={600}
						layout="responsive"
					/>
					<div className={styles.AuthorFooter}>
						<Link href='https://www.instagram.com/kurai_m' target="_blank" rel="noopener noreferrer" className={cx(styles.Link, styles.AuthorLink)}>
							<InstagramIcon className={styles.InstagramIcon} />
							<p>@kurai_m</p>
						</Link>
						<p className={styles.AuthorName}>Helena</p>
					</div>
				</article>
			</section>
		</div>
    </main>
  );
}
