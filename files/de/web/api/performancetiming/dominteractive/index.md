---
title: "PerformanceTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceTiming/domInteractive
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.domInteractive`**
gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit dem UNIX-Epoch darstellt, an dem der Parser seine Arbeit am Hauptdokument abgeschlossen hat. Das bedeutet, wenn [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'interactive'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.

Diese Eigenschaft kann verwendet werden, um die Geschwindigkeit des Ladens von Websites zu messen, die Benutzer _fühlen_. Es gibt jedoch einige Vorbehalte, die auftreten können, wenn Skripte das Rendering blockieren und nicht asynchron oder mit benutzerdefinierten Web-Schriftarten geladen werden. [Überprüfen Sie, ob Sie in einer dieser Situationen sind](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/), bevor Sie diese Eigenschaft als Proxy für die Benutzererfahrung der Ladegeschwindigkeit einer Website verwenden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
- Der Artikel "[domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)" erklärt, wann Sie diese Eigenschaft als Proxy für die Benutzererfahrung beim Laden einer Website verwenden können.
