---
title: "SpeechRecognitionPhrase: boost-Eigenschaft"
short-title: boost
slug: Web/API/SpeechRecognitionPhrase/boost
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`boost`**-Eigenschaft des [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Interfaces gibt eine Gleitkommazahl zurück, die das Gewicht darstellt, das Sie der entsprechenden [`phrase`](/de/docs/Web/API/SpeechRecognitionPhrase/phrase) zuweisen möchten.

## Wert

Eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die das Gewicht darstellt, das Sie auf die `phrase` anwenden möchten. Dieser Wert entspricht grob dem natürlichen Logarithmus der Anzahl, wie viel häufiger die Website denkt, dass dieser Ausdruck erscheint, als es das Spracherkennungsmodell weiß. Höhere Werte machen die `phrase` wahrscheinlicher erkannt.

Ein hoher Wert wie `9.0` oder `10.0` könnte dazu führen, dass die Erkennungs-Engine fälschlicherweise andere Phrasen als die angegebene Phrase erkennt. Daher sollten solche Werte selten beim Erstellen von `SpeechRecognitionPhrase`-Objekten verwendet werden.

## Beispiele

### Grundlegende Verwendung

Die [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft hält ein Array von `SpeechRecognitionPhrase`-Objekten, die kontextuelle Bias-Phrasen darstellen. Dieses Array kann wie ein normales JavaScript-Array modifiziert werden, indem beispielsweise neue Phrasen dynamisch hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Sie können dann auf diese Objekte und ihre Eigenschaften zugreifen. Um den `boost`-Wert der hinzugefügten Phrase zurückzugeben, könnten Sie dies tun:

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
