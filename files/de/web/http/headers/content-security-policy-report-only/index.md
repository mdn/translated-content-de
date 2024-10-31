---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response_header", "Response-Header")}} hilft dabei, Verstöße gegen die Content Security Policy (CSP) zu überwachen und deren Auswirkungen zu beobachten, ohne die Sicherheitsrichtlinien durchzusetzen.
Dieser Header ermöglicht es Ihnen, Verstöße zu testen oder zu beheben, bevor eine spezifische {{HTTPHeader("Content-Security-Policy")}} angewendet und durchgesetzt wird.

Die CSP-Direktive {{CSP("report-to")}} muss angegeben werden, damit Berichte gesendet werden können: Andernfalls hat die Operation keinen Effekt.

Verstoßmeldungen werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) an Endpunkte gesendet, die in einem HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} definiert und mit der CSP-Direktive {{CSP("report-to")}} ausgewählt werden.

Für weitere Informationen siehe unseren [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Leitfaden.

> [!NOTE]
> Der Header kann auch mit der veralteten Direktive {{CSP("report-uri")}} verwendet werden (diese wird durch {{CSP("report-to")}} ersetzt).
> Die Nutzung und das resultierende Berichtssyntax sind leicht unterschiedlich; sehen Sie sich das Thema {{CSP("report-uri")}} für mehr Details an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Der `Content-Security-Policy-Report-Only` Header unterstützt alle {{HTTPHeader("Content-Security-Policy")}} Direktiven außer `sandbox`, welches ignoriert wird.

> [!NOTE]
> Die CSP-Direktive {{CSP("report-to")}} sollte mit diesem Header verwendet werden, andernfalls hat sie keinen Effekt.

## Beispiele

### Verwenden von Content-Security-Policy-Report-Only zum Senden von CSP-Berichten

Um die {{CSP("report-to")}} Direktive zu verwenden, müssen Sie zuerst einen entsprechenden Endpunkt mittels des {{HTTPHeader("Reporting-Endpoints")}} Response-Headers definieren.
Im untenstehenden Beispiel definieren wir einen einzelnen Endpunkt namens `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wir können dann das Ziel des Berichts mit {{CSP("report-to")}} und {{CSP("report-uri")}} definieren, wie unten gezeigt.
Beachten Sie, dass dieser spezielle Bericht ausgelöst würde, wenn die Seite unsichere Ressourcen lädt oder von Inline-Code stammt.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> Die `report-to` Direktive wird dem veralteten `report-uri` vorgezogen, aber wir deklarieren beide, da `report-to` noch keine vollständige browserübergreifende Unterstützung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} Direktive
- CSP {{CSP("report-uri")}} Direktive {{deprecated_inline}}
