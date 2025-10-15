---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

{{ APIRef("CSSOM") }}

Das **`CSSFunctionDescriptors`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einer Reihe von CSS-Deklarationen enthalten sind, dargestellt durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt.

Ein `CSSFunctionDescriptors`-Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen `result`-Deskriptor darstellt, falls einer im zugehörigen Deklarationssatz existiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mittels CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mittels der {{cssxref("@function")}}-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe zurück. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mit der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird durch die Eingabezahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu erhalten, das an unser Dokument angehängt ist, indem [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwendet wird, dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Abfolge von Deklarationen innerhalb der Funktion darstellt, indem [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwendet wird, auf die Informationen der Deskriptoren mit [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zugreift und dann auf die Stilinformationen der Deskriptoren zugreift. All diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const sheet = document.styleSheets[0];
const cssFunc = sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert ist, dass die `result`-Eigenschaft gleich dem `result`-Deskriptor des `@function`-Körpers ist, welcher `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
