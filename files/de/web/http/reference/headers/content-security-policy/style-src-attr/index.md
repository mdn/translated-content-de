---
title: "Content-Security-Policy: style-src-attr-Direktive"
short-title: style-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`**-Direktive gibt gültige Quellen für Inline-Styles an, die auf einzelne DOM-Elemente angewendet werden.

Die Direktive legt keine gültigen Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.
Diese werden mithilfe von {{CSP("style-src-elem")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        <p>
          Ja.
          Wenn diese Direktive fehlt, wird der Benutzeragent nach der {{CSP("style-src")}}-Direktive suchen, und wenn beide fehlen, auf die <code>default-src</code>-Direktive zurückgreifen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: style-src-attr 'none';
Content-Security-Policy: style-src-attr <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs können geladen werden, wenn sie mit einem der angegebenen source expressions übereinstimmen. Für diese Direktive sind die folgenden source expression-Werte anwendbar:
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`style-src-attr` kann zusammen mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gesetzt:

```http
Content-Security-Policy: style-src-attr 'none'
```

…wird der Inline-Style, der auf das untenstehende Element angewendet wird, nicht angewendet:

```html
<div style="display:none">Foo</div>
```

Die Richtlinie würde auch alle Stile blockieren, die in JavaScript durch direktes Setzen des `style`-Attributs oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, werden nicht blockiert, sodass Benutzer sicher Stile über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Beachten Sie, dass die Verwendung von JavaScript möglicherweise unabhängig mithilfe der {{CSP("script-src")}}-CSP-Direktive blockiert sein könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{HTTPHeader("Link")}}-Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
