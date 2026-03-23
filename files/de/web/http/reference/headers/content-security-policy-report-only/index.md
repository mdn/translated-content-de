---
title: Content-Security-Policy-Report-Only header
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Antwort-Header")}} hilft dabei, Verstöße gegen die Content Security Policy (CSP) zu überwachen und ihre Auswirkungen ohne Durchsetzung der Sicherheitsrichtlinien zu analysieren.
Dieser Header ermöglicht es, Verstöße zu testen oder zu beheben, bevor eine spezifische {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden: Wenn nicht, hat der Vorgang keine Wirkung.

Verstöße gegen die Richtlinie können mit der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite, für die die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden und an Server-Endpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt wurden.
Weitere Informationen finden Sie unter [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).

Weitere Informationen finden Sie in unserem [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten {{CSP("report-uri")}}-Direktive verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Nutzung und das resultierende Berichtssyntax sind leicht unterschiedlich; siehe das Thema {{CSP("report-uri")}} für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## Direktiven

Der `Content-Security-Policy-Report-Only`-Header unterstützt alle {{HTTPHeader("Content-Security-Policy")}}-Direktiven außer `sandbox`, das ignoriert wird.

> [!NOTE]
> Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, sonst hat es keinen Effekt.

## Beispiele

### Verwendung von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die {{CSP("report-to")}}-Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mit dem {{HTTPHeader("Reporting-Endpoints")}}-Antwort-Header definieren.
Im untenstehenden Beispiel definieren wir einen einzelnen Endpunkt mit dem Namen `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} festlegen, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst wird, wenn die Seite unsicher Ressourcen oder aus eingebettetem Code lädt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to`-Direktive wird über der veralteten `report-uri` bevorzugt, aber wir geben beide an, da `report-to` noch keine vollständige Unterstützung über alle Browser hinweg hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP-Direktive {{CSP("report-to")}}
- {{httpheader("Reporting-Endpoints")}}
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
- CSP-Direktive {{CSP("report-uri")}} {{deprecated_inline}}
- [Reporting API](/de/docs/Web/API/Reporting_API).
