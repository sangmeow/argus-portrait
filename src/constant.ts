export const defaultConstant = {
  requestContent:
    '다음 이미지를 사회적으로 부적절한 이미지인지 판단해 주세요.\n - 부적절한 이미지인 경우, 그 이유를 "description" 필드에 한국어로 작성하고, 동일한 내용을 "description_english" 필드에 영어로 작성해 주세요.\n - 부적절하지 않은 경우, 두 필드 모두 빈 문자열("")로 설정해 주세요.\n - 이미지의 부적절한 정도를 0~100점 사이의 숫자로 평가하여 "inappropriate_score" 필드에 입력해 주세요.\n \n결과에 대해서 아래 JSON 형식으로만 결과를 반환해 주세요.\n 부가적인 설명이나 문장은 포함하지 말고, 반드시 아래 형식을 지켜 주세요:\n \n{"description": "some string","description_english": "some string in English", "inappropriate_score": 0}',
} as const;
