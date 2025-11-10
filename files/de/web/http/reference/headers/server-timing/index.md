---
title: Server-Timing header
short-title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Server-Timing`** {{Glossary("response_header", "Antwort-Header")}} kommuniziert ein oder mehrere Leistungskennzahlen über den Anfragen-Antwort-Zyklus an den User-Agent.
Er wird verwendet, um Backend-Server-Zeitmesswerte (z.B. Datenbank-Lesen/Schreiben, CPU-Zeit, Dateisystemzugriff usw.) in den Entwickler-Tools im Browser des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine kommagetrennte Liste von einem oder mehreren Metriken mit folgenden Komponenten, getrennt durch Semikolons:
    - `<name>`
      - : Ein Name-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch ist oder vom Server definiert wird, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als Zeichenfolge `dur`, gefolgt von `=`, gefolgt von einem Wert, wie `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als Zeichenfolge `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder als quoted string, wie `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (z.B. Abkürzungen verwenden und optionale Werte weglassen), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Informationen über die Anwendung und Infrastruktur offenlegen.
Entscheiden Sie, welche Metriken gesendet, wann sie gesendet werden und wer sie einsehen darf, je nach Anwendungsfall.
Sie könnten zum Beispiel entscheiden, Metriken nur authentifizierten Benutzern anzuzeigen und bei öffentlichen Antworten nichts zu zeigen.

### PerformanceServerTiming-Schnittstelle

Neben der Anzeige der `Server-Timing`-Header-Metriken in den Entwickler-Tools des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle Tools, Metriken automatisch aus JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf den gleichen Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die auf die Server-Metriken zugreifen dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt auf die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Eigenschaften abgebildet:

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

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}}-Header verwendet, um anzugeben, dass ein `Server-Timing`-Header dem Antwortkörper folgt.
Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing`-Header als HTTP-Trailer verwenden, um Informationen im Netzwerk -> Timing-Tab anzuzeigen.
> Die Fetch-API kann nicht auf HTTP-Trailer zugreifen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}}-Header
