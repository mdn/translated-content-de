---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{APIRef("CSSOM")}}

Das **`CSSNestedDeclarations`**-Interface der [CSS Rule API](/de/docs/Web/API/CSSRule) wird verwendet, um verschachtelte [`CSSRule`](/de/docs/Web/API/CSSRule)s zu gruppieren.

Das Interface ermöglicht es dem [CSS Object Model (CSSOM](/de/docs/Web/API/CSS_Object_Model), die Struktur von CSS-Dokumenten mit verschachtelten CSS-Regeln widerzuspiegeln und sicherzustellen, dass Regeln in der Reihenfolge, in der sie deklariert sind, geparst und ausgewertet werden.

> [!NOTE]
> Implementierungen, die dieses Interface nicht unterstützen, könnten verschachtelte Regeln in der falschen Reihenfolge parsen.
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

Der folgende CSS-Code enthält einen Selektor `.foo`, der zwei Deklarationen und eine Media-Query beinhaltet.

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

- Ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Objekt, das die Regel `background-color: silver` repräsentiert.
  Dies kann über `document.styleSheets[0].cssRules[0]` zurückgegeben werden.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die Regel `@media (screen)` repräsentiert und über `document.styleSheets[0].cssRules[0].cssRules[0]` zurückgegeben werden kann.
  - Das `CSSMediaRule`-Objekt enthält ein `CSSNestedDeclaration`-Objekt, das die Regel `color: tomato` repräsentiert, die durch die `@media (screen)`-Regel verschachtelt ist.
    Dies kann über `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` zurückgegeben werden.
- Die letzte Regel ist ein `CSSNestedDeclaration`-Objekt, das die Regel `color: black` im Stylesheet repräsentiert und über `document.styleSheets[0].cssRules[0].cssRules[1]` zurückgegeben werden kann.

> [!NOTE]
> Alle Top-Level-Stile nach der ersten `CSSNestedDeclaration` müssen ebenfalls als `CSSNestedDeclaration`-Objekte dargestellt werden, um der [Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule) zu folgen.

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
- [Die Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
