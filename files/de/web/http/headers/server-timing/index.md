---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Server-Timing`** {{Glossary("response_header", "Antwort-Header")}} kommuniziert ein oder mehrere Leistungskennzahlen über den Anforderungs-Antwort-Zyklus an den User-Agent.
Er wird verwendet, um Backend-Server-Timing-Metriken (zum Beispiel Datenbank-Lese/Schreibvorgänge, CPU-Zeit, Dateizugriff etc.) in den Entwicklerwerkzeugen im Browser des Nutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine durch Kommas getrennte Liste von einem oder mehreren Metriken mit den folgenden Komponenten, die durch Semikolons getrennt sind:
    - `<name>`
      - : Ein Name-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch oder durch den Server definiert ist, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als Zeichenkette `dur`, gefolgt von `=`, gefolgt von einem Wert, wie `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als Zeichenkette `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder in Anführungszeichen, wie `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (zum Beispiel Abkürzungen verwenden und optionale Werte weglassen), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing` Header kann potenziell sensible Informationen über Anwendungen und Infrastrukturen offenlegen.
Entscheiden Sie basierend auf dem Anwendungsfall, welche Metriken gesendet werden, wann sie gesendet werden, und wer sie sehen darf.
Zum Beispiel könnten Sie entscheiden, Metriken nur authentifizierten Benutzern anzuzeigen und nichts bei öffentlichen Antworten.

### PerformanceServerTiming Schnittstelle

Zusätzlich zu den `Server-Timing` Header-Metriken, die in den Entwicklerwerkzeugen des Browsers erscheinen, ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle, dass Werkzeuge automatisch Metriken von JavaScript sammeln und verarbeiten. Diese Schnittstelle ist auf dasselbe Origin beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}} Header verwenden, um die Domains anzugeben, die auf die Servermetriken zugreifen dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing` Headers ordnen sich den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Eigenschaften wie folgt zu:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Beispiele

### Senden einer Metrik unter Verwendung des Server-Timing-Headers

Die folgende Antwort enthält eine Metrik `custom-metric` mit einer Dauer von `123.45` Millisekunden und einer Beschreibung "My custom metric":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing als HTTP-Trailer

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}} Header verwendet, um anzugeben, dass ein `Server-Timing` Header nach dem Antwort-Body folgt.
Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing` Header als HTTP-Trailer verwenden, um Informationen im Tab Netzwerk -> Timings anzuzeigen.
> Die Fetch API kann nicht auf HTTP-Trailer zugreifen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}} Header
