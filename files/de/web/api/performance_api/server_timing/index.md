---
title: Server-Timing
slug: Web/API/Performance_API/Server_timing
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{DefaultAPISidebar("Performance API")}}

Server-Timing ist ein Teil der Performance API und ermöglicht es Servern, Metriken über den Anforderungs-Antwort-Zyklus an den User Agent zu kommunizieren. Sie können diese Informationen sammeln und serverseitige Metriken genauso auswerten wie alle anderen Metriken, die mit der Performance API verarbeitet werden.

## Senden von Server-Metriken

Der {{HTTPHeader("Server-Timing")}} HTTP-Header wird verwendet, um Backend-Server-Timing-Metriken anzusehen. Beispielsweise möchten Sie möglicherweise Zeiten für Lese-/Schreiboperationen in der Datenbank, CPU-Zeit und Dateisystemzugriff senden.

Sie können Metriken mit oder ohne Werte senden. Die Metriken können optional eine Beschreibung enthalten. Es wird empfohlen, Namen, Beschreibungen und Daten so kurz wie möglich zu halten, um den HTTP-Overhead zu minimieren.

Beispiele für `Server-Timing`-Header:

```http
// Einzelne Metrik ohne Wert
Server-Timing: missedCache

// Einzelne Metrik mit Wert
Server-Timing: cpu;dur=2.4

// Einzelne Metrik mit Beschreibung und Wert
Server-Timing: cache;desc="Cache Read";dur=23.2

// Zwei Metriken mit Werten
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing als Trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

Um echte serverseitige Metriken zu berechnen, konsultieren Sie die Dokumentation Ihres serverseitigen CMS, Frameworks oder Ihrer Programmiersprache, um zu erfahren, wie Sie Leistung innerhalb der Backend-Anwendung messen können. Wenn Ihr Server Node.js verwendet, werden Ihnen die Performance-Messungs-APIs sehr vertraut vorkommen, da das Node.js-Performance-Modul ein Subset der W3C-Web-Performance-APIs sowie zusätzliche APIs für Node.js-spezifische Performance-Messungen ist. Weitere Informationen finden Sie in der [Node.js Performance-Dokumentation](https://nodejs.org/api/perf_hooks.html#performance-measurement-apis).

Beachten Sie, dass es keine Uhrensynchronisation zwischen dem Server, dem Client und etwaigen Zwischen-Proxys gibt. Das bedeutet, dass wenn Ihr Server Zeitstempel oder `startTime` sendet, der Wert möglicherweise nicht sinnvoll der {{domxref("PerformanceEntry.startTime", "startTime")}} der Zeitleiste des Clients zugeordnet werden kann.

Sobald Sie Ihre gewünschten Metriken berechnet haben, muss der Server den `Server-Timing`-Header in seiner Antwort senden. Weitere Informationen finden Sie auf der {{HTTPHeader("Server-Timing")}} Referenzseite, wie Sie den Header in Node.js senden.

## Abrufen von Server-Metriken

Die Server-Timing-Metriken erscheinen normalerweise in den Entwicklerwerkzeugen des Browsers, werden aber auch als {{domxref("PerformanceServerTiming")}} Performance-Einträge gespeichert, auf die Sie wie auf andere [Performancedaten](/de/docs/Web/API/Performance_API/Performance_data) zugreifen können. Es gibt jedoch keine eigenen `"server-timing"`-Einträge. Die `PerformanceServerTiming`-Objekte sind von `"navigation"` und `"resource"` Performance-Einträgen aus beobachtbar. Sie greifen auf die Server-Metriken über die {{domxref("PerformanceResourceTiming.serverTiming")}}-Eigenschaft zu, die ein Array von `PerformanceServerTiming`-Objekten ist.

Angenommen, Sie haben einen {{HTTPHeader("Server-Timing")}} wie diesen:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2,db;dur=53,app;dur=47.2
```

Ein `PerformanceObserver` kann die Einträge auf der Client-Seite mit folgendem Code protokollieren:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`,
      );
      // Protokolliert "cache (Cache Read) duration: 23.2"
      // Protokolliert "db () duration: 53"
      // Protokolliert "app () duration: 47.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

## Datenschutz- und Sicherheitsüberlegungen

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturinformationen preisgeben. Daher müssen Sie steuern, wann die Metriken zurückgegeben werden und an wen auf der Serverseite. Beispielsweise könnten Sie Metriken nur authentifizierten Benutzern zeigen und nichts der Öffentlichkeit.

Die `PerformanceServerTiming`-Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen festzulegen, die auf die Server-Metriken zugreifen dürfen. Beachten Sie auch, dass diese Schnittstelle nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar ist.
