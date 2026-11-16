---
title: "SpeechRecognitionAlternative: transcript-Eigenschaft"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`transcript`** der Schnittstelle [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) gibt einen String zurück, der das Transkript der erkannten Sprache enthält.

Bei kontinuierlicher Spracherkennung werden bei Bedarf führende oder nachfolgende Leerzeichen eingefügt, damit die Verkettung aufeinanderfolgender [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte ein korrektes Transkript der Sitzung ergibt.

## Wert

Ein String.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

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
