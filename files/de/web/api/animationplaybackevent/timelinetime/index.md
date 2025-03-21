---
title: "AnimationPlaybackEvent: timelineTime-Eigenschaft"
short-title: timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`timelineTime`**-Schreibgeschützte Eigenschaft des [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)-Interfaces repräsentiert den Zeitwert der [`timeline`](/de/docs/Web/API/AnimationTimeline) der Animation zu dem Zeitpunkt, zu dem das Ereignis in die Warteschlange gestellt wird. Dies wird nicht auflösbar sein, wenn die Animation zum Zeitpunkt der Erstellung des Ereignisses nicht mit einer Timeline verbunden war oder wenn die zugehörige Timeline inaktiv war.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationPlayBackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
