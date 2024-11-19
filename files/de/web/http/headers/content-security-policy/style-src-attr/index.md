---
title: "CSP: style-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** Direktive gibt gültige Quellen für Inline-Stile an, die auf individuelle DOM-Elemente angewendet werden.

Die Direktive legt keine gültigen Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest. Diese werden mit {{CSP("style-src-elem")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

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
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        <p>
          Ja.
          Wenn diese Direktive fehlt, wird der User-Agent nach der {{CSP("style-src")}}-Direktive suchen, und wenn beide fehlen, auf die <code>default-src</code> Direktive zurückgreifen.
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

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:

    - [`'unsafe-hashes'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)

`style-src-attr` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

```http
Content-Security-Policy: style-src-attr 'none'
```

… wird der Inline-Stil, der auf das folgende Element angewendet wird, nicht angewendet:

```html
<div style="display:none">Foo</div>
```

Die Richtlinie würde auch alle Stile blockieren, die in JavaScript durch Setzen des `style`-Attributs direkt oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements gesetzt werden, werden nicht blockiert, was Benutzern ermöglicht, Stile sicher über JavaScript zu manipulieren:

```js
document.querySelector("div").style.display = "none";
```

Beachten Sie, dass die Verwendung von JavaScript möglicherweise unabhängig durch die {{CSP("script-src")}} CSP-Direktive blockiert werden könnte.

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
