---
title: "HTMLMediaElement: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

Die **`currentTime`**-Eigenschaft des {{domxref("HTMLMediaElement")}}-Interfaces gibt die aktuelle Wiedergabezeit in Sekunden an.

Durch Ändern des Werts von `currentTime` wird das Medium auf die neue Zeit positioniert.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt.

Falls das Medium noch nicht abgespielt wird, zeigt der Wert von `currentTime` die Zeitposition innerhalb des Mediums an, bei der die Wiedergabe beginnt, sobald die {{domxref("HTMLMediaElement.play", "play()")}}-Methode aufgerufen wird.

Das Festlegen von `currentTime` auf einen neuen Wert sucht das Medium auf die angegebene Zeit, falls das Medium verfügbar ist.

Bei Medien ohne bekannte Dauer—wie etwa live gestreamte Medien—kann es sein, dass der Browser Teile des Mediums, die aus dem Medienpuffer abgelaufen sind, nicht abrufen kann. Auch Medien, deren Zeitachse nicht bei 0 Sekunden beginnt, können nicht auf eine Zeit vor der frühesten Zeit ihrer Zeitachse gesucht werden.

Die Länge des Mediums in Sekunden kann mit der {{domxref("HTMLMediaElement.duration", "duration")}}-Eigenschaft bestimmt werden.

## Beispiele

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Verwendungshinweise

### Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, könnte die Präzision von `video.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Voreinstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100 ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitgenauigkeit das Ergebnis von `video.currentTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

```js
// reduzierte Zeitgenauigkeit (2 ms) in Firefox 60
video.currentTime;
// Es könnte sein:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitgenauigkeit mit aktiviertem `privacy.resistFingerprinting`
video.currentTime;
// Es könnte sein:
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

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.currentTime`-Eigenschaft
- {{domxref("HTMLMediaElement.fastSeek()")}}: Eine weitere Möglichkeit, die Zeit einzustellen
- {{domxref("HTMLMediaElement.duration")}}: Die Dauer des Mediums in Sekunden
