import React, { useState, useEffect } from 'react';

const PostTable = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const handleEdit = (id, field, value) => {
        setPosts(posts.map(post => 
            post.id === id ? { ...post, [field]: value } : post
        ));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>
                            <input
                                type="text"
                                value={post.title}
                                onChange={(e) => handleEdit(post.id, 'title', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={post.body}
                                onChange={(e) => handleEdit(post.id, 'body', e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PostTable;
