---
title: "SpeechRecognitionPhrase: Eigenschaft phrase"
short-title: phrase
slug: Web/API/SpeechRecognitionPhrase/phrase
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`phrase`** der Schnittstelle [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) gibt einen String zurück, der das Wort oder die Wortgruppe enthält, deren Erkennung durch die [kontextuelle Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) der Spracherkennungs-Engine verbessert werden soll.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Die Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) enthält ein Array von `SpeechRecognitionPhrase`-Objekten, die Wortgruppen für die kontextuelle Gewichtung darstellen. Dieses Array kann wie ein normales JavaScript-Array verändert werden, beispielsweise indem dynamisch neue Wortgruppen hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Anschließend können Sie wie folgt auf diese Objekte und ihre Eigenschaften zugreifen. Um den Wert von `phrase` für die hinzugefügte Wortgruppe abzurufen, können Sie Folgendes tun:

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
