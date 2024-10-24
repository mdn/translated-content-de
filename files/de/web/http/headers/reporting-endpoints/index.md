---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Reporting-Endpoints`** {{Glossary("response_header", "Response-Header")}} ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte zu spezifizieren, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele für das Senden von CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verstößen genutzt werden.

Wenn dieser Header zur Berichterstattung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting)-Fehlern verwendet wird, erfolgt dies in Kombination mit dem {{HTTPHeader("Content-Security-Policy")}}-Header {{CSP("report-to")}}-Direktive. Für weitere Einzelheiten zur Einrichtung der CSP-Berichterstattung siehe die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
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
Reporting-Endpoints: <endpoint>, <endpoint>
```

- `<endpoint>`
  - : Ein Reporting-Endpunkt im Format `<endpoint-name>="<URL>"`.
    Die Endpunkte müssen gültige URIs in Anführungszeichen enthalten (z.B. `my-endpoint="https://example.com/reports"`) und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einen CSP-Verstoßbericht-Endpunkt festlegen

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Response-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verstoßberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Mehrere Reporting-Endpunkte spezifizieren

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
- {{HTTPHeader("Content-Security-Policy")}}-Header
- {{CSP("report-to")}}-Direktive
