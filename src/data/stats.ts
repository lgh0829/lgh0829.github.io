// 역량 육각형 데이터. 점수 산정 규칙은 README의 "역량 점수 산정" 참고.
// 레벨은 검증된 근거가 있는 가장 높은 단계로 매긴다. 근거가 생기면 이 파일만 수정한다.

export const levels = [
  { lv: 1, name: '학습', rule: '교육·자격으로 지식 보유' },
  { lv: 2, name: '참여', rule: '팀원으로 수행한 경험' },
  { lv: 3, name: '주도', rule: '본인이 오너로 1건 이상 완수' },
  { lv: 4, name: '입증', rule: '주도한 일에 검증된 지표가 있음' },
  { lv: 5, name: '재현·확산', rule: '다른 제품·조직에서 반복 입증했거나 조직에 확산' },
] as const;

export type Stat = {
  key: string;
  label: string;
  summary: string;
  level: number;
  evidence: string[];
  next: string;
  cases: string[]; // src/pages/work/<slug>.md
};

export const stats: Stat[] = [
  {
    key: 'discovery',
    label: '문제 발견',
    summary: '고객과 현장에서 문제를 찾아 범위를 좁힌다.',
    level: 4,
    evidence: [
      '다기관 연구팀마다 다른 데이터 파이프라인을 연구별로 설계·제안',
      '연구책임자와 실무자로 온보딩을 이원화해 고객 재도입률 66.7%',
      '특허 AI 서비스에서 변리사 VoC로 기능 범위와 우선순위 결정',
    ],
    next: '문제 정의에서 지표 개선까지 이어진 사례를 한 건 더 입증하면 Lv5',
    cases: ['research-ops'],
  },
  {
    key: 'business',
    label: '사업 설계',
    summary: '가격·패키징·결제로 제품을 사업이 되게 만든다.',
    level: 4,
    evidence: [
      '기존 제품을 SaaS 모듈형 구조로 재편하고 약관·결제·온보딩·권한 체계 재정의',
      '전자결제 도입으로 수동 운영 업무 0.1M/M 제거',
      '지원사업 연계로 특허 AI 서비스 첫 유료 사용자 50명',
    ],
    next: '패키징 모듈의 수주 성과 근거를 확정하면 보강',
    cases: [],
  },
  {
    key: 'delivery',
    label: '실행·전달',
    summary: '범위와 우선순위를 다시 설계해 출시까지 끌고 간다.',
    level: 4,
    evidence: [
      '미국 Cloud PACS MVP 리드타임 6개월 → 4개월 (33% 단축)',
      '요구사항 71.6% 구현, 데모 기간 고객 리드 8건',
      '출시 후 전환율 37.5%',
    ],
    next: '현 직장에서 출시 지표를 확보하면 Lv5',
    cases: ['us-mvp'],
  },
  {
    key: 'operations',
    label: '운영·수익성',
    summary: '적은 자원으로 제품을 멈추지 않고 굴린다.',
    level: 4,
    evidence: [
      '평균 0.3M/M 개발 투입으로 계약 중도 이탈률 0%',
      '서비스 가동률 99% 이상',
      '운영 투입 인력 2M/M → 0.5M/M (75% 절감)',
    ],
    next: '다른 제품에서 같은 운영 모델을 재현하면 Lv5',
    cases: ['research-ops'],
  },
  {
    key: 'ax',
    label: 'AI·AX',
    summary: 'AI로 일하는 방식 자체를 바꾼다.',
    level: 4,
    evidence: [
      '기획 스펙을 문서가 아닌 AI가 실행하는 프롬프트·스킬로 전환',
      'AI 화면생성 파이프라인 사내 실증 후 세미나로 확산',
      '2025 K-디지털 트레이닝 해커톤 고용노동부 장관상',
    ],
    next: '파이프라인 효과를 충분한 기간 재측정하면 Lv5',
    cases: ['ax-pipeline'],
  },
  {
    key: 'alignment',
    label: '설득·협업',
    summary: '의사결정권자·고객·개발자를 같은 방향으로 움직인다.',
    level: 3,
    evidence: [
      '국내 운영 성과를 근거로 의사결정권자를 설득해 MVP 기획 주도권 확보',
      '연구 솔루션 제안·계약 약 5건 담당 (건당 최소 3개 기관)',
    ],
    next: '설득의 결과를 보여주는 기록(계약·피드백)을 확보하면 Lv4',
    cases: ['us-mvp'],
  },
];
