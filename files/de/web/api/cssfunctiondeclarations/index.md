---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{ APIRef("CSSOM") }}

Das **`CSSFunctionDeclarations`**-Interface des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine aufeinanderfolgende Reihe von CSS-Deklarationen innerhalb eines {{cssxref("@function")}}-Körpers.

Dies kann [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) und den Wert des `results`-Descriptors innerhalb des `@function`-Körpers umfassen, aber es schließt keine Blöcke wie {{cssxref("@media")}} At-Regeln ein, die möglicherweise enthalten sind. Ein solcher Block, der in der Mitte einer Reihe von Deklarationen enthalten ist, würde dazu führen, dass der Inhalt des Körpers in getrennte `CSSFunctionDeclarations`-Objekte unterteilt wird, wie in unserem [Mehrfache `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations)-Demo zu sehen ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die im {{cssxref("@function")}}-Körper verfügbaren Deskriptoren darstellt.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mithilfe des CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}}-At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` nimmt zwei Parameter an, ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Es gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mit [relativer Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben auch eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) innerhalb der Funktion aufgenommen, `--someVar`, die nicht verwendet wird, aber veranschaulicht, was passiert, wenn mehrere Deklarationen kontinuierlich innerhalb des `@function`-Körpers verfügbar sind.

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet mithilfe von [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige kontinuierliche Reihe von Deklarationen innerhalb der Funktion repräsentiert, verwenden [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules), greifen auf die Deskriptor-Informationen mit [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Länge und Stilinformation des Deskriptors zu. All diese Informationen werden in der Konsole protokolliert.

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

- Die `length`-Eigenschaft ist gleich `2`, da der Text des Deskriptors aus zwei Teilen besteht (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die `result`-Eigenschaft entspricht dem `result`-Deskriptor des `@function`-Körpers, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

### Mehrfache `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie eine `@media`-At-Regel, die in der Mitte einer Reihe von Deklarationen eingefügt ist, zwei `CSSFunctionDeclarations`-Objekte erzeugt.

#### CSS

Unser CSS zeigt ein `@function`-Beispiel aus der Spezifikation, `--bar()`, das nicht viel tut, aber eine Reihe von Deklarationen enthält, die durch einen `@media`-Block getrennt sind.

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

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf die [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und protokollieren deren Wert in der Konsole. Dies gibt ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt zurück, das drei Objekte enthält:

- Ein `CSSFunctionDeclarations`-Objekt, das den Teil `--x: 42;result: var(--y);` repräsentiert.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-At-Regel repräsentiert.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das den Teil `--y: var(--x);` repräsentiert.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Wir protokollieren dann einige Details jedes `CSSFunctionDeclarations`-Objekts in der Konsole — das Objekt selbst, das in seinem `style`-Eigenschaft enthaltene [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt und die [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result)-Eigenschaft.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` einen leeren String zurück, weil der zweite Deklarationsteil keinen `result`-Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
