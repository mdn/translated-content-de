---
title: Reporting-Endpoints header
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

Der HTTP-**`Reporting-Endpoints`**-{{Glossary("response_header", "Antwortheader")}} ermöglicht es Website-Administratoren, einen oder mehrere Endpunkte anzugeben, an die Berichte gesendet werden können, die von der [Reporting API](/de/docs/Web/API/Reporting_API) erzeugt wurden.

Die Endpunkte können beispielsweise als Ziele für das Senden von Absturzberichten, Verzichtsberichten, [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP#violation_reporting)-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten und so weiter verwendet werden.

> [!NOTE]
> Dieser Header ersetzt {{HTTPHeader("Report-To")}} {{deprecated_inline}} für die Deklaration von Endpunkten und sollte bevorzugt verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwortheader")}}
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
    Die Endpunkte müssen gültige URIs in Anführungszeichen sein (z. B. `my-endpoint="https://example.com/reports"`) und nicht sichere Endpunkte werden ignoriert.
    Eine durch Kommas getrennte Liste von Endpunkten kann angegeben werden.

## Beschreibung

Der **`Reporting-Endpoints`**-Header definiert die Zuordnung zwischen einem Endpunktnamen und einer URL.

Dieser Name kann verwendet werden, um den Berichts-Endpunkt für Richtlinienverletzungen in einigen HTTP-Headern zu identifizieren. Zum Beispiel erlaubt es der {{HTTPHeader("Content-Security-Policy")}}, den Namen des Berichts-Endpunkts in seiner {{CSP("report-to")}}-Direktive anzugeben, während der [`endpoints`-Schlüssel](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) den gleichen Zweck für {{HTTPHeader("Integrity-Policy")}}-Verletzungen erfüllt.

### Standard-Berichts-Endpunkt

Der Standard-Berichts-Endpunkt ist einfach ein Bericht mit dem Namen "default", wie gezeigt:

```http
Reporting-Endpoints: default="https://example.com/reports"
```

Dieser _kann_ als Berichts-Endpunkt für Fälle verwendet werden, in denen der HTTP-Header, der einen Bericht auslöst, keinen Mechanismus für die Meldung des Endpunkts hat, wie zum Beispiel der {{httpheader("Permissions-Policy")}}-Header.
Er kann auch als Endpunkt für Berichte verwendet werden, bei denen überhaupt kein zugehöriger HTTP-Header vorhanden ist, wie zum Beispiel für [Verzichtsberichte](/de/docs/Web/API/DeprecationReport).

## Beispiele

### Festlegen eines CSP-Verletzungs-Berichts-Endpunkts

Das folgende Beispiel zeigt, wie der `Reporting-Endpoints`-Antwortheader in Verbindung mit dem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet wird, um anzugeben, wohin CSP-Verletzungsberichte gesendet werden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Angabe mehrerer Berichts-Endpunkte

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
