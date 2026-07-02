const STORAGE_KEY = "kanji-quiz-state-v1";

const modeSelect = document.querySelector("#modeSelect");
const rangeStartInput = document.querySelector("#rangeStartInput");
const rangeEndInput = document.querySelector("#rangeEndInput");
const rangeApplyButton = document.querySelector("#rangeApplyButton");
const wrongOnlyButton = document.querySelector("#wrongOnlyButton");
const progressText = document.querySelector("#progressText");
const currentNumberText = document.querySelector("#currentNumberText");
const rangeText = document.querySelector("#rangeText");
const wrongText = document.querySelector("#wrongText");
const questionLabel = document.querySelector("#questionLabel");
const questionText = document.querySelector("#questionText");
const choices = document.querySelector("#choices");
const typedAnswerForm = document.querySelector("#typedAnswerForm");
const typedAnswerInput = document.querySelector("#typedAnswerInput");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const resetButton = document.querySelector("#resetButton");
const openWordStudyButton = document.querySelector("#openWordStudyButton");
const backToKanjiButton = document.querySelector("#backToKanjiButton");
const kanjiStudy = document.querySelector("#kanjiStudy");
const wordStudy = document.querySelector("#wordStudy");
const wordRangeStartInput = document.querySelector("#wordRangeStartInput");
const wordRangeEndInput = document.querySelector("#wordRangeEndInput");
const wordRangeApplyButton = document.querySelector("#wordRangeApplyButton");
const wordSearchInput = document.querySelector("#wordSearchInput");
const wordSummaryText = document.querySelector("#wordSummaryText");
const wordRangeText = document.querySelector("#wordRangeText");
const wordCardNumber = document.querySelector("#wordCardNumber");
const wordCardWord = document.querySelector("#wordCardWord");
const wordCardKanji = document.querySelector("#wordCardKanji");
const wordCardMeaning = document.querySelector("#wordCardMeaning");
const wordEmptyState = document.querySelector("#wordEmptyState");
const prevWordButton = document.querySelector("#prevWordButton");
const nextWordButton = document.querySelector("#nextWordButton");
const reviewPanel = document.querySelector("#reviewPanel");
const reviewOverlay = document.querySelector("#reviewOverlay");
const closeReviewButton = document.querySelector("#closeReviewButton");
const reviewProgressText = document.querySelector("#reviewProgressText");
const reviewNumberText = document.querySelector("#reviewNumberText");
const reviewQuestionLabel = document.querySelector("#reviewQuestionLabel");
const reviewQuestionText = document.querySelector("#reviewQuestionText");
const reviewChoices = document.querySelector("#reviewChoices");
const reviewFeedback = document.querySelector("#reviewFeedback");
const reviewNextButton = document.querySelector("#reviewNextButton");

let state = loadState();
let currentQuestion = null;
let answered = false;
let roundItems = [];
let roundIndex = 0;
let isFinished = false;
let reviewItems = [];
let reviewIndex = 0;
let reviewQuestion = null;
let reviewAnswered = false;
let isReviewFinished = false;
let wordRangeStart = 1;
let wordRangeEnd = typeof WORD_DATA !== "undefined" ? WORD_DATA.length : 1;
let wordItems = [];
let wordIndex = 0;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultState();
  }

  return normalizeState(JSON.parse(saved));
}

function defaultState() {
  return {
    correct: 0,
    total: 0,
    wrongOnly: false,
    wrongNumbers: [],
    rangeStart: 1,
    rangeEnd: Math.max(allItems().length, 1)
  };
}

function normalizeState(savedState) {
  const nextState = { ...defaultState(), ...savedState };

  if (!Array.isArray(nextState.wrongNumbers)) {
    nextState.wrongNumbers = [];
  }

  if (Array.isArray(savedState.wrongKanji)) {
    const oldWrongSet = new Set(savedState.wrongKanji);
    const migratedNumbers = allItems()
      .filter((item) => oldWrongSet.has(item.kanji))
      .map((item) => item.number);
    nextState.wrongNumbers = [...new Set([...nextState.wrongNumbers, ...migratedNumbers])];
    delete nextState.wrongKanji;
  }

  const maxNumber = Math.max(allItems().length, 1);
  nextState.rangeStart = clampNumber(nextState.rangeStart, 1, maxNumber);
  nextState.rangeEnd = clampNumber(nextState.rangeEnd, 1, maxNumber);

  return nextState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allItems() {
  return KANJI_DATA.flatMap((lesson) => lesson.items).map((item, index) => ({
    ...item,
    number: index + 1
  }));
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return min;
  }

  return Math.min(Math.max(Math.trunc(number), min), max);
}

