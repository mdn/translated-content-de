---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionRule`**-Schnittstelle des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS {{cssxref("@function")}} (benutzerdefinierte Funktion) [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion repräsentiert.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Rückgabewerttyp der benutzerdefinierten Funktion repräsentiert.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters) {{experimental_inline}}
  - : Gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion repräsentieren.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mit dem CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion unter Verwendung der {{cssxref("@function")}}-At-Regel. Die Funktion wird `--lighter()` genannt und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Sie gibt eine {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück, die unter Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wird; die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und der Hellkanal wird um die Eingabeziffer erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt damit, eine Referenz auf das mit unserem Dokument verknüpfte Stylesheet mittels [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) zu erhalten und dann eine Referenz auf die einzige Regel im Stylesheet, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules). Anschließend protokollieren wir jedes der `CSSFunctionRule`-Mitglieder in der Konsole.

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
