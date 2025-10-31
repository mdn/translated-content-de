---
title: Verwendung von benutzerdefinierten CSS-Funktionen
slug: Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Benutzerdefinierte CSS-Funktionen ermöglichen es Ihnen, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren, komplexe Logik enthalten können (definiert durch Funktionen wie CSS {{cssxref("if()")}} und {{cssxref("@media")}} at-Regeln) und basierend auf dieser Logik Werte zurückgeben. Sie funktionieren ähnlich wie [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), bieten jedoch mehr Flexibilität.

In diesem Artikel zeigen wir Ihnen, wie Sie sie verwenden, und präsentieren einige praktische Beispiele.

## Grundlegendes zu Funktionen

Eine grundlegende Definition einer benutzerdefinierten CSS-Funktion sieht so aus:

```css
@function --half-opacity() {
  result: 0.5;
}
```

Nach der `@function`-Syntax definieren wir einen Namen für die Funktion: `--half-opacity`. Dies muss ein {{cssxref("&lt;dashed-ident>")}} Type sein — es muss mit einem Doppeldash beginnen und ist case-sensitive. Der Funktionsname wird unmittelbar gefolgt von einem Satz Klammern (`()`) und einem Satz geschweifter Klammern (`{}`).

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die zuletzt in der Quellreihenfolge definierte Funktion.

