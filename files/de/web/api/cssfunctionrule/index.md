---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Das **`CSSFunctionRule`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS-{{cssxref("@function")}} (benutzerdefinierte Funktion) [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion darstellt.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Rückgabetyp der benutzerdefinierten Funktion darstellt.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters) {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, das die Parameter der benutzerdefinierten Funktion darstellt.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann unter Verwendung des CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mithilfe der {{cssxref("@function")}}-At-Regel. Die Funktion wird `--lighter()` genannt und gibt eine aufgehellte Version einer Eingabefarbe zurück. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe zurück, die mit der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal wird um die Eingabezahl erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt mit der Referenzierung des Stylesheets, das an unser Dokument angehängt ist, über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) und dann der Referenzierung der einzigen Regel im Stylesheet, der `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules). Wir loggen dann jedes der `CSSFunctionRule`-Mitglieder in der Konsole.

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
