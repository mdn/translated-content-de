---
title: Reporting-Endpunkte
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Reporting-Endpoints`** Antwort-Header ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die durch die [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele für das Versenden von CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichten oder anderen generischen Verstößen verwendet werden.

Wenn dieser für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Fehlern genutzt wird, wird der Header in Kombination mit dem {{HTTPHeader("Content-Security-Policy")}} Header und der {{CSP("report-to")}} Direktive verwendet. Für weitere Details zur Einrichtung von CSP-Berichten, siehe die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Deklaration von Endpunkten und sollte vorrangig genutzt werden.

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
  - : Ein Reporting-Endpunkt im Format `{endpoint-name}="{URL}"`.
    Die Endpunkte müssen gültige URIs als Zeichenketten im Format `endpoint-name-"{report-URL}"` haben und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einstellen eines CSP-Verstoßberichts-Endpunktes

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints` Antwort-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}} Header verwendet wird, um anzuzeigen, wohin CSP-Verstoßberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Angabe mehrerer Reporting-Endpunkte

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
- {{CSP("report-to")}} Direktive
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Leitfaden
- [Reporting API](/de/docs/Web/API/Reporting_API)
