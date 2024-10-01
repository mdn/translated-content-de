---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt.
> Er ist ein veralteter Bestandteil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlerberichte dienen können, wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird oft in Verbindung mit anderen Headers verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}} Header {{CSP("report-to")}} Direktive verwendet werden, um die Gruppe auszuwählen, die für CSP-Verletzungsberichte verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
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

  - : Eine oder mehrere Endpunktgruppen-Definitionen, definiert als ein JSON-Array, das die umgebenden `[` und `]` Markierungen auslässt.
    Jedes Objekt im Array hat die folgenden Eigenschaften:

    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichtskonfiguration zwischenspeichern soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte der Gruppe gesendet werden sollen.

## Beispiele

### Einrichten eines Berichtsendpunkts für CSP-Verletzungen

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren und diese Gruppe dann als Ort festzulegen, an den CSP-Verletzungsberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwort-Header senden, wie unten gezeigt.
Dies spezifiziert eine Gruppe von `url` Endpunkten, die durch den Gruppennamen `csp-endpoints` identifiziert werden.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann angeben, dass diese Gruppe das Ziel für das Senden von CSP-Verletzungsberichten sein soll, indem er den Gruppennamen als Wert der {{CSP("report-to")}} Direktive festlegt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Angesichts der oben genannten Header würden Verletzungen der `script-src` CSP zu Verletzungsberichten führen, die an beide der in `Report-To` aufgeführten `url` Werte gesendet werden.

### Spezifizieren mehrerer Berichtsgruppen

Das folgende Beispiel zeigt einen `Report-To` Header, der mehrere Endpunktgruppen spezifiziert.
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

Wir können eine Endpunktgruppe als Ziel für Verletzungsberichte namentlich auswählen, genauso wie wir es im vorherigen Beispiel getan haben:

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
- {{CSP("report-to")}} Direktive
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
