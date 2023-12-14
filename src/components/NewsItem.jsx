import image from '../assets/images.jpeg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"300px"}}>
      <img src={src? src: image} style={{height:"220px", width:"279px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description?description.slice(0,90):"Its about something that has happened."}
        </p>
        <a href={url} className="btn btn-primary">
         Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
