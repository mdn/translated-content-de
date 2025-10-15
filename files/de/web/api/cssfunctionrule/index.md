---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

{{ APIRef("CSSOM") }}

Das **`CSSFunctionRule`** Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) stellt CSS {{cssxref("@function")}} (benutzerdefinierte Funktion) [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule) dar.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion darstellt.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Rückgabetyp der benutzerdefinierten Funktion darstellt.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters)
  - : Gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion darstellen.

## Beispiele

### Grundlegende Nutzung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen dann mithilfe des CSSOM darauf zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mit der {{cssxref("@function")}} At-Rule. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter, ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}}. Es gibt eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe zurück, die mit [relativer Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) erstellt wurde; die Eingabefarbe wird in eine `oklch()` Farbe umgewandelt und ihr Helligkeitskanal wird um die eingegebene Zahl erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript beginnt mit dem Abrufen einer Referenz auf das mit unserem Dokument verbundene Stylesheet über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets), dann wird eine Referenz auf die einzige Regel im Stylesheet abgerufen, die `CSSFunctionRule` — über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules). Wir protokollieren dann jeden der `CSSFunctionRule`-Mitglieder in die Konsole.

```js live-sample___cssfunctionrule-basics
// Get a CSSFunctionRule
const sheet = document.styleSheets[0];
const cssFunc = sheet.cssRules[0];

// Accessing CSSFunctionRule members
console.log(cssFunc.name);
console.log(cssFunc.returnType);
console.log(cssFunc.getParameters());
```

- Die `name` Eigenschaft ist gleich `--lighter`.
- Die `returnType` Eigenschaft ist gleich `<color>`.
- Die `getParameters()` Methode gibt ein Array zurück, das folgendermaßen aussieht:
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
