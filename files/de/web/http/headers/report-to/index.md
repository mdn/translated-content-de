---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header ersetzt. Er ist ein veralteter Bestandteil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{glossary("Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warnungs- und Fehlerberichte verwendet werden können, wie z.B. Berichte über CSP-Verletzungen, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird häufig zusammen mit anderen Headern verwendet, die eine Gruppe von Endpunkten auswählen, die für eine bestimmte Art von Bericht verwendet werden sollen. Zum Beispiel kann die {{HTTPHeader("Content-Security-Policy")}}-Header-{{CSP("report-to")}}-Direktive verwendet werden, um die Gruppe auszuwählen, die zur Meldung von CSP-Verletzungen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-sichere Antwort-Header")}}
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

  - : Eine oder mehrere Endpunkt-Gruppendefinitionen, definiert als JSON-Array, das die umgebenden `[` und `]` Marker weglässt. Jedes Objekt im Array hat die folgenden Eigenschaften:

    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichtskonfiguration zwischenspeichern sollte.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte der Gruppe gesendet werden sollen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verletzungsberichte

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren und dann die Gruppe als Ort festzulegen, an den CSP-Verletzungsberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwort-Header senden, wie unten gezeigt. Dies spezifiziert eine Gruppe von `url`-Endpunkten, die durch den Gruppennamen `csp-endpoints` identifiziert werden.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann spezifizieren, dass er möchte, dass diese Gruppe das Ziel für das Senden von CSP-Verletzungsberichten ist, indem er den Gruppennamen als Wert der {{CSP("report-to")}}-Direktive setzt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Anhand der obigen Header würden alle `script-src`-CSP-Verletzungen dazu führen, dass Berichte über Verstöße an beide in `Report-To` aufgeführten `url`-Werte gesendet werden.

### Angabe mehrerer Berichtsgruppen

Das folgende Beispiel zeigt einen `Report-To`-Header, der mehrere Endpunkt-Gruppen spezifiziert. Beachten Sie, dass jede Gruppe einen eindeutigen Namen hat und dass die Gruppen nicht durch Array-Marker abgegrenzt sind.

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

Wir können eine Endpunkt-Gruppe als Ziel für Berichtsverletzungen wie im vorherigen Beispiel nach Namen auswählen:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Spezifikationen

Dieser Header ist nicht mehr Teil einer Spezifikation. Er war früher Teil der [Reporting API](/de/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("report-to")}}-Direktive
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Leitfaden für Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting)
