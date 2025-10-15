---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

{{ APIRef("CSSOM") }}

Die **`CSSFunctionDeclarations`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine aufeinanderfolgende Reihe von CSS-Deklarationen, die innerhalb eines {{cssxref("@function")}}-Körpers enthalten sind.

Dies kann [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) und den Wert des `results`-Descriptors innerhalb des `@function`-Körpers umfassen, jedoch keine Blöcke wie {{cssxref("@media")}}-At-Regeln. Ein solcher Block, der in der Mitte einer Reihe von Deklarationen eingefügt wird, würde dazu führen, dass die Körperinhalte in separate `CSSFunctionDeclarations`-Objekte aufgeteilt werden, wie in unserem [Beispiel mit mehreren `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations) zu sehen ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die Deskriptoren im Körper einer {{cssxref("@function")}} repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann auf ihre Deklarationen mithilfe des CSSOM zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit dem {{cssxref("@function")}}-At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mit [relativer Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) innerhalb der Funktion eingebaut, `--someVar`, die nicht verwendet wird, aber veranschaulicht, was passiert, wenn mehrere Deklarationen kontinuierlich innerhalb des `@function`-Körpers vorhanden sind.

#### JavaScript

Unser Skript beginnt mit dem Abrufen einer Referenz auf das mit unserem Dokument verbundene Stylesheet über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets), dann mit dem Abrufen einer Referenz auf die einzige Regel im Stylesheet, der `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Dann greifen wir auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Folge von Deklarationen innerhalb der Funktion darstellt, verwenden [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules), greifen auf die Informationen seines Deskriptors über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Länge des Deskriptors und die Stilinformationen zu. All diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const sheet = document.styleSheets[0];
const cssFunc = sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert:

- Die `length`-Eigenschaft ist gleich `2`, da der Text des Deskriptors aus zwei Teilen besteht (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result`-Eigenschaft entspricht dem `result`-Descriptor des `@function`-Körpers, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrere `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie eine `@media`-At-Regel, die in der Mitte einer Reihe von Deklarationen eingefügt ist, dazu führt, dass zwei `CSSFunctionDeclarations`-Objekte erzeugt werden.

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

Unser Skript beginnt mit dem Abrufen einer Referenz auf das mit unserem Dokument verbundene Stylesheet über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets), dann mit dem Abrufen einer Referenz auf die einzige Regel im Stylesheet, der `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Dann greifen wir auf die [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und protokollieren ihren Wert in der Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations`-Objekt, das den Abschnitt `--x: 42;result: var(--y);` darstellt.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-At-Regel darstellt.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das den Abschnitt `--y: var(--x);` darstellt.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const sheet = document.styleSheets[0];
const cssFunc = sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Dann protokollieren wir einige Details jedes `CSSFunctionDeclarations`-Objekts in der Konsole — das Objekt selbst, das [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt, das in seiner `style`-Eigenschaft enthalten ist, und die [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result)-Eigenschaft.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` einen leeren String zurück, da der zweite Deklarationsabschnitt keinen `result`-Descriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