Innerhalb der geschweiften Klammern befindet sich der **Funktionskörper**, in dem die Logik der Funktion definiert wird. Dieser kann mehrere Deklarationen enthalten, einschließlich benutzerdefinierter Eigenschaften (die lokal auf den Funktionskörper beschränkt sind), at-Regeln wie {{cssxref("@media")}}, und den [`result`](/de/docs/Web/CSS/@function#result_2) Deskriptor. Der Wert des `result`-Deskriptors wird ausgewertet, um den von der Funktion zurückgegebenen Wert zu bestimmen.

Hier setzen wir `result` auf den Wert `0.5`: die Funktion `--half-opacity()` wird immer `0.5` zurückgeben.

### Warum "result" und nicht "return"?

Der `result`-Deskriptor klingt ähnlich der JavaScript-Funktion [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung. In CSS-Funktionen wird jedoch `return` nicht verwendet, da im Gegensatz zu JavaScript-`return`-Anweisungen CSS-Funktionen keinen Wert zurückgeben, sobald eine `result`-Deklaration erreicht wird.

Der Körper einer CSS-Funktion wird von Anfang bis Ende ausgewertet. Wenn mehrere `result`-Deklarationen im Körper enthalten sind, überschreibt die letzte in der Quellreihenfolge die früheren.

### Aufrufen einer CSS-Funktion

Eine CSS-Funktion kann anstelle eines geeigneten Eigenschaftswertes mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen werden, die aus dem Funktionsnamen gefolgt von Klammern besteht, die die Argumente enthalten, die an die Funktion übergeben werden sollen, falls vorhanden. Zum Beispiel können wir unsere Funktion `--half-opacity()` so aufrufen:

```css
h2 {
  opacity: --half-opacity();
}
```

Da diese Funktion immer den Wert `0.5` zurückgibt, entspricht die vorherige Deklaration `opacity: 0.5`. Dies ist nicht sehr nützlich. Man könnte genauso gut eine benutzerdefinierte Eigenschaft verwenden oder den literalen Wert `0.5`.

Lassen Sie uns fortfahren und sehen, wie wir CSS-Funktionen verwenden können.

## Funktionen zur Feature-Erkennung

Eine praktische Anwendung von CSS-Funktionen ohne Parameter ist die Feature-Erkennung. In allen [Beispielen, die wir uns ansehen werden](https://github.com/mdn/dom-examples/tree/main/css-custom-functions) in diesem Artikel definieren wir eine Funktion `--supports()`, die so aussieht:

```css
@function --supports() {
  result: none;
}
```

Sie können dann ein "Feature nicht unterstützt"-Banner definieren und dessen {{cssxref("display")}}-Eigenschaft auf `--supports()` setzen:

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

In Browsern, die benutzerdefinierte Funktionen unterstützen, wird `display` auf `none` gesetzt und das Support-Banner wird ausgeblendet. In nicht unterstützenden Browsern wird die `display: --supports()`-Deklaration ungültig und daher ignoriert; daher wird das Banner angezeigt.

## Festlegen von Funktionsparametern

CSS-Funktionsparameter werden als durch Kommas getrennte benutzerdefinierte Eigenschaften in den Klammern nach dem Funktionsnamen angegeben. Zum Beispiel:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Diese Funktion hat einen Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält einen `result`-Deskriptor, der die [CSS-relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet, um den Eingangs-`--color`-Wert in einen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) -Farbwert mit einem Alpha-Kanalwert wie im Eingangs-`--alpha`-Wert angegeben, zu konvertieren.

Sie können diese Funktion dann an beliebiger Stelle aufrufen, um eine halbtransparente Version einer vorhandenen Farbe zu erzeugen.

Zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## Festlegen von Datentypen

Es ist möglich, zulässige Datentypen für die Funktionsparameter und den Rückgabewert anzugeben. Wenn Sie diese nicht angeben, akzeptiert die Funktion jeden Typ für diese Werte.

Lassen Sie uns unsere vorherige Funktion ändern, um Datentypen bereitzustellen:

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Datentyp jedes Parameters wird nach dem Parameternamen angegeben und der Datentyp des `result` wird direkt vor der öffnenden geschweiften Klammer, vorangestellt durch das `returns`-Schlüsselwort, angegeben. Die {{cssxref("type()")}}-Funktion wird verwendet, um einen Datentyp anzugeben.

Beachten Sie, dass in Fällen, in denen Sie nur einen einzelnen Datentyp angeben, die `type()`-Syntax weggelassen und der Typ als Abkürzung einfach geschrieben werden kann:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt produziert die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` ein {{cssxref("&lt;color>")}} ist. Falls nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig werden (da `50%` keine `<number>` sondern ein `<percentage>` ist) und die `background-color` wird letztlich auf `transparent` gesetzt.

### Mehrere zulässige Datentypen festlegen

Sie können mehrere akzeptierte Datentypen durch das Symbol `|` als Trennzeichen festlegen, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

In solchen Fällen muss die volle `type()`-Syntax verwendet werden.

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` jetzt gültig.

## Festlegen von Standardwerten

Sie können auch Standardwerte für Parameter nach einem Doppelpunkt am Ende ihrer Definition angeben. Zum Beispiel:

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

### Beispiel für Farb-Anpassungsfunktionen

Sie können die Funktion `--transparent()` in unserem [color-adjust-functions](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) Beispiel in Aktion sehen (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions)).

Dieses Beispiel enthält auch Funktionen, die `--lighter()` und `--darker()` genannt werden und ähnlich wie `--transparent()` funktionieren, aber hellere und dunklere Varianten einer Farbe zurückgeben:

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

Eine Bibliothek von solchen Funktionen kann sehr nützlich sein, um Farbschemata basierend auf einer einzelnen Farbe zu definieren:

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

## Einbeziehen komplexer Logik

Sie können komplexere Logik in Funktionen einbauen, indem Sie Konstrukte wie {{cssxref("@media")}} at-Regeln und {{cssxref("if()")}} Funktionen verwenden.

Unser Beispiel [responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)) enthält eine Funktion namens `--narrow-wide()`, die verwendet werden kann, um zwei Wertoptionen für jede Eigenschaft bereitzustellen. Eine wird gesetzt, wenn der Viewport unterhalb eines bestimmten Breakpoints liegt, und die andere, wenn er darüber liegt.

Die Funktion `--narrow-wide()` akzeptiert zwei Parameter, `--narrow` und `--wide`. Das zurückgegebene `result` ist die `--wide`-Eigenschaft, es sei denn, der Viewport ist weniger als `700px` breit, in diesem Fall wird `--narrow` zurückgegeben.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Diese Funktion kann verwendet werden, um responsive Wertoptionen in verschiedenen Kontexten bereitzustellen:

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

Wir könnten die Funktion `--narrow-wide()` umschreiben, um eine `if()` Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Komplexe Syntax einmal schreiben und dann wiederverwenden

Ein wichtiger Anwendungsfall für CSS-Funktionen ist es, einen komplexen Syntaxabschnitt einmal zu definieren und ihn dann mehrfach mit einem viel einfacheren Funktionsaufruf wiederverwenden zu können.

Unser Beispiel [gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) stellt ein Beispiel dafür dar. Es enthält eine Funktion namens `--shippo-pattern()`, die Längen- und Farbargumente akzeptiert und einen komplexen {{cssxref("background")}}-Wert mit mehreren {{cssxref("radial-gradient()")}}-Hintergründen zurückgibt:

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

Mit dieser definierten Funktion können wir nun Varianten dieses Hintergrundwertes mit unterschiedlichen Farbnuancen und Kreisgrößen erstellen:

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

- [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- [CSS-Benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
- [Benutzerdefinierte CSS-Funktionen im Browser](https://www.oddbird.net/2025/04/11/custom-functions/) von Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) von Bramus (2025)
- [5 nützliche CSS-Funktionen unter Verwendung der neuen @function-Regel](https://una.im/5-css-functions/) von Una Kravets (2025)
