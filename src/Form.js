import './App.css';
import React from 'react';

function Form() {
  return (
    <div>
<form action="./" method="post">
    <label for="name">Имя</label>
    <input type="text" name="name" id="name"/>

    <label for="comment">Комментарий</label>
    <textarea name="comment" id="comment"></textarea>

    <button type="submit">Опубликовать</button>
</form>
    </div>
    
  );
}

export default Form;
