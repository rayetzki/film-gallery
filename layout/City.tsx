import { useState } from "react";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";
import { type City } from "../types";
import cx from 'classnames';
import css from "./City.module.css";

export function City({
	city,
	short,
	date,
	id,
	description,
	images
}: City) {
	const [isExpanded, setExpanded] = useState(false);
	
	return (
		<li id={`#${id}`} key={city} className={css.Stepper__Item}>
			<div className={css.Stepper__Content}>
				<h2 className={css.Stepper__Title}>{city}</h2>
				<h3 className={css.Stepper__Short}>{short}</h3>
				<p title="Expand description" 
					onClick={() => setExpanded(!isExpanded)} 	
					className={cx(css.Stepper__Description, {
						[css.Stepper__Description_Expanded]: isExpanded
					})}>
					{description}
				</p>
				<div className={css.Stepper__Images}>
					{images?.slice(0, 6).map((image, index) => (
						<Item 
							key={image.secure_url}
							alt={`Image №${index} from ${city}`}
							width={image.width} 
							height={image.height} 
							original={image.secure_url}>
							{({ open, ref }) => (
								<div 
									onClick={open} 
									ref={ref}>
									<Image
										className={css.Stepper__Image}
										src={image.secure_url}
										loading="lazy"
										width={350}
										height={350}
										onContextMenu={e => e.preventDefault()}
										alt={`Image №${index} from ${city}`}
									/>
								</div>
							)}
						</Item>
					))}
				</div>
			</div>
			<time className={css.Stepper__Time}>{date}</time>
		</li>
	);
}