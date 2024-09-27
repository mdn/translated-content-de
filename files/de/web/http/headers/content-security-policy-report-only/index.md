---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Content-Security-Policy-Report-Only`** ermöglicht es Webentwicklern, CSP-Verstöße zu melden, um Richtlinien zu testen, indem sie deren Auswirkungen überwachen (aber nicht erzwingen).
Dies ermöglicht es, CSP-Verstöße während der Testphase schnell zu erfassen und zu beheben.

`Content-Security-Policy-Report-Only` wird auf die gleiche Weise verwendet wie {{httpheader("Content-Security-Policy")}}, aber Verstöße werden nicht erzwungen.
Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Andernfalls hat die Operation keine Wirkung.

Verletzungsberichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader definiert sind und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen lesen Sie unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten Direktive {{CSP("report-uri")}} verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Nutzung und die resultierende Berichts-Syntax sind leicht unterschiedlich; sehen Sie sich das Thema {{CSP("report-uri")}} für weitere Details an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
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
Content-Security-Policy-Report-Only: <policy-directive>; ...; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Die Direktiven des {{HTTPHeader("Content-Security-Policy")}} Headers können auch auf `Content-Security-Policy-Report-Only` angewendet werden, mit Ausnahme der `sandbox`-Direktive, die ignoriert wird.

Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, andernfalls hat er keine Wirkung.

## Beispiele

Um die Direktive {{CSP("report-to")}} zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{httpheader("Reporting-Endpoints")}} HTTP-Antwortheader definieren.
Im unten stehenden Beispiel definieren wir einen einzigen Endpunkt mit dem Namen `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir könnten dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite Ressourcen unsicher oder von Inline-Code lädt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to`-Direktive wird gegenüber der veralteten `report-uri`-Direktive bevorzugt, aber wir deklarieren beide, da `report-to` noch keine vollständige Unterstützung durch alle Browser hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}}-Direktive
- CSP {{CSP("report-uri")}}-Direktive {{deprecated_inline}}
