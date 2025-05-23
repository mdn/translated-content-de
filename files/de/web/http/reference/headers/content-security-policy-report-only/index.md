---
title: Content-Security-Policy-Report-Only header
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Antwort-Header")}} hilft dabei, Verstöße gegen die Content Security Policy (CSP) und deren Auswirkungen zu überwachen, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header ermöglicht es Ihnen, Verstöße zu testen oder zu beheben, bevor eine spezifische {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss spezifiziert werden, damit Berichte gesendet werden: Andernfalls hat die Operation keine Wirkung.

Verstoßberichte werden mit der [Reporting-API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen lesen Sie unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}}-Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Nutzung und das resultierende Berichtssyntax sind leicht unterschiedlich; sehen Sie sich das Thema {{CSP("report-uri")}} für weitere Details an.

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
      <th colspan="2" scope="row">
        Dieser Header wird in einem {{HTMLElement("meta")}}-Element nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Der `Content-Security-Policy-Report-Only`-Header unterstützt alle {{HTTPHeader("Content-Security-Policy")}}-Direktiven außer `sandbox`, die ignoriert wird.

> [!NOTE]
> Die CSP {{CSP("report-to")}}-Direktive sollte mit diesem Header verwendet werden, andernfalls hat sie keine Wirkung.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die {{CSP("report-to")}}-Direktive zu verwenden, müssen Sie zunächst einen entsprechenden Endpunkt mit dem {{HTTPHeader("Reporting-Endpoints")}}-Antwort-Header definieren.
Im folgenden Beispiel definieren wir einen einzelnen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite unsicher geladene Ressourcen oder Inline-Code enthalten würde.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to`-Direktive wird der veralteten `report-uri`-Direktive vorgezogen, aber wir deklarieren beide, da `report-to` noch nicht vollständig browserübergreifend unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}}-Direktive
- CSP {{CSP("report-uri")}}-Direktive {{deprecated_inline}}
