---
title: "SpeechRecognitionEvent: resultIndex-Eigenschaft"
short-title: resultIndex
slug: Web/API/SpeechRecognitionEvent/resultIndex
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`resultIndex`** schreibgeschützte Eigenschaft des
[`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Interfaces gibt den niedrigsten Indexwert des Ergebnisses in der
[`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-"Array" zurück, der tatsächlich geändert wurde.

Das [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt ist kein Array, aber es besitzt einen
Getter, der den Zugriff über Array-Syntax ermöglicht.

## Wert

Eine Zahl.

## Beispiele

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.resultIndex); // returns 0 if there is only one result
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
