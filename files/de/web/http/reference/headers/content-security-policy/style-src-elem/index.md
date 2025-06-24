---
title: "Content-Security-Policy: style-src-elem Richtlinie"
short-title: style-src-elem
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** Richtlinie legt gültige Quellen für Stylesheet-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.

Die Richtlinie legt keine gültigen Quellen für Inline-Style-Attribute fest; diese werden mit {{CSP("style-src-attr")}} festgelegt (und gültige Quellen für alle Styles können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        <p>
          Ja.
          Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der {{CSP("style-src")}}-Richtlinie, und wenn beide fehlen, fällt er auf die <code>default-src</code> Richtlinie zurück.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: style-src-elem 'none';
Content-Security-Policy: style-src-elem <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quellenausdrücken_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Richtlinie gelten die gleichen Quellenausdrücke wie für [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src), mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes).

`style-src-elem` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

## Beispiele

### Verletzungsfälle

Angesichts dieses CSP-Headers:

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

…sowie Styles, die über den {{HTTPHeader("Link")}} Header geladen werden:

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
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
