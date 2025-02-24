---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader ersetzt.
> Es ist ein veralteter Teil einer früheren Iteration der [Reporting-API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warnungen und Fehlerberichte dienen können, wie zum Beispiel Berichte über CSP-Verletzungen, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte, Veraltungsberichte oder andere allgemeine Verletzungen.

`Report-To` wird oft in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Der {{HTTPHeader("Content-Security-Policy")}}-Header {{CSP("report-to")}}-Direktive kann beispielsweise verwendet werden, um die Gruppe auszuwählen, die für die Meldung von CSP-Verletzungen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Antwort-Header")}}
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
  - : Eine oder mehrere Endpunktgruppendefinitionen, definiert als JSON-Array, das auf die umschließenden `[` und `]` Marker verzichtet.
    Jedes Objekt im Array hat die folgenden Mitglieder:
    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichterstattungskonfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verletzungsberichte

In diesem Beispiel wird gezeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren und dann die Gruppe als Ort festzulegen, an dem CSP-Verletzungsberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwortheader senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url`-Endpunkten, die durch den Gruppennamen `csp-endpoints` identifiziert werden.

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

Unter den obigen Headern würde jede `script-src` CSP-Verletzung dazu führen, dass Verletzungsberichte an beide im `Report-To` aufgeführten `url`-Werte gesendet werden.

### Spezifizieren mehrerer Berichtsgruppen

Das folgende Beispiel zeigt einen `Report-To`-Header, der mehrere Endpunktgruppen spezifiziert.
Beachten Sie, dass jede Gruppe einen eindeutigen Namen hat und dass die Gruppen nicht durch die Array-Markierungen begrenzt sind.

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

Wir können eine Endpunktgruppe auf die gleiche Weise wie im vorherigen Beispiel als Ziel für Verletzungsberichte auswählen:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header gehört zu keiner Spezifikation mehr.
Er war zuvor Teil der [Reporting-API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API) und {{HTTPHeader("Reporting-Endpoints")}} Header
- {{CSP("report-to")}} CSP-Direktive
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
