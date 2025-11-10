---
title: "SpeechRecognitionPhrase: phrase-Eigenschaft"
short-title: phrase
slug: Web/API/SpeechRecognitionPhrase/phrase
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die schreibgeschützte **`phrase`**-Eigenschaft der [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Schnittstelle gibt einen String zurück, der das Wort oder die Phrase enthält, die im Erkennungs-Engine-Kontext mit einem [kontextuellen Bias](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verstärkt werden soll.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft enthält ein Array von `SpeechRecognitionPhrase`-Objekten, die kontextuelle Biasing-Phrasen darstellen. Dieses Array kann wie ein normales JavaScript-Array modifiziert werden, indem beispielsweise dynamisch neue Phrasen hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Sie können dann auf diese Objekte und ihre Eigenschaften zugreifen. Um den `phrase`-Wert der hinzugefügten Phrase zurückzugeben, könnten Sie dies tun:

```js
// Should return "thistle"
recognition.phrases[0].phrase;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
