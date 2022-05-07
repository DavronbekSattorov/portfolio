import { useState } from 'react'
import { projects } from '../data'
import github from '../img/github.png'

const Projects = () => {
    console.log(projects)

    const [projectList, setProjectList] = useState([
        projects[0],
        projects[1],
        projects[2],
        projects[3],
    ]);

    const [load, setLoad] = useState(false);

    const handleOnClick = (e) => {
        console.log(e.target.outerText)
        if(e.target.outerText === 'Recent projects') {
            const filter = projects.filter(el => el.type === 'new');
            filter.length > 4 ? setLoad(true) : setLoad(false);
            setProjectList(filter)
            
        } else if(e.target.outerText === 'Previous projects') {
            const filter = projects.filter(el => el.type === 'old');
            filter.length > 4 ? setLoad(true) : setLoad(false);
            setProjectList(filter)
        } else {
            projects.length > 4 ? setLoad(true) : setLoad(false);
            setProjectList(projects)
        }

        
    }

    const handleLoad = () => {
        let arr = [];
        let looplength = load ? 4 : projects.length;
        for(let i = 0; i < looplength; i++) {
            arr.push(projects[i])
        }

        setProjectList(arr);
        setLoad(!load);
    }
    console.log(projectList);
    

    return(
        <div className="projects">
            <div className="section-title">
                <h1>Projects</h1>
            </div>

            <div className='project'>
                <div className='projects-title'>
                    <button onClick={e => handleOnClick(e)}>All projects</button>
                    <button onClick={e => handleOnClick(e)}>Recent projects</button>
                    <button onClick={e => handleOnClick(e)}>Previous projects</button>
                </div>

                <div className='project-single-wrapper'>
                    {
                        projectList.map(el => {
                            return(
                                <div className='project-single'>
                                    <p className='project-single-name'>{el.name}</p>
                                    <p className='project-single-desc'>{el.desc}</p>
                                    <div className='project-single-lang'>
                                        {
                                            el.lang.map(el => {
                                                return(
                                                    <p>{el}</p>
                                                )
                                            })
                                        }
                                    </div>
                                    <a href={el.link} target='_blank'>Demo</a>
                                    <a href={el.githubLink}target='_blank'>Source</a>
                                    
                                </div>
                            )
                        })
                    }

                    

                </div>
                    <button onClick={handleLoad} className='project-load'>Load {load ? 'less' : 'more'}</button>
            </div>
        </div>
    )
}

export default Projects;