import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [totalResult,setTotalResult]=useState(0)

    const handleUpdateBtn=async ()=>{

      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ca3697b502a4799bbe260a0248e20e8&page=${props.page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data=await fetch(url);
      let parsedData= await data.json();

      setArticles(parsedData.articles);
      setTotalResult(parsedData.totalResult);
      setLoading(false);

    }

    useEffect(()=>{
      document.title=`${capitalizeFirst(props.category)} - NewsMonkey`
      handleUpdateBtn();
      // eslint-disable-next-line
    },[])
    
    
    // handleNextBtn=()=>{
    //   if(this.state.page+1 >Math.ceil(this.state.totalResult/props.pageSize)){

    //   }else{
    //   this.handlePrevNextBtn(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ca3697b502a4799bbe260a0248e20e8&page=${this.state.page+1}&pageSize=${props.pageSize}`)
    //   this.setState({page:this.state.page+1})
    //   }
    // }
    // handlePreviousBtn=()=>{
    //   this.handlePrevNextBtn(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ca3697b502a4799bbe260a0248e20e8&page=${this.state.page-1}&pageSize=${props.pageSize}`)
    //   this.setState({page:this.state.page-1})

    // }
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const fetchMoreData = async () => {
      setPage(page+1)
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ca3697b502a4799bbe260a0248e20e8&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true)
      
      let data=await fetch(url);
      let parsedData= await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResult(parsedData.totalResult)

    };

  
    return (
<>
      
        <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirst(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
              </div>


            })}
        </div>
        </div>
        </InfiniteScroll>
        
      
        </>

    );
  
}

News.defaultProps={
  pageSize: 8,
  country: 'in',
  category:'general'

}

News.propTypes={
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string

}

export default News;
