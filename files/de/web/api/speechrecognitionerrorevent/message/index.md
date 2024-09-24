---
title: "SpeechRecognitionErrorEvent: message-Eigenschaft"
short-title: message
slug: Web/API/SpeechRecognitionErrorEvent/message
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`message`**-Eigenschaft des schreibgeschützten {{domxref("SpeechRecognitionErrorEvent")}}-Interfaces gibt eine Nachricht zurück, die den Fehler detaillierter beschreibt.

## Wert

Ein String, der mehr Details über den aufgetretenen Fehler enthält.
Beachten Sie, dass die Spezifikation die genaue Formulierung dieser Nachrichten nicht definiert — dies bleibt den Implementierern überlassen.

## Beispiele

```js
const recognition = new SpeechRecognition();

recognition.onerror = (event) => {
  console.log(`Spracherkennungsfehler erkannt: ${event.error}`);
  console.log(`Zusätzliche Informationen: ${event.message}`);
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
