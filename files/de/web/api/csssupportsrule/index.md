---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Die **`CSSSupportsRule`**-Schnittstelle repräsentiert eine einzelne CSS-{{cssxref("@supports")}}-[At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule), [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule), und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine CSS-Feature-Anfrage mit der {{cssxref("@supports")}}-[At-Regel](/de/docs/Web/CSS/At-rule), die eine Stilregel enthält. Diese wird die erste `CSSRule` sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt daher ein `CSSSupportsRule`-Objekt zurück.

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
