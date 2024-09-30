---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Content-Security-Policy-Report-Only`** ermöglicht es Webentwicklern, CSP-Verletzungsberichte zu senden, um mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen (aber nicht erzwingen).
Dadurch können CSP-Verletzungen schnell während Tests erfasst und behoben werden.

`Content-Security-Policy-Report-Only` wird auf die gleiche Weise wie {{httpheader("Content-Security-Policy")}} verwendet, jedoch ohne dass Verstöße durchgesetzt werden.
Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Geschieht dies nicht, hat der Vorgang keine Auswirkung.

Verletzungsberichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die im HTTP-Antwortheader {{HTTPHeader("Reporting-Endpoints")}} definiert sind und mithilfe der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Weitere Informationen finden Sie in unserem [Leitfaden zur Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

> [!NOTE]
> Der Header kann auch mit der veralteten Direktive {{CSP("report-uri")}} verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und die resultierende Berichtssyntax sind etwas unterschiedlich; siehe das Thema {{CSP("report-uri")}} für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Dieser Header wird nicht innerhalb eines {{HTMLElement("meta")}}-Elements unterstützt.
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

Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, sonst hat er keine Wirkung.

## Beispiele

Um die Direktive {{CSP("report-to")}} zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem HTTP-Antwortheader {{httpheader("Reporting-Endpoints")}} definieren.
Im folgenden Beispiel definieren wir einen einzelnen Endpunkt mit dem Namen `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir könnten dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} festlegen, wie unten gezeigt.
Beachten Sie, dass dieser bestimmte Bericht ausgelöst würde, wenn die Seite Ressourcen unsicher oder aus Inline-Code lädt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die Direktive `report-to` wird der veralteten `report-uri` vorgezogen, aber wir geben beide an, da `report-to` noch nicht volle Unterstützung über alle Browser hinweg hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP-Direktive {{CSP("report-to")}}
- CSP-Direktive {{CSP("report-uri")}} {{deprecated_inline}}
