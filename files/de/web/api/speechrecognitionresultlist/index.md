---
title: SpeechRecognitionResultList
slug: Web/API/SpeechRecognitionResultList
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionResultList`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten, oder ein einzelnes Objekt, wenn Ergebnisse im [`non-continuous`](/de/docs/Web/API/SpeechRecognition/continuous) Modus erfasst werden.

## Instanzeigenschaften

- [`SpeechRecognitionResultList.length`](/de/docs/Web/API/SpeechRecognitionResultList/length) {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück — die Anzahl der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste.

## Instanzmethoden

- [`SpeechRecognitionResultList.item`](/de/docs/Web/API/SpeechRecognitionResultList/item)
  - : Ein Standard-Getter, der es ermöglicht, auf [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste über Array-Syntax zuzugreifen.

## Beispiele

Dieser Codeausschnitt stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
