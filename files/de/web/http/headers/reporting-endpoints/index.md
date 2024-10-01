---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Reporting-Endpoints`** Response-Header ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte festzulegen, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) erzeugt werden.

Die Endpunkte können beispielsweise als Ziele zum Senden von CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verstößen verwendet werden.

Wenn er zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Fehlern verwendet wird, wird der Header in Kombination mit der {{HTTPHeader("Content-Security-Policy")}}-Header {{CSP("report-to")}}-Direktive verwendet. Für weitere Details zur Einrichtung der CSP-Berichterstattung siehe die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} für die Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Unzulässiger Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Response-Header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, <endpoint>
```

- \<endpoint>
  - : Ein Reporting-Endpunkt im Format `{endpoint-name}="{URL}"`.
    Die Endpunkte müssen gültige URIs als Strings im Format `endpoint-name-"{report-URL}"` haben und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einen CSP-Verstoßberichts-Endpunkt festlegen

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints` Response-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}} Header verwendet wird, um anzugeben, wohin CSP-Verstoßberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Mehrere Reporting-Endpunkte angeben

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verstoßberichten verwendet werden können:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("report-to")}}-Direktive
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
- [Reporting API](/de/docs/Web/API/Reporting_API)
