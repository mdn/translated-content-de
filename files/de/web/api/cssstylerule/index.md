---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{ APIRef("CSSOM") }}

Die **`CSSStyleRule`**-Schnittstelle repräsentiert eine einzelne CSS-Stilregel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText)
  - : Gibt die textuelle Darstellung des Selektors für diese Regel zurück, z. B. `"h1, h2"`.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt für die Regel zurück, das deren Stile repräsentiert.
- [`CSSStyleRule.styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap) {{ReadOnlyInline}}
  - : Gibt ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das Zugriff auf die Eigenschaft-Wert-Paare der Regel bietet.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Eine Stilregel erhalten

Das untenstehende CSS definiert die Stilregel für den `h1`-Selektor, die im Code durch eine `CSSStyleRule`-Instanz dargestellt wird.

```css
h1 {
  color: pink;
}
```

Angenommen, die obige Stilregel ist die erste Regel im Dokument, wird sie die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0].style` gibt ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die für `h1` definierten Deklarationen repräsentiert.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSStyleRule representing the h1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
