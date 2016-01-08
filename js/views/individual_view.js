function cartoonTemplate(data) {

  return `
    <div class="full-profile">
      <button class="back"><i class="fa fa-arrow-left"></i></button>
      <h2>Cartoon Profile</h2>
      <div>
        <img class="profile" src="${data.photo}">
      </div>
      <div>${data.characterName}</div>
      <hr>
      <div>
        Cartoon Title: ${data.cartoonName}
      </div>
      <hr>
      <div>
        Station Name: ${data.Station}
      </div>
      <hr>
    </div>;
    `
}

export default cartoonTemplate;