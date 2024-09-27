---
title: "HTMLMediaElement: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

Die **`currentTime`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt die aktuelle Wiedergabezeit in Sekunden an.

Durch Ändern des Wertes von `currentTime` wird das Medium an die neue Zeit schreitet.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt.

Wenn das Medium noch nicht abgespielt wird, gibt der Wert von `currentTime` die Zeitposition innerhalb des Mediums an, an der die Wiedergabe beginnen wird, sobald die [`play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode aufgerufen wird.

Das Setzen von `currentTime` auf einen neuen Wert bewegt das Medium zu der angegebenen Zeit, sofern das Medium verfügbar ist.

Bei Medien ohne bekannte Dauer – wie Medien, die live gestreamt werden – kann es sein, dass der Browser Teile des Mediums, die aus dem Medienpuffer abgelaufen sind, nicht abrufen kann. Außerdem kann bei Medien, deren Zeitleiste nicht bei 0 Sekunden beginnt, nicht zu einer Zeit vor der frühesten Zeit der Zeitleiste navigiert werden.

Die Länge des Mediums in Sekunden kann mit der [`duration`](/de/docs/Web/API/HTMLMediaElement/duration)-Eigenschaft bestimmt werden.

## Beispiele

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Anwendungshinweise

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `video.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` ist, je nachdem, welcher größer ist.

Mit reduzierter Zeitpräzision ist beispielsweise das Ergebnis von `video.currentTime` immer ein Vielfaches von 0.002 oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.currentTime`-Eigenschaft
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek): Eine andere Möglichkeit, die Zeit einzustellen
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration): Die Dauer des Mediums in Sekunden
