---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDescriptors`** Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einer Gruppe von CSS-Deklarationen enthalten sind, die durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations) Objekt dargestellt werden.

Ein `CSSFunctionDescriptors` Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der einen `result` Deskriptor darstellt, wenn einer in der zugehörigen Gruppe von Deklarationen existiert.

## Beispiele

### Grundlegende Nutzung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann auf ihre Deklarationen über das CSSOM zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion unter Verwendung der {{cssxref("@function")}} @-Regel. Die Funktion wird `--lighter()` genannt und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe zurück, die unter Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wird; die Eingabefarbe wird in eine `oklch()` Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabenummer erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das an unser Dokument angehängte Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu bekommen, und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Danach greifen wir auf das `CSSFunctionDeclarations` Objekt zu, das die einzige kontinuierliche Lauf von Deklarationen innerhalb der Funktion darstellt, verwenden [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules), greifen auf die Information des Deskriptors über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und rufen dann die Stilinformationen des Deskriptors ab. Alle diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert ist, dass die `result` Eigenschaft dem `result` Deskriptor des `@function` Körpers entspricht, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
