---
title: CSSPropertyRule
slug: Web/API/CSSPropertyRule
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Properties and Values API")}}

Die **`CSSPropertyRule`**-Schnittstelle der [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) repräsentiert eine einzelne CSS {{cssxref("@property")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPropertyRule.inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) {{ReadOnlyInline}}
  - : Gibt das Vererbungsflag der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) {{ReadOnlyInline}}
  - : Gibt den Anfangswert der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.name`](/de/docs/Web/API/CSSPropertyRule/name) {{ReadOnlyInline}}
  - : Gibt den Namen der benutzerdefinierten Eigenschaft zurück.
- [`CSSPropertyRule.syntax`](/de/docs/Web/API/CSSPropertyRule/syntax) {{ReadOnlyInline}}
  - : Gibt die literale Syntax der benutzerdefinierten Eigenschaft zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Stylesheet enthält eine einzelne {{cssxref("@property")}}-Regel. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSPropertyRule` mit den Eigenschaften und Werten sein, wie sie in der CSS-Regel definiert sind.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSPropertyRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
