---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Antwortheader **`Reporting-Endpoints`** ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele zum Senden von CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verstößen verwendet werden.

Wenn sie zur Berichterstattung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting)-Fehlern verwendet werden, wird der Header in Kombination mit dem Header {{HTTPHeader("Content-Security-Policy")}} und der Direktive {{CSP("report-to")}} verwendet. Weitere Informationen zum Einrichten der CSP-Berichterstattung finden Sie in der [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting)-Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} für die Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

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
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, <endpoint>
```

- \<endpoint>
  - : Ein Berichts-Endpunkt im Format `{endpoint-name}="{URL}"`.
    Die Endpunkte müssen gültige URIs als Zeichenfolgen im Format `endpoint-name-"{report-URL}"` haben, und nicht sichere Endpunkte werden ignoriert.
    Eine kommaseparierte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einrichten eines CSP-Verstoßberichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints` Antwortheader in Verbindung mit dem Header {{HTTPHeader("Content-Security-Policy")}} verwendet wird, um anzugeben, wohin CSP-Verstoßberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Spezifizieren mehrerer Berichts-Endpunkte

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verstoßberichten verwendet werden können:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("report-to")}} Direktive
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
- [Reporting API](/de/docs/Web/API/Reporting_API)
