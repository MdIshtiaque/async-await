

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {


  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/', true);

  xhr.onload = () => {
    if (xhr.status === 200) {

      const response = JSON.parse(xhr.responseText);
      let output = '';
      console.log(response);
      response.forEach(element => {
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
    }
  };

  xhr.send();

});
