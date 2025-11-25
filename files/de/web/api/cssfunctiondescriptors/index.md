---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDescriptors`** Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die innerhalb einer Reihe von CSS-Deklarationen enthalten sind, die durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt werden.

Ein `CSSFunctionDescriptors`-Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die einen `result`-Deskriptor repräsentiert, falls einer in der zugehörigen Deklarationsmenge vorhanden ist.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine CSS-Benutzerfunktion und greifen dann mit dem CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe zurück, die unter Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()` Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabenummer erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verknüpfte Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten, und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Reihe von Deklarationen innerhalb der Funktion repräsentiert, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, greifen mit [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) auf die Deskriptorinformationen zu und greifen dann auf die Deskriptor-Stilinformationen zu. Alle diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert ist, dass die `result`-Eigenschaft dem Deskriptor `result` des `@function`-Körpers entspricht, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
