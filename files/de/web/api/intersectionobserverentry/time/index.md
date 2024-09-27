---
title: "IntersectionObserverEntry: time-Eigenschaft"
short-title: time
slug: Web/API/IntersectionObserverEntry/time
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`time`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, zu welchem Zeitpunkt die Änderung der Überschneidung im Verhältnis zur Erstellung des Dokuments aufgetreten ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem das [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Element die beschriebene Überschneidungsänderung durch das `IntersectionObserverEntry` erfahren hat. Die Zeit wird in Millisekunden seit der Erstellung des enthaltenen Dokuments angegeben.

## Beispiele

Sehen Sie sich [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) für ein vollständiges Beispiel an, das die `time`-Eigenschaft verwendet, um zu verfolgen, wie lange Elemente für den Benutzer sichtbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