function selectedItems() {
  const start = Math.min(state.rangeStart, state.rangeEnd);
  const end = Math.max(state.rangeStart, state.rangeEnd);
  return allItems().filter((item) => item.number >= start && item.number <= end);
}

function currentRangeWrongItems() {
  const wrongSet = new Set(state.wrongNumbers);
  return selectedItems().filter((item) => wrongSet.has(item.number));
}

function currentPool() {
  return selectedItems();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pickQuestion() {
  if (roundIndex >= roundItems.length) {
    return null;
  }

  const answer = roundItems[roundIndex];
  return createQuestion(answer);
}

function createQuestion(answer, mode = modeSelect.value) {
  const distractors = shuffle(allItems().filter((item) => item.kanji !== answer.kanji)).slice(0, 3);
  const options = shuffle([answer, ...distractors]);

  return { answer, options, mode };
}

function renderQuestion() {
  currentQuestion = pickQuestion();
  if (!currentQuestion) {
    renderFinished();
    return;
  }

  answered = false;
  feedback.textContent = "";
  feedback.className = "feedback";

  renderQuestionContent(currentQuestion, questionLabel, questionText, choices, chooseAnswer);
  renderTypedAnswer();

  renderStats();
}

function renderQuestionContent(question, labelElement, textElement, choicesElement, onChoose) {
  const isKanjiQuestion = question.mode === "kanjiToAnswer" || question.mode === "kanjiToInput";
  labelElement.textContent =
    question.mode === "kanjiToInput"
      ? "이 한자의 뜻음을 직접 쓰세요"
      : isKanjiQuestion
        ? "이 한자의 뜻음은?"
        : "이 뜻음에 맞는 한자는?";
  textElement.textContent = isKanjiQuestion ? question.answer.kanji : question.answer.answer;

  choicesElement.innerHTML = "";
  if (question.mode === "kanjiToInput") {
    return;
  }

  question.options.forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = isKanjiQuestion ? item.answer : item.kanji;
    button.addEventListener("click", () => onChoose(button, item));
    choicesElement.appendChild(button);
  });
}

function renderTypedAnswer() {
  const isInputMode = currentQuestion?.mode === "kanjiToInput";
  typedAnswerForm.hidden = !isInputMode;

  if (!isInputMode) {
    typedAnswerInput.value = "";
    return;
  }

  typedAnswerInput.value = "";
  typedAnswerInput.disabled = false;
  typedAnswerForm.querySelector("button").disabled = false;
  typedAnswerInput.focus();
}

