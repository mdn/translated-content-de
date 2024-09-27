---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt.
> Er ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** [Antwort-Header](/de/docs/Glossary/response_header) ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlermeldungen genutzt werden können, wie z.B. CSP-Verstoßmeldungen, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Meldungen, Veraltungsmeldungen oder andere generische Verstöße.

`Report-To` wird oft in Verbindung mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Beispielsweise kann die {{HTTPHeader("Content-Security-Policy")}}-Header-{{CSP("report-to")}}-Direktive verwendet werden, um die Gruppe für das Melden von CSP-Verstößen auszuwählen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-sicher gelisteter Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
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

  - : Eine oder mehrere Endpunktgruppen-Definitionen, definiert als ein JSON-Array, das die umgebenden `[` und `]` Marker weglässt.
    Jedes Objekt im Array hat folgende Eigenschaften:

    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichtskonfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Einstellen eines CSP-Verstoßbericht-Endpunkts

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren und dann diese Gruppe als Zielort für das Senden von CSP-Verstoßmeldungen festzulegen.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwort-Header senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url` Endpunkten, identifiziert durch den Gruppennamen `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann festlegen, dass er möchte, dass diese Gruppe das Ziel zum Senden von CSP-Verstoßmeldungen ist, indem er den Gruppennamen als Wert der {{CSP("report-to")}}-Direktive festlegt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Angesichts der obigen Header würden alle `script-src` CSP-Verstöße zu Verstoßmeldungen führen, die an beide in `Report-To` aufgeführten `url`-Werte gesendet werden.

### Spezifizierung mehrerer Berichtsgruppen

Das unten stehende Beispiel zeigt einen `Report-To` Header, der mehrere Endpunktgruppen spezifiziert.
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

Wir können eine Endpunktgruppe als Ziel für Verstoßmeldungen auswählen, indem wir deren Namen auf dieselbe Weise verwenden, wie wir es im vorherigen Beispiel getan haben:

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
