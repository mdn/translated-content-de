---
title: "IntersectionObserverEntry: time-Eigenschaft"
short-title: time
slug: Web/API/IntersectionObserverEntry/time
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`time`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der die Schnittstellenänderung im Verhältnis zur Erstellungszeit des Dokuments aufgetreten ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Element die in der `IntersectionObserverEntry` beschriebene Schnittstellenänderung erfahren hat. Die Zeit ist in Millisekunden seit der Erstellung des enthaltenen Dokuments angegeben.

## Beispiele

Siehe [Zeitliche Erfassung der Sichtbarkeit von Elementen mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) für ein vollständiges Beispiel, das die `time`-Eigenschaft verwendet, um zu verfolgen, wie lange Elemente für den Nutzer sichtbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
