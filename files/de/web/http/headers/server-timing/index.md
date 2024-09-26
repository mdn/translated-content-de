---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 3210ffb7f2ba084be11cd9484fcf0e0957480c66
---

{{HTTPSidebar}}

Der **`Server-Timing`**-Header kommuniziert eine oder mehrere Metriken und Beschreibungen für einen bestimmten Anforderungs-/Antwortzyklus. Er wird verwendet, um beliebige Timing-Metriken des Backend-Servers (z. B. Datenbanklese-/schreibvorgänge, CPU-Zeit, Dateisystemzugriff usw.) in den Entwicklertools im Browser des Benutzers oder in der {{domxref("PerformanceServerTiming")}}-Schnittstelle anzuzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax des `Server-Timing`-Headers ermöglicht es Ihnen, Metriken auf verschiedene Weise zu kommunizieren: nur der Name der Servermetrik, Metrik mit Wert, Metrik mit Wert und Beschreibung sowie Metrik mit Beschreibung.

Dieser Header kann eine oder mehrere Metriken enthalten, die durch Kommas getrennt sind. Jede Metrik hat einen Namen, eine optionale Dauer und eine optionale Beschreibung. Diese Komponenten sind durch Semikolons getrennt.

Die Dauerdarstellung besteht aus dem String `"dur"`, gefolgt von `"="`, gefolgt vom Wert, wie `"dur=23.2"`.
Die Beschreibungsdarstellung besteht aus dem String `"desc"`, gefolgt von `"="`, gefolgt vom Wert, wie `"desc=DB lookup"`.

Die Spezifikation empfiehlt, Namen und Beschreibungen so kurz wie möglich zu halten (Abkürzungen verwenden und optionale Werte weglassen, wo möglich), um den HTTP-Overhead zu minimieren.

```http
// Einzelne Metrik ohne Wert
Server-Timing: missedCache

// Einzelne Metrik mit Wert
Server-Timing: cpu;dur=2.4

// Einzelne Metrik mit Beschreibung und Wert
Server-Timing: cache;desc="Cache Read";dur=23.2

// Zwei Metriken mit Wert
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing als Trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## Datenschutz und Sicherheit

Der `Server-Timing`-Header kann potenziell sensible Informationen über die Anwendung und Infrastruktur preisgeben. Überlegen Sie, welche Metriken wann und an wen auf der Serverseite zurückgegeben werden. Beispielsweise könnten Sie Metriken nur authentifizierten Benutzern anzeigen und der Öffentlichkeit nichts zugänglich machen.

## PerformanceServerTiming-Schnittstelle

Zusätzlich dazu, dass `Server-Timing`-Header-Metriken in den Entwicklertools des Browsers erscheinen, ermöglicht die {{domxref("PerformanceServerTiming")}}-Schnittstelle Tools, Metriken automatisch von JavaScript zu sammeln und zu verarbeiten. Diese Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domains festzulegen, die auf die Servermetriken zugreifen dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt den {{domxref("PerformanceServerTiming")}}-Eigenschaften zugeordnet:

- `"name"` -> {{domxref("PerformanceServerTiming.name")}}
- `"dur"` -> {{domxref("PerformanceServerTiming.duration")}}
- `"desc"` -> {{domxref("PerformanceServerTiming.description")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceServerTiming")}}
