function cartoonTemplate(data) {

  return `
    <div class="full-profile">
      <button class="back"><i class="fa fa-arrow-left"></i></button>
      <h2>Cartoon Profile</h2>
      <div><img class="profile" src="${data.photo}"></div>
      <div><i class="fa fa-user"></i>${data.characterName}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Cartoon Title: ${data.cartoonName}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Station Name: ${data.Station}</div>
      <hr>
    </div>`;
}

export default cartoonTemplate;