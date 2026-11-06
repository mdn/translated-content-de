---
title: "SpeechRecognition: phrases-Eigenschaft"
short-title: phrases
slug: Web/API/SpeechRecognition/phrases
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die **`phrases`**-Eigenschaft der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten für das [kontextbezogene Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) fest.

## Wert

Ein `ObservableArray` von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt zunächst ein Array mit den Phrasen, die bevorzugt erkannt werden sollen, und ihren jeweiligen [`boost`](/de/docs/Web/API/SpeechRecognitionPhrase/boost)-Werten. Wir wandeln diese Daten in ein `ObservableArray` von `SpeechRecognitionPhrase`-Objekten um, indem wir die Einträge des ursprünglichen Arrays auf Aufrufe des Konstruktors [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase) abbilden:

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

Nachdem wir eine [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Instanz erstellt haben, übergeben wir ihr die Phrasen für das kontextbezogene Biasing, indem wir das Array `phraseObjects` als Wert der Eigenschaft `SpeechRecognition.phrases` festlegen:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

Dieser Code stammt aus unserem Beispiel [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). Eine vollständige Erklärung finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
- [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)
