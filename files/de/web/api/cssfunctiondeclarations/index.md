---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDeclarations`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine aufeinanderfolgende Reihe von CSS-Deklarationen, die innerhalb eines {{cssxref("@function")}}-Körpers enthalten sind.

Dies kann [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) umfassen und den Wert des `results`-Deskriptors innerhalb des `@function`-Körpers, jedoch keine Blöcke wie {{cssxref("@media")}}-At-Regeln, die möglicherweise enthalten sind. Ein solcher Block, der in der Mitte einer Reihe von Deklarationen enthalten ist, würde dazu führen, dass die Körperinhalte in separate `CSSFunctionDeclarations`-Objekte aufgeteilt werden, wie in unserem [Mehrere `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations)-Beispiel gezeigt wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die Deskriptoren im Körper einer {{cssxref("@function")}} repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann über das CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion unter Verwendung der {{cssxref("@function")}}-At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, einen {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die unter Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt, und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) innerhalb der Funktion aufgenommen, `--someVar`, die nicht verwendet wird, aber veranschaulicht, was passiert, wenn mehrere Deklarationen kontinuierlich innerhalb des `@function`-Körpers verfügbar sind.

#### JavaScript

Unser Skript beginnt, indem es einen Verweis auf das Stylesheet holt, das unserem Dokument angehängt ist, unter Verwendung von [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), und dann einen Verweis auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige durchgehende Reihe von Deklarationen innerhalb der Funktion darstellt, verwenden [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules), greifen auf die Deskriptorinformationen über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Deskriptorlänge und Stilinformationen zu. All diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Am bemerkenswertesten:

- Die `length`-Eigenschaft ist gleich `2`, da der Text des Deskriptors zwei Teile hat (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result`-Eigenschaft entspricht dem `result` Deskriptor des `@function`-Körpers, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrere `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie ein `@media`-At-Regel, die in der Mitte einer Reihe von Deklarationen eingefügt ist, zwei `CSSFunctionDeclarations`-Objekte erzeugt.

#### CSS

Unser CSS zeigt ein `@function`-Beispiel aus der Spezifikation, `--bar()`, das nicht viel macht, aber eine Reihe von Deklarationen enthält, die durch einen `@media`-Block getrennt sind.

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

Unser Skript beginnt, indem es einen Verweis auf das Stylesheet holt, das unserem Dokument angehängt ist, über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), dann einen Verweis auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf die [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und protokollieren deren Wert in der Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations`-Objekt, das den Teil `--x: 42;result: var(--y);` repräsentiert.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-At-Regel darstellt.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das den Teil `--y: var(--x);` repräsentiert.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Wir protokollieren dann einige Details jedes `CSSFunctionDeclarations`-Objekts in der Konsole — das Objekt selbst, das [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt, das in seiner `style`-Eigenschaft enthalten ist, und die [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result)-Eigenschaft.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` eine leere Zeichenkette zurück, da der zweite Deklarationsteil keinen `result`-Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
