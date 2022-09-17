type Props = {
	title: string;
	githubLink?: string;
}

const ProjectTab = (props: Props):JSX.Element => {

	const handleClick = () => {
		// @ts-ignore
		window.open(props.githubLink, '_blank').focus();
	}

	return(
			<div className="project-tab" onClick={handleClick}>
				<h2 className="project-title">{props.title}</h2>
			</div>
	);

}

export default ProjectTab;
