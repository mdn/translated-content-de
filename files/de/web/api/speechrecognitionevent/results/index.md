---
title: "SpeechRecognitionEvent: results-Eigenschaft"
short-title: results
slug: Web/API/SpeechRecognitionEvent/results
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`results`**-Eigenschaft des [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Interfaces gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung repräsentiert.

Dieses Objekt enthält alle endgültigen Ergebnisse, die zurückgegeben wurden, gefolgt von der aktuellen besten Hypothese für alle Zwischenresultate. Wenn nachfolgende [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignisse ausgelöst werden, können Zwischenresultate durch ein neueres Zwischenresultat oder ein endgültiges Ergebnis überschrieben werden – sie können sogar entfernt werden, wenn sie am Ende des "results"-Arrays stehen und die Array-Länge abnimmt. Endgültige Ergebnisse hingegen werden nicht überschrieben oder entfernt.

## Wert

Ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt.

## Beispiele

Dieser Code ist aus unserem [Sprach-Farbänderer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
