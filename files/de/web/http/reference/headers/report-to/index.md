---
title: Report-To header
short-title: Report-To
slug: Web/HTTP/Reference/Headers/Report-To
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt.
> Er ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlerberichte verwendet werden können, wie zum Beispiel CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird häufig in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}}-Header-Direktive {{CSP("report-to")}} verwendet werden, um die Gruppe auszuwählen, die für die Meldung von CSP-Verletzungen genutzt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gelisteter Antwort-Header")}}
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
  - : Eine oder mehrere Endpunktgruppen-Definitionen, definiert als ein JSON-Array, das die umgebenden `[` und `]`-Marker auslässt.
    Jedes Objekt im Array hat die folgenden Mitglieder:
    - `group`
      - : Ein Name für die Endpunktgruppe.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Konfiguration der Berichterstattung zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verletzungsberichte

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als Ort festzulegen, an dem CSP-Verletzungsberichte gesendet werden.

Zunächst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwort-Header senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url`-Endpunkten, die durch den Gruppennamen `csp-endpoints` identifiziert werden.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann angeben, dass er möchte, dass diese Gruppe das Ziel für das Senden von CSP-Verletzungsberichten ist, indem er den Gruppennamen als Wert der {{CSP("report-to")}}-Direktive festlegt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Unter Berücksichtigung der obigen Header würden alle `script-src` CSP-Verletzungen dazu führen, dass Verletzungsberichte an beide in `Report-To` aufgeführten `url`-Werte gesendet werden.

### Spezifizieren mehrerer Berichtgruppen

Das folgende Beispiel demonstriert einen `Report-To`-Header, der mehrere Endpunktgruppen spezifiziert.
Beachten Sie, dass jede Gruppe einen eindeutigen Namen hat und dass die Gruppen nicht durch die Array-Marker begrenzt sind.

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

Wir können eine Endpunktgruppe als Ziel für Verletzungsberichte nach Namen auswählen, auf die gleiche Weise wie im vorherigen Beispiel:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header ist nicht mehr Teil einer Spezifikation.
Er war zuvor Teil der [Reporting API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API) und {{HTTPHeader("Reporting-Endpoints")}}-Header
- {{CSP("report-to")}} CSP-Direktive
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Leitfaden
