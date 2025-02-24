---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Antwort-Header")}} hilft dabei, Verstöße gegen die Content Security Policy (CSP) und deren Auswirkungen zu überwachen, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header ermöglicht es Ihnen, Verstöße zu testen oder zu beheben, bevor eine spezifische {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss spezifiziert sein, damit Berichte gesendet werden: Wenn nicht, wird die Operation keine Auswirkungen haben.

Verletzungsberichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert sind und unter Verwendung der CSP {{CSP("report-to")}} Direktive ausgewählt werden.

Für weitere Informationen siehe unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten Direktive {{CSP("report-uri")}} verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und die resultierende Berichts-Syntax sind etwas anders; siehe das Thema {{CSP("report-uri")}} für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Dieser Header wird nicht innerhalb eines {{HTMLElement("meta")}} Elements unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Der `Content-Security-Policy-Report-Only` Header unterstützt alle {{HTTPHeader("Content-Security-Policy")}} Direktiven außer `sandbox`, die ignoriert wird.

> [!NOTE]
> Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, ansonsten hat sie keine Wirkung.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die Direktive {{CSP("report-to")}} zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{HTTPHeader("Reporting-Endpoints")}} Antwort-Header definieren.
Im untenstehenden Beispiel definieren wir einen einzelnen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite Ressourcen unsicher oder aus Inline-Code laden würde.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird der veralteten `report-uri` vorgezogen, aber wir deklarieren beide, da `report-to` noch keine vollständige Unterstützung über alle Browser hinweg hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
