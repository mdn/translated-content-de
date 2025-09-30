---
title: SpeechRecognitionPhrase
slug: Web/API/SpeechRecognitionPhrase
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionPhrase`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Phrase, die dem Spracherkennungs-Engine zur [kontextuellen Verzerrung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) übergeben werden kann.

## Instanz-Eigenschaften

- [`SpeechRecognitionPhrase.boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost) {{ReadOnlyInline}}
  - : Eine Gleitkommazahl, die die Höhe der Verstärkung darstellt, die Sie auf die entsprechende `phrase` anwenden möchten.
- [`SpeechRecognitionPhrase.phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) {{ReadOnlyInline}}
  - : Ein String, der das Wort oder die Phrase enthält, die im Bias der Erkennungs-Engine verstärkt werden soll.

## Beispiele

### Grundlegende Nutzung

Der folgende Code erstellt zunächst ein Array, das die zu verstärkenden Phrasen und deren [`boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost)-Werte enthält. Wir konvertieren diese Daten in ein `ObservableArray` von `SpeechRecognitionPhrase`-Objekten, indem wir die ursprünglichen Array-Elemente in [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktoraufrufen abbilden:

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

Nach der Erstellung einer [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz fügen wir unsere kontextuellen Verzerrungsphrasen hinzu, indem wir das `phraseObjects`-Array als Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft festlegen:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

Dieser Code ist aus unserem [On-Device-Sprachfarbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)) entnommen. Eine vollständige Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
