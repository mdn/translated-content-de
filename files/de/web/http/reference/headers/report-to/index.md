---
title: Report-To header
short-title: Report-To
slug: Web/HTTP/Reference/Headers/Report-To
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den HTTP-Antwortheader {{HTTPHeader("Reporting-Endpoints")}} ersetzt.
> Es ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API) Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwortheader")}} ermöglicht es Webadministratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlerberichte verwendet werden können, wie zum Beispiel CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird oft in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}} Header {{CSP("report-to")}} Anweisung verwendet werden, um die Gruppe auszuwählen, die für das Berichten von CSP-Verstößen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
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
  - : Eine oder mehrere Endpunktgruppen-Definitionen, definiert als ein JSON-Array, das die umgebenden `[` und `]` Marker auslässt.
    Jedes Objekt im Array hat die folgenden Mitglieder:
    - `group`
      - : Ein Name für die Gruppe der Endpunkte.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichtskonfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einem oder mehreren URLs, wohin die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines CSP-Verstoßberichts-Endpunkts

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als Ort festlegt, wohin CSP-Verstoßberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwortheader senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url` Endpunkten, identifiziert durch den Gruppennamen `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann angeben, dass er diese Gruppe als Ziel für das Senden von CSP-Verstoßberichten verwenden möchte, indem er den Gruppennamen als Wert der {{CSP("report-to")}} Anweisung setzt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Unter den obigen Headern würde jede `script-src` CSP-Verletzung dazu führen, dass Verstoßberichte an beide in `Report-To` aufgeführten `url` Werte gesendet werden.

### Festlegen mehrerer Berichtsgruppen

Das untenstehende Beispiel demonstriert einen `Report-To` Header, der mehrere Endpunktgruppen spezifiziert.
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

Wir können eine Endpunktgruppe als Ziel für Verstoßberichte nach deren Namen auswählen, auf die gleiche Weise wie im vorherigen Beispiel:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header ist nicht länger Teil einer Spezifikation. Er war zuvor Teil der [Reporting API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API) und {{HTTPHeader("Reporting-Endpoints")}} Header
- {{CSP("report-to")}} CSP-Direktive
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) Leitfaden
