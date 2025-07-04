---
title: Content-Security-Policy-Report-Only header
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Response-Header")}} hilft, Verstöße gegen die Content Security Policy (CSP) zu überwachen und deren Auswirkungen zu beobachten, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header erlaubt es Ihnen, Verstöße zu testen oder zu beheben, bevor ein spezifischer {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP {{CSP("report-to")}} Direktive muss angegeben werden, damit Berichte gesendet werden: Falls nicht, hat die Operation keine Wirkung.

Verletzungsberichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert und mit der CSP {{CSP("report-to")}} Direktive ausgewählt werden.

Für weitere Informationen siehe unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}} Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und das resultierende Berichtssyntax sind leicht unterschiedlich; siehe das {{CSP("report-uri")}} Thema für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

Der `Content-Security-Policy-Report-Only` Header unterstützt alle {{HTTPHeader("Content-Security-Policy")}} Direktiven außer `sandbox`, welche ignoriert wird.

> [!NOTE]
> Die CSP {{CSP("report-to")}} Direktive sollte mit diesem Header verwendet werden, ansonsten hat er keine Wirkung.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zur Sendung von CSP-Berichten

Um die {{CSP("report-to")}} Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{HTTPHeader("Reporting-Endpoints")}} Response-Header definieren.
Im nachstehenden Beispiel definieren wir einen einzigen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Dann können wir das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite unsicher Ressourcen lädt oder aus Inline-Code.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird bevorzugt gegenüber der veralteten `report-uri`, aber wir geben beide an, da `report-to` noch keine vollständige Cross-Browser-Unterstützung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
