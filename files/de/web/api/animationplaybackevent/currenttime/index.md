---
title: "AnimationPlaybackEvent: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{ APIRef("Web Animations") }}

Die **`currentTime`**-Schreibgeschützte Eigenschaft des [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)-Interfaces repräsentiert die aktuelle Zeit der Animation, die das Ereignis generiert hat, in dem Moment, in dem das Ereignis in die Warteschlange gestellt wurde. Bei browsergenerierten `cancel`-Ereignissen ist der Wert `null`.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

Wenn ein Wert an den [`AnimationPlaybackEvent()`](/de/docs/Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent)-Konstruktor übergeben wird, wendet Chrome und Firefox keine Timer-Rundung auf den zurückgegebenen Wert an. In Safari rundet der Browser den zurückgegebenen Wert auf 0,001 ms, die Auflösung, die zur Darstellung von Animationszeiten verwendet wird.

Bei browsergenerierten `finish`- und `remove`-Ereignissen erbt diese Eigenschaft den Wert und die Präzision von [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime), wenn das Ereignis in die Warteschlange gestellt wird, ohne zusätzliche Ungenauigkeit einzuführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationPlayBackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)
