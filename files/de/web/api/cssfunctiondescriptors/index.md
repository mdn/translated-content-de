---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`CSSFunctionDescriptors`**-Schnittstelle des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Deskriptoren, die in einer Reihe von CSS-Deklarationen enthalten sind, welche durch ein [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Objekt repräsentiert werden.

Auf ein `CSSFunctionDescriptors`-Objekt wird über die Eigenschaft [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result) {{experimental_inline}}
  - : Gibt einen String zurück, der einen `result`-Deskriptor repräsentiert, sofern ein solcher in der zugehörigen Gruppe von Deklarationen vorhanden ist.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDescriptors`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen anschließend über das CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert eine benutzerdefinierte Funktion mithilfe der At-Regel {{cssxref("@function")}}. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter: einen {{cssxref("&lt;color&gt;")}} und einen {{cssxref("&lt;number&gt;")}}. Sie gibt eine mithilfe der [Syntax für relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erzeugte {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück. Dabei wird die Eingabefarbe in eine `oklch()`-Farbe umgewandelt und der Wert ihres Helligkeitskanals um die eingegebene Zahl erhöht.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Unser Skript ruft zunächst über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) eine Referenz auf das mit unserem Dokument verknüpfte Stylesheet ab. Anschließend ruft es über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) eine Referenz auf die einzige Regel im Stylesheet ab, die `CSSFunctionRule`.

Danach greifen wir über [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Folge von Deklarationen innerhalb der Funktion repräsentiert. Über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) greifen wir auf die Deskriptorinformationen zu und lesen anschließend die Stilinformationen des Deskriptors aus. Alle diese Informationen werden in der Konsole ausgegeben.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Insbesondere entspricht die Eigenschaft `result` dem `result`-Deskriptor im Rumpf von `@function`, nämlich `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
