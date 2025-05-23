---
title: Reporting-Endpoints header
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Reporting-Endpoints`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, ein oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele für das Senden von CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verstößen verwendet werden.

Wenn der Header zur Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Fehlern verwendet wird, wird er in Kombination mit dem {{HTTPHeader("Content-Security-Policy")}}-Header und der {{CSP("report-to")}}-Direktive genutzt. Weitere Details zur Einrichtung der CSP-Berichterstattung finden Sie in der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} für die Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgelisteter Antwort-Header")}}
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
  - : Ein Berichtsendpunkt im Format `<endpoint-name>="<URL>"`.
    Die Endpunkte müssen gültige URIs in Anführungszeichen haben (z.B. `my-endpoint="https://example.com/reports"`) und unsichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einrichten eines CSP-Verletzungsberichtsendpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Antwort-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Spezifizierung mehrerer Berichts-Endpunkte

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
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting) Leitfaden
- {{HTTPHeader("Content-Security-Policy")}}-Header
- {{CSP("report-to")}}-Direktive
