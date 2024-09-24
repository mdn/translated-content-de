---
title: "PerformanceTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceTiming/domInteractive
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist als veraltet in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) eingestuft. Bitte verwenden Sie stattdessen die Schnittstelle {{domxref("PerformanceNavigationTiming")}}.

Die veraltete
**`PerformanceTiming.domInteractive`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche angibt, zu dem der Parser seine Arbeit am Hauptdokument beendet hat, also wenn sich der {{domxref("Document.readyState")}} zu `'interactive'` ändert und das entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis ausgelöst wird.

Diese Eigenschaft kann verwendet werden, um die Ladegeschwindigkeit von Websites zu messen, die Nutzer _fühlen_. Dennoch gibt es einige Vorbehalte, die auftreten, wenn Skripte das Rendering blockieren und nicht asynchron geladen werden oder benutzerdefinierte Webfonts verwendet werden. [Überprüfen Sie, ob Sie in einem dieser Fälle sind](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/), bevor Sie diese Eigenschaft als Indikator für die Benutzererfahrung einer Website-Ladegeschwindigkeit verwenden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle {{domxref("PerformanceTiming")}}, zu der sie gehört.
- Der Artikel "[domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)", der erklärt, wann Sie diese Eigenschaft als Indikator für die Benutzererfahrung beim Laden einer Website verwenden können.
