---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Server-Timing`** {{Glossary("response_header", "Response-Header")}} übermittelt ein oder mehrere Leistungsmetriken über den Anforderungs-Antwort-Zyklus an den Benutzer-Agent.
Er wird verwendet, um Leistungsmetriken des Backend-Servers (z.B. Datenbank Lese-/Schreibvorgänge, CPU-Zeit, Dateisystemzugriff, etc.) in den Entwicklerwerkzeugen im Browser des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Eine durch Kommas getrennte Liste von einer oder mehreren Metriken mit den folgenden, durch Semikolons getrennten Komponenten:
    - `<name>`
      - : Ein Namens-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, die implementierungsspezifisch oder vom Server definiert ist, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als der String `dur`, gefolgt von `=`, gefolgt von einem Wert, wie `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als der String `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder einem in Anführungszeichen gesetzten String, wie `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (zum Beispiel Abkürzungen verwenden und optionale Werte weglassen), um den HTTP-Daten-Overhead zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Informationen über Anwendung und Infrastruktur preisgeben.
Entscheiden Sie, welche Metriken gesendet werden sollen, wann sie gesendet werden sollen und wer sie sehen soll, basierend auf dem Anwendungsfall.
Zum Beispiel können Sie entscheiden, Metriken nur authentifizierten Benutzern und nichts bei öffentlichen Antworten zu zeigen.

### PerformanceServerTiming-Schnittstelle

Neben der Anzeige von `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle Werkzeugen das automatische Sammeln und Verarbeiten von Metriken aus JavaScript. Diese Schnittstelle ist auf den gleichen Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die auf die Server-Metriken zugreifen dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Eigenschaften zugeordnet:

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

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}}-Header verwendet, um anzuzeigen, dass ein `Server-Timing`-Header dem Antwortkörper folgt.
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
> Die Fetch-API kann nicht auf HTTP-Trailer zugreifen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}}-Header
