---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionDeclarations`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine aufeinanderfolgende Serie von CSS-Deklarationen, die innerhalb eines {{cssxref("@function")}}-Körpers enthalten sind.

Dies kann [CSS- benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) umfassen, sowie den Wert des `results` Deskriptors im `@function` Körper, aber es schließt keine Blöcke wie {{cssxref("@media")}}-Regeln ein, die eventuell enthalten sein können. Ein solcher Block, der in der Mitte einer Serie von Deklarationen eingefügt wird, würde dazu führen, dass der Inhalt des Körpers in separate `CSSFunctionDeclarations`-Objekte aufgeteilt wird, wie in unserem [Mehrere `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations) Beispiel zu sehen ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die in einem {{cssxref("@function")}}-Körper verfügbaren Deskriptoren repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mit dem CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion, die die {{cssxref("@function")}}-Regel verwendet. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe, die mit der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde, zurück; die Eingabefarbe wird in eine `oklch()`-Farbe transformiert und deren Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) innerhalb der Funktion, `--someVar`, eingefügt, die nicht verwendet wird, aber veranschaulicht, was passiert, wenn mehrere Deklarationen kontinuierlich im `@function`-Körper verfügbar sind.

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu erhalten, das mit unserem Dokument verbunden ist, indem es [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) verwendet, dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Dann greifen wir auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige ununterbrochene Serie von Deklarationen innerhalb der Funktion repräsentiert, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, zugreifen auf die Informationen des Deskriptors mittels [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style), und schließlich auf die Deskriptorlänge und Stilinformationen zugreifen. Alle diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert:

- Die `length`-Eigenschaft ist gleich `2`, da der Text des Deskriptors zwei Teile umfasst (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result`-Eigenschaft entspricht dem `result`-Deskriptor des `@function`-Körpers, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrere `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie eine `@media`-Regel, die in der Mitte einer Serie von Deklarationen eingefügt wird, dazu führt, dass zwei `CSSFunctionDeclarations`-Objekte erzeugt werden.

#### CSS

Unser CSS zeigt ein `@function`-Beispiel, das aus der Spezifikation entnommen ist, `--bar()`, die nicht viel macht, aber eine Serie von Deklarationen aufweist, die durch einen `@media`-Block getrennt sind.

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

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu erhalten, das mit unserem Dokument verbunden ist, über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf die [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und protokollieren deren Wert in der Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations`-Objekt, das den `--x: 42;result: var(--y);`-Teil repräsentiert.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-Regel repräsentiert.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das die `--y: var(--x);`-Portion repräsentiert.

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

Im zweiten Fall gibt `result` einen leeren String zurück, da der zweite Deklarationsteil keinen `result`-Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
