---
title: "SpeechRecognition: phrases-Eigenschaft"
short-title: phrases
slug: Web/API/SpeechRecognition/phrases
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`phrases`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die für das [kontextuelle Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden sollen.

## Wert

Ein `ObservableArray` von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt zunächst ein Array, das die zu verstärkenden Phrasen und ihre [`boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost)-Werte enthält. Wir konvertieren diese Daten in ein `ObservableArray` von `SpeechRecognitionPhrase`-Objekten, indem wir das ursprüngliche Array zu Aufrufen des [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktors abbilden:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];

const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nachdem eine [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz erstellt wurde, fügen wir unsere kontextuellen Biasing-Phrasen ein, indem wir das `phraseObjects`-Array als Wert der `SpeechRecognition.phrases`-Eigenschaft setzen:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

Dieser Code ist aus unserem [On-Device Speech Color Changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)) entnommen. Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)
