---
title: "Content-Security-Policy: style-src-attr Direktive"
short-title: style-src-attr
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 119e866ff18a4cd9446e3bfa52154f67cfe117b4
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** Direktive legt gültige Quellen für Inline-Stile fest, die auf einzelne DOM-Elemente angewendet werden.

Die Direktive legt keine gültigen Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.
Diese werden mit {{CSP("style-src-elem")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Abrufdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        <p>
          Ja.
          Wenn diese Direktive fehlt, sucht der User-Agent nach der {{CSP("style-src")}}-Direktive, und wenn beide fehlen, wird auf die <code>default-src</code>-Direktive zurückgegriffen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expressions übereinstimmen. Für diese Direktive sind die folgenden Source-Expression-Werte anwendbar:
    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`style-src-attr` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

## Beispiele

### Verletzungsfälle

Bei dem folgenden CSP-Header:

```http
Content-Security-Policy: style-src-attr 'none'
```

… wird der Inline-Stil, der auf das folgende Element angewendet wird, nicht übernommen:

```html
<div style="display: inline">Foo</div>
```

Die Richtlinie würde auch alle Stile blockieren, die in JavaScript angewendet werden, indem das `style`-Attribut direkt gesetzt wird oder indem [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gesetzt wird:

```js
document.querySelector("div").setAttribute("style", "display: inline");
document.querySelector("div").style.cssText = "display: inline";
```

Stileigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements gesetzt werden, werden nicht blockiert, sodass Benutzer Stile sicher über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "inline";
```

Beachten Sie, dass die Verwendung von JavaScript möglicherweise unabhängig von der {{CSP("script-src")}}-CSP-Direktive blockiert wird.

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
