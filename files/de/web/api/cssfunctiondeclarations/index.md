---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionDeclarations`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine fortlaufende Reihe von CSS-Deklarationen, die in einem {{cssxref("@function")}}-Block enthalten sind.

Dies kann [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) und den Wert des `results`-Descriptors innerhalb des `@function`-Blocks umfassen, jedoch keine Blöcke wie {{cssxref("@media")}} At-Regeln, die enthalten sein können. Ein solcher Block, der in der Mitte einer Reihe von Deklarationen enthalten ist, würde dazu führen, dass der Inhalt des Blocks in separate `CSSFunctionDeclarations`-Objekte aufgeteilt wird, wie in unserem [Mehrfaches `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations)-Demo zu sehen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die in einem {{cssxref("@function")}}-Block verfügbaren Deskriptoren repräsentiert.

## Beispiele

### Grundlegende `CSSFunctionDeclarations`-Verwendung

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann über das CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion unter Verwendung der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe zurück, die unter Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe transformiert und deren Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in der Funktion eingefügt, `--someVar`, die nicht verwendet wird, aber veranschaulicht, was passiert, wenn mehrere Deklarationen kontinuierlich innerhalb des `@function`-Blocks verfügbar sind.

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) abzurufen und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige fortlaufende Reihe von Deklarationen innerhalb der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, auf die Deskriptorinformationen zugreifen mithilfe von [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) und anschließend die Deskriptorlänge und Stilinformationen abrufen. All diese Informationen werden in die Konsole geloggt.

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

- Die `length`-Eigenschaft ist gleich `2`, da es zwei Teile im Text des Deskriptors gibt (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result`-Eigenschaft entspricht dem `@function`-Block `result`-Deskriptor, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrfaches `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie das Einfügen einer `@media` At-Regel in der Mitte einer Reihe von Deklarationen dazu führt, dass zwei `CSSFunctionDeclarations`-Objekte generiert werden.

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

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verknüpfte Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) abzurufen und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf die [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und loggen deren Wert in die Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations`-Objekt, das den Abschnitt `--x: 42;result: var(--y);` darstellt.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-At-Regel darstellt.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das den Abschnitt `--y: var(--x);` darstellt.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Wir loggen dann einige Details jedes `CSSFunctionDeclarations`-Objekts in die Konsole — das Objekt selbst, das [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt, das in seiner `style`-Eigenschaft enthalten ist, und die [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result)-Eigenschaft.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` einen leeren String zurück, weil der zweite Deklarationsabschnitt keinen `result`-Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
