const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	int count=0;
	int i=library.length;
	for(let i=0;i<l;i++){
		if(library[i].readingStatus===true){
			i++;
		}
	}
	return count;
  // write your code here
};
console.log(count);
// Do not change the code below

alert(numberOfBooksRead());