function markChoiceResult(question, choicesElement, selectedButton, isCorrect) {
  [...choicesElement.children].forEach((choiceButton) => {
    const choiceText = choiceButton.textContent;
    const correctText = question.mode === "kanjiToAnswer" ? question.answer.answer : question.answer.kanji;

    if (choiceText === correctText) {
      choiceButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }
}

function chooseAnswer(button, selected) {
  if (answered) {
    return;
  }

  answered = true;
  roundIndex += 1;
  state.total += 1;
  const isCorrect = selected.number === currentQuestion.answer.number;

  if (isCorrect) {
    state.correct += 1;
    state.wrongNumbers = state.wrongNumbers.filter((number) => number !== selected.number);
    feedback.textContent = "정답!";
    feedback.classList.add("good");
  } else {
    if (!state.wrongNumbers.includes(currentQuestion.answer.number)) {
      state.wrongNumbers.push(currentQuestion.answer.number);
    }
    feedback.textContent = `오답. 정답은 ${currentQuestion.answer.kanji} / ${currentQuestion.answer.answer}`;
    feedback.classList.add("bad");
  }

  markChoiceResult(currentQuestion, choices, button, isCorrect);

  if (roundIndex >= roundItems.length) {
    nextButton.textContent = "결과 보기";
  }

  saveState();
  renderStats();
}

function normalizeAnswer(value) {
  return value.replace(/[,\s]/g, "").trim();
}

function answerCandidates(answer) {
  return answer
    .split(",")
    .map((part) => normalizeAnswer(part))
    .filter(Boolean);
}

function submitTypedAnswer(event) {
  event.preventDefault();
  if (answered || currentQuestion?.mode !== "kanjiToInput") {
    return;
  }

  const userAnswer = normalizeAnswer(typedAnswerInput.value);
  if (!userAnswer) {
    feedback.textContent = "답을 입력해주세요.";
    feedback.className = "feedback bad";
    typedAnswerInput.focus();
    return;
  }

  answered = true;
  roundIndex += 1;
  state.total += 1;

  const candidates = answerCandidates(currentQuestion.answer.answer);
  const isCorrect = candidates.includes(userAnswer);

  if (isCorrect) {
    state.correct += 1;
    state.wrongNumbers = state.wrongNumbers.filter((number) => number !== currentQuestion.answer.number);
    feedback.textContent = "정답!";
    feedback.className = "feedback good";
  } else {
    if (!state.wrongNumbers.includes(currentQuestion.answer.number)) {
      state.wrongNumbers.push(currentQuestion.answer.number);
    }
    feedback.textContent = `오답. 정답은 ${currentQuestion.answer.kanji} / ${currentQuestion.answer.answer}`;
    feedback.className = "feedback bad";
  }

  typedAnswerInput.disabled = true;
  typedAnswerForm.querySelector("button").disabled = true;

  if (roundIndex >= roundItems.length) {
    nextButton.textContent = "결과 보기";
  }

  saveState();
  renderStats();
}

function renderStats() {
  progressText.textContent = roundItems.length > 0 ? `문제 ${Math.min(roundIndex + 1, roundItems.length)} / ${roundItems.length}` : "문제 0 / 0";
  currentNumberText.textContent = currentQuestion ? `현재 ${currentQuestion.answer.number}번` : "완료";
  rangeText.textContent = allItems().length > 0 ? `${Math.min(state.rangeStart, state.rangeEnd)}-${Math.max(state.rangeStart, state.rangeEnd)}번` : "한자 없음";
  wrongText.textContent = `현재 범위 오답 ${currentRangeWrongItems().length}개`;
}

function renderFinished() {
  isFinished = true;
  answered = true;
  questionLabel.textContent = roundItems.length > 0 ? "이번 회차 완료" : "한자를 추가해주세요";
  questionText.textContent = roundItems.length > 0 ? "끝!" : "비어 있음";
  choices.innerHTML = "";
  typedAnswerForm.hidden = true;
  feedback.textContent =
    roundItems.length > 0
      ? `총 ${roundItems.length}문제를 다 풀었어요. 다시 풀려면 아래 버튼을 누르세요.`
      : "data.js에 한자를 넣으면 퀴즈가 시작됩니다.";
  feedback.className = roundItems.length > 0 ? "feedback good" : "feedback";
  nextButton.textContent = "다시 시작";
  renderStats();
}

function startRound() {
  roundItems = currentPool();
  if (roundItems.length === 0) {
    state.wrongOnly = false;
    roundItems = currentPool();
    feedback.textContent = "아직 오답이 없어요.";
    feedback.className = "feedback";
  }

  roundIndex = 0;
  isFinished = false;
  nextButton.textContent = "다음 문제";
  renderQuestion();
}

function applyRange() {
  const maxNumber = Math.max(allItems().length, 1);
  state.rangeStart = clampNumber(rangeStartInput.value, 1, maxNumber);
  state.rangeEnd = clampNumber(rangeEndInput.value, 1, maxNumber);
  state.wrongOnly = false;
  syncRangeInputs();
  saveState();
  startRound();
}

function openReviewPanel() {
  reviewItems = currentRangeWrongItems();
  if (reviewItems.length === 0) {
    feedback.textContent = "현재 선택한 번호 범위에는 오답이 없어요.";
    feedback.className = "feedback";
    renderStats();
    return;
  }

  reviewIndex = 0;
  isReviewFinished = false;
  document.body.classList.add("review-open");
  reviewPanel.classList.add("open");
  reviewPanel.setAttribute("aria-hidden", "false");
  reviewOverlay.hidden = false;
  renderReviewQuestion();
}

function closeReviewPanel() {
  document.body.classList.remove("review-open");
  reviewPanel.classList.remove("open");
  reviewPanel.setAttribute("aria-hidden", "true");
  reviewOverlay.hidden = true;
  renderStats();
}

function pickReviewQuestion() {
  if (reviewIndex >= reviewItems.length) {
    return null;
  }

  return createQuestion(reviewItems[reviewIndex], "kanjiToAnswer");
}

function renderReviewQuestion() {
  reviewQuestion = pickReviewQuestion();
  if (!reviewQuestion) {
    renderReviewFinished();
    return;
  }

  reviewAnswered = false;
  reviewFeedback.textContent = "";
  reviewFeedback.className = "feedback";
  reviewNextButton.textContent = "다음 오답";
  renderQuestionContent(reviewQuestion, reviewQuestionLabel, reviewQuestionText, reviewChoices, chooseReviewAnswer);
  renderReviewStats();
}

function chooseReviewAnswer(button, selected) {
  if (reviewAnswered) {
    return;
  }

  reviewAnswered = true;
  reviewIndex += 1;
  const isCorrect = selected.number === reviewQuestion.answer.number;

  if (isCorrect) {
    state.wrongNumbers = state.wrongNumbers.filter((number) => number !== selected.number);
    reviewFeedback.textContent = "정답! 오답 목록에서 뺐어요.";
    reviewFeedback.classList.add("good");
  } else {
    reviewFeedback.textContent = `오답. 정답은 ${reviewQuestion.answer.kanji} / ${reviewQuestion.answer.answer}`;
    reviewFeedback.classList.add("bad");
  }

  markChoiceResult(reviewQuestion, reviewChoices, button, isCorrect);

  if (reviewIndex >= reviewItems.length) {
    reviewNextButton.textContent = "결과 보기";
  }

  saveState();
  renderStats();
  renderReviewStats();
}

function renderReviewStats() {
  reviewProgressText.textContent = `오답 ${Math.min(reviewIndex + 1, reviewItems.length)} / ${reviewItems.length}`;
  reviewNumberText.textContent = reviewQuestion ? `현재 ${reviewQuestion.answer.number}번` : "완료";
}

function renderReviewFinished() {
  const remainingWrongCount = currentRangeWrongItems().length;

  isReviewFinished = true;
  reviewAnswered = true;
  reviewQuestionLabel.textContent = "오답 복습 완료";
  reviewQuestionText.textContent = "끝!";
  reviewChoices.innerHTML = "";
  reviewFeedback.textContent = `남은 오답은 현재 범위 기준 ${remainingWrongCount}개예요.`;
  reviewFeedback.className = remainingWrongCount === 0 ? "feedback good" : "feedback";
  reviewNextButton.textContent = remainingWrongCount === 0 ? "닫기" : "남은 오답 다시 풀기";
  renderReviewStats();
}

function syncRangeInputs() {
  const maxNumber = Math.max(allItems().length, 1);
  rangeStartInput.max = String(maxNumber);
  rangeEndInput.max = String(maxNumber);
  rangeStartInput.value = String(state.rangeStart);
  rangeEndInput.value = String(state.rangeEnd);
}

function resetProgress() {
  state.correct = 0;
  state.total = 0;
  state.wrongNumbers = [];
  state.wrongOnly = false;
  saveState();
  renderStats();
  startRound();
}

function showWordStudy() {
  kanjiStudy.hidden = true;
  wordStudy.hidden = false;
  openWordStudyButton.hidden = true;
  syncWordRangeInputs();
  startWordCards();
}

function showKanjiStudy() {
  kanjiStudy.hidden = false;
  wordStudy.hidden = true;
  openWordStudyButton.hidden = false;
}

function syncWordRangeInputs() {
  const maxNumber = Math.max(WORD_DATA.length, 1);
  wordRangeStart = clampNumber(wordRangeStart, 1, maxNumber);
  wordRangeEnd = clampNumber(wordRangeEnd, 1, maxNumber);
  wordRangeStartInput.max = String(maxNumber);
  wordRangeEndInput.max = String(maxNumber);
  wordRangeStartInput.value = String(wordRangeStart);
  wordRangeEndInput.value = String(wordRangeEnd);
}

function selectedWords() {
  const start = Math.min(wordRangeStart, wordRangeEnd);
  const end = Math.max(wordRangeStart, wordRangeEnd);
  const keyword = wordSearchInput.value.trim().toLowerCase();

  // 번호 검색은 범위와 상관없이 전체에서 찾는다
  if (/^\d+$/.test(keyword)) {
    return WORD_DATA.filter((item) => String(item.number) === keyword);
  }

  return WORD_DATA.filter((item) => {
    const inRange = item.number >= start && item.number <= end;
    if (!inRange) {
      return false;
    }

    if (!keyword) {
      return true;
    }

    return [item.word, item.kanji, item.meaning].some((value) => value.toLowerCase().includes(keyword));
  });
}

function applyWordRange() {
  const maxNumber = Math.max(WORD_DATA.length, 1);
  wordRangeStart = clampNumber(wordRangeStartInput.value, 1, maxNumber);
  wordRangeEnd = clampNumber(wordRangeEndInput.value, 1, maxNumber);
  syncWordRangeInputs();
  startWordCards();
}

function startWordCards() {
  wordItems = selectedWords();
  wordIndex = 0;
  renderWordCard();
}

function renderWordCard() {
  const start = Math.min(wordRangeStart, wordRangeEnd);
  const end = Math.max(wordRangeStart, wordRangeEnd);
  const hasWords = wordItems.length > 0;

  wordSummaryText.textContent = hasWords
    ? `단어 ${wordIndex + 1} / ${wordItems.length} · 전체 ${WORD_DATA.length}개`
    : `단어 0 / 0 · 전체 ${WORD_DATA.length}개`;
  wordRangeText.textContent = `${start}-${end}번`;

  document.querySelector(".word-card").hidden = !hasWords;
  wordEmptyState.hidden = hasWords;
  prevWordButton.disabled = !hasWords || wordIndex === 0;
  nextWordButton.disabled = !hasWords || wordIndex >= wordItems.length - 1;

  if (!hasWords) {
    return;
  }

  const item = wordItems[wordIndex];
  wordCardNumber.textContent = `${item.number}번`;
  wordCardWord.textContent = item.word;
  wordCardKanji.textContent = item.kanji || "한자 없음";
  wordCardMeaning.textContent = item.meaning;
}

modeSelect.addEventListener("change", startRound);
typedAnswerForm.addEventListener("submit", submitTypedAnswer);
rangeApplyButton.addEventListener("click", applyRange);
rangeStartInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyRange();
  }
});
rangeEndInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyRange();
  }
});
wrongOnlyButton.addEventListener("click", () => {
  openReviewPanel();
});
nextButton.addEventListener("click", () => {
  if (isFinished) {
    startRound();
    return;
  }

  if (roundIndex >= roundItems.length) {
    renderFinished();
    return;
  }

  renderQuestion();
});
resetButton.addEventListener("click", resetProgress);
openWordStudyButton.addEventListener("click", showWordStudy);
backToKanjiButton.addEventListener("click", showKanjiStudy);
wordRangeApplyButton.addEventListener("click", applyWordRange);
wordRangeStartInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyWordRange();
  }
});
wordRangeEndInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyWordRange();
  }
});
wordSearchInput.addEventListener("input", startWordCards);
prevWordButton.addEventListener("click", () => {
  if (wordIndex > 0) {
    wordIndex -= 1;
    renderWordCard();
  }
});
nextWordButton.addEventListener("click", () => {
  if (wordIndex < wordItems.length - 1) {
    wordIndex += 1;
    renderWordCard();
  }
});
closeReviewButton.addEventListener("click", closeReviewPanel);
reviewOverlay.addEventListener("click", closeReviewPanel);
reviewNextButton.addEventListener("click", () => {
  if (isReviewFinished) {
    if (currentRangeWrongItems().length === 0) {
      closeReviewPanel();
      return;
    }

    openReviewPanel();
    return;
  }

  if (reviewIndex >= reviewItems.length) {
    renderReviewFinished();
    return;
  }

  renderReviewQuestion();
});

syncRangeInputs();
startRound();
