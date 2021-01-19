

// 태어난 년도를 입력받아서 현재 나이를 돌려주는 함수 생성
function func_currentAge(birthYear) {
	
	//자바스크립트에서 현재 날짜 시각을 알려주는 것이다.
	var now = new Date();
	var currentYear = now.getFullYear();	
	
	return currentYear - birthYear + 1;
}