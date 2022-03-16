
function Title(props){
    const Tag = props.tag
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: green;
                }
            `}
            </style>
        </>
    )
}


function HomePage() {
    return (
            <div>
                <Title tag="h2">Bem-vindo de volta!</Title>
                <h2>Alura matrix</h2>
            </div>
        )
        }
  
  export default HomePage