---
title: Server-Timing header
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Der HTTP-**`Server-Timing`**-{{Glossary("response_header", "Antwortheader")}} kommuniziert ein oder mehrere Leistungsmetriken über den Anforderungs-/Antwortzyklus an den Benutzeragenten. Er wird verwendet, um Metriken zur Serverleistung im Backend (z. B. Datenbank-Lese-/Schreibvorgänge, CPU-Zeit, Dateisystemzugriffe usw.) in den Entwicklerwerkzeugen des Browsers des Benutzers oder im [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Interface darzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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

Ein `<timing-metric>` hat einen Namen und kann eine optionale Dauer sowie eine optionale Beschreibung enthalten. Zum Beispiel:

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
  - : Eine durch Kommas getrennte Liste von einer oder mehreren Metriken mit den folgenden Komponenten, getrennt durch Semikolons:
    - `<name>`
      - : Ein Name-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch oder vom Server definiert ist, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als Zeichenkette `dur`, gefolgt von `=`, gefolgt von einem Wert, zum Beispiel `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als Zeichenkette `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder einem Anführungszeichen, zum Beispiel `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (verwenden Sie z. B. Abkürzungen und lassen Sie optionale Werte weg), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Informationen über die Anwendung und Infrastruktur preisgeben. Entscheiden Sie, welche Metriken gesendet werden, wann sie gesendet werden und wer sie sehen soll, basierend auf dem Anwendungsfall. Sie könnten sich beispielsweise dafür entscheiden, Metriken nur authentifizierten Benutzern anzuzeigen und nichts in öffentlichen Antworten.

### PerformanceServerTiming-Interface

Zusätzlich dazu, dass `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers angezeigt werden, ermöglicht das [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Interface Tools, Metriken automatisch aus JavaScript zu sammeln und zu verarbeiten. Dieses Interface ist auf dieselbe Herkunft beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domains anzugeben, die Zugriff auf die Servermetriken haben dürfen. Das Interface ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Eigenschaften zugeordnet:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Beispiele

### Senden einer Metrik mit dem Server-Timing-Header

Die folgende Antwort enthält eine Metrik `custom-metric` mit einer Dauer von `123.45` Millisekunden und einer Beschreibung "Meine benutzerdefinierte Metrik":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing als HTTP-Trailer

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}}-Header verwendet, um anzuzeigen, dass ein `Server-Timing`-Header nach dem Antwortkörper folgt. Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing`-Header als HTTP-Trailer verwenden, um Informationen im Netzwerk -> Timings-Tab anzuzeigen. Die Fetch-API hat keinen Zugriff auf HTTP-Trailer. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}}-Header
