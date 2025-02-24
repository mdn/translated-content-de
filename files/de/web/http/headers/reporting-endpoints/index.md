---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Reporting-Endpoints`**-{{Glossary("response_header", "Response-Header")}} ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele zum Senden von CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verstößen verwendet werden.

Wenn der Header zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting)-Fehlern verwendet wird, wird er in Kombination mit der {{HTTPHeader("Content-Security-Policy")}}-Header-{{CSP("report-to")}}-Direktive verwendet. Weitere Details zur Einrichtung von CSP-Berichten finden Sie in der [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Response-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, …, <endpointN>
```

- `<endpoint>`
  - : Ein Reporting Endpunkt im Format `<endpoint-name>="<URL>"`. Die Endpunkte müssen gültige URIs in Anführungszeichen enthalten (z.B. `my-endpoint="https://example.com/reports"`) und nicht sichere Endpunkte werden ignoriert. Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Festlegen eines CSP-Verstoßbericht-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Response-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verstoßberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Angabe mehrerer Reporting-Endpunkte

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verstoßberichten verwendet werden können.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     permissions-endpoint="https://example.com/permissions-policy-reports"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
- {{HTTPHeader("Content-Security-Policy")}} Header
- {{CSP("report-to")}} Direktive
