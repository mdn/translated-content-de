---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: 5e3cb7c4405256c4ad004986bbff622777b664b6
---

{{APIRef("CSSOM")}}

Die **`CSSNestedDeclarations`**-Schnittstelle der [CSS Rule API](/de/docs/Web/API/CSSRule) wird verwendet, um verschachtelte [`CSSRule`](/de/docs/Web/API/CSSRule)s zu gruppieren.

Die Schnittstelle ermöglicht es dem [CSS Object Model (CSSOM](/de/docs/Web/API/CSS_Object_Model), die Struktur von CSS-Dokumenten mit verschachtelten CSS-Regeln zu spiegeln und sicherzustellen, dass Regeln in der Reihenfolge geparst und ausgewertet werden, in der sie deklariert sind.

> [!NOTE] > [Browser-Versionen](#browser-kompatibilität), die diese Schnittstelle nicht unterstützen, könnten verschachtelte Regeln in der falschen Reihenfolge parsen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) {{ReadOnlyInline}}
  - : Gibt die Werte der verschachtelten Regeln zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### CSS

Der folgende CSS-Code enthält einen Selektor `.foo`, der zwei Deklarationen und eine Medienabfrage enthält.

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

Dies wird durch eine Anzahl von JavaScript-Objekten im [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) dargestellt:

- Ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt, das die Regel `background-color: silver` darstellt.
  Dies kann über `document.styleSheets[0].cssRules[0]` zurückgegeben werden.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die Regel `@media (screen)` darstellt und über `document.styleSheets[0].cssRules[0].cssRules[0]` zurückgegeben werden kann.
  - Das `CSSMediaRule`-Objekt enthält ein `CSSNestedDeclaration`-Objekt, das die Regel `color: tomato` darstellt, die durch die Regel `@media (screen)` verschachtelt ist.
    Dies kann über `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` zurückgegeben werden.
- Die letzte Regel ist ein `CSSNestedDeclaration`-Objekt, das die Regel `color: black` im Stylesheet darstellt und über `document.styleSheets[0].cssRules[0].cssRules[1]` zurückgegeben werden kann.

> [!NOTE]
> Alle Top-Level-Stile nach der ersten `CSSNestedDeclaration` müssen ebenfalls als `CSSNestedDeclaration`-Objekte dargestellt werden, um die [CSS-Nesting-Regel](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule) zu befolgen.

### CSSOM (CSS Object Model)

```txt
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style)
- [Die Verschachtelte Deklarationen Regel](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)