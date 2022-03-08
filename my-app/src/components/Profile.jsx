import style from'./Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>)
}

export default Profile