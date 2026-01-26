---
title: Reporting-Endpoints header
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Reporting-Endpoints`**-{{Glossary("response_header", "Response-Header")}} ermöglicht es Website-Administratoren, ein oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele für das Senden von CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verletzungen verwendet werden.

Wenn dieser Header zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Fehlern verwendet wird, wird er in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header und der {{CSP("report-to")}}-Direktive verwendet.
Für weitere Details zur Einrichtung der CSP-Berichterstattung, siehe die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} für die Deklaration von Endpunkten und sollte bevorzugt genutzt werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
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
  - : Ein Berichts-Endpunkt im Format `<endpoint-name>="<URL>"`.
    Die Endpunkte müssen gültige URIs in Anführungszeichen enthalten (z.B. `my-endpoint="https://example.com/reports"`) und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Festlegen eines CSP-Verletzungsberichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Response-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Festlegen mehrerer Berichts-Endpunkte

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verletzungsberichten verwendet werden können.

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
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) Leitfaden
- {{HTTPHeader("Content-Security-Policy")}} Header
- {{CSP("report-to")}} Direktive
