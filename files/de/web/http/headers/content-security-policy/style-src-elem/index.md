---
title: "CSP: style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** Direktive spezifiziert gültige Quellen für die Stylesheet-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"`.

Die Direktive legt keine gültigen Quellen für Inline-Style-Attribute fest; diese werden mit {{CSP("style-src-attr")}} festgelegt (und gültige Quellen für alle Styles können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        <p>
          Ja.
          Falls diese Direktive fehlt, sucht der User-Agent nach der {{CSP("style-src")}} Direktive, und wenn beide fehlen, fällt er auf die <code>default-src</code> Direktive zurück.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src-elem` Richtlinie erlaubt werden:

```http
Content-Security-Policy: style-src-elem <source>;
Content-Security-Policy: style-src-elem <source> <source>;
```

`style-src-elem` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in den [CSP-Quellenwerten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} verwendet werden kann (und in einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Beispiele

### Verstoßfälle

Gegeben dieser CSP-Header:

```http
Content-Security-Policy: style-src-elem https://example.com/
```

…werden die folgenden Stylesheets blockiert und nicht geladen:

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

…sowie Styles, die mit dem {{HTTPHeader("Link")}} Header geladen werden:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
