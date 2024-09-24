---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Die **`CSSSupportsRule`**-Schnittstelle repräsentiert eine einzelne CSS-{{cssxref("@supports")}} [at-rule](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, und {{domxref("CSSRule")}}._

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, und {{domxref("CSSRule")}}._

## Beispiele

Das CSS enthält eine CSS-Funktionsabfrage mit der {{cssxref("@supports")}} [at-rule](/de/docs/Web/CSS/At-rule), die eine Stilregel enthält. Dies wird die erste CSSRule sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
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
console.log(myRules[0]); // ein CSSSupportsRule, das die Funktionsabfrage repräsentiert.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@supports")}}
