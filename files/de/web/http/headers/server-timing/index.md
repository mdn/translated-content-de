---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 3210ffb7f2ba084be11cd9484fcf0e0957480c66
---

{{HTTPSidebar}}

Der **`Server-Timing`**-Header kommuniziert eine oder mehrere Metriken und Beschreibungen für einen gegebenen Anfrage-Antwort-Zyklus. Er wird verwendet, um Backend-Server-Timing-Metriken (z. B. Datenbank-Lesen/Schreiben, CPU-Zeit, Dateisystemzugriff usw.) in den Entwicklerwerkzeugen im Browser des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax des `Server-Timing`-Headers ermöglicht es Ihnen, Metriken auf verschiedene Arten zu kommunizieren: nur der Servermetriken-Name, Metriken mit Wert, Metriken mit Wert und Beschreibung sowie Metriken mit Beschreibung.

Dieser Header kann eine oder mehrere Metriken enthalten, die durch Kommas getrennt sind. Jede Metrik hat einen Namen, eine optionale Dauer und eine optionale Beschreibung. Diese Komponenten werden durch Semikolons getrennt.

Die Komponente für die Dauer besteht aus dem String `"dur"`, gefolgt von `"="`, gefolgt vom Wert, wie `"dur=23.2"`. Die Komponente für die Beschreibung besteht aus dem String `"desc"`, gefolgt von `"="`, gefolgt vom Wert, wie `"desc=DB lookup"`.

Die Spezifikation empfiehlt, dass Namen und Beschreibungen so kurz wie möglich gehalten werden sollten (verwenden Sie Abkürzungen und lassen Sie optionale Werte nach Möglichkeit weg), um den HTTP-Overhead zu minimieren.

```http
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with value
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturdaten preisgeben. Überlegen Sie, welche Metriken wann und an wen auf Serverseite zurückgegeben werden. Zum Beispiel könnten Sie Metriken nur authentifizierten Benutzern anzeigen und der Öffentlichkeit nichts zeigen.

## PerformanceServerTiming-Schnittstelle

Zusätzlich zur Darstellung von `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Schnittstelle Werkzeugen, Metriken automatisch aus JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf denselben Ursprung beschränkt, Sie können jedoch den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die auf die Servermetriken zugreifen dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers entsprechen den [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Eigenschaften wie folgt:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
