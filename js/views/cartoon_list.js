function processData(data) {
  return data.map(function(item) {
    return `
      <div class="cartoon-list-item" data-cartoon-id="${item.objectId}">
      <img src="${item.photo}">
    
      <p>${item.characterName}</p>
      <hr>
      </div>
      `;
  }).join('');
}

function listTemplate(data) {
  return `
    <h2>Cartoon List</h2>
    <div>${processData(data)}</div>
  `;
}

export default listTemplate;