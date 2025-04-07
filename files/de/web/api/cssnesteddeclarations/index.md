---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{APIRef("CSSOM")}}

Das **`CSSNestedDeclarations`** Interface der [CSS Rule API](/de/docs/Web/API/CSSRule) wird verwendet, um verschachtelte [`CSSRule`](/de/docs/Web/API/CSSRule)s zu gruppieren.

Das Interface ermöglicht es dem [CSS Object Model (CSSOM](/de/docs/Web/API/CSS_Object_Model), die Struktur von CSS-Dokumenten mit verschachtelten CSS-Regeln zu spiegeln und sicherzustellen, dass Regeln in der Reihenfolge analysiert und ausgewertet werden, in der sie deklariert werden.

> [!NOTE]
> Implementierungen, die dieses Interface nicht unterstützen, könnten verschachtelte Regeln in der falschen Reihenfolge analysieren.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) {{ReadOnlyInline}}
  - : Gibt die Werte der verschachtelten Regeln zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### CSS

Das unten stehende CSS enthält einen Selektor `.foo`, der zwei Deklarationen und eine Medienabfrage enthält.

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

- Ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) Objekt, das die `background-color: silver` Regel repräsentiert.
  Dies kann über `document.styleSheets[0].cssRules[0]` zurückgegeben werden.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Objekt, das die `@media (screen)` Regel repräsentiert und über `document.styleSheets[0].cssRules[0].cssRules[0]` zurückgegeben werden kann.
  - Das `CSSMediaRule` Objekt enthält ein `CSSNestedDeclaration` Objekt, das die `color: tomato` Regel repräsentiert, die in der `@media (screen)` Regel verschachtelt ist.
    Dies kann über `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` zurückgegeben werden.
- Die letzte Regel ist ein `CSSNestedDeclaration` Objekt, das die `color: black` Regel im Stylesheet repräsentiert, und über `document.styleSheets[0].cssRules[0].cssRules[1]` zurückgegeben werden kann.

> [!NOTE]
> Alle Top-Level-Stile nach der ersten `CSSNestedDeclaration` müssen ebenfalls als `CSSNestedDeclaration` Objekte dargestellt werden, um der [CSS-Nested-Declarations-Regel](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule) zu folgen.

### CSSOM (CSS Object Model)

```plain
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
- [Die verschachtelte Deklarationsregel](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
