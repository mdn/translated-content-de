---
title: Server-Timing header
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Server-Timing`** {{Glossary("response_header", "Antwort-Header")}} kommuniziert ein oder mehrere Leistungsmetriken des Anforderungs-Antwort-Zyklus an den User-Agent. Er wird verwendet, um auf Backend-Server-Leistungsmetriken (z.B. Datenbank-Lese-/Schreibvorgänge, CPU-Zeit, Dateisystemzugriff usw.) in den Entwicklertools des Browsers des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle aufmerksam zu machen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Eine durch Kommas getrennte Liste von einer oder mehreren Metriken mit den folgenden durch Semikolons getrennten Komponenten:
    - `<name>`
      - : Ein Name-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch oder serverdefiniert ist, wie z.B. `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als der String `dur`, gefolgt von `=`, gefolgt von einem Wert, wie z.B. `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als der String `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder einem in Anführungszeichen gesetzten String, wie z.B. `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (z.B. Abkürzungen verwenden und optionale Werte weglassen), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturinformationen preisgeben. Entscheiden Sie, welche Metriken gesendet werden sollen, wann sie gesendet werden sollen und wer sie basierend auf dem Anwendungsfall sehen darf. Beispielsweise können Sie entscheiden, Metriken nur authentifizierten Benutzern anzuzeigen und keine auf öffentlichen Antworten.

### PerformanceServerTiming-Schnittstelle

Neben dem Auftreten von `Server-Timing`-Header-Metriken in den Entwicklertools des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle es Werkzeugen, Metriken automatisch aus JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den Header {{HTTPHeader("Timing-Allow-Origin")}} verwenden, um die Domänen anzugeben, die Zugriff auf die Servermetriken haben dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers entsprechen den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Eigenschaften wie folgt:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Beispiele

### Senden einer Metrik mit dem Server-Timing-Header

Die folgende Antwort enthält eine Metrik `custom-metric` mit einer Dauer von `123.45` Millisekunden und einer Beschreibung "My custom metric":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing als HTTP-Trailer

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}} Header verwendet, um anzugeben, dass ein `Server-Timing`-Header dem Antwortkörper folgen wird. Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing`-Header als HTTP-Trailer verwenden, um Informationen im Tab Netzwerk -> Timings anzuzeigen. Die Fetch API kann auf HTTP-Trailer nicht zugreifen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}} Header
