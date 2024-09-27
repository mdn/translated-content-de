---
title: "PerformanceTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceTiming/domInteractive
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Dieses Interface dieser Eigenschaft ist im [Navigation Timing Level 2, Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Interface.

Die veraltete
**`PerformanceTiming.domInteractive`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, in dem der Parser seine Arbeit am Hauptdokument abgeschlossen hat, das heißt, wenn sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu
`'interactive'` ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.

Diese Eigenschaft kann verwendet werden, um die Geschwindigkeit des Ladens von Websites zu messen, die Benutzer _fühlen_. Dennoch gibt es einige Vorbehalte, die auftreten, wenn Skripte das Rendern blockieren und nicht asynchron oder mit benutzerdefinierten Web-Schriftarten geladen werden. [Prüfen Sie, ob Sie in einem dieser Fälle sind](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/), bevor Sie diese Eigenschaft als Stellvertreter für die Benutzererfahrung der Ladegeschwindigkeit einer Website verwenden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Interface, zu dem es gehört.
- Der Artikel "[domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)", der erklärt, wann Sie diese Eigenschaft als Stellvertreter für die Benutzererfahrung beim Laden einer Website verwenden können.
