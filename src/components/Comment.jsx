
import Link from "next/link";

export default function Comment({ comments = [] }) {

    return (
      <>
        <h2 className="mt-10 mb-4 text-4xl leading-tight lg:text-6xl">
          Comments:
        </h2>
        <ul>
          {comments?.map(({ _id, _createdAt, name, email, comment }) => (
            <li key={_id} className="mb-5">
              <hr className="mb-5" />
              <h4 className="mb-2 leading-tight">
                <Link href={`mailto:${email}`}>{name}</Link> ({_createdAt} )
                {/* <Date dateString={_createdAt} />) */}
              </h4>
              <p>{comment}</p>
              <hr className="mt-5 mb-5" />
            </li>
          ))}
        </ul>
      </>
    )
  }