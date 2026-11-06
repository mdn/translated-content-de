---
title: SpeechRecognitionPhrase
slug: Web/API/SpeechRecognitionPhrase
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionPhrase`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Phrase, die für [kontextbezogene Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) an die Spracherkennungs-Engine übergeben werden kann.

## Instanzeigenschaften

- [`SpeechRecognitionPhrase.boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost) {{ReadOnlyInline}}
  - : Eine Fließkommazahl, die angibt, wie stark die entsprechende `phrase` gewichtet werden soll.
- [`SpeechRecognitionPhrase.phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) {{ReadOnlyInline}}
  - : Ein String mit dem Wort oder der Phrase, die bei der Erkennung stärker gewichtet werden soll.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt zunächst ein Array mit den Phrasen, die stärker gewichtet werden sollen, und ihren jeweiligen [`boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost)-Werten. Anschließend wandeln wir diese Daten in ein `ObservableArray` aus `SpeechRecognitionPhrase`-Objekten um, indem wir jedes Element des ursprünglichen Arrays einem Aufruf des Konstruktors [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase) zuordnen:

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

Nachdem wir eine [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz erstellt haben, fügen wir die Phrasen für die kontextbezogene Gewichtung hinzu, indem wir das Array `phraseObjects` als Wert der Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) festlegen:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

Dieser Code ist ein Auszug aus unserem [Farbwechsler mit lokaler Spracherkennung](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Live-Demo ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine vollständige Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
