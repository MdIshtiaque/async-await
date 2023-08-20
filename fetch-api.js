const btnText = document.getElementById('btn-text');
const btnJson = document.getElementById('btn-json');
const btnApi = document.getElementById('btn-api');
const output = document.getElementById('content');


/**fetch From text file */
btnText.addEventListener('click', () => {
  fetch('doc.txt')
  .then((res) => {
      return res.text();
  }).then((data) => {
      output.innerHTML = data;
  }).catch((err) => {
      console.log(err);
  })
});


/**fetch from json file */
btnJson.addEventListener('click', () => {
  fetch('posts.json')
  .then((res) => {
      return res.json();
  }).then((data) => {
      let output = '';
      data.forEach(element => {
        output += `
          <ul>
            <li><strong>userId</strong> : ${element.userId}</li>
            <li><strong>ID</strong> : ${element.id}</li>
            <li><strong>title</strong> : ${element.title}</li>
            <li><strong>body</strong> : ${element.body}</li>
          </ul>
          <hr>
        `;
      });
      document.getElementById('content').innerHTML = output;
  }).catch((err) => {
      console.log(err);
  })
});

/*** fetch from API */
btnApi.addEventListener('click', () => {
  getData()
  .then((res) => {
      return res;
  }).then((data) => {
      let output = '';
      data.forEach(element => {
        output += `
          <ul>
            <li><strong>userId</strong> : ${element.userId}</li>
            <li><strong>ID</strong> : ${element.id}</li>
            <li><strong>title</strong> : ${element.title}</li>
            <li><strong>Completed</strong> : ${element.completed}</li>
          </ul>
          <hr>
        `;
      });
      document.getElementById('content').innerHTML = output;
  }).catch((err) => {
      console.log(err);
  })
});





/** async & await */

async function test() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello Async & Await"),2000);
  });

  const error = false;

  if(!error) {
    const res = await promise;
    return res;
  }
}

test().then((res) => {
  console.log(res);
});


/** fetch using async & await */
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    return data;
}

getData().then((datas) => {
  console.log(datas);
})
