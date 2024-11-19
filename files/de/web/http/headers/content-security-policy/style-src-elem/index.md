---
title: "CSP: style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** Direktive legt gültige Quellen für Stylesheet-{{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.

Die Direktive legt keine gültigen Quellen für Inline-Stilattribute fest; diese werden mit {{CSP("style-src-attr")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        <p>
          Ja.
          Wenn diese Direktive fehlt, sucht der Benutzeragent nach der {{CSP("style-src")}} Direktive, und wenn beide fehlen, greift er auf die <code>default-src</code> Direktive zurück.
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

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruckswerten_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der gegebenen Quellausdrücke übereinstimmen. Für diese Direktive gelten die gleichen Quellausdruckswerte wie für [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src), mit Ausnahme von [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes).

`style-src-elem` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

## Beispiele

### Verstöße

Gegebenenfalls dieser CSP-Header:

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

…sowie Styles, die über den {{HTTPHeader("Link")}}-Header geladen werden:

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
