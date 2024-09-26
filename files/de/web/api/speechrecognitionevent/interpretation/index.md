---
title: "SpeechRecognitionEvent: interpretation-Eigenschaft"
short-title: interpretation
slug: Web/API/SpeechRecognitionEvent/interpretation
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

Die **`interpretation`**-Eigenschaft des {{domxref("SpeechRecognitionEvent")}}-Interfaces gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.

Dies könnte beispielsweise durch die SISR-Spezifikation von Semantiken in einer Grammatik bestimmt werden (siehe [Semantic Interpretation for Speech Recognition (SISR) Version 1.0](https://www.w3.org/TR/semantic-interpretation/) für Spezifikationen und Beispiele).

## Wert

Der zurückgegebene Wert kann beliebiger Typ sein. Falls keine semantische Interpretation durch das Spracherkennungssystem zurückgegeben wurde, wird `null` zurückgegeben.

## Beispiele

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.interpretation);
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)