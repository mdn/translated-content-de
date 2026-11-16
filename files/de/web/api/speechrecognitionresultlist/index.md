---
title: SpeechRecognitionResultList
slug: Web/API/SpeechRecognitionResultList
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionResultList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Sammlung von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten.
Wenn sich die Spracherkennung nicht im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus befindet, enthält sie nur ein Ergebnis.

## Instanzeigenschaften

- [`SpeechRecognitionResultList.length`](/de/docs/Web/API/SpeechRecognitionResultList/length) {{ReadOnlyInline}}
  - : Gibt die Länge des „Arrays“ zurück – die Anzahl der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste.

## Instanzmethoden

- [`SpeechRecognitionResultList.item`](/de/docs/Web/API/SpeechRecognitionResultList/item)
  - : Ein Standard-Getter, der den Zugriff auf [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste über die Array-Syntax ermöglicht.

## Beispiele

Dieser Code ist ein Auszug aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

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
