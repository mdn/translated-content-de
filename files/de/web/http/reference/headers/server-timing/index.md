---
title: Server-Timing header
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Server-Timing`**-{{Glossary("response_header", "Antwort-Header")}} kommuniziert ein oder mehrere Leistungskennzahlen über den Anfrage-Antwort-Zyklus an den User-Agent.
Er wird verwendet, um Backend-Server-Timing-Metriken (zum Beispiel Datenbank-Lese-/Schreibzugriffe, CPU-Zeit, Dateisystemzugriffe usw.) in den Entwickler-Tools im Browser des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
// A single metric
Server-Timing: <timing-metric>

// Multiple metrics as a comma-separated list
Server-Timing: <timing-metric>, …, <timing-metricN>
```

Ein `<timing-metric>` hat einen Namen und kann eine optionale Dauer und eine optionale Beschreibung enthalten.
Zum Beispiel:

```http
// A metric with a name only
Server-Timing: missedCache

// A metric with a duration
Server-Timing: cpu;dur=2.4

// A metric with a description and duration
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with duration values
Server-Timing: db;dur=53, app;dur=47.2
```

## Direktiven

- `<timing-metric>`
  - : Eine durch Kommas getrennte Liste von einer oder mehreren Metriken mit den folgenden Komponenten, die durch Semikolon getrennt sind:
    - `<name>`
      - : Ein Namenstoken (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch oder vom Server definiert ist, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als die Zeichenkette `dur`, gefolgt von `=`, gefolgt von einem Wert, wie `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als die Zeichenkette `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder als zitierte Zeichenkette, wie `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (zum Beispiel durch die Verwendung von Abkürzungen und das Weglassen optionaler Werte), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Informationen über Anwendungen und Infrastruktur preisgeben.
Entscheiden Sie, welche Metriken gesendet werden sollen, wann sie gesendet werden sollen und wer sie sehen darf, basierend auf dem Anwendungsfall.
Zum Beispiel können Sie entscheiden, nur authentifizierten Benutzern Metriken anzuzeigen und in öffentlichen Antworten nichts zu zeigen.

### PerformanceServerTiming-Schnittstelle

Zusätzlich zur Anzeige der `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle Tools, Metriken automatisch aus JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf den gleichen Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die Zugriff auf die Server-Metriken haben dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt auf die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Eigenschaften abgebildet:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Beispiele

### Senden einer Metrik mit dem Server-Timing-Header

Die folgende Antwort enthält eine Metrik `custom-metric` mit einer Dauer von `123.45` Millisekunden und einer Beschreibung von "My custom metric":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing als HTTP-Trailer

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}}-Header verwendet, um anzuzeigen, dass ein `Server-Timing`-Header dem Antwortkörper folgen wird.
Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing`-Header als HTTP-Trailer verwenden, um Informationen im Netzwerk-Tab -> Timings anzuzeigen.
> Die Fetch API kann nicht auf HTTP-Trailer zugreifen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}}-Header
