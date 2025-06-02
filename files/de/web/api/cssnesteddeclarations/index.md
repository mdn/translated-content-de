---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("CSSOM")}}

Das **`CSSNestedDeclarations`**-Interface der [CSS Rule API](/de/docs/Web/API/CSSRule) wird verwendet, um verschachtelte [`CSSRule`](/de/docs/Web/API/CSSRule)s zu gruppieren.

Das Interface ermöglicht es, dass das [CSS Object Model (CSSOM](/de/docs/Web/API/CSS_Object_Model) die Struktur von CSS-Dokumenten mit verschachtelten CSS-Regeln widerspiegelt, und stellt sicher, dass Regeln in der Reihenfolge analysiert und ausgewertet werden, in der sie deklariert sind.

> [!NOTE]
> Implementierungen, die dieses Interface nicht unterstützen, könnten verschachtelte Regeln in der falschen Reihenfolge analysieren.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für mehr Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) {{ReadOnlyInline}}
  - : Gibt die Werte der verschachtelten Regeln zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### CSS

Der unten stehende CSS-Code enthält einen Selektor `.foo`, der zwei Deklarationen und eine Medienabfrage enthält.

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

Dies wird durch eine Anzahl von JavaScript-Objekten im [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) dargestellt:

- Ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt, das die Regel `background-color: silver` repräsentiert.
  Dies kann über `document.styleSheets[0].cssRules[0]` zurückgegeben werden.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die Regel `@media screen` repräsentiert, und das über `document.styleSheets[0].cssRules[0].cssRules[0]` zurückgegeben werden kann.
  - Das `CSSMediaRule`-Objekt enthält ein `CSSNestedDeclaration`-Objekt, das die Regel `color: tomato` repräsentiert, die durch die Regel `@media screen` verschachtelt ist.
    Dies kann über `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` zurückgegeben werden.
- Die letzte Regel ist ein `CSSNestedDeclaration`-Objekt, das die Regel `color: black` im Stylesheet repräsentiert und über `document.styleSheets[0].cssRules[0].cssRules[1]` zurückgegeben werden kann.

> [!NOTE]
> Alle Ebenenstile nach der ersten `CSSNestedDeclaration` müssen ebenfalls als `CSSNestedDeclaration`-Objekte dargestellt werden, um der [CSS-Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule) zu folgen.

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
- [Die Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
