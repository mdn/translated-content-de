---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Dieses Interface ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte benutzen Sie stattdessen das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Interface.

Das **`PerformanceTiming`** Interface ist ein veraltetes Interface, das zur Rückwärtskompatibilität beibehalten wird und Eigenschaften enthält, die Leistungszeitinformationen für verschiedene Ereignisse bieten, die während des Ladens und der Nutzung der aktuellen Seite auftreten. Sie erhalten ein `PerformanceTiming` Objekt, das Ihre Seite beschreibt, indem Sie die [`window.performance.timing`](/de/docs/Web/API/Performance/timing) Eigenschaft verwenden.

## Instanz-Eigenschaften

_Das `PerformanceTiming` Interface erbt keine Eigenschaften._

Diese Eigenschaften beschreiben jeweils den Zeitpunkt, zu dem ein bestimmter Punkt im Seitenladeprozess erreicht wurde. Einige entsprechen DOM-Ereignissen; andere beschreiben den Zeitpunkt, zu dem interne Browser-Operationen von Interesse stattfanden.

Jede Zeit wird als Zahl angegeben, die den Moment in Millisekunden seit der UNIX-Epoche repräsentiert.

Diese Eigenschaften sind in der Reihenfolge aufgelistet, in der sie während des Navigationsprozesses auftreten.

- [`PerformanceTiming.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der "prompt for unload"-Prozess im vorherigen Dokument im gleichen Browsing-Kontext beendet wird. Wenn es kein vorheriges Dokument gibt, ist dieser Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis ausgelöst wurde, was den Zeitpunkt anzeigt, zu dem das vorherige Dokument im Fenster begann, sich zu entladen. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder einer der benötigten Weiterleitungen nicht von gleichem Ursprung ist, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`unload`](/de/docs/Web/API/Window/unload_event) Ereignishandler beendet ist. Falls es kein vorheriges Dokument gibt oder falls das vorherige Dokument oder eine der benötigten Weiterleitungen nicht von gleichem Ursprung ist, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht von gleichem Ursprung ist, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die letzte HTTP-Weiterleitung abgeschlossen ist, d.h. wann das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht von gleichem Ursprung ist, wird der Wert `0` zurückgegeben.
- [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dies ist der Moment _vor_ der Überprüfung des Anwendungs-Caches.
- [`PerformanceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Domain-Lookup beginnt. Wenn eine bestehende Verbindung verwendet wird oder die Information im Cache oder in einer lokalen Ressource gespeichert ist, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Domain-Lookup abgeschlossen ist. Wenn eine bestehende Verbindung verwendet wird oder die Information im Cache oder in einer lokalen Ressource gespeichert ist, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Anfrage, eine Verbindung zu öffnen, ans Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird der Zeitpunkt des letzten Verbindungsaufbaus angegeben. Wenn eine bestehende Verbindung verwendet wird, ist der Wert derselbe wie `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Verbindung im Netzwerk geöffnet ist. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird der Zeitpunkt des letzten Verbindungsabschlusses angegeben. Wenn eine bestehende Verbindung verwendet wird, ist der Wert derselbe wie `PerformanceTiming.fetchStart`. Eine Verbindung wird als geöffnet betrachtet, wenn die gesamte sichere Verbindungs-Handschlag oder SOCKS-Authentifizierung abgeschlossen ist.
- [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der sichere Verbindungs-Handschlag beginnt. Wenn keine solche Verbindung angefordert wird, wird `0` zurückgegeben.
- [`PerformanceTiming.requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser die Anfrage zum Abrufen des eigentlichen Dokuments, vom Server oder aus einem Cache, gesendet hat. Wenn die Transportschicht nach Beginn der Anfrage fehlschlägt und die Verbindung neu geöffnet wird, wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.
- [`PerformanceTiming.responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das erste Byte der Antwort vom Server, aus einem Cache oder von einer lokalen Ressource erhält.
- [`PerformanceTiming.responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das letzte Byte der Antwort erhält oder wann die Verbindung geschlossen wird, wenn dies zuerst geschieht, vom Server, dem Cache oder von einer lokalen Ressource.
- [`PerformanceTiming.domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit begonnen hat, das heißt, wenn [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'loading'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'interactive'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt bevor der Parser das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis sendet, das heißt direkt nachdem alle Skripte, die direkt nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt nachdem alle Skripte, die so schnell wie möglich nacheinander oder nicht ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'complete'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`load`](/de/docs/Web/API/Window/load_event) Ereignis für das aktuelle Dokument gesendet wurde. Falls dieses Ereignis noch nicht gesendet wurde, wird `0` zurückgegeben.
- [`PerformanceTiming.loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler beendet ist, das heißt, wann das Ladeereignis abgeschlossen ist. Falls dieses Ereignis noch nicht gesendet oder noch nicht abgeschlossen ist, wird `0` zurückgegeben.

## Instanz-Methoden

_Das `PerformanceTiming`_ _Interface erbt keine Methoden._

- [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) {{Deprecated_Inline}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PerformanceTiming` Objekt darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance.timing`](/de/docs/Web/API/Performance/timing) Eigenschaft, die ein solches Objekt erstellt.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil der Navigation Timing Level 2), das diese API abgelöst hat.
