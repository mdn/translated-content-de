---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 3210ffb7f2ba084be11cd9484fcf0e0957480c66
---

{{HTTPSidebar}}

Der **`Server-Timing`**-Header kommuniziert eine oder mehrere Metriken und Beschreibungen für einen bestimmten Anforderungs-Antwort-Zyklus. Er wird verwendet, um Backend-Server-Timing-Metriken (z.B. Datenbank-Lese-/Schreibzugriffe, CPU-Zeit, Dateizugriffe etc.) in den Entwicklerwerkzeugen im Browser des Nutzers oder in der {{domxref("PerformanceServerTiming")}}-Schnittstelle darzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax des `Server-Timing`-Headers ermöglicht es, Metriken auf verschiedene Arten zu kommunizieren: nur der Servermetriken-Name, Metrik mit Wert, Metrik mit Wert und Beschreibung und Metrik mit Beschreibung.

Dieser Header kann eine oder mehrere Metriken enthalten, die durch Kommas getrennt sind. Jede Metrik hat einen Namen, eine optionale Dauer und eine optionale Beschreibung. Diese Komponenten sind durch Semikolons getrennt.

Die Dauerkomponente besteht aus dem String `"dur"`, gefolgt von `"="`, gefolgt von dem Wert, wie `"dur=23.2"`.
Die Beschreibungs-Komponente besteht aus dem String `"desc"`, gefolgt von `"="`, gefolgt von dem Wert, wie `"desc=DB lookup"`.

Die Spezifikation empfiehlt, Namen und Beschreibungen so kurz wie möglich zu halten (verwenden Sie Abkürzungen und lassen Sie optionale Werte weg, wo möglich), um die HTTP-Übertragungslast zu minimieren.

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

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturdaten preisgeben. Erwägen Sie, auf der Serverseite zu kontrollieren, welche Metriken wann und wem zurückgegeben werden. Beispielsweise könnten Sie Metriken nur authentifizierten Nutzern anzeigen und der Öffentlichkeit nichts.

## PerformanceServerTiming-Schnittstelle

Zusätzlich dazu, dass `Server-Timing`-Header-Metriken in den Entwicklerwerkzeugen des Browsers erscheinen, ermöglicht die {{domxref("PerformanceServerTiming")}}-Schnittstelle Werkzeugen, Metriken automatisch zu sammeln und aus JavaScript zu verarbeiten. Diese Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die Zugriff auf die Servermetriken haben dürfen. Die Schnittstelle ist nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar.

Die Komponenten des `Server-Timing`-Headers werden wie folgt den {{domxref("PerformanceServerTiming")}}-Eigenschaften zugeordnet:

- `"name"` -> {{domxref("PerformanceServerTiming.name")}}
- `"dur"` -> {{domxref("PerformanceServerTiming.duration")}}
- `"desc"` -> {{domxref("PerformanceServerTiming.description")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("PerformanceServerTiming")}}
