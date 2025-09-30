---
title: "SpeechRecognitionPhrase: phrase-Eigenschaft"
short-title: phrase
slug: Web/API/SpeechRecognitionPhrase/phrase
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`phrase`**-Eigenschaft, die schreibgeschützte Eigenschaft des [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Interfaces, gibt einen String zurück, der das Wort oder den Ausdruck enthält, den Sie im Erkennungs-Engine-Kontext verstärken möchten, um die [kontextuelle Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) zu beeinflussen.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft enthält ein Array von `SpeechRecognitionPhrase`-Objekten, die kontextuelle Gewichtungsphrasen darstellen. Dieses Array kann wie ein normales JavaScript-Array modifiziert werden, zum Beispiel indem man ihm dynamisch neue Phrasen hinzufügt:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Sie können dann auf diese Objekte und ihre Eigenschaften zugreifen. Um den `phrase`-Wert der hinzugefügten Phrase zurückzugeben, könnten Sie Folgendes tun:

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
