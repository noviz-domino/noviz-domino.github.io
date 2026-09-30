# noviz-domino.github.io

**개인 포트폴리오 웹사이트 소스**

[![사이트 열기](https://img.shields.io/badge/noviz--domino.github.io-26d0ce?style=for-the-badge&logo=googlechrome&logoColor=white)](https://noviz-domino.github.io/)

---

## 무엇인가

김민석(Kim Minseok)의 포트폴리오 사이트다. 소개, 기술 스택, 프로젝트, 학력·자격을 한 페이지에 담았다.

**프로젝트 소스 코드는 여기 없다.** 코드와 설계 문서는 별도 저장소에 모아두었다.

| 용도 | 저장소 |
|---|---|
| 프로젝트 소스와 설계 문서 | [noviz-domino/portfolio](https://github.com/noviz-domino/portfolio) |
| 매일의 학습 기록 | [noviz-domino/TIL](https://github.com/noviz-domino/TIL) |
| 이 사이트 | 현재 저장소 |

## 구성

| 섹션 | 내용 |
|---|---|
| 첫 화면 | 한 줄 소개, 연락처, 주요 수치 4개 |
| 원칙 | 프로젝트에 공통으로 적용한 설계 원칙 3가지 |
| 대표 사례 | 문제 → 접근 → 측정 → 기록해둔 실패. 흐름도의 단계를 LLM · 코드 · 사람으로 색 구분 |
| 전체 프로젝트 | 분야 필터가 있는 카드 목록 |
| 기술 | 써본 것과 배우기만 한 것을 구분 |
| 과정 | 멀티캠퍼스 트랙 단위기간과 결과물 |
| 이력 | 학력 · 자격 · 수상 · 병역 |

2026-09-30에 전면 재디자인했다. 이전 디자인은 git 이력(`3502aaf`)에 있다.

## 기술

빌드 도구도 프레임워크도 쓰지 않았다. **`index.html` 단일 파일**에 마크업·스타일·스크립트가 모두 들어 있다.

정적 소개 페이지 하나에 번들러와 의존성 트리를 얹으면, 얻는 것보다 유지 비용이 크다고 판단했다. 파일 하나만 고치면 배포가 끝나고, 몇 달 뒤에 열어도 `npm install`이 깨질 일이 없다.

| 항목 | 내용 |
|---|---|
| 구성 | HTML + CSS + Vanilla JavaScript (단일 파일) |
| 호스팅 | GitHub Pages |
| 배포 | `main` 브랜치에 push하면 자동 반영 |

## 수정하는 법

```bash
git clone https://github.com/noviz-domino/noviz-domino.github.io.git
cd noviz-domino.github.io
```

`index.html`을 편집하고 브라우저로 파일을 직접 열어 확인한다. 서버가 필요 없다.

```bash
git add index.html
git commit -m "수정 내용"
git push
```

push 후 1~2분이면 사이트에 반영된다.

## 파일

| 파일 | 용도 |
|---|---|
| `index.html` | 사이트 전체 |
| `profile.jpg` | 프로필 사진 |
| `og-image.png` | 링크 공유 시 표시되는 미리보기 이미지 |
| `favicon.ico` · `favicon.png` · `apple-touch-icon.png` | 파비콘 |
