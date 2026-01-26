---
title: Content-Security-Policy-Report-Only header
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Response-Header")}} hilft dabei, Verstöße gegen die Content Security Policy (CSP) und deren Auswirkungen zu überwachen, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header ermöglicht es Ihnen, Verstöße zu testen oder zu beheben, bevor eine bestimmte {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Wenn nicht, hat die Operation keine Wirkung.

Verstoßberichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt sind.

Für weitere Informationen siehe unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}} Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und das resultierende Berichtsschema unterscheiden sich geringfügig; sehen Sie sich das Thema {{CSP("report-uri")}} für weitere Details an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Dieser Header wird innerhalb eines {{HTMLElement("meta")}} Elements nicht unterstützt.
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
> Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, da er sonst keine Wirkung hat.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die {{CSP("report-to")}} Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{HTTPHeader("Reporting-Endpoints")}} Response-Header definieren.
Im folgenden Beispiel definieren wir einen einzigen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} festlegen, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite unsichere Ressourcen lädt oder aus Inline-Code stammt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` bevorzugt, aber wir erklären beide, da `report-to` noch keine vollständige plattformübergreifende Browser-Unterstützung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
