---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header ersetzt.
> Er ist ein veralteter Teil einer früheren Iteration der [Reporting-API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{glossary("response header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlerberichte wie z. B. CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte, Veraltungsberichte oder andere generische Verstöße verwendet werden können.

`Report-To` wird oft in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen. Beispielsweise kann die {{HTTPHeader("Content-Security-Policy")}}-Header {{CSP("report-to")}}-Direktive verwendet werden, um die Gruppe auszuwählen, die für das Reporting von CSP-Verstößen verwendet wird.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Report-To: <json-field-value>
```

- \<json-field-value>

  - : Ein oder mehrere Endpunkt-Gruppen-Definitionen, definiert als JSON-Array, das die umgebenden `[` und `]`-Marker auslässt.
    Jedes Objekt im Array hat die folgenden Eigenschaften:

    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Reporting-Konfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines Endpunktes für CSP-Verstoßberichte

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als Ort festzulegen, an den CSP-Verstoßberichte gesendet werden.

Zunächst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Response-Header senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url`-Endpunkten, identifiziert durch den Gruppennamen `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann angeben, dass er diese Gruppe als Ziel für das Senden von CSP-Verstoßberichten verwenden möchte, indem er den Gruppennamen als Wert der {{CSP("report-to")}}-Direktive setzt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Angesichts der obigen Header würden alle `script-src`-CSP-Verstöße dazu führen, dass Verstoßberichte an beide in `Report-To` aufgeführten `url`-Werte gesendet werden.

### Spezifikation mehrerer Reporting-Gruppen

Das untenstehende Beispiel zeigt einen `Report-To`-Header, der mehrere Endpunktgruppen spezifiziert.
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

Wir können eine Endpunktgruppe als Ziel für Verstoßberichte nach Namen auswählen, genauso wie im vorherigen Beispiel:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header ist nicht mehr Teil einer Spezifikation.
Er war zuvor Teil der [Reporting API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("report-to")}}-Direktive
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
