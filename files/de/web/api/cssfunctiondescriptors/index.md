---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionDescriptors`** Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einem Satz von CSS-Deklarationen enthalten sind, die durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations) Objekt dargestellt werden.

Ein `CSSFunctionDescriptors` Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der einen `result` Deskriptor darstellt, wenn einer im zugehörigen Satz von Deklarationen existiert.

## Beispiele

### Grundlegende Nutzung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine CSS-Benutzerfunktion und greifen dann mit dem CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe zurück, die mit [relativer Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wird; die Eingabefarbe wird in eine `oklch()` Farbe umgewandelt und ihr Helligkeitskanal wird um die eingegebene Nummer erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verbundene Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten, dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Wir greifen dann auf das `CSSFunctionDeclarations` Objekt zu, das die einzige durchgehende Folge von Deklarationen innerhalb der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, auf die Deskriptorinformation über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zugreifen und dann auf die Deskriptor-Stilinformation. All diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Bemerkenswert ist, dass die `result` Eigenschaft dem `@function` Körper `result` Deskriptor entspricht, der `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
