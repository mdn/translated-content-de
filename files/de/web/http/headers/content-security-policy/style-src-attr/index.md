---
title: "CSP: style-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 77bb6835fdd8a6c10432d37509b7a179141ee2e1
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** Direktive gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.

Die Direktive legt keine gültigen Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest. Diese werden mit {{CSP("style-src-elem")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP Version</th>
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
          Ja. Wenn diese Direktive fehlt, sucht der User Agent nach der {{CSP("style-src")}} Direktive, und wenn beide fehlen, wird auf die <code>default-src</code> Direktive zurückgegriffen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `style-src-attr` Richtlinie erlaubt werden:

```http
Content-Security-Policy: style-src-attr <source>;
Content-Security-Policy: style-src-attr <source> <source>;
```

`style-src-attr` kann zusammen mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### Quellen

`<source>` kann einer der Werte aus [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) sein.

Beachten Sie, dass derselbe Satz von Werten für alle {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und eine [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Bei diesem CSP-Header:

```http
Content-Security-Policy: style-src-attr 'none'
```

…wird der Inline-Stil, der auf das untenstehende Element angewendet wird, nicht angewendet:

```html
<div style="display:none">Foo</div>
```

Die Richtlinie würde auch alle Stile blockieren, die in JavaScript durch direktes Setzen des `style`-Attributs oder durch Setzen von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) angewendet werden:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements festgelegt werden, werden nicht blockiert, sodass Benutzer Stile sicher über JavaScript manipulieren können:

```js
document.querySelector("div").style.display = "none";
```

Beachten Sie, dass die Verwendung von JavaScript unabhängig davon durch die {{CSP("script-src")}} CSP-Direktive blockiert werden könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{HTTPHeader("Link")}} Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSGroupingRule.insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule)
- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
