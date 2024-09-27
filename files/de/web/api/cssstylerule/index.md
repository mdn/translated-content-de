---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{ APIRef("CSSOM") }}

Die **`CSSStyleRule`** Schnittstelle repräsentiert eine einzelne CSS-Stilregel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText)
  - : Gibt die textuelle Darstellung des Selektors für diese Regel zurück, z.B. `"h1, h2"`.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt für die Regel zurück.
- [`CSSStyleRule.styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap) {{ReadOnlyInline}}
  - : Gibt ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das Zugriff auf die Eigenschaft-Wert-Paare der Regel bietet.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt daher ein `CSSStyleRule`-Objekt zurück, das die für `h1` definierte Regel darstellt.

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
