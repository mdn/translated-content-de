---
title: "SpeechRecognitionAlternative: transcript Eigenschaft"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`transcript`** schreibgeschützte Eigenschaft des {{domxref("SpeechRecognitionResult")}}-Interfaces gibt einen String zurück, der das Transkript des erkannten Wortes oder der erkannten Wörter enthält.

Bei kontinuierlicher Erkennung werden führende oder nachfolgende Leerzeichen dort eingefügt, wo es notwendig ist, damit die Verkettung aufeinanderfolgender {{domxref("SpeechRecognitionResult")}}s ein korrektes Transkript der Sitzung ergibt.

## Wert

Ein String.

## Beispiele

Dieser Codeauszug stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück.
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array angesprochen werden kann.
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays angesprochen werden können.
  // Das zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript Eigenschaft des SpeechRecognitionAlternative-Objekts zurück.
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
