---
title: SpeechRecognitionPhrase
slug: Web/API/SpeechRecognitionPhrase
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Das **`SpeechRecognitionPhrase`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert einen Ausdruck, der an die Spracherkennung zur [kontextuellen Bevorzugung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) übergeben werden kann.

## Instanz-Eigenschaften

- [`SpeechRecognitionPhrase.boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Gleitkommazahl, die die Höhe der Verstärkung darstellt, die Sie auf den entsprechenden `phrase` anwenden möchten.
- [`SpeechRecognitionPhrase.phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der das Wort oder den Ausdruck enthält, das/die Sie im Erkennungs-Engine-Bias verstärkt haben möchten.

## Beispiele

### Grundlegende Nutzung

Der folgende Code erstellt zunächst ein Array mit den zu verstärkenden Ausdrücken und ihren [`boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost)-Werten. Wir konvertieren diese Daten in ein `ObservableArray` von `SpeechRecognitionPhrase`-Objekten, indem wir die ursprünglichen Array-Elemente auf Aufrufe des [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktors abbilden:

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

Nach der Erstellung einer [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz fügen wir unsere kontextuell bevorzugten Ausdrücke hinzu, indem wir das `phraseObjects`-Array als Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft setzen:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

Dieser Code stammt aus unserem [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
