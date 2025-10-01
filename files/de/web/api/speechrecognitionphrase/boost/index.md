---
title: "SpeechRecognitionPhrase: boost-Eigenschaft"
short-title: boost
slug: Web/API/SpeechRecognitionPhrase/boost
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die schreibgeschützte **`boost`**-Eigenschaft des [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Interfaces gibt eine Gleitkommazahl zurück, die das Gewicht angibt, das Sie der entsprechenden [`phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) zuweisen möchten.

## Wert

Eine Gleitkommazahl zwischen `0,0` und `10,0` (einschließlich), die das Gewicht darstellt, das Sie auf die `phrase` anwenden möchten. Dieser Wert ist in etwa gleich dem natürlichen Logarithmus der Anzahl der Male, wie viel wahrscheinlicher die Website diese Phrase erscheinen sieht im Vergleich zu dem, was das Spracherkennungsmodell weiß. Höhere Werte machen es wahrscheinlicher, dass die `phrase` erkannt wird.

Ein hoher Wert wie `9,0` oder `10,0` könnte dazu führen, dass die Erkennungs-Engine fälschlicherweise andere Phrasen als die angegebene Phrase erkennt. Daher sollten solche Werte selten verwendet werden, wenn `SpeechRecognitionPhrase`-Objekte erstellt werden.

## Beispiele

### Grundlegende Verwendung

Die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft enthält ein Array von `SpeechRecognitionPhrase`-Objekten, die kontextuelle Bias-Phrasen darstellen. Dieses Array kann wie ein normales JavaScript-Array modifiziert werden, zum Beispiel indem neue Phrasen dynamisch hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Sie können dann auf diese Objekte und ihre Eigenschaften zugreifen. Um den `boost`-Wert der hinzugefügten Phrase zurückzugeben, könnten Sie Folgendes tun:

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
