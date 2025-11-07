---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSSupportsRule`**-Interface repräsentiert eine einzelne CSS {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Instanzmethoden

_Erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine CSS-Feature-Abfrage mit der {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die eine Stilregel enthält. Dies wird die erste CSSRule sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt daher ein `CSSSupportsRule`-Objekt zurück.

```css
@supports (display: grid) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSSupportsRule representing the feature query.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@supports")}}
