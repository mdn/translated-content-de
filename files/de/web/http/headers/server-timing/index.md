---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 3210ffb7f2ba084be11cd9484fcf0e0957480c66
---

{{HTTPSidebar}}

Der **`Server-Timing`** Header kommuniziert eine oder mehrere Metriken und Beschreibungen für einen gegebenen Anfrage-Antwort-Zyklus. Er wird verwendet, um Backend-Server-Timing-Metriken (z.B. Datenbank lesen/schreiben, CPU-Zeit, Dateizugriff usw.) in den Entwicklerwerkzeugen im Browser des Benutzers oder in der [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle sichtbar zu machen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax des `Server-Timing` Headers ermöglicht es, Metriken auf verschiedene Weise zu kommunizieren: nur der Name der Servermetrik, Metrik mit Wert, Metrik mit Wert und Beschreibung, und Metrik mit Beschreibung.

Dieser Header kann eine oder mehrere Metriken enthalten, die durch Kommas getrennt sind. Jede Metrik hat einen Namen, eine optionale Dauer und eine optionale Beschreibung. Diese Komponenten sind durch Semikolons getrennt.

Die Dauerkomponente besteht aus dem String `"dur"`, gefolgt von `"="`, gefolgt vom Wert, wie `"dur=23.2"`.
Die Beschreibungs-Komponente besteht aus dem String `"desc"`, gefolgt von `"="`, gefolgt vom Wert, wie `"desc=DB lookup"`.

Die Spezifikation empfiehlt, dass Namen und Beschreibungen so kurz wie möglich gehalten werden sollten (verwenden Sie Abkürzungen und lassen Sie optionale Werte weg, wo möglich), um den HTTP-Overhead zu minimieren.

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

Der `Server-Timing` Header kann potenziell sensible Informationen über Anwendung und Infrastruktur preisgeben. Erwägen Sie, zu kontrollieren, welche Metriken wann und an wen auf der Serverseite zurückgegeben werden. Zum Beispiel könnten Sie nur authentifizierten Benutzern Metriken anzeigen und nichts an die Öffentlichkeit.

## PerformanceServerTiming-Schnittstelle

Zusätzlich dazu, dass `Server-Timing` Header-Metriken in den Entwicklerwerkzeugen des Browsers erscheinen, ermöglicht die [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Schnittstelle Tools die automatische Sammlung und Verarbeitung von Metriken über JavaScript. Diese Schnittstelle ist auf den gleichen Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}} Header verwenden, um die Domänen festzulegen, die Zugriff auf die Servermetriken haben dürfen. Die Schnittstelle ist in einigen Browsern nur in sicheren Kontexten (HTTPS) verfügbar.

Die Komponenten des `Server-Timing` Headers werden diesen [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Eigenschaften zugeordnet:

- `"name"` -> [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name)
- `"dur"` -> [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- `"desc"` -> [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
