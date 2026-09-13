---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die **`PerformanceTiming`** Schnittstelle ist eine veraltete Schnittstelle, die aus Gründen der Abwärtskompatibilität beibehalten wird und Eigenschaften enthält, die Leistungszeitinformationen für verschiedene Ereignisse bieten, die beim Laden und bei der Nutzung der aktuellen Seite auftreten. Sie erhalten ein `PerformanceTiming`-Objekt, das Ihre Seite beschreibt, über die [`window.performance.timing`](/de/docs/Web/API/Performance/timing) Eigenschaft.

## Instanzeigenschaften

_Die `PerformanceTiming` Schnittstelle erbt keine Eigenschaften._

Diese Eigenschaften beschreiben jeweils den Zeitpunkt, zu dem ein bestimmter Punkt im Ladeprozess der Seite erreicht wurde. Einige der Zeitpunkte entsprechen DOM-Ereignissen; andere beschreiben den Zeitpunkt, zu dem interne Browseroperationen von Interesse stattgefunden haben.

Jeder Zeitpunkt wird als Zahl angegeben, die den Moment in Millisekunden seit der UNIX-Zeit darstellt.

Diese Eigenschaften sind in der Reihenfolge aufgeführt, in der sie während des Navigationsprozesses auftreten.

- [`PerformanceTiming.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Aufforderungsdialog zum Entladen im vorherigen Dokument im gleichen Browsing-Kontext beendet wurde. Wenn es kein vorheriges Dokument gibt, wird dieser Wert derselbe wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis ausgelöst wurde, was den Zeitpunkt angibt, zu dem das vorherige Dokument im Fenster zu entladen begann. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der notwendigen Weiterleitungen nicht von demselben Ursprung stammt, wird der zurückgegebene Wert `0` sein.
- [`PerformanceTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis-Handler beendet ist. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der notwendigen Weiterleitungen nicht von demselben Ursprung stammt, wird der zurückgegebene Wert `0` sein.
- [`PerformanceTiming.redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht von demselben Ursprung stammt, wird der zurückgegebene Wert `0` sein.
- [`PerformanceTiming.redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die letzte HTTP-Weiterleitung abgeschlossen ist, also wann das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht von demselben Ursprung stammt, wird der zurückgegebene Wert `0` sein.
- [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Moment liegt _vor_ der Überprüfung eines Anwendungs-Caches.
- [`PerformanceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domainabfrage beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Quelle gespeichert sind, wird der Wert derselbe wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Domainabfrage abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Quelle gespeichert sind, wird der Wert derselbe wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Anfrage, eine Verbindung zu öffnen, an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Verbindungsaufbau-Startzeit angegeben. Wenn eine persistente Verbindung verwendet wird, wird der Wert derselbe wie `PerformanceTiming.fetchStart` sein.
- [`PerformanceTiming.connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die Verbindung im Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Verbindungsaufbau-Endzeit angegeben. Wenn eine persistente Verbindung verwendet wird, wird der Wert derselbe wie `PerformanceTiming.fetchStart` sein. Eine Verbindung wird als geöffnet betrachtet, wenn alle sicheren Verbindungs-Handshakes oder SOCKS-Authentifizierungen abgeschlossen sind.
- [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann die sichere Verbindungs-Handshakes beginnen. Wenn keine solche Verbindung angefordert wurde, wird `0` zurückgegeben.
- [`PerformanceTiming.requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser die Anfrage zum Abrufen des tatsächlichen Dokuments, vom Server oder aus einem Cache gesendet hat. Wenn die Transportschicht nach dem Start der Anfrage fehlschlägt und die Verbindung erneut geöffnet wird, wird diese Eigenschaft auf die Zeit des neuen Antrags gesetzt.
- [`PerformanceTiming.responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das erste Byte der Antwort vom Server, aus einem Cache oder aus einer lokalen Ressource empfangen hat.
- [`PerformanceTiming.responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Browser das letzte Byte der Antwort empfangen hat oder wann die Verbindung geschlossen wurde, falls dies zuerst geschehen ist, vom Server, dem Cache oder aus einer lokalen Ressource.
- [`PerformanceTiming.domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit begonnen hat, das heißt, wenn der [`Document.readyState`](/de/docs/Web/API/Document/readyState) Zustand auf `'loading'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn der [`Document.readyState`](/de/docs/Web/API/Document/readyState) Zustand auf `'interactive'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Kurz bevor der Parser das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis gesendet hat, das heißt, gleich nachdem alle Skripte, die direkt nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.
- [`PerformanceTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Direkt nachdem alle Skripte, die so schnell wie möglich ausgeführt werden müssen, ob in Reihenfolge oder nicht, ausgeführt wurden.
- [`PerformanceTiming.domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn der [`Document.readyState`](/de/docs/Web/API/Document/readyState) Zustand auf `'complete'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.
- [`PerformanceTiming.loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann das [`load`](/de/docs/Web/API/Window/load_event) Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird `0` zurückgegeben.
- [`PerformanceTiming.loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wann der [`load`](/de/docs/Web/API/Window/load_event) Ereignis-Handler beendet wurde, also wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder noch nicht abgeschlossen ist, wird `0` zurückgegeben.

## Instanzmethoden

_Die `PerformanceTiming`_ _Schnittstelle erbt keine Methoden._

- [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) {{Deprecated_Inline}}
  - : Gibt ein [JSON-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) zurück, das dieses `PerformanceTiming`-Objekt darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance.timing`](/de/docs/Web/API/Performance/timing) Eigenschaft, die ein solches Objekt erstellt.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), das diese API abgelöst hat.
