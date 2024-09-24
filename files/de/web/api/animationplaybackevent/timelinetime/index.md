---
title: "AnimationPlaybackEvent: timelineTime-Eigenschaft"
short-title: timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte Eigenschaft **`timelineTime`** des {{domxref("AnimationPlaybackEvent")}}-Interfaces stellt den Zeitwert der Animation auf der {{domxref("AnimationTimeline", "Zeitleiste")}} zu dem Zeitpunkt dar, zu dem das Ereignis in die Warteschlange gestellt wird. Dieser Wert ist nicht aufgelöst, wenn die Animation zum Zeitpunkt der Ereigniserzeugung nicht mit einer Zeitleiste verknüpft war oder wenn die zugehörige Zeitleiste inaktiv war.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("AnimationTimeline")}}
