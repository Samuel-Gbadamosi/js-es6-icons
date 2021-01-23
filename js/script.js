$(document).ready(function() {
  const icons = [{
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
  ];

  const colors = [
    'blue',
    'orange',
    'purple'
  ];

  // const types = [
  //   'animal',
  //   'vegetables',
  //   'user'
  // ];
  // const types = [];
  // icons.forEach((element) => {
  //   if(types.includes(element.type)==false){
  //     types.push(element.type)
  //   }

  const types = getTypes(icons);
  console.log(types);

  const iconsColor = icons.map((element) => {
    const indexType = types.indexOf(element.type);
    console.log(indexType);

    return {
      ...element,
      color: colors[indexType]
    }
  });
  console.log(iconsColor);


  const container = $('.icons');

 stampIcons(iconsColor,container);

 const select = $('#type');
printOption(types,select);
});

function printOption(array,select){

  array.forEach((element) =>{
    select.append(`
  <option value="${element}">${element}</option>
      `);
  });

}



function stampIcons(array,container){
  array.forEach((element) => {

    const {name,family,prefix,type,color} = element;

    container.append(`

      <div class="icon">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <div class="title">${name}</div>
      </div>
      `);

  });


}

function getTypes(array) {
  const types = [];
  array.forEach((element) => {
      if (types.includes(element.type) == false) {
        types.push(element.type)
      }
    });

      return types;
}
