export const site = {
  name: '이금희',
  role: 'Product Owner',
  title: '이금희 · Product Owner',
  description: '결정한 사람이 곧 실행자가 되게 만드는 PO. 헬스케어와 특허, 두 전문 산업에서 제품을 사업으로 완성해 왔습니다.',
  github: 'https://github.com/lgh0829',
  // 프로필 사진: public/ 폴더에 파일을 넣고 경로를 바꾼다 (정사각형 권장, 440px 이상)
  photo: '/profile.png',
  photoAlt: '초록색 도마뱀 캐릭터 프로필 이미지', // 사진으로 바꾸면 '이금희 프로필 사진'으로 수정
};

// 첫 화면 지표: '경력 서사와 성과 지표' 문서에서 두 출처가 일치한 수치만 사용
export const headline = [
  { value: '33%', label: '미국 MVP 리드타임 단축', note: '6개월 → 4개월' },
  { value: '0%', label: '계약 중도 이탈률', note: '가동률 99% 이상 유지' },
  { value: '66.7%', label: '고객 재도입률', note: '연구 솔루션' },
];

export const lab = [
  {
    title: 'my-atelier',
    tag: 'AI 작업 환경',
    body: '폰이나 노트북에서 채팅으로 요청하면 역할별 AI 에이전트가 기획·구현·이슈 관리를 나눠 처리하는 개인 워크스페이스. 이 사이트도 여기서 만들었습니다.',
  },
  {
    title: '슬랙 운동 기록 봇',
    tag: 'n8n · Claude API · FastAPI',
    body: '슬랙 명령어로 AI 에이전트를 호출하는 구조. 새 봇을 추가할 때 코드 배포 없이 워크플로만 고치도록 설계했습니다.',
  },
  {
    title: '가족 여행 플래너',
    tag: 'FastAPI · PWA',
    body: '가족 몽골 여행의 일정·경비·자료를 한곳에서 관리하는 설치형 웹앱. 실사용자가 있는 작은 제품을 끝까지 만든 사이클.',
  },
  {
    title: 'PM/PO 위키',
    tag: '지식 베이스',
    body: '외부 조언과 실무 경험을 원자 노트 50여 건으로 쌓고, 근거와 함께 꺼내 쓰는 개인 위키.',
  },
];
