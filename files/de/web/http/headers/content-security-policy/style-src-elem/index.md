---
title: "CSP: style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** Richtlinie spezifiziert gültige Quellen für Stylesheet-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"`.

Die Richtlinie legt keine gültigen Quellen für Inline-Style-Attribute fest; diese werden mit {{CSP("style-src-attr")}} festgelegt (und gültige Quellen für alle Styles können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>[Fetch-Richtlinie](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        <p>
          Ja.
          Wenn diese Richtlinie nicht vorhanden ist, sucht der User-Agent nach der {{CSP("style-src")}}-Richtlinie, und wenn beide fehlen, wird auf die <code>default-src</code>-Richtlinie zurückgegriffen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src-elem`-Richtlinie erlaubt werden:

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

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Richtlinien](/de/docs/Glossary/fetch_directive) verwendet werden kann (und in einer [Anzahl anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

```http
Content-Security-Policy: style-src-elem https://example.com/
```

…die folgenden Stylesheets werden blockiert und nicht geladen:

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

…sowie Styles, die mit dem {{HTTPHeader("Link")}}-Header geladen werden:

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
- {{HTTPHeader("Link")}}-Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
