---
title: "SpeechRecognitionEvent: Interpretation-Eigenschaft"
short-title: interpretation
slug: Web/API/SpeechRecognitionEvent/interpretation
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

Die **`interpretation`**-Eigenschaft des Schnittstellenobjekts [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent) ist schreibgeschützt und gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.

Dies kann beispielsweise durch die SISR-Spezifikation der Semantik in einer Grammatik bestimmt werden (siehe [Semantic Interpretation for Speech Recognition (SISR) Version 1.0](https://www.w3.org/TR/semantic-interpretation/) für Spezifikation und Beispiele).

## Wert

Der zurückgegebene Wert kann jeden Typ haben. Wenn keine semantische Interpretation vom Spracherkennungssystem zurückgegeben wurde, wird `null` zurückgegeben.

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
