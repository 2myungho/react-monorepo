## Yarn Workspaces 설정

1. **루트 프로젝트 생성**

   - 루트 디렉토리를 생성합니다.

2. **`package.json`에 workspace 배열 추가**

   - workspace 배열에 프로젝트 이름을 추가합니다.
   - 폴더를 만들 경우 "workspaces": ["packages/*"] 이런 형태
   - 루트에서 `yarn` 명령어를 실행하여 `node_modules`에 심볼릭 링크를 생성합니다.

3. **`script`에 프로젝트 추가**

   - 다음과 같은 명령어로 사용이 가능합니다:
     - `yarn desktop start`
     - `yarn desktop build`
     - `yarn mobile start`
     - `yarn mobile build`

4. **루트 프로젝트에 패키지 설치**

   - 패키지를 설치하려면 다음 명령어를 사용합니다: `yarn add <패키지> -W`

5. **Common 프로젝트 의존성 추가**

- `yarn workspace <projectName> add common@<version>`
- Common 프로젝트에서 스타일 및 공통 코드 작성 예정

## 참고자료:

- [Naver Helloworld Article](https://d2.naver.com/helloworld/7553804)
- [Testbank AI Article](https://www.testbank.ai/42b54c4b-2aa7-4bc7-b29b-b7219c700f22)
