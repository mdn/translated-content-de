---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Reporting-Endpoints`** Antwort-Header ermöglicht Website-Administratoren, eines oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) erzeugt werden.

Diese Endpunkte können beispielsweise als Ziele zum Senden von CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verletzungen verwendet werden.

Bei der Verwendung für die Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Fehlern wird der Header zusammen mit dem {{HTTPHeader("Content-Security-Policy")}} Header und der {{CSP("report-to")}} Direktive verwendet.
Für weitere Details zur Einrichtung von CSP-Meldungen siehe die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP#violation_reporting) Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

- \<endpoint>
  - : Ein Reporting-Endpunkt im Format `{endpoint-name}="{URL}"`.
    Die Endpunkte müssen gültige URIs als Strings im Format `endpoint-name-"{report-URL}"` haben und unsichere Endpunkte werden ignoriert.
    Es kann eine durch Kommas getrennte Liste von Endpunkten angegeben werden.

## Beispiele

### Einrichten eines CSP-Verletzungs-Berichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints` Antwort-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}} Header verwendet wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Angabe mehrerer Reporting-Endpunkte

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verletzungsberichten verwendet werden können:

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
