---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** Antwort-Header ermöglicht es Webentwicklern, CSP-Verletzungsberichte zu senden, um mit Richtlinien durch Überwachung ihrer Auswirkungen zu experimentieren, ohne diese durchzusetzen. Dies ermöglicht es, CSP-Verletzungen schnell während des Testens zu erkennen und zu beheben.

`Content-Security-Policy-Report-Only` wird auf die gleiche Weise wie {{httpheader("Content-Security-Policy")}} verwendet, aber Verstöße werden nicht durchgesetzt. Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Andernfalls hat die Operation keine Wirkung.

Verstoßberichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert und mittels der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen lesen Sie bitte unseren Leitfaden zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP).

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}} Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Verwendung und das resultierende Berichtssyntax sind leicht unterschiedlich; siehe das Thema {{CSP("report-uri")}} für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Dieser Header wird nicht innerhalb eines {{HTMLElement("meta")}} Elementes unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; ...; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Die Direktiven des {{HTTPHeader("Content-Security-Policy")}} Headers können auch auf `Content-Security-Policy-Report-Only` angewendet werden, mit Ausnahme der `sandbox` Direktive, die ignoriert wird.

Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, sonst hat sie keine Wirkung.

## Beispiele

Um die {{CSP("report-to")}} Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{httpheader("Reporting-Endpoints")}} HTTP-Antwort-Header definieren. Im folgenden Beispiel definieren wir einen einzelnen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir könnten dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt. Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite Ressourcen unsicher oder aus Inline-Code lädt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` bevorzugt, aber wir deklarieren beide, da `report-to` noch keine vollständige Unterstützung über alle Browser hinweg hat.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
