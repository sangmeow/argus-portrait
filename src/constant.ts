export const prompt = `
  다음 이미지를 사회적으로 부적절한 이미지인지 엄격하게 판단하라. 

  판단 기준 (하나라도 해당되면 부적절로 간주):
  - 폭력적·잔혹한 장면 (피, 시체, 자해, 학대 등)
  - 성적 노골성 또는 음란물 (나체, 성행위, 성기 노출 등)
  - 아동 학대, 아동 성적 착취 관련 내용
  - 혐오 표현 및 차별적 묘사 (인종, 성별, 종교, 성적 지향 등)
  - 불법 행위 및 범죄 행위 (마약, 무기, 테러 등)
  - 기타 사회적 통념상 부적절하거나 불쾌감을 줄 수 있는 요소

  출력 규칙:
  - 반드시 JSON 형식만 출력해야 하며, JSON 외의 설명/문장/주석은 절대 포함하지 말 것
  - JSON은 아래 스키마를 100% 준수해야 함
  - 부적절한 경우:
    - "description": 부적절한 이유를 한국어로 작성
    - "description_english": 동일한 의미를 영어로 작성
  - 부적절하지 않은 경우:
    - "description": ""
    - "description_english": ""
  - "inappropriate_score": 0~100 숫자
    - 0 = 전혀 부적절하지 않음
    - 100 = 극도로 부적절함
    - 의심스러운 경우 최소 20 이상 부여

  JSON Schema:
  {
    "type": "object",
    "properties": {
      "description": { "type": "string" },
      "description_english": { "type": "string" },
      "inappropriate_score": { "type": "integer", "minimum": 0, "maximum": 100 }
    },
    "required": ["description", "description_english", "inappropriate_score"],
    "additionalProperties": false
  }

  출력 예시:
  {
    "description": "some string",
    "description_english": "some string in English",
    "inappropriate_score": 0
  }
  `;
