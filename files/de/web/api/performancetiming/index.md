---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die **`PerformanceTiming`**-Schnittstelle ist eine veraltete Schnittstelle, die aus Gründen der Rückwärtskompatibilität beibehalten wird. Sie enthält Eigenschaften, die Leistungszeitanalyseinformationen für verschiedene Ereignisse bieten, die während des Ladens und der Nutzung der aktuellen Seite auftreten. Sie erhalten ein `PerformanceTiming`-Objekt, das Ihre Seite beschreibt, über die [`window.performance.timing`](/de/docs/Web/API/Performance/timing)-Eigenschaft.

## Instanzeigenschaften

_Die `PerformanceTiming`-Schnittstelle erbt keine Eigenschaften._

Diese Eigenschaften beschreiben jeweils den Zeitpunkt, an dem ein bestimmter Punkt im Seitenladevorgang erreicht wurde. Einige entsprechen DOM-Ereignissen; andere beschreiben die Zeitpunkte, zu denen interne Browser-Operationen von Interesse stattfanden.

Jeder Zeitpunkt wird als eine Zahl angegeben, die den Moment in Millisekunden seit der UNIX-Epoche darstellt.

Diese Eigenschaften sind in der Reihenfolge aufgeführt, in der sie während des Navigationsprozesses auftreten.

- [`PerformanceTiming.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das Unload-Prompt im vorherigen Dokument im selben Browsing-Kontext beendet wird. Gibt es kein vorheriges Dokument, entspricht dieser Wert `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst wird, was den Zeitpunkt angibt, zu dem das vorherige Dokument im Fenster begann zu entladen. Gibt es kein vorheriges Dokument oder ist das vorherige Dokument oder eine der benötigten Umleitungen nicht aus demselben Ursprung, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handler abgeschlossen ist. Gibt es kein vorheriges Dokument oder ist das vorherige Dokument oder eine der benötigten Umleitungen nicht aus demselben Ursprung, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die erste HTTP-Umleitung beginnt. Gibt es keine Umleitung oder ist eine der Umleitungen nicht aus demselben Ursprung, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die letzte HTTP-Umleitung abgeschlossen ist, das heißt, wann das letzte Byte der HTTP-Antwort empfangen wurde. Gibt es keine Umleitung oder ist eine der Umleitungen nicht aus demselben Ursprung, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Moment ist _vor_ der Überprüfung eines Application-Caches.
- [`PerformanceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domänenabfrage beginnt. Wird eine persistente Verbindung verwendet oder die Information aus einem Cache oder einer lokalen Ressource bezogen, wird der Wert der gleiche wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domänenabfrage abgeschlossen ist. Wird eine persistente Verbindung verwendet oder die Information aus einem Cache oder einer lokalen Ressource bezogen, wird der Wert der gleiche wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Meldet die Transportschicht einen Fehler und wird der Verbindungsaufbau erneut gestartet, wird die letzte Startzeit angegeben. Wird eine persistente Verbindung verwendet, wird der Wert der gleiche wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Verbindung im Netzwerk geöffnet ist. Meldet die Transportschicht einen Fehler und wird der Verbindungsaufbau erneut gestartet, wird die letzte Endzeit angegeben. Wird eine persistente Verbindung verwendet, wird der Wert der gleiche wie `PerformanceTiming.fetchStart` sein. Eine Verbindung gilt als geöffnet, wenn der sichere Verbindungs-Handshake oder die SOCKS-Authentifizierung beendet ist.
- [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der sichere Verbindungs-Handshake beginnt. Wird keine solche Verbindung angefordert, gibt sie `0` zurück.
- [`PerformanceTiming.requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser die Anfrage zum Erhalten des tatsächlichen Dokuments entweder vom Server oder aus einem Cache sendet. Schlägt die Transportschicht nach dem Start der Anfrage fehl und wird die Verbindung erneut geöffnet, wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
- [`PerformanceTiming.responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das erste Byte der Antwort vom Server, aus einem Cache oder einer lokalen Ressource empfangen hat.
- [`PerformanceTiming.responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das letzte Byte der Antwort oder wenn die Verbindung geschlossen wird (falls dies zuerst geschieht) vom Server, dem Cache oder einer lokalen Ressource empfangen hat.
- [`PerformanceTiming.domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit begann, das heißt, wenn sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'loading'` ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.
- [`PerformanceTiming.domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser die Arbeit am Hauptdokument beendet hat, das heißt, wenn sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'interactive'` ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.
- [`PerformanceTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt bevor der Parser das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis sendet, das heißt, direkt nachdem alle Skripte, die unmittelbar nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt nachdem alle Skripte, die so schnell wie möglich in beliebiger Reihenfolge ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser die Arbeit am Hauptdokument abgeschlossen hat, das heißt, wenn sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'complete'` ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.
- [`PerformanceTiming.loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, gibt es `0` zurück.
- [`PerformanceTiming.loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler beendet ist, das heißt, wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, gibt es `0` zurück.

## Instanzmethoden

_Die `PerformanceTiming`-Schnittstelle erbt keine Methoden._

- [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) {{Deprecated_Inline}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PerformanceTiming`-Objekt darstellt.

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance.timing`](/de/docs/Web/API/Performance/timing)-Eigenschaft, die ein solches Objekt erstellt.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), das diese API ersetzt hat.
