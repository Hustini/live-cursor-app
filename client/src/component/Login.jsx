import {useState} from "react";

export function Login() {
    const [username, setUsername] = useState("");
    return (
        <>
            <h1>Welcome</h1>
            <p>What should you be called</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(username)
                }}
            >
                <input
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => {
                        e.target.value
                    }}
                />
                <input type="submit"/>
            </form>
        </>
    )
}