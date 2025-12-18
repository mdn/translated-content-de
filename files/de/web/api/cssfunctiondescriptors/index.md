---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionDescriptors`**-Schnittstelle des [CSS Object Models](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einem Satz von CSS-Deklarationen enthalten sind, die durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt werden.

Auf ein `CSSFunctionDescriptors`-Objekt wird über die Eigenschaft [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der einen `result`-Deskriptor darstellt, falls dieser in dem zugehörigen Satz von Deklarationen existiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mit CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}}-At-Regel. Die Funktion wird `--lighter()` genannt und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück, die mithilfe der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe transformiert, und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet mit [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das den einzigen kontinuierlichen Satz von Deklarationen innerhalb der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, greifen auf die Deskriptorinformationen mit [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Stilinformationen des Deskriptors zu. Alle diese Informationen werden in die Konsole geloggt.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Besonders bemerkenswert ist, dass die `result`-Eigenschaft dem `result`-Deskriptor des `@function`-Körpers entspricht, welcher `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
