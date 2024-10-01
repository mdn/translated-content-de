---
title: "AnimationPlaybackEvent: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{ APIRef("Web Animations") }}

Die **`currentTime`** schreibgeschützte Eigenschaft des [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) Interfaces stellt die aktuelle Zeit der Animation dar, die das Ereignis im Moment der Ereigniswarteschlange erzeugt hat. Diese wird als ungelöst betrachtet, wenn die Animation zum Zeitpunkt der Ereigniserzeugung `idle` war.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

## Reduzierte Zeitgenauigkeit

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit von `playbackEvent.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Option `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2 ms eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Genauigkeit 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitgenauigkeit das Ergebnis von `playbackEvent.currentTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

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
