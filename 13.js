const planets = [
	"수성",
	"금성",
	"지구",
	"화성",
	"목성",
	"토성",
	"천왕성",
	"해왕성"
	dd
];

const n = prompt("몇번째 행성을 원하시나요?"); //prompt 출력함수

console.log(planets[n-1]); // 배열의 첫번째는 0부터 시작하기 때문에 n값에 -1을 준다
