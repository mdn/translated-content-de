---
title: "SpeechRecognitionEvent: results-Eigenschaft"
short-title: results
slug: Web/API/SpeechRecognitionEvent/results
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`results`**-Eigenschaft des [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Interfaces gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

Konkret enthält dieses Objekt alle endgültigen Ergebnisse, die zurückgegeben wurden, gefolgt von der aktuellen besten Hypothese für alle vorläufigen Ergebnisse. Wenn nachfolgende [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignisse ausgelöst werden, können vorläufige Ergebnisse durch ein neueres vorläufiges Ergebnis oder durch ein endgültiges Ergebnis überschrieben werden – sie können sogar entfernt werden, wenn sie sich am Ende des "results"-Arrays befinden und die Array-Länge abnimmt. Endgültige Ergebnisse wiederum werden nicht überschrieben oder entfernt.

## Wert

Ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt.

## Beispiele

Dieser Code ist in unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel enthalten.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
