---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDeclarations`** Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine aufeinanderfolgende Reihe von CSS-Deklarationen, die innerhalb eines {{cssxref("@function")}}-Blocks enthalten sind.

Dies kann [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) umfassen und den Wert des `results` Deskriptors innerhalb des `@function`-Blocks, jedoch keine Blöcke wie {{cssxref("@media")}} At-Regeln, die möglicherweise enthalten sind. Ein solcher Block, der in der Mitte einer Reihe von Deklarationen enthalten ist, würde dazu führen, dass der Body-Inhalt in separate `CSSFunctionDeclarations` Objekte aufgeteilt wird, wie in unserem [Mehrere `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations) Demo zu sehen ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors) Objekt zurück, das die Deskriptoren im Körper einer {{cssxref("@function")}} repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mithilfe des CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Es gibt eine {{cssxref("color_value/oklch", "oklch()")}} Farbe zurück, die mithilfe der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wird; die Eingabefarbe wird in eine `oklch()` Farbe umgewandelt, und ihr Helligkeitskanal wird um die eingegebene Zahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) innerhalb der Funktion, `--someVar`, eingefügt, die nicht verwendet wird, aber illustriert, was passiert, wenn innerhalb des `@function`-Bodys kontinuierlich mehrere Deklarationen verfügbar sind.

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu erhalten, das an unser Dokument angehängt ist, mithilfe von [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules), zu erhalten.

Wir greifen dann auf das `CSSFunctionDeclarations` Objekt zu, das die einzige kontinuierliche Reihe von Deklarationen innerhalb der Funktion darstellt, mithilfe von [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules), greifen auf ihre Deskriptorinformationen mithilfe von [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Deskriptorlänge und Stilinformationen zu. All diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Besonders erwähnenswert:

- Die `length` Eigenschaft ist gleich `2`, da es zwei Teile des Deskriptortextes gibt (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result` Eigenschaft entspricht dem `@function` Body's `result` Deskriptor, welcher `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrere `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie eine `@media` At-Regel, die in der Mitte einer Reihe von Deklarationen eingefügt wird, zwei `CSSFunctionDeclarations` Objekte erzeugt.

#### CSS

Unser CSS zeigt ein `@function` Beispiel aus der Spezifikation, `--bar()`, das nicht viel macht, aber eine Reihe von Deklarationen zeigt, die durch einen `@media` Block getrennt sind.

```css live-sample___multiple-cssfunctiondeclarations
@function --bar() {
  --x: 42;
  result: var(--y);
  @media (width > 1000px) {
    /* ... */
  }
  --y: var(--x);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu erhalten, das an unser Dokument angehängt ist, über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), dann erhalten wir eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf den [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und protokollieren dessen Wert in der Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations` Objekt, das den `--x: 42;result: var(--y);` Abschnitt darstellt.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Objekt, das die `@media` At-Regel darstellt.
- Ein zweites `CSSFunctionDeclarations` Objekt, das den `--y: var(--x);` Abschnitt darstellt.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Wir protokollieren dann einige Details jedes `CSSFunctionDeclarations` Objekts in der Konsole — das Objekt selbst, das [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors) Objekt, das in seiner `style` Eigenschaft enthalten ist, und die [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) Eigenschaft.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` einen leeren String zurück, da der zweite Deklarationsabschnitt keinen `result` Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
