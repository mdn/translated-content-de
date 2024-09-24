---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die Schnittstelle {{domxref("PerformanceNavigationTiming")}}.

Die **`PerformanceTiming`** Schnittstelle ist eine veraltete Schnittstelle, die aus Gründen der Abwärtskompatibilität beibehalten wird und Eigenschaften enthält, die Leistungszeitinformationen für verschiedene Ereignisse bieten, die während des Ladens und der Nutzung der aktuellen Seite auftreten. Sie erhalten ein `PerformanceTiming`-Objekt, das Ihre Seite beschreibt, indem Sie die Eigenschaft {{domxref("Performance.timing", "window.performance.timing")}} verwenden.

## Instanzeigenschaften

_Die `PerformanceTiming`-Schnittstelle erbt keine Eigenschaften._

Diese Eigenschaften beschreiben jeweils den Zeitpunkt, zu dem ein bestimmter Punkt im Seitenladeprozess erreicht wurde. Einige entsprechen DOM-Ereignissen; andere beschreiben den Zeitpunkt, zu dem interne Browseroperationen von Interesse stattgefunden haben.

Jede Zeit wird als Zahl angegeben, die den Moment in Millisekunden seit dem UNIX-Epoch repräsentiert.

Diese Eigenschaften sind in der Reihenfolge aufgeführt, in der sie während des Navigationsprozesses auftreten.

- {{domxref("PerformanceTiming.navigationStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Prompt für das Unladen beim vorherigen Dokument im gleichen Browsing-Kontext endet. Wenn es kein vorheriges Dokument gibt, entspricht dieser Wert `PerformanceTiming.fetchStart`.
- {{domxref("PerformanceTiming.unloadEventStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das {{domxref("Window/unload_event", "unload")}}-Ereignis ausgelöst wurde und den Zeitpunkt angibt, zu dem das vorherige Dokument im Fenster zu entladen beginnt. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.
- {{domxref("PerformanceTiming.unloadEventEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der {{domxref("Window/unload_event", "unload")}}-Ereignishandler endet. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.
- {{domxref("PerformanceTiming.redirectStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.
- {{domxref("PerformanceTiming.redirectEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die letzte HTTP-Weiterleitung abgeschlossen ist, d.h. wenn das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.
- {{domxref("PerformanceTiming.fetchStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Zeitpunkt liegt _vor_ der Überprüfung eines Anwendungscaches.
- {{domxref("PerformanceTiming.domainLookupStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Domain-Lookup beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, entspricht der Wert `PerformanceTiming.fetchStart`.
- {{domxref("PerformanceTiming.domainLookupEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Domain-Lookup abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, entspricht der Wert `PerformanceTiming.fetchStart`.
- {{domxref("PerformanceTiming.connectStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die Anfrage, eine Verbindung zu öffnen, an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die Zeit des letzten Verbindungsaufbau-Beginns angegeben. Wenn eine persistente Verbindung verwendet wird, entspricht der Wert `PerformanceTiming.fetchStart`.
- {{domxref("PerformanceTiming.connectEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die Verbindung zum Netzwerk geöffnet ist. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die Zeit des letzten Verbindungsaufbau-Endes angegeben. Wenn eine persistente Verbindung verwendet wird, entspricht der Wert `PerformanceTiming.fetchStart`. Eine Verbindung wird als geöffnet betrachtet, wenn alle sicheren Verbindungs-Handshakes oder SOCKS-Authentifizierungen abgeschlossen sind.
- {{domxref("PerformanceTiming.secureConnectionStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der sichere Verbindungs-Handshake beginnt. Wenn keine solche Verbindung angefordert wird, gibt es `0` zurück.
- {{domxref("PerformanceTiming.requestStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser die Anfrage gesendet hat, um das tatsächliche Dokument vom Server oder aus einem Cache abzurufen. Wenn die Transportschicht nach Beginn der Anfrage fehlschlägt und die Verbindung erneut geöffnet wird, wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
- {{domxref("PerformanceTiming.responseStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser das erste Byte der Antwort vom Server, aus einem Cache oder einer lokalen Ressource erhält.
- {{domxref("PerformanceTiming.responseEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser das letzte Byte der Antwort erhält, oder wenn die Verbindung geschlossen wird, sollte dies zuerst vom Server, Cache oder einer lokalen Ressource erfolgen.
- {{domxref("PerformanceTiming.domLoading")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit beginnt, d.h. wenn sich der {{domxref("Document.readyState")}} auf `'loading'` ändert und das entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis ausgelöst wird.
- {{domxref("PerformanceTiming.domInteractive")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit am Hauptdokument beendet, d.h. wenn sich der {{domxref("Document.readyState")}} auf `'interactive'` ändert und das entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis ausgelöst wird.
- {{domxref("PerformanceTiming.domContentLoadedEventStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Unmittelbar bevor der Parser das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis sendet, d.h. direkt nachdem alle Skripte, die direkt nach der Analyse ausgeführt werden müssen, ausgeführt wurden.
- {{domxref("PerformanceTiming.domContentLoadedEventEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt nachdem alle Skripte, die so schnell wie möglich ausgeführt werden müssen, in der richtigen Reihenfolge oder nicht, ausgeführt wurden.
- {{domxref("PerformanceTiming.domComplete")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit am Hauptdokument beendet, d.h. wenn sich der {{domxref("Document.readyState")}} auf `'complete'` ändert und das entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis ausgelöst wird.
- {{domxref("PerformanceTiming.loadEventStart")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das {{domxref("Window/load_event", "load")}}-Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, gibt es `0` zurück.
- {{domxref("PerformanceTiming.loadEventEnd")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der {{domxref("Window/load_event", "load")}}-Ereignishandler beendet wurde, d.h. wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, gibt es `0` zurück.

## Instanzmethoden

_Die `PerformanceTiming`_-Schnittstelle erbt keine Methoden._

- {{domxref("PerformanceTiming.toJSON()")}} {{Deprecated_Inline}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PerformanceTiming`-Objekt repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Performance.timing")}} Eigenschaft, die ein solches Objekt erstellt.
- {{domxref("PerformanceNavigationTiming")}} (Teil von Navigation Timing Level 2), die diese API ersetzt hat.
