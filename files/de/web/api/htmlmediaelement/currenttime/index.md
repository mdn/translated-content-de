---
title: "HTMLMediaElement: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

Die **`currentTime`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt die aktuelle Wiedergabezeit in Sekunden an.

Das Ändern des Wertes von `currentTime` springt den Medieninhalt zur neuen Zeit.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt.

Wenn das Medium noch nicht abgespielt wird, gibt der Wert von `currentTime` die Zeitposition innerhalb des Mediums an, bei der die Wiedergabe beginnt, sobald die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode aufgerufen wird.

Das Setzen von `currentTime` auf einen neuen Wert springt den Medieninhalt zur angegebenen Zeit, sofern das Medium verfügbar ist.

Bei Medien ohne bekannte Dauer—wie beispielsweise live gestreamte Medien—kann es sein, dass der Browser Teile des Mediums, die aus dem Medienpuffer abgelaufen sind, nicht abrufen kann. Außerdem kann bei Medien, deren Zeitachse nicht bei 0 Sekunden beginnt, nicht zu einer Zeit vor der frühesten Zeit ihrer Zeitachse gesprungen werden.

Die Länge des Mediums in Sekunden kann mit der [`duration`](/de/docs/Web/API/HTMLMediaElement/duration)-Eigenschaft bestimmt werden.

## Beispiele

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Nutzungshinweise

### Reduzierte Zeitgenauigkeit

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `video.currentTime` je nach Browsereinstellung gerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitgenauigkeit das Ergebnis von `video.currentTime` immer ein Vielfaches von 0,002 sein, oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduced time precision (2ms) in Firefox 60
video.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
video.currentTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Interface zur Definition der `HTMLMediaElement.currentTime`-Eigenschaft
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek): Eine andere Möglichkeit, die Zeit einzustellen
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration): Die Dauer des Mediums in Sekunden
