---
title: Reporting-Endpoints header
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Reporting-Endpoints`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziele für das Senden von CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verletzungsberichten verwendet werden.

Wenn dieser Header zur Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Fehlern verwendet wird, geschieht dies in Kombination mit dem {{HTTPHeader("Content-Security-Policy")}}-Header und der {{CSP("report-to")}}-Direktive. Für weitere Details zur Einrichtung von CSP-Berichtserstattung sehen Sie in der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Dokumentation nach.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Art</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
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
  - : Ein Reporting-Endpunkt im Format `<endpoint-name>="<URL>"`.
    Die Endpunkte müssen gültige URIs in Anführungszeichen sein (z.B. `my-endpoint="https://example.com/reports"`) und unsichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Festlegen eines CSP-Verletzungsberichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints` Antwort-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Festlegen mehrerer Reporting-Endpunkte

Es ist möglich, mehrere Endpunkte anzugeben, die für verschiedene Arten von Verletzungsberichten genutzt werden können.

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
