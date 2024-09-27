---
title: CSSPropertyRule
slug: Web/API/CSSPropertyRule
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("CSS Properties and Values API")}}

Die **`CSSPropertyRule`**-Schnittstelle der [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) repräsentiert eine einzelne CSS-{{cssxref("@property")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPropertyRule.inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) {{ReadOnlyInline}}
  - : Gibt das Vererbungs-Flag der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) {{ReadOnlyInline}}
  - : Gibt den Anfangswert der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.name`](/de/docs/Web/API/CSSPropertyRule/name) {{ReadOnlyInline}}
  - : Gibt den Namen der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.syntax`](/de/docs/Web/API/CSSPropertyRule/syntax) {{ReadOnlyInline}}
  - : Gibt die wörtliche Syntax der benutzerdefinierten Eigenschaft zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` mit den Eigenschaften und Werten sein, die durch die Regel in CSS definiert sind.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSPropertyRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
