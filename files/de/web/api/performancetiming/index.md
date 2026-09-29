---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle ist in der [Spezifikation Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete) als veraltet eingestuft. Verwenden Sie stattdessen die Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming).

Die Schnittstelle **`PerformanceTiming`** ist eine ältere Schnittstelle, die aus Gründen der Abwärtskompatibilität beibehalten wurde. Ihre Eigenschaften liefern Informationen zum zeitlichen Ablauf verschiedener Ereignisse beim Laden und Verwenden der aktuellen Seite. Über die Eigenschaft [`window.performance.timing`](/de/docs/Web/API/Performance/timing) erhalten Sie ein `PerformanceTiming`-Objekt, das Ihre Seite beschreibt.

## Instanzeigenschaften

_Die Schnittstelle `PerformanceTiming` erbt keine Eigenschaften._

Jede dieser Eigenschaften gibt den Zeitpunkt an, zu dem ein bestimmter Punkt beim Laden der Seite erreicht wurde. Einige entsprechen DOM-Ereignissen; andere beschreiben den Zeitpunkt, zu dem relevante interne Browservorgänge stattfanden.

Jeder Zeitpunkt wird als Zahl angegeben, die die Millisekunden seit der UNIX-Epoche angibt.

Die Eigenschaften sind in der Reihenfolge aufgeführt, in der sie während der Navigation auftreten.

- [`PerformanceTiming.navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die Aufforderung zum Entladen des vorherigen Dokuments im selben Browsing-Kontext abgeschlossen ist. Gibt es kein vorheriges Dokument, entspricht dieser Wert `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das Ereignis [`unload`](/de/docs/Web/API/Window/unload_event) ausgelöst wurde. Dies bezeichnet den Zeitpunkt, zu dem das Entladen des vorherigen Dokuments im Fenster begann. Gibt es kein vorheriges Dokument oder hat das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht denselben Ursprung, wird `0` zurückgegeben.
- [`PerformanceTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Event-Handler für [`unload`](/de/docs/Web/API/Window/unload_event) abgeschlossen ist. Gibt es kein vorheriges Dokument oder hat das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht denselben Ursprung, wird `0` zurückgegeben.
- [`PerformanceTiming.redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die erste HTTP-Weiterleitung beginnt. Gibt es keine Weiterleitung oder hat eine der Weiterleitungen nicht denselben Ursprung, wird `0` zurückgegeben.
- [`PerformanceTiming.redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die letzte HTTP-Weiterleitung abgeschlossen ist, also das letzte Byte der HTTP-Antwort empfangen wurde. Gibt es keine Weiterleitung oder hat eine der Weiterleitungen nicht denselben Ursprung, wird `0` zurückgegeben.
- [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser bereit ist, das Dokument mit einer HTTP-Anfrage abzurufen. Dieser Zeitpunkt liegt _vor_ der Prüfung des Anwendungscaches.
- [`PerformanceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die DNS-Abfrage beginnt. Wird eine bestehende Verbindung verwendet oder sind die Informationen in einem Cache oder einer lokalen Ressource gespeichert, entspricht der Wert `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die DNS-Abfrage abgeschlossen ist. Wird eine bestehende Verbindung verwendet oder sind die Informationen in einem Cache oder einer lokalen Ressource gespeichert, entspricht der Wert `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Meldet die Transportschicht einen Fehler und wird der Verbindungsaufbau erneut gestartet, wird der Startzeitpunkt des letzten Verbindungsaufbaus angegeben. Wird eine bestehende Verbindung verwendet, entspricht der Wert `PerformanceTiming.fetchStart`.
- [`PerformanceTiming.connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn die Netzwerkverbindung geöffnet ist. Meldet die Transportschicht einen Fehler und wird der Verbindungsaufbau erneut gestartet, wird der Endzeitpunkt des letzten Verbindungsaufbaus angegeben. Wird eine bestehende Verbindung verwendet, entspricht der Wert `PerformanceTiming.fetchStart`. Eine Verbindung gilt als geöffnet, wenn alle Handshakes für sichere Verbindungen oder die SOCKS-Authentifizierung abgeschlossen sind.
- [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Handshake für eine sichere Verbindung beginnt. Wird keine solche Verbindung angefordert, wird `0` zurückgegeben.
- [`PerformanceTiming.requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser die Anfrage zum Abrufen des eigentlichen Dokuments an den Server oder einen Cache gesendet hat. Tritt nach Beginn der Anfrage ein Fehler in der Transportschicht auf und wird die Verbindung erneut geöffnet, wird diese Eigenschaft auf den Zeitpunkt der neuen Anfrage gesetzt.
- [`PerformanceTiming.responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser das erste Byte der Antwort vom Server, aus einem Cache oder aus einer lokalen Ressource empfangen hat.
- [`PerformanceTiming.responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Browser das letzte Byte der Antwort vom Server, aus dem Cache oder aus einer lokalen Ressource empfangen hat oder, falls dies früher geschieht, wenn die Verbindung geschlossen wird.
- [`PerformanceTiming.domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit begonnen hat, also wenn sich [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'loading'` ändert und das entsprechende Ereignis [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) ausgelöst wird.
- [`PerformanceTiming.domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit am Hauptdokument abgeschlossen hat, also wenn sich [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'interactive'` ändert und das entsprechende Ereignis [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) ausgelöst wird.
- [`PerformanceTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Unmittelbar bevor der Parser das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) auslöst, also unmittelbar nachdem alle Skripte ausgeführt wurden, die direkt nach dem Parsen ausgeführt werden müssen.
- [`PerformanceTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Unmittelbar nachdem alle Skripte ausgeführt wurden, die so bald wie möglich ausgeführt werden müssen, unabhängig davon, ob dies in einer festgelegten Reihenfolge geschieht.
- [`PerformanceTiming.domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Parser seine Arbeit am Hauptdokument abgeschlossen hat, also wenn sich [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'complete'` ändert und das entsprechende Ereignis [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) ausgelöst wird.
- [`PerformanceTiming.loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn das Ereignis [`load`](/de/docs/Web/API/Window/load_event) für das aktuelle Dokument ausgelöst wurde. Wurde dieses Ereignis noch nicht ausgelöst, wird `0` zurückgegeben.
- [`PerformanceTiming.loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wenn der Event-Handler für [`load`](/de/docs/Web/API/Window/load_event) abgeschlossen ist und damit das Ladeereignis vollständig verarbeitet wurde. Wurde dieses Ereignis noch nicht ausgelöst oder ist seine Verarbeitung noch nicht abgeschlossen, wird `0` zurückgegeben.

## Instanzmethoden

_Die Schnittstelle `PerformanceTiming` erbt keine Methoden._

- [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) {{Deprecated_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaft [`Performance.timing`](/de/docs/Web/API/Performance/timing), die ein solches Objekt erstellt.
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) (Teil von Navigation Timing Level 2), das diese API abgelöst hat.
