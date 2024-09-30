---
title: "PerformanceTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceTiming/domInteractive
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, nur-lesende
**`PerformanceTiming.domInteractive`**-Eigenschaft gibt ein `unsigned long long` zurück, das den Moment repräsentiert, in Millisekunden seit der UNIX-Epoche, wenn der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn dessen [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'interactive'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.

Diese Eigenschaft kann verwendet werden, um die Geschwindigkeit des Ladens von Websites zu messen, die Benutzer _fühlen_. Dennoch gibt es ein paar Einschränkungen, die auftreten, wenn Skripte das Rendering blockieren und nicht asynchron oder mit benutzerdefinierten Webfonts geladen werden. [Prüfen Sie, ob Sie in einem dieser Fälle sind](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/), bevor Sie diese Eigenschaft als Stellvertreter für die Benutzererfahrung der Ladegeschwindigkeit einer Website verwenden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
- Der Artikel "[domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)" erklärt, wann Sie diese Eigenschaft als Stellvertreter für die Benutzererfahrung beim Laden einer Website verwenden können.
