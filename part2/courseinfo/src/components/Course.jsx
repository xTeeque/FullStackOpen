
const Course = ({course}) => {
    const Header = ({name}) => (<h2>{name}</h2>)
    
    const Part =  ({part}) => (<p>{part.name} {part.exercises}</p>)
    
    const Content = ({parts}) => {
        return (
            <div>
                {parts.map(part =>
                    <div key={part.id}>
                        <Part part={part} />
                    </div>
                )}
            </div>
        )
    }
    
    const Stats = ({parts}) => (<h3>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h3>)

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Stats parts={course.parts} />
        </div>
    )
}

export default Course