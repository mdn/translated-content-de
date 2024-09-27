---
title: "AnimationPlaybackEvent: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte Eigenschaft **`currentTime`** des [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)-Interfaces repräsentiert die aktuelle Zeit der Animation, die das Ereignis erzeugt hat, in dem Moment, in dem das Ereignis in die Warteschlange gestellt wird. Diese wird nicht aufgelöst sein, wenn die Animation zum Zeitpunkt der Ereigniserzeugung `idle` war.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

## Reduzierte Zeitgenauigkeit

Zum Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) kann die Genauigkeit von `playbackEvent.currentTime` je nach Browsereinstellung gerundet werden. In Firefox ist die Voreinstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Genauigkeit 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird das Ergebnis von `playbackEvent.currentTime` bei reduzierter Zeitgenauigkeit immer ein Vielfaches von 0,002 sein, oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

```js
// reduced time precision (2ms) in Firefox 60
playbackEvent.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
playbackEvent.currentTime;
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

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationPlayBackEvent`](/de/docs/Web/API/AnimationPlayBackEvent)
