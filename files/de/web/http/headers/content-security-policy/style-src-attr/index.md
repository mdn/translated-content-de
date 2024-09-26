---
title: "CSP: style-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 77bb6835fdd8a6c10432d37509b7a179141ee2e1
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** Direktive gibt gültige Quellen für Inline-Stile an, die auf einzelne DOM-Elemente angewendet werden.

Die Direktive legt keine gültigen Quellen für {{HTMLElement("style")}}-Elemente und {{HTMLElement("link")}}-Elemente mit `rel="stylesheet"` fest.
Diese werden mit {{CSP("style-src-elem")}} festgelegt (und gültige Quellen für alle Stile können mit {{CSP("style-src")}} festgelegt werden).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Versionsnummer</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        <p>
          Ja.
          Wenn diese Direktive fehlt, sucht der User Agent nach der {{CSP("style-src")}} Direktive, und wenn beide fehlen, wird auf die <code>default-src</code> Direktive zurückgegriffen.
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

`style-src-attr` kann in Verbindung mit {{CSP("style-src")}} verwendet werden:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass diese gleiche Menge von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angenommen, diese CSP-Header:

```http
Content-Security-Policy: style-src-attr 'none'
```

…der Inline-Stil, der auf das untenstehende Element angewendet wird, wird nicht angewendet:

```html
<div style="display:none">Foo</div>
```

Die Richtlinie würde auch alle Stile blockieren, die in JavaScript angewendet werden, indem das `style`-Attribut direkt gesetzt wird oder durch Setzen von {{domxref("CSSStyleDeclaration.cssText", "cssText")}}:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Stileigenschaften, die direkt auf der {{domxref("HTMLElement/style", "style")}}-Eigenschaft des Elements gesetzt werden, werden nicht blockiert, sodass Benutzer Stile sicher über JavaScript manipulieren können:

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
- {{HTTPHeader("Link")}}-Header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}