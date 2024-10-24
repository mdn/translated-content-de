---
title: Report-To
slug: Web/HTTP/Headers/Report-To
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieser Header wurde durch den HTTP-Antwortheader {{HTTPHeader("Reporting-Endpoints")}} ersetzt.
> Er ist ein veralteter Teil einer früheren Iteration der [Reporting API](/de/docs/Web/API/Reporting_API)-Spezifikation.

Der HTTP **`Report-To`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, benannte Gruppen von Endpunkten zu definieren, die als Ziel für Warn- und Fehlermeldungen verwendet werden können, wie z.B. CSP-Verstöße, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichte, Veraltungsberichte oder andere allgemeine Verstöße.

`Report-To` wird häufig zusammen mit anderen Headern verwendet, die eine Gruppe von Endpunkten für eine bestimmte Art von Bericht auswählen.
Zum Beispiel kann die Richtlinie {{HTTPHeader("Content-Security-Policy")}} {{CSP("report-to")}} verwendet werden, um die Gruppe auszuwählen, die für die Meldung von CSP-Verstößen verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safe gelisteter Antwort-Header")}}
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
    Jedes Objekt im Array hat die folgenden Mitglieder:
    - `group`
      - : Ein Name für die Gruppe von Endpunkten.
    - `max_age`
      - : Die Zeit in Sekunden, die der Browser die Berichterstattungskonfiguration im Cache behalten soll.
    - `endpoints`
      - : Ein Array von einer oder mehreren URLs, an die die Berichte in der Gruppe gesendet werden sollen.

## Beispiele

### Einstellen eines CSP-Verstoßmeldungsendpunkts

Dieses Beispiel zeigt, wie ein Server `Report-To` verwenden könnte, um eine Gruppe von Endpunkten zu definieren, und dann die Gruppe als Ort festlegt, an den CSP-Verstoßberichte gesendet werden.

Zuerst könnte ein Server eine Antwort mit dem `Report-To` HTTP-Antwortheader senden, wie unten gezeigt.
Dies legt eine Gruppe von `url` Endpunkten fest, die durch den Gruppennamen `csp-endpoints` identifiziert werden.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Der Server kann dann angeben, dass er möchte, dass diese Gruppe das Ziel für das Senden von CSP-Verstoßberichten ist, indem er den Gruppennamen als Wert der {{CSP("report-to")}} Direktive festlegt:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Bei den obigen Headern würden CSP-Verstöße `script-src`-Verstöße dazu führen, dass Verstoßberichte an beide `url`-Werte gesendet werden, die in `Report-To` aufgelistet sind.

### Spezifizierung mehrerer Berichterstattungsgruppen

Das untenstehende Beispiel zeigt einen `Report-To` Header, der mehrere Endpunktgruppen angibt.
Beachten Sie, dass jede Gruppe einen eindeutigen Namen hat und dass die Gruppen nicht durch Array-Markierungen begrenzt sind.

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

Wir können eine Endpunktgruppe als Ziel für Verstöße durch Namen auswählen, auf die gleiche Weise, wie wir es im vorherigen Beispiel getan haben:

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
- {{CSP("report-to")}} CSP Richtlinie
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
