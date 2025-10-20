---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionDescriptors`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einem Satz von CSS-Deklarationen enthalten sind, die durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt werden.

Ein `CSSFunctionDescriptors`-Objekt wird über die [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style)-Eigenschaft abgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die einen `result`-Deskriptor darstellt, falls einer im zugehörigen Satz von Deklarationen existiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine CSS-Benutzerfunktion und greifen dann mit dem CSSOM auf deren Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mittels der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, einen {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe zurück, die mit [relativer Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und der Helligkeitskanal um die Eingabezahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt mit dem Abrufen einer Referenz auf das Stylesheet, das mit unserem Dokument verbunden ist, unter Verwendung von [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet), und erhält dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules).

Dann greifen wir auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige fortlaufende Folge von Deklarationen innerhalb der Funktion darstellt, indem wir [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) verwenden, greifen auf die Informationen des Deskriptors via [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zu und dann auf die Stilinformationen des Deskriptors. Alle diese Informationen werden in der Konsole protokolliert.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Am bemerkenswertesten ist, dass die `result`-Eigenschaft dem `@function`-Körper's `result`-Deskriptor entspricht, welcher `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
