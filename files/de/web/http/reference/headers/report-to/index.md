---
title: Report-To header
short-title: Report-To
slug: Web/HTTP/Reference/Headers/Report-To
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt.
> Es ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("Response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warnungs- und Fehlermeldungen dienen können, wie z.B. CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird häufig in Verbindung mit anderen Headers verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}} Header-Direktive {{CSP("report-to")}} verwendet werden, um die Gruppe auszuwählen, die für die Meldung von CSP-Verletzungen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gelistete Antwort-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Report-To: <json-field-value>
```

- `<json-field-value>`
  - : Eine oder mehrere Definitionen von Endpunktgruppen, definiert als JSON-Array, das die umgebenden `[` und `]` Markierungen weglässt.
    Jedes Objekt im Array hat folgende Mitglieder:
    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Reporting-Konfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Einstellen eines CSP-Verletzungsbericht-Endpunkts

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als den Ort einzustellen, an den CSP-Verletzungsberichte gesendet werden.

Zunächst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwort-Header senden, wie unten gezeigt.
Dies legt eine Gruppe von `url` Endpunkten fest, identifiziert durch den Gruppennamen `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann festlegen, dass diese Gruppe das Ziel für das Senden von CSP-Verletzungsberichten sein soll, indem er den Gruppennamen als Wert der {{CSP("report-to")}} Direktive festlegt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Angesichts der obigen Header würden alle `script-src` CSP-Verletzungen dazu führen, dass Verletzungsberichte an beide in `Report-To` aufgeführten `url`-Werte gesendet werden.

### Spezifikation mehrerer Berichtsgruppen

Das folgende Beispiel zeigt einen `Report-To` Header, der mehrere Endpunktgruppen spezifiziert.
Beachten Sie, dass jede Gruppe einen eindeutigen Namen hat und dass die Gruppen nicht durch die Array-Markierungen eingeschlossen sind.

```http
Report-To: { "group": "csp-endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
```

Wir können eine Endpunktgruppe als Ziel für Verletzungsberichte nach Namen auswählen, genau wie im vorherigen Beispiel:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header ist nicht mehr Teil einer Spezifikation.
Er war zuvor Teil der [Reporting API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API) und {{HTTPHeader("Reporting-Endpoints")}} Header
- {{CSP("report-to")}} CSP-Direktive
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}} Headers
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) Leitfaden
