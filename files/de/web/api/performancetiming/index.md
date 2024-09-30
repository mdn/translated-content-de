---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die **`PerformanceTiming`** Schnittstelle ist eine veraltete Schnittstelle, die aus Gründen der Rückwärtskompatibilität beibehalten wurde. Sie enthält Eigenschaften, die Leistungszeitinformationen für verschiedene Ereignisse bieten, die während des Ladens und der Nutzung der aktuellen Seite auftreten. Sie erhalten ein `PerformanceTiming`-Objekt, das Ihre Seite beschreibt, über die [`window.performance.timing`](/de/docs/Web/API/Performance/timing)-Eigenschaft.

## Instanzeigenschaften

_Die `PerformanceTiming`-Schnittstelle erbt keine Eigenschaften._

Diese Eigenschaften beschreiben jeweils den Zeitpunkt, zu dem ein bestimmter Punkt im Seitenladeprozess erreicht wurde. Einige der Punkte entsprechen DOM-Ereignissen; andere beschreiben den Zeitpunkt, zu dem interne Browseroperationen von Interesse stattfanden.

Jede Zeit wird als Zahl angegeben, die den Moment in Millisekunden seit der UNIX-Epoche repräsentiert.

Diese Eigenschaften sind in der Reihenfolge aufgelistet, in der sie während des Navigationsprozesses auftreten.

- [`PerformanceTiming.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das Entladen des vorherigen Dokuments im gleichen Browserkontext endet. Wenn es kein vorheriges Dokument gibt, ist dieser Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis geworfen wurde, was den Zeitpunkt angibt, zu dem das vorherige Dokument im Fenster begann, sich zu entladen. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der benötigten Umleitungen nicht von der gleichen Herkunft ist, ist der zurückgegebene Wert `0`.
- [`PerformanceTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler beendet ist. Wenn es kein vorheriges Dokument gibt, oder wenn das vorherige Dokument oder eine der benötigten Umleitungen nicht von der gleichen Herkunft ist, ist der zurückgegebene Wert `0`.
- [`PerformanceTiming.redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die erste HTTP-Umleitung beginnt. Wenn es keine Umleitung gibt oder eine der Umleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert `0`.
- [`PerformanceTiming.redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die letzte HTTP-Umleitung abgeschlossen ist, das heißt, wann das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Umleitung gibt oder eine der Umleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert `0`.
- [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Zeitpunkt ist _vor_ der Überprüfung eines Anwendungscaches.
- [`PerformanceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domänensuche beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domänensuche beendet ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungsherstellung erneut gestartet wird, wird der letzte Zeitpunkt des Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Verbindung im Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungsherstellung erneut gestartet wird, wird der letzte Zeitpunkt des Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie `PerformanceTiming.fetchStart`. Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen beendet sind.
- [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der sichere Verbindungshandshake beginnt. Wenn keine solche Verbindung angefordert wird, wird `0` zurückgegeben.
- [`PerformanceTiming.requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser die Anfrage gesendet hat, um das eigentliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach dem Start der Anfrage fehlschlägt und die Verbindung wiederhergestellt wird, wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
- [`PerformanceTiming.responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das erste Byte der Antwort vom Server, aus einem Cache oder aus einer lokalen Ressource erhalten hat.
- [`PerformanceTiming.responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das letzte Byte der Antwort erhalten hat oder wann die Verbindung geschlossen wurde, falls dies früher geschah, vom Server, aus dem Cache oder aus einer lokalen Ressource.
- [`PerformanceTiming.domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit begonnen hat, das heißt, wann sein [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'loading'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis geworfen wird.
- [`PerformanceTiming.domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wann sein [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'interactive'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis geworfen wird.
- [`PerformanceTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt bevor der Parser das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis gesendet hat, das heißt, direkt nachdem alle Skripte, die sofort nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt nachdem alle Skripte, die so schnell wie möglich ausgeführt werden müssen, in Ordnung oder nicht, ausgeführt wurden.
- [`PerformanceTiming.domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wann sein [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'complete'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis geworfen wird.
- [`PerformanceTiming.loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`load`](/de/docs/Web/API/Window/load_event) Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird `0` zurückgegeben.
- [`PerformanceTiming.loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler beendet ist, das heißt, wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet wurde oder noch nicht abgeschlossen ist, wird `0` zurückgegeben.

## Instanzmethoden

_Die `PerformanceTiming`_ _Schnittstelle erbt keine Methoden._

- [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) {{Deprecated_Inline}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PerformanceTiming`-Objekt darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance.timing`](/de/docs/Web/API/Performance/timing)-Eigenschaft, die ein solches Objekt erstellt.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil der Navigation Timing Level 2), die diese API abgelöst hat.
