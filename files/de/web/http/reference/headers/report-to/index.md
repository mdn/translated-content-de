---
title: Report-To
slug: Web/HTTP/Reference/Headers/Report-To
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt.
> Er ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlerberichte verwendet werden können, wie z.B. CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte, veraltete Berichte oder andere allgemeine Verletzungen.

`Report-To` wird häufig in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Berichten auswählen.
Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}}-Header-{{CSP("report-to")}}-Direktive verwendet werden, um die Gruppe auszuwählen, die für das Melden von CSP-Verletzungen verwendet wird.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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
  - : Eine oder mehrere Endpunkt-Gruppendefinitionen, definiert als JSON-Array, das die umgebenden `[` und `]` Klammern weglässt.
    Jedes Objekt im Array hat die folgenden Mitglieder:
    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichterstattungskonfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verletzungsberichte

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als den Ort festzulegen, an den CSP-Verletzungsberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To`-HTTP-Antwort-Header senden, wie unten gezeigt.
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

Angesichts der oben genannten Header würden bei `script-src`-CSP-Verletzungen die Verletzungsberichte an beide `url`-Werte gesendet, die in `Report-To` aufgeführt sind.

### Spezifizieren mehrerer Berichtsgruppen

Das folgende Beispiel zeigt einen `Report-To`-Header, der mehrere Endpunkt-Gruppen spezifiziert.
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

Wir können eine Endpunkt-Gruppe als Ziel für Verletzungsberichte durch ihren Namen auswählen, auf die gleiche Weise wie im vorherigen Beispiel:

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
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) Leitfaden
