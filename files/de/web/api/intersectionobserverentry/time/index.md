---
title: "IntersectionObserverEntry: time-Eigenschaft"
short-title: time
slug: Web/API/IntersectionObserverEntry/time
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`time`**-Eigenschaft des {{domxref("IntersectionObserverEntry")}}-Interfaces ist ein
{{domxref("DOMHighResTimeStamp")}}, der angibt, zu welchem Zeitpunkt die Schnittstellenänderung im Verhältnis zum Zeitpunkt der Dokumentenerstellung aufgetreten ist.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt angibt, zu dem das
{{domxref("IntersectionObserverEntry.target", "target")}}-Element die in der `IntersectionObserverEntry` beschriebene Schnittstellenänderung erfuhr. Die Zeit wird in Millisekunden seit der Erstellung des zugehörigen Dokuments angegeben.

## Beispiele

Siehe [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) für ein vollständiges Beispiel, das die `time`-Eigenschaft verwendet, um zu verfolgen, wie lange Elemente für den Benutzer sichtbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
