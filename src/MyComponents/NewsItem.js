import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
        <div>
            <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                        {source}

                    </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>

        </div>
    )

}

export default NewsItem
