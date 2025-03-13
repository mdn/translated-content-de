---
title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Server-Timing`**-{{Glossary("response_header", "Antwortheader")}} übermittelt eine oder mehrere Leistungsmetriken des Anforderungs-Antwort-Zyklus an den User-Agent.
Er wird verwendet, um Backend-Server-Zeitmetriken (zum Beispiel Datenbank-Lese/Schreib-Zeit, CPU-Zeit, Dateisystemzugriff usw.) in den Entwicklerwerkzeugen des Browsers des Nutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine durch Kommas getrennte Liste von einer oder mehreren Metriken mit folgenden, durch Semikolon getrennten Komponenten:
    - `<name>`
      - : Ein Name-Token (keine Leerzeichen oder Sonderzeichen) für die Metrik, der implementierungsspezifisch oder vom Server definiert ist, wie `cacheHit`.
    - `<duration>` {{optional_inline}}
      - : Eine Dauer als die Zeichenkette `dur`, gefolgt von `=`, gefolgt von einem Wert wie `dur=23.2`.
    - `<description>` {{optional_inline}}
      - : Eine Beschreibung als die Zeichenkette `desc`, gefolgt von `=`, gefolgt von einem Wert als Token oder einem in Anführungszeichen stehenden String, wie `desc=prod` oder `desc="DB lookup"`.

Namen und Beschreibungen sollten so kurz wie möglich gehalten werden (zum Beispiel Abkürzungen verwenden und optionale Werte weglassen), um den HTTP-Datenaufwand zu minimieren.

## Beschreibung

### Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturinformationen preisgeben.
Entscheiden Sie basierend auf dem Anwendungsfall, welche Metriken gesendet werden, wann sie gesendet werden und wer sie sehen soll.
Zum Beispiel könnten Sie entscheiden, Metriken nur authentifizierten Nutzern anzuzeigen und nichts in öffentlichen Antworten preiszugeben.

### PerformanceServerTiming Schnittstelle

Neben der Anzeige von `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle es Tools, Metriken automatisch von JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen zu spezifizieren, die Zugriff auf die Server-Metriken haben. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers spiegeln sich in den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Eigenschaften wie folgt wider:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Beispiele

### Senden einer Metrik mit dem Server-Timing-Header

Die folgende Antwort enthält eine Metrik `custom-metric` mit einer Dauer von `123,45` Millisekunden und einer Beschreibung "My custom metric":

```http
Server-Timing: custom-metric;dur=123.45;desc="My custom metric"
```

### Server-Timing als HTTP-Trailer

In der folgenden Antwort wird der {{HTTPHeader("Trailer")}}-Header verwendet, um anzugeben, dass ein `Server-Timing`-Header nach dem Antwortkörper folgt.
Es wird eine Metrik `custom-metric` mit einer Dauer von `123,4` Millisekunden gesendet.

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

> [!WARNING]
> Nur die DevTools des Browsers können den `Server-Timing`-Header als HTTP-Trailer verwenden, um Informationen im Netzwerk -> Timings-Tab anzuzeigen.
> Die Fetch-API kann nicht auf HTTP-Trailer zugreifen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Trailer")}}-Header
