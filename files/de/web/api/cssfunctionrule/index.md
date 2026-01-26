---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionRule`** Schnittstelle des [CSS Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS {{cssxref("@function")}} (benutzerdefinierte Funktion) [at-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion darstellt.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Rückgabewert der benutzerdefinierten Funktion darstellt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters) {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, das die Parameter der benutzerdefinierten Funktion darstellt.

## Beispiele

### Grundlegende Nutzung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen anschließend über das CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mittels der {{cssxref("@function")}} Regel. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color&gt;")}} und eine {{cssxref("&lt;number&gt;")}}. Es gibt einen {{cssxref("color_value/oklch", "oklch()")}}-Farbwert zurück, der mit Hilfe der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und der Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt mit dem Abruf einer Referenz auf das mit unserem Dokument verknüpfte Stylesheet, indem [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) verwendet wird, und dann einer Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules). Wir protokollieren dann jedes der `CSSFunctionRule`-Mitglieder in die Konsole.

```js live-sample___cssfunctionrule-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionRule members
console.log(cssFunc.name);
console.log(cssFunc.returnType);
console.log(cssFunc.getParameters());
```

- Die `name`-Eigenschaft ist gleich `--lighter`.
- Die `returnType`-Eigenschaft ist gleich `<color>`.
- Die `getParameters()`-Methode gibt ein Array zurück, das wie folgt aussieht:

  ```js
  [
    { name: "--color", type: "<color>" },
    { defaultValue: "0.2", name: "--lightness-adjust", type: "<number>" },
  ];
  ```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
