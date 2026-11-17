# 김민석 포트폴리오 사이트

[사이트](https://noviz-domino.github.io/) · [프로젝트 기록](https://github.com/noviz-domino/portfolio)

아이보리 배경과 녹색 포인트, 소개 카드와 프로젝트 카드로 구성한 정적 포트폴리오입니다. 소개 바로 아래에 캡아메리카뱅크 → Kick the Tires → 금융 문서 RAG를 배치해 구현·업무 설계·평가 역량을 먼저 보여 줍니다. ReplyGate는 보조 사례로 옮겼습니다.

## 파일과 실행

- `index.html`: 콘텐츠와 의미 구조. JavaScript 없이 탐색·사례 펼치기 가능.
- `styles.css`: 반응형 레이아웃, 키보드 포커스, 인쇄 스타일.
- `profile.png`: 기존 토스 지원 이력서에 사용한 사진.
- `profile.jpg`: 이전 사진 보관본.
- `og-image.png`: 링크 공유 이미지.
- `assets/projects/`: 실제 구현 화면 2개와 금융 RAG 설계 흐름도. [이미지 출처](assets/projects/README.md).

Git Bash에서 `python -m http.server 8766 --bind 127.0.0.1` 실행 후 `http://127.0.0.1:8766`을 엽니다. 빌드나 패키지 설치는 필요 없습니다. GitHub Pages 기존 배포 방식을 유지합니다.

## 디자인 참고와 출처

- [Brittany Chiang](https://brittanychiang.com/) / [v4 저장소](https://github.com/bchiang7/v4): 프로젝트별 맥락·기술·링크의 정보 구조 참고. v4는 MIT 및 출처 표기 요청이 있으며, 이번 구현에는 코드·에셋을 복사하지 않았습니다.
- [Lee Robinson](https://leerob.com/) / [블로그 템플릿](https://github.com/leerob/next-mdx-blog): 짧은 소개와 읽기 쉬운 텍스트 위계 참고. 코드·에셋 재사용 없음.

CSS와 처리 흐름 도식은 직접 작성했습니다. 외부 UI 라이브러리·아이콘·폰트 다운로드는 없으며 시스템 글꼴을 사용합니다. 사진은 사용자 소유 기존 자료입니다.

## 콘텐츠 관리

공개 페이지에는 공개 가능한 프로젝트 요약만 담습니다. 전화번호·생년월일·비공개 제출 PDF는 포함하지 않습니다. KIC는 참가 사실과 주제만 공개하고 상세 자료는 비공개로 유지합니다. 수치는 평가 조건과 한계를 함께 적습니다.

최종 콘텐츠 검토: 2026-11-16.
