---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionRule`**-Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS {{cssxref("@function")}} (benutzerdefinierte Funktion) [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion repräsentiert.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Rückgabetyp der benutzerdefinierten Funktion repräsentiert.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters) {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion repräsentieren.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann über das CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mithilfe der {{cssxref("@function")}} At-Regel. Die Funktion heißt `--lighter()` und gibt eine hellere Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe zurück, die mithilfe der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabeziffer erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verknüpfte Stylesheet mit [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules). Anschließend protokollieren wir jedes der `CSSFunctionRule`-Mitglieder in die Konsole.

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
- Die Methode `getParameters()` gibt ein Array zurück, das folgendermaßen aussieht:

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
