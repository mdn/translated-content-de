---
title: "AnimationPlaybackEvent: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die **`currentTime`**-Eigenschaft des {{domxref("AnimationPlaybackEvent")}}-Interfaces ist eine schreibgeschützte Eigenschaft und repräsentiert die aktuelle Zeit der Animation, die das Ereignis erzeugt hat, zu dem Zeitpunkt, an dem das Ereignis in die Warteschlange gestellt wird. Diese Eigenschaft bleibt ungelöst, wenn die Animation zum Zeitpunkt der Erzeugung des Ereignisses `idle` war.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

## Reduzierte Zeitpräzision

Zum Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) kann die Genauigkeit von `playbackEvent.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und hat einen Standardwert von 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Beispielsweise ist mit reduzierter Zeitpräzision das Ergebnis von `playbackEvent.currentTime` stets ein Vielfaches von 0,002, oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
playbackEvent.currentTime;
// Möglicherweise:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
playbackEvent.currentTime;
// Möglicherweise:
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
- {{domxref("AnimationPlayBackEvent")}}
