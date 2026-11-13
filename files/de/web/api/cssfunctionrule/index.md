---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("CSSOM") }}

Das **`CSSFunctionRule`**-Interface des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert CSS-{{cssxref("@function")}}-[At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules) für benutzerdefinierte Funktionen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt außerdem Eigenschaften von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.name`](/de/docs/Web/API/CSSFunctionRule/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen der benutzerdefinierten Funktion darstellt.
- [`CSSFunctionRule.returnType`](/de/docs/Web/API/CSSFunctionRule/returnType) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Rückgabetyp der benutzerdefinierten Funktion darstellt.

## Instanzmethoden

_Dieses Interface erbt außerdem Methoden von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)._

- [`CSSFunctionRule.getParameters()`](/de/docs/Web/API/CSSFunctionRule/getParameters)
  - : Gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion darstellen.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionRule`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen anschließend über das CSSOM darauf zu.

#### CSS

Unser CSS definiert mit der {{cssxref("@function")}}-At-Regel eine benutzerdefinierte Funktion. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter: einen {{cssxref("&lt;color&gt;")}}-Wert und einen {{cssxref("&lt;number&gt;")}}-Wert. Sie gibt eine {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück, die mithilfe der [Syntax für relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erzeugt wird: Die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal um die eingegebene Zahl erhöht.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript ruft zunächst über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) eine Referenz auf das Stylesheet ab, das mit unserem Dokument verknüpft ist. Anschließend ruft es über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) eine Referenz auf die einzige Regel im Stylesheet ab, die `CSSFunctionRule`. Danach gibt es jedes Mitglied der `CSSFunctionRule` in der Konsole aus.

```js live-sample___cssfunctionrule-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionRule members
console.log(cssFunc.name);
console.log(cssFunc.returnType);
console.log(cssFunc.getParameters());
```

- Die Eigenschaft `name` ist gleich `--lighter`.
- Die Eigenschaft `returnType` ist gleich `<color>`.
- Die Methode `getParameters()` gibt ein Array zurück, das wie folgt aussieht:

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
