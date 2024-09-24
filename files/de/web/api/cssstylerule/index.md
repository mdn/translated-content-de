---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("CSSOM") }}

Die **`CSSStyleRule`**-Schnittstelle repräsentiert eine einzelne CSS-Stilregel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorgängern {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

- {{domxref("CSSStyleRule.selectorText")}}
  - : Gibt die textuelle Darstellung des Selektors für diese Regel zurück, z.B. `"h1, h2"`.
- {{domxref("CSSStyleRule.style")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("CSSStyleDeclaration")}}-Objekt für die Regel zurück.
- {{domxref("CSSStyleRule.styleMap")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref('StylePropertyMap')}}-Objekt zurück, das Zugriff auf die Eigenschaft-Wert-Paare der Regel bietet.

## Instanz-Methoden

_Erbt Methoden von seinen Vorgängern {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt daher ein `CSSStyleRule`-Objekt zurück, das die für `h1` definierte Regel repräsentiert.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSStyleRule representing the h1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
