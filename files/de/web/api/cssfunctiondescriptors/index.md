---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("CSSOM") }}

Die Schnittstelle **`CSSFunctionDescriptors`** des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren in einem Satz von CSS-Deklarationen, der durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt dargestellt wird.

Auf ein `CSSFunctionDescriptors`-Objekt wird über die Eigenschaft [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die einen `result`-Deskriptor repräsentiert, sofern einer im zugehörigen Satz von Deklarationen vorhanden ist.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen anschließend über das CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert mit der {{cssxref("@function")}}-At-Regel eine benutzerdefinierte Funktion. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter: einen {{cssxref("&lt;color&gt;")}}-Wert und einen {{cssxref("&lt;number&gt;")}}-Wert. Sie gibt eine {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück, die mithilfe der [Syntax für relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erstellt wird: Die Eingabefarbe wird in eine `oklch()`-Farbe umgewandelt, und ihr Helligkeitskanal wird um die eingegebene Zahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript ruft zunächst über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) eine Referenz auf das mit dem Dokument verknüpfte Stylesheet ab. Anschließend ruft es über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) eine Referenz auf die einzige Regel im Stylesheet ab: die `CSSFunctionRule`.

Danach greifen wir über [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Folge von Deklarationen innerhalb der Funktion repräsentiert. Über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) greifen wir auf die Informationen zu ihren Deskriptoren zu und lesen anschließend die Style-Informationen des Deskriptors aus. Alle diese Informationen werden in der Konsole ausgegeben.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Bemerkenswert ist vor allem, dass die Eigenschaft `result` dem `result`-Deskriptor im Rumpf der `@function`-Regel entspricht: `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
