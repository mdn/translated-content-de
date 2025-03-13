---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Antwort-Header")}} hilft, Verstöße gegen die Content Security Policy (CSP) und deren Auswirkungen zu überwachen, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header ermöglicht es Ihnen, Verstöße zu testen oder zu beheben, bevor eine bestimmte {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: andernfalls hat die Operation keine Wirkung.

Verletzungsberichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert sind und unter Verwendung der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen lesen Sie unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten Direktive {{CSP("report-uri")}} verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und das resultierende Berichtssyntax sind leicht unterschiedlich; siehe das Thema {{CSP("report-uri")}} für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
> Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, andernfalls hat er keine Wirkung.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die Direktive {{CSP("report-to")}} zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} definieren.
Im folgenden Beispiel definieren wir einen einzelnen Endpunkt mit dem Namen `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser besondere Bericht ausgelöst würde, wenn die Seite Ressourcen unsicher oder aus Inline-Code geladen hat.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die Direktive `report-to` wird gegenüber der veralteten `report-uri` bevorzugt, aber wir deklarieren beide, da `report-to` noch keine vollständige Cross-Browser-Unterstützung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
