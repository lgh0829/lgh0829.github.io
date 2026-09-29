# lgh0829.github.io

이금희(Product Owner)의 포트폴리오 사이트. Astro 정적 사이트이며 `master`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages로 배포한다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```

## 구조

| 경로 | 내용 |
|---|---|
| `src/data/stats.ts` | 역량 육각형 6축의 레벨·근거·관련 사례 |
| `src/data/site.ts` | 이름, 첫 화면 지표, Lab 카드 |
| `src/pages/work/*.md` | 사례 상세. 새 사례는 파일 하나를 추가하면 홈 목록에 자동으로 나온다 |
| `src/components/Hexagon.astro` | 역량 육각형(SVG)과 근거 패널 |
| `archive/` | 이전 Jekyll 블로그에서 보관한 글 (빌드 제외) |

## 역량 점수 산정

자기 평가 점수가 아니라, 검증된 근거가 있는 가장 높은 단계를 레벨로 매긴다.

| 레벨 | 기준 |
|---|---|
| Lv1 학습 | 교육·자격으로 지식 보유 |
| Lv2 참여 | 팀원으로 수행한 경험 |
| Lv3 주도 | 본인이 오너로 1건 이상 완수 |
| Lv4 입증 | 주도한 일에 검증된 지표가 있음 |
| Lv5 재현·확산 | 다른 제품·조직에서 반복 입증했거나 조직에 확산 |

수치는 두 개 이상의 출처가 일치하는 값만 쓴다. 근거가 새로 생기면 `src/data/stats.ts`의 `level`과 `evidence`를 수정한다.
