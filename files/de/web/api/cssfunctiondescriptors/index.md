---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDescriptors`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einem Satz von CSS-Deklarationen enthalten sind, der durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt wird.

Ein `CSSFunctionDescriptors`-Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style)-Eigenschaft abgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der einen `result`-Deskriptor repräsentiert, falls einer im zugehörigen Deklarationssatz existiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mit dem CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}}-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color&gt;")}} und eine {{cssxref("&lt;number&gt;")}}. Sie gibt einen {{cssxref("color_value/oklch", "oklch()")}}-Farbwert zurück, der mithilfe der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten. Danach holen wir eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige durchgängige Folge von Deklarationen innerhalb der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, greifen auf die Informationen des Deskriptoren über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und greifen dann auf die Style-Informationen des Deskriptoren zu. All diese Informationen werden in die Konsole geloggt.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Am bemerkenswertesten ist, dass die `result`-Eigenschaft dem `result`-Deskriptor des `@function`-Körpers entspricht, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
