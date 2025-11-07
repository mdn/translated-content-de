---
title: Verwenden von CSS Custom Functions
slug: Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS-Custom-Functions ermöglichen es Ihnen, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren, komplexe Logik enthalten (definiert mit Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}} Regeln) und basierend auf dieser Logik Werte zurückgeben können. Sie funktionieren ähnlich wie [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*), bieten jedoch mehr Flexibilität.

In diesem Artikel zeigen wir Ihnen, wie Sie diese verwenden können, und präsentieren einige realistische Beispiele.

## Grundlagen einer Funktion

Eine grundlegende Definition einer CSS-Custom-Function sieht so aus:

```css
@function --half-opacity() {
  result: 0.5;
}
```

Nach der `@function`-Syntax definieren wir einen Namen für die Funktion: `--half-opacity`. Dieser muss ein {{cssxref("&lt;dashed-ident>")}}-Typ sein — er muss mit einem Doppelstrich beginnen und ist groß-/klein-schreibungssensitiv. Der Funktionsname wird unmittelbar von einem Satz Klammern (`()`) und einem Satz geschweifter Klammern (`{}`) gefolgt.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name zugewiesen wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn sie alle in derselben Schicht sind, gewinnt die zuletzt definierte Funktion in der Quellreihenfolge.

Innerhalb der geschweiften Klammern befindet sich der Funktions**körper**, in dem die Funktionslogik definiert wird. Dies kann mehrere Deklarationen enthalten, einschließlich benutzerdefinierter Eigenschaften (die lokal auf den Funktionskörper beschränkt sind), At-Regeln wie {{cssxref("@media")}} und den [`result`](/de/docs/Web/CSS/Reference/At-rules/@function#result_2) Deskriptor. Der Wert des `result`-Deskriptors wird ausgewertet, um den von der Funktion zurückgegebenen Wert zu bestimmen.

Hier setzen wir `result` auf den Wert `0.5`: Die `--half-opacity()` Funktion gibt immer `0.5` zurück.

### Warum "result" und nicht "return"?

Der `result`-Deskriptor klingt ähnlich wie die Funktion [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) in JavaScript. Allerdings wird `return` in CSS-Funktionen nicht verwendet. Das liegt daran, dass CSS-Funktionen, im Gegensatz zu JavaScript-`return`-Anweisungen, keinen Wert zurückgeben, sobald eine `result`-Deklaration erreicht wird.

Der Körper einer CSS-Funktion wird von Anfang bis Ende ausgewertet. Wenn mehrere `result`-Deklarationen im Körper enthalten sind, überschreibt die letzte in der Quellreihenfolge die vorherigen.

### Aufrufen einer CSS-Funktion

Eine CSS-Funktion kann anstelle eines geeigneten Eigenschaftswerts mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen werden, die aus dem Funktionsnamen besteht, gefolgt von Klammern, die die an die Funktion zu übergebenden Argumente enthalten, falls vorhanden. Zum Beispiel können wir unsere `--half-opacity()` Funktion so aufrufen:

```css
h2 {
  opacity: --half-opacity();
}
```

Da diese Funktion immer den Wert `0.5` zurückgibt, entspricht die vorherige Deklaration `opacity: 0.5`. Das ist nicht sehr nützlich. Sie könnten genauso gut eine benutzerdefinierte Eigenschaft oder den literal Wert `0.5` verwenden.

Schauen wir uns nun an, wie wir CSS-Funktionen verwenden können.

## Erkennung von CSS-Funktionen als Feature

Eine praktische Verwendung von CSS-Funktionen ohne Parameter ist die Feature-Erkennung. In allen [Beispielen, die wir uns ansehen werden](https://github.com/mdn/dom-examples/tree/main/css-custom-functions) in diesem Artikel, definieren wir eine `--supports()` Funktion, die folgendermaßen aussieht:

```css
@function --supports() {
  result: none;
}
```

Sie können dann ein "Feature nicht unterstützt"-Banner definieren und dessen {{cssxref("display")}} Eigenschaft auf `--supports()` setzen:

```html
<p class="support">
  ⚠️ Your browser doesn't currently support CSS custom functions.
</p>
```

```css
.support {
  /* ... */
  display: --supports();
}
```

In Browsern, die benutzerdefinierte Funktionen unterstützen, wird `display` auf `none` gesetzt und das Unterstützungsbanner ausgeblendet. In nicht unterstützenden Browsern wird die Deklaration `display: --supports()` ungültig und daher ignoriert; das Banner wird also angezeigt.

## Angeben von Funktionsparametern

CSS-Funktionsparameter werden als durch Kommas getrennte benutzerdefinierte Eigenschaften innerhalb der Klammern nach dem Funktionsnamen angegeben. Zum Beispiel:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Diese Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält einen `result`-Deskriptor, der die [CSS-relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet, um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit einem Alpha-Kanal-Wert wie im Eingabewert `--alpha` angegeben, umwandelt.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer bestehenden Farbe erzeugen möchten.

Zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## Daten-Typen angeben

Es ist möglich, zulässige Datentypen für die Funktionsparameter und den Rückgabewert festzulegen. Wenn Sie diese nicht angeben, akzeptiert die Funktion jeden Typ für diese Werte.

Ändern wir unsere vorherige Funktion, um Datentypen anzugeben:

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Datentyp jedes Parameters wird nach dem Parameternamen angegeben und der Datentyp des `result` wird kurz vor der öffnenden geschweiften Klammer festgelegt, dem `returns`-Schlüsselwort vorangestellt. Die {{cssxref("type()")}}-Funktion wird verwendet, um einen Datentyp anzugeben.

Beachten Sie, dass Sie in Fällen, in denen Sie nur einen einzigen Datentyp angeben, die `type()`-Syntax weglassen können und den Typ als Kurzform schreiben können:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt gibt die Funktion nur dann einen gültigen Wert zurück, wenn die Eingabeargumente jeweils eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` eine {{cssxref("&lt;color>")}} ist. Falls nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (da `50%` keine `<number>`, sondern eine `<percentage>` ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

### Mehrere zulässige Typen angeben

Sie können mehrere akzeptierte Datentypen angeben, indem Sie das `|`-Symbol als Trennzeichen verwenden, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

In solchen Fällen muss die vollständige `type()`-Syntax verwendet werden.

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` jetzt gültig.

## Standardwerte angeben

Sie können auch Standardwerte für Parameter angeben, nach einem Doppelpunkt am Ende ihrer Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des `--alpha`-Parameters ist jetzt `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Aufrufen der Funktion weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert verwendet.

### Farbanpassungsfunktionen Beispiel

Sie können die `--transparent()` Funktion in Aktion in unserem [color-adjust-functions](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions)).

Dieses Beispiel enthält auch Funktionen namens `--lighter()` und `--darker()`, die ähnlich wie `--transparent()` funktionieren, jedoch hellere bzw. dunklere Varianten einer Farbe zurückgeben:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}

@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}

@function --darker(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l - var(--lightness-adjust)) c h);
}
```

Eine Bibliothek solcher Funktionen kann sehr nützlich werden, um Farbschemata auf Basis einer einzigen Farbe zu definieren:

```css
:root {
  --base-color: #faa6ff;
}

section {
  background-color: --transparent(var(--base-color));
  border: 3px solid --lighter(var(--base-color), 0.1);
  color: --darker(var(--base-color), 0.55);
}
```

## Inklusive komplexer Logik

Sie können komplexere Logik in Funktionen mithilfe von Konstrukten wie {{cssxref("@media")}} At-Regeln und {{cssxref("if()")}} Funktionen einfügen.

Unser [responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/) Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)) enthält eine Funktion namens `--narrow-wide()`, die verwendet werden kann, um zwei Wertoptionen für jede Eigenschaft bereitzustellen. Eine wird gesetzt, wenn das Ansichtsfenster unter einem bestimmten Schwellenwert liegt, und die andere, wenn es darüber liegt.

Die `--narrow-wide()` Funktion akzeptiert zwei Parameter, `--narrow` und `--wide`. Der zurückgegebene `result` ist die `--wide` Eigenschaft, es sei denn, das Ansichtsfenster ist weniger als `700px` breit, in welchem Fall `--narrow` zurückgegeben wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Diese Funktion kann verwendet werden, um responsive Werteoptionen in mehreren Kontexten bereitzustellen:

```css
body {
  display: grid;
  grid-template-columns: repeat(--narrow-wide(1, 3), 1fr);
  gap: --narrow-wide(0, 20px);
  padding: 0 20px;
}

h2 {
  font-size: --narrow-wide(2.5rem, 2rem);
}

p {
  font-size: --narrow-wide(1.4rem, 1rem);
  line-height: 1.5;
}
```

### Verwendung einer `if()` Funktion

Wir könnten die `--narrow-wide()` Funktion umschreiben, um eine `if()` Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Komplexe Syntax einmal schreiben und dann wiederverwenden

Ein wichtiger Anwendungsfall für CSS-Funktionen besteht darin, eine komplexe Syntax einmal zu definieren und diese dann mit einem viel einfacheren Funktionsaufruf mehrfach wiederverwenden zu können.

Unser [gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function)) bietet ein Beispiel hierfür. Es enthält eine Funktion namens `--shippo-pattern()`, die Längen- und Farbargumente akzeptiert und einen komplexen {{cssxref("background")}}-Wert mit mehreren {{cssxref("radial-gradient()")}} Hintergründen zurückgibt:

```css
@function --shippo-pattern(--size <length>, --tint <color>) {
  result:
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%) 0 0 /
      var(--size) var(--size),
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%)
      calc(var(--size) / 2) calc(var(--size) / 2) / var(--size) var(--size)
      var(--tint);
}
```

Mit dieser Funktion können wir nun Varianten dieses Hintergrundwerts mit unterschiedlichen Farbnuancen und Kreisgrößen erstellen:

```css
#one {
  background: --shippo-pattern(100px, #ddeeff);
}

#two {
  background: --shippo-pattern(3.5rem, lime);
}

#three {
  background: --shippo-pattern(10vw, purple);
}
```

## Siehe auch

- [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*)
- Modul [CSS custom functions and mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins)
- [Custom CSS Functions im Browser](https://www.oddbird.net/2025/04/11/custom-functions/) von Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) von Bramus (2025)
- [5 nützliche CSS-Funktionen mithilfe der neuen @function-Regel](https://una.im/5-css-functions/) von Una Kravets (2025)
