---
title: "SpeechRecognitionPhrase: boost-Eigenschaft"
short-title: boost
slug: Web/API/SpeechRecognitionPhrase/boost
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`boost`** der Schnittstelle [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) gibt eine Gleitkommazahl zurück, die angibt, welches Gewicht Sie der zugehörigen [`phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) zuweisen möchten.

## Wert

Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die das Gewicht angibt, das Sie auf die `phrase` anwenden möchten. Dieser Wert entspricht ungefähr dem natürlichen Logarithmus des Faktors, um den die Website das Auftreten dieser Phrase für wahrscheinlicher hält, als es das Spracherkennungsmodell annimmt. Höhere Werte erhöhen die Wahrscheinlichkeit, dass die `phrase` erkannt wird.

Ein hoher Wert wie `9.0` oder `10.0` kann dazu führen, dass die Erkennungs-Engine andere Phrasen fälschlicherweise als die angegebene Phrase erkennt. Daher sollten solche Werte beim Erstellen von `SpeechRecognitionPhrase`-Objekten nur selten verwendet werden.

## Beispiele

### Grundlegende Verwendung

Die Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) enthält ein Array von `SpeechRecognitionPhrase`-Objekten, die Phrasen zur kontextbezogenen Beeinflussung der Erkennung darstellen. Dieses Array lässt sich wie ein normales JavaScript-Array ändern, beispielsweise indem Sie ihm dynamisch neue Phrasen hinzufügen:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Anschließend können Sie auf diese Objekte und ihre Eigenschaften zugreifen. Um den `boost`-Wert der hinzugefügten Phrase abzurufen, können Sie Folgendes tun:

```js
// Should return 5.0
recognition.phrases[0].boost;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
