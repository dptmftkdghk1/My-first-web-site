var letter = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
console.log(letter);

//중복을 배제하는 프로그래밍은 좋은 프로그래밍이 된다

var name = 'egoing';
var letter = 'Dear ' + name  + '\
\
apple'; //'\\'=> 에러는 나지 않지만 k8805 => 코드상에서 줄바꿈이 될뿐, 문자상에서 줄바꿈이 되지 않았다

console.log(letter);

var a = '1';

//template literal
letter = `Dear ${name}
go`;
console.log(letter);
