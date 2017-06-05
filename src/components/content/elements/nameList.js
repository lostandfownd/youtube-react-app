import React from 'react';


export default ({data, filterText, addFavourite}) => {
  // Using curli braces on data removes the need of this:
  // * const data = this.props.data;
  // const { data, filterText } = this.props; // Exposed top

  const nameList = data
    .filter(name => {
    // Remove names that not match the current filter text
    return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map(name => {
      return (
        <li 
          key={name.id} 
          className={'baby-' + name.sex}
          onClick={() => addFavourite(name.id)}
        >
          
            {name.name}
        </li>
      );
  });

  // dont console log in return method or it breaks
  // console.log("our data is", data);

  return (
    <div>
      <ul>
        {nameList}
      </ul>
    </div>
  );
}
