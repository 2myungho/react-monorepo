1.root단에 project 생성

2.package.json에 workspace 배열 추가
2-1. workspace 배열에 project name 작성
2-2. root에서 yarn 명령어 입력해서 node_modules애 심볼릭 링크 생성

3 script에 project 추가
3-1. 아래와 같이 사용 가능
yarn desktop start
yarn desktop build

yarn mobile start
yarn mobile build

4 root 프로젝트에 패키지를 설치하려면 `yarn add <패키지> -W`

참고자료:
https://d2.naver.com/helloworld/7553804
https://www.testbank.ai/42b54c4b-2aa7-4bc7-b29b-b7219c700f22
