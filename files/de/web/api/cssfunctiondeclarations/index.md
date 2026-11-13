---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("CSSOM") }}

Das Interface **`CSSFunctionDeclarations`** des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine zusammenhängende Folge von CSS-Deklarationen innerhalb des Bodys einer {{cssxref("@function")}}-Regel.

Dazu können [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) und der Wert des `result`-Deskriptors im `@function`-Body gehören. Blöcke wie {{cssxref("@media")}}-At-Regeln, die ebenfalls enthalten sein können, gehören jedoch nicht dazu. Ein solcher Block innerhalb einer Deklarationsfolge teilt den Inhalt des Bodys in separate `CSSFunctionDeclarations`-Objekte auf, wie unser Beispiel [Mehrere `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations) zeigt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt außerdem Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt zurück, das die im Body einer {{cssxref("@function")}}-Regel verfügbaren Deskriptoren repräsentiert.

## Beispiele

### Grundlegende Verwendung von `CSSFunctionDeclarations`

In diesem Beispiel definieren wir eine benutzerdefinierte CSS-Funktion und greifen anschließend über das CSSOM auf ihre Deklarationen zu.

#### CSS

Unser CSS definiert mithilfe der {{cssxref("@function")}}-At-Regel eine benutzerdefinierte Funktion. Die Funktion heißt `--lighter()` und gibt eine aufgehellte Version einer Eingabefarbe aus. `--lighter()` akzeptiert zwei Parameter: einen {{cssxref("&lt;color&gt;")}}-Wert und einen {{cssxref("&lt;number&gt;")}}-Wert. Sie gibt eine mit der [Syntax für relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) erzeugte {{cssxref("color_value/oklch", "oklch()")}}-Farbe zurück. Dabei wird die Eingabefarbe in eine `oklch()`-Farbe umgewandelt und ihr Helligkeitskanal um die eingegebene Zahl erhöht.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

Wir haben innerhalb der Funktion außerdem eine lokale [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) namens `--someVar` eingefügt. Sie wird nicht verwendet, zeigt aber, was geschieht, wenn mehrere Deklarationen unmittelbar aufeinanderfolgend im `@function`-Body stehen.

#### JavaScript

Unser Skript ruft zunächst über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) eine Referenz auf das Stylesheet des Dokuments ab und anschließend über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) eine Referenz auf dessen einzige Regel, die `CSSFunctionRule`.

Danach greifen wir mit [`cssRules[0]`](/de/docs/Web/API/CSSGroupingRule/cssRules) auf das `CSSFunctionDeclarations`-Objekt zu, das die einzige zusammenhängende Deklarationsfolge innerhalb der Funktion repräsentiert. Über [`CSSFunctionDeclarations.style`](/de/docs/Web/API/CSSFunctionDeclarations/style) greifen wir auf die Informationen zu dessen Deskriptoren zu und lesen anschließend die Länge und die Stilinformationen aus. Alle diese Informationen werden in der Konsole ausgegeben.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Besonders hervorzuheben ist:

- Die Eigenschaft `length` hat den Wert `2`, da der Deskriptortext aus zwei Teilen besteht (`--someVar: 100;` und `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- Die Eigenschaft `result` entspricht dem `result`-Deskriptor des `@function`-Bodys. Dessen Wert ist `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)`.

### Mehrere `CSSFunctionDeclarations`

In diesem Beispiel zeigen wir, wie eine `@media`-At-Regel innerhalb einer Deklarationsfolge dazu führt, dass zwei `CSSFunctionDeclarations`-Objekte erzeugt werden.

#### CSS

Unser CSS zeigt ein Beispiel für `@function` aus der Spezifikation: `--bar()`. Die Funktion erfüllt keinen besonderen Zweck, enthält aber Deklarationen, die durch einen `@media`-Block getrennt sind.

```css live-sample___multiple-cssfunctiondeclarations
@function --bar() {
  --x: 42;
  result: var(--y);
  @media (width > 1000px) {
    /* ... */
  }
  --y: var(--x);
}
```

#### JavaScript

Unser Skript ruft zunächst über [`HTMLStyleElement.sheet`](/de/docs/Web/API/HTMLStyleElement/sheet) eine Referenz auf das Stylesheet des Dokuments ab und anschließend über [`CSSStylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) eine Referenz auf dessen einzige Regel, die `CSSFunctionRule`.

Anschließend greifen wir auf [`CSSGroupingRule.cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) zu und geben dessen Wert in der Konsole aus. Zurückgegeben wird ein [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Objekt mit drei Objekten:

- Ein `CSSFunctionDeclarations`-Objekt, das den Teil `--x: 42;result: var(--y);` repräsentiert.
- Ein [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Objekt, das die `@media`-At-Regel repräsentiert.
- Ein zweites `CSSFunctionDeclarations`-Objekt, das den Teil `--y: var(--x);` repräsentiert.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

Danach geben wir einige Details zu jedem `CSSFunctionDeclarations`-Objekt in der Konsole aus: das Objekt selbst, das in seiner Eigenschaft `style` enthaltene [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt und die Eigenschaft [`CSSFunctionDescriptors.result`](/de/docs/Web/API/CSSFunctionDescriptors/result).

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

Im zweiten Fall gibt `result` einen leeren String zurück, da der zweite Deklarationsteil keinen `result`-Deskriptor enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
