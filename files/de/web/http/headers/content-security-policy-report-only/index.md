---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** Response-Header ermöglicht es Webentwicklern, CSP-Verletzungsberichte zu senden, um Policies zu testen, indem sie deren Auswirkungen überwachen (aber nicht erzwingen).
Dadurch können CSP-Verletzungen während der Testphase schnell erkannt und behoben werden.

`Content-Security-Policy-Report-Only` wird auf die gleiche Weise wie {{httpheader("Content-Security-Policy")}} verwendet, aber Verletzungen werden nicht durchgesetzt.
Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Wenn nicht, hat die Operation keinen Effekt.

Verletzungsberichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen lesen Sie unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}} Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Nutzung und die resultierende Berichtssyntax sind leicht unterschiedlich; sehen Sie sich das Thema {{CSP("report-uri")}} für weitere Details an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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
Content-Security-Policy-Report-Only: <policy-directive>; ...; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Die Direktiven des {{HTTPHeader("Content-Security-Policy")}} Headers können auch auf `Content-Security-Policy-Report-Only` angewendet werden, außer der `sandbox` Direktive, die ignoriert wird.

Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, sonst hat er keinen Effekt.

## Beispiele

Um die {{CSP("report-to")}} Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{httpheader("Reporting-Endpoints")}} HTTP-Response-Header definieren.
Im unten stehenden Beispiel definieren wir einen einzelnen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir könnten dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite unsicher geladene Ressourcen oder Inline-Code hätte.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` bevorzugt, aber wir deklarieren beide, da `report-to` noch keine vollständige plattformübergreifende Unterstützung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
