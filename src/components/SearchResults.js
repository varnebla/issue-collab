import React from "react"
import moment from "moment"

const SearchResults = props => {
  const { results } = props

  const items =
    // Check for truthy and map over items
    results.items && 
    results.items.map(item => {
      return (
        <div key={item.id}>

          {/* Title with hyperlink */}
          <p>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>

          
          <p>
            {/* How long ago created */}
            {moment(item.created_at).fromNow()}

            {/* Labels */}
            {item.labels.map(label => {
              return <span key={label.id} style={{color: label.color}}>{label.name}</span>
              // console.log('label', label)
            })}
          </p>

          {/* First 300 characters of body */}
          <p>
            {item.body.substr(0,300)}...
          </p>

          <br />
        </div>
      )
    })

  return (
    <div className="results">

      {/* Total issues returned */}
      {props.results.items[0] && 
      <h4>
        Total amount: {results.total_count}
      </h4>}

      {/* MAPPED ITEMS */}
      {items}
    </div>
  )
}

export default SearchResults
