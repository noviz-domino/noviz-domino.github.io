# noviz-domino.github.io

**개인 포트폴리오 웹사이트 주소입니다. 클릭하셔요.**

[![사이트 열기](https://img.shields.io/badge/noviz--domino.github.io-26d0ce?style=for-the-badge&logo=googlechrome&logoColor=white)](https://noviz-domino.github.io/)

---

## 무엇인가

김민석(Kim Minseok) 제 포트폴리오 사이트입니다. 소개, 기술 스택, 프로젝트, 학력·자격까지 한 번에 보실 수 있습니다.

이 저장소에는 사이트 파일만 있어요. 프로젝트 코드와 설계 문서가 궁금하시면 아래 저장소를 봐 주세요.

| 용도 | 저장소 |
|---|---|
| 프로젝트 소스와 설계 문서 | [noviz-domino/portfolio](https://github.com/noviz-domino/portfolio) |
| 매일의 학습 기록 | [noviz-domino/TIL](https://github.com/noviz-domino/TIL) |
| 이 사이트 | 현재 저장소 |

## 구성

이력서처럼 두 단으로 나눠 봤어요. 왼쪽에는 제 기본 정보가 고정돼 있고, 오른쪽을 스크롤하면서 내용을 보시면 됩니다. 휴대폰에서는 한 단으로 바뀝니다.

| 영역 | 내용 |
|---|---|
| 왼쪽 (고정) | 사진, 이름, 직무, 두 줄 소개, 기본 정보(연락처·생년월일·병역·현재 과정), 목차, PDF 저장 버튼 |
| 소개 | 전공, 지금 듣고 있는 과정, 제가 일하는 방식 |
| 핵심 성과 | 숫자로 확인한 성과 4개 |
| 프로젝트 | 최신순으로, 모두 같은 형식(기간 · 인원 · 상태 · 설명 · 주요 내용 · 기술 · 링크) |
| 그 외 프로젝트 | 기간 · 이름 · 기술 · 링크를 표로 정리 |
| 기술 | 프로젝트에서 직접 써 본 것과 공부만 해 본 것을 나눠서 |
| 학력 · 교육 | 삼성 멀티캠퍼스 트랙(단위기간별 결과물), 대학 |
| 자격 · 수상 | 자격증, 수상, 연락 안내 |

"PDF로 저장" 버튼을 누르면 브라우저 인쇄 창이 뜨고, 한 단짜리 이력서 모양으로 저장돼요.

2026년 9월 30일에 이력서 형태로 새로 꾸몄습니다. 예전 디자인은 git 기록에 남아 있어요 (`3502aaf` 처음 버전, `9d9e250` 사례 중심 버전).

## 기술

빌드 도구나 프레임워크 없이 **`index.html` 파일 하나**로 만들었어요. 화면 구조, 디자인, 동작 코드가 모두 이 파일 안에 들어 있습니다.

소개 페이지 하나에 번들러와 라이브러리를 잔뜩 얹으면 관리할 것만 늘어난다고 생각했어요. 파일 하나만 고치면 바로 배포되고, 몇 달 뒤에 다시 열어도 `npm install`이 깨질 걱정이 없습니다.

| 항목 | 내용 |
|---|---|
| 구성 | HTML + CSS + Vanilla JavaScript (파일 하나) |
| 호스팅 | GitHub Pages |
| 배포 | `main` 브랜치에 push하면 자동으로 반영 |

## 수정하는 법

```bash
git clone https://github.com/noviz-domino/noviz-domino.github.io.git
cd noviz-domino.github.io
```

`index.html`을 고친 다음 브라우저로 파일을 바로 열어서 확인하면 돼요. 서버는 따로 필요 없습니다.

```bash
git add index.html
git commit -m "수정 내용"
git push
```

push하고 1~2분 정도 지나면 사이트에 반영돼요.

## 파일

| 파일 | 용도 |
|---|---|
| `index.html` | 사이트 전체 |
| `profile.jpg` | 프로필 사진 |
| `og-image.png` | 링크를 공유할 때 뜨는 미리보기 이미지 |
| `favicon.ico` · `favicon.png` · `apple-touch-icon.png` | 브라우저 탭 아이콘 |
