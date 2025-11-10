---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die **`CSSNestedDeclarations`** Schnittstelle der [CSS Rule API](/de/docs/Web/API/CSSRule) wird verwendet, um verschachtelte [`CSSRule`](/de/docs/Web/API/CSSRule)s zu gruppieren.

Die Schnittstelle ermöglicht es dem [CSS Object Model (CSSOM](/de/docs/Web/API/CSS_Object_Model), die Struktur von CSS-Dokumenten mit verschachtelten CSS-Regeln widerzuspiegeln und sicherzustellen, dass Regeln in der Reihenfolge geparst und ausgewertet werden, in der sie deklariert sind.

> [!NOTE]
> Implementierungen, die diese Schnittstelle nicht unterstützen, können verschachtelte Regeln in der falschen Reihenfolge parsen.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) {{ReadOnlyInline}}
  - : Gibt die Werte der verschachtelten Regeln zurück.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### CSS

Das folgende CSS enthält einen Selektor `.foo`, der zwei Deklarationen und eine Medienabfrage enthält.

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

Dies wird durch mehrere JavaScript-Objekte im [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) dargestellt:

- Ein [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) Objekt, das die Regel `background-color: silver` darstellt.
  Dies kann über `document.styleSheets[0].cssRules[0]` zurückgegeben werden.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Objekt, das die Regel `@media screen` darstellt, und welches über `document.styleSheets[0].cssRules[0].cssRules[0]` zurückgegeben werden kann.
  - Das `CSSMediaRule` Objekt enthält ein `CSSNestedDeclaration` Objekt, welches die Regel `color: tomato`, verschachtelt durch die Regel `@media screen`, darstellt.
    Dies kann über `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` zurückgegeben werden.
- Die letzte Regel ist ein `CSSNestedDeclaration` Objekt, das die Regel `color: black` im Stylesheet darstellt und welches über `document.styleSheets[0].cssRules[0].cssRules[1]` zurückgegeben werden kann.

> [!NOTE]
> Alle Top-Level-Stile nach der ersten `CSSNestedDeclaration` müssen ebenfalls als `CSSNestedDeclaration` Objekte dargestellt werden, um der [CSS verschachtelte Deklarationen Regel](/de/docs/Web/CSS/Guides/Nesting/Using#nested_declarations_rule) zu folgen.

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
- [Die Regel für verschachtelte Deklarationen](/de/docs/Web/CSS/Guides/Nesting/Using#nested_declarations_rule)
