---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{ APIRef("CSSOM") }}

Die **`CSSFunctionDescriptors`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren innerhalb eines Sets von CSS-Deklarationen, das durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt wird.

Ein `CSSFunctionDescriptors`-Objekt wird über die Property [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) abgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen `result`-Deskriptor repräsentiert, falls einer im zugehörigen Set von Deklarationen existiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann über das CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der At-Regel {{cssxref("@function")}}. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` nimmt zwei Parameter an, einen {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mithilfe der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabenummer erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das Stylesheet zu bekommen, das an unser Dokument angehängt ist, mithilfe von [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule`, über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Dann greifen wir auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Reihe von Deklarationen in der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, greifen auf die Informationssammlung des Deskriptors mit [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und dann auf die Stil-Informationen des Deskriptors. Alle diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert ist, dass die `result`-Eigenschaft dem `result`-Deskriptor des `@function`-Körpers entspricht, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
