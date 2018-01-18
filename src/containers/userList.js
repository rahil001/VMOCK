import React, {Component} from 'react';
import Link from 'link-react';

class UserList extends Component {
    render() {
        let array = this.props.list && this.props.list.items;
        return (
            <div>
                {array && array.map((item) => {
                    return (
                        <ul className="list-group">
                            <Link href={`/users/${item.login}`}>
                                <li className="list-group-item">
                                    <img src={item.avatar_url} className="img-rounded"
                                                                     alt="Cinque Terre" width="100" height="100"/> <span
                                    className="name">{item.login}</span>
                                </li>
                            </Link>
                        </ul>
                    );
                })}
            </div>
        )

    }
}

export default UserList;

