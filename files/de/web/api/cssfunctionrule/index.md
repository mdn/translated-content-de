---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{ APIRef("CSSOM") }}

Die **`CSSFunctionRule`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS {{cssxref("@function")}} (Benutzerdefinierte Funktionen) [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion repräsentiert.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Rückgabetyp der benutzerdefinierten Funktion repräsentiert.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters)
  - : Gibt ein Array von Objekten zurück, das die Parameter der benutzerdefinierten Funktion repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann über das CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion unter Verwendung der {{cssxref("@function")}}-At-Rule. Die Funktion wird `--lighter()` genannt und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mit der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und deren Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, einen Verweis auf das mit unserem Dokument verknüpfte Stylesheet über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann einen Verweis auf die einzige Regel im Stylesheet, die `CSSFunctionRule`, über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) zu erhalten. Wir protokollieren dann jedes der `CSSFunctionRule`-Mitglieder in der Konsole.

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
- Die `getParameters()`-Methode gibt ein Array zurück, das folgendermaßen aussieht:

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
