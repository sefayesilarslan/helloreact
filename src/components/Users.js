import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    // useEffect(()=>{},[]); Mount anını yakalamak için kullanıyoruz ilk parametre fonksşyon ikinci parametre boş bir array
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            //   try {
            //     const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
            //     const users = usersResponse.data;
            //     setUsers(users);

            //     if (users.length > 0) {
            //       const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`).then((res)=>setPosts(res.data));
            //       console.log(postsResponse.data);
            //     }
            //   } catch (error) {
            //     console.error("Error fetching data:", error);
            //   } finally {
            //     setLoading(false);
            //   }
            getData();
        };

        fetchData();
    }, []);

    const getData = async () => {
        try {
            const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
            const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
            setLoading(false);
            setUsers(users);
            setPosts(posts);
        } catch (error) {
            console.log("error",error);
        }

    }

    return <div><h2>Users</h2>

        <ul>
            {
                loading && <div>Yükleniyor....</div>
            }
            {
                users.map((user) => (<li key={user.id}>{user.name}</li>))
            }
        </ul>

        <h2>Post</h2>
        <ul>
            {
                loading && <div>Yükleniyor....</div>
            }
            {
                posts.map((post) => (<li key={post.id}>{post.title}</li>))
            }
        </ul>
    </div>
}

export default Users;