import alfy from "alfy";

const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
console.log(123010231023)

const items = alfy
  .inputMatches(data, 'title')
  .map(element => ({
    title: element.title,
    subtitle: element.body,
    arg: element.id
  }));

alfy.output(items);