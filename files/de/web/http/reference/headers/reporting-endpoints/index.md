---
title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Reporting-Endpoints`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) generiert werden.

Die Endpunkte können beispielsweise als Ziel für das Senden von CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verletzungen genutzt werden.

Wenn dieser Header für das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Fehlern verwendet wird, wird er in Kombination mit dem {{HTTPHeader("Content-Security-Policy")}}-Header und der {{CSP("report-to")}}-Direktive eingesetzt.
Weitere Details zum Einrichten des CSP-Reportings finden Sie in der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Dokumentation.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} zur Angabe von Endpunkten und sollte bevorzugt genutzt werden.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwort-Header")}}
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
    Die Endpunkte müssen gültige URI in Anführungszeichen enthalten (z.B. `my-endpoint="https://example.com/reports"`) und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommata getrennte Liste von Endpunkten kann angegeben werden.

## Beispiele

### Einrichten eines CSP-Verletzungsberichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Antwort-Header in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header genutzt wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Angabe mehrerer Reporting-Endpunkte

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
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Leitfaden
- {{HTTPHeader("Content-Security-Policy")}}-Header
- {{CSP("report-to")}}-Direktive
