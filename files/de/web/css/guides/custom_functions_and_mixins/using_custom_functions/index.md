---
title: Verwendung von benutzerdefinierten CSS-Funktionen
slug: Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Benutzerdefinierte CSS-Funktionen ermöglichen es Ihnen, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren, komplexe Logik (definiert mit Funktionen wie CSS {{cssxref("if()")}}-Funktionen und {{cssxref("@media")}}-Regeln) enthalten und Werte basierend auf dieser Logik zurückgeben können. Sie funktionieren ähnlich wie [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), bieten jedoch mehr Flexibilität.

In diesem Artikel zeigen wir Ihnen, wie Sie sie verwenden können und präsentieren einige praxisnahe Beispiele.

## Grundlegendes zu Funktionen

Eine grundlegende Definition einer benutzerdefinierten CSS-Funktion sieht folgendermaßen aus:

```css
@function --half-opacity() {
  result: 0.5;
}
```

Nach der `@function`-Syntax definieren wir einen Namen für die Funktion: `--half-opacity`. Dieser muss ein {{cssxref("&lt;dashed-ident>")}}-Typ sein — er muss mit einem doppelten Bindestrich beginnen und ist groß-/klein-schreibungssensitiv. Der Funktionsname wird direkt von einer Klammermenge (`()`) und einer geschweiften Klammermenge (`{}`) gefolgt.

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion in der stärkerer Kaskadenebene {{cssxref("@layer")}}. Wenn alle in derselben Schicht sind, gewinnt die Funktion, die zuletzt in der Quellreihenfolge definiert ist.

Im Inneren der geschweiften Klammern befindet sich der **Funktionskörper**, in dem die Funktionslogik definiert ist. Dieser kann mehrere Deklarationen enthalten, einschließlich benutzerdefinierter Eigenschaften (die lokal auf den Funktionskörper beschränkt sind), `@`-Regeln wie {{cssxref("@media")}} und den [`result`](/de/docs/Web/CSS/Reference/At-rules/@function#result_2)-Deskriptor. Der Wert des `result`-Deskriptors wird ausgewertet, um den von der Funktion zurückgegebenen Wert zu bestimmen.

Hier setzen wir `result` auf den Wert `0.5`: Die `--half-opacity()`-Funktion wird immer `0.5` zurückgeben.

### Warum "result" und nicht "return"?

Der `result`-Deskriptor klingt in seiner Funktionalität ähnlich der [`return`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/return) in JavaScript. Allerdings wird `return` in CSS-Funktionen nicht verwendet. Dies liegt daran, dass CSS-Funktionen im Gegensatz zu JavaScript-`return`-Anweisungen keinen Wert zurückgeben, sobald eine `result`-Deklaration erreicht wird.

Der Körper einer CSS-Funktion wird von Anfang bis Ende ausgewertet. Wenn mehrere `result`-Deklarationen im Körper enthalten sind, überschreibt die letzte in der Quellreihenfolge die vorherigen.

### Aufrufen einer CSS-Funktion

Eine CSS-Funktion kann anstelle eines geeigneten Eigenschaftswertes mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen werden, die aus dem Funktionsnamen besteht, gefolgt von Klammern, die die an die Funktion zu übergebenden Argumente enthalten, falls vorhanden. Zum Beispiel können wir unsere `--half-opacity()`-Funktion so aufrufen:

```css
h2 {
  opacity: --half-opacity();
}
```

Da diese Funktion immer den Wert `0.5` zurückgibt, entspricht die vorherige Deklaration der Deklaration `opacity: 0.5`. Das ist nicht sehr nützlich. Sie könnten genauso gut einfach eine benutzerdefinierte Eigenschaft oder den literalen Wert `0.5` verwenden.

Sehen wir uns an, wie wir CSS-Funktionen verwenden können.

## CSS-Funktionen erkennen

Ein praktischer Einsatz von CSS-Funktionen ohne Parameter ist in der Feature-Erkennung. In allen [Beispielen, die wir uns ansehen werden](https://github.com/mdn/dom-examples/tree/main/css-custom-functions) in diesem Artikel, definieren wir eine `--supports()`-Funktion, die so aussieht:

```css
@function --supports() {
  result: none;
}
```

Sie können dann ein "Feature nicht unterstützt"-Banner definieren und seine {{cssxref("display")}}-Eigenschaft auf `--supports()` setzen:

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

In Browsern, die benutzerdefinierte Funktionen unterstützen, wird `display` auf `none` gesetzt und das Unterstützungsbanner wird ausgeblendet. In nicht unterstützenden Browsern wird die Deklaration `display: --supports()` ungültig und daher ignoriert; somit wird das Banner angezeigt.

## Festlegen von Funktionsparametern

CSS-Funktionsparameter werden als durch Kommata getrennte benutzerdefinierte Eigenschaften innerhalb der Klammern nach dem Funktionsnamen angegeben. Zum Beispiel:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Diese Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält einen `result`-Deskriptor, der die [relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) verwendet, um den Input-Wert `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit einem Alphakanalwert zu konvertieren, wie im Input-Wert `--alpha` angegeben.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten.

Zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## Festlegen von Datentypen

Es ist möglich, zulässige Datentypen für die Funktionsparameter und den Rückgabewert anzugeben. Wenn Sie diese nicht angeben, akzeptiert die Funktion jeden Typ für diese Werte.

Lassen Sie uns unsere vorherige Funktion so ändern, dass sie Datentypen bereitstellt:

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Datentyp jedes Parameters wird nach dem Parameternamen angegeben, und der Datentyp des `result` wird direkt vor der öffnenden geschweiften Klammer, eingeführt durch das Schlüsselwort `returns`, angegeben. Die {{cssxref("type()")}}-Funktion wird verwendet, um einen Datentyp anzugeben.

Beachten Sie, dass, wenn Sie nur einen einzigen Datentyp angeben, Sie die `type()`-Syntax weglassen und den Typ als Abkürzung einfach schreiben können:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Nun wird die Funktion nur dann einen gültigen Wert erzeugen, wenn die Eingabeargumente eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind, entsprechend, und das `result` eine {{cssxref("&lt;color>")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

dann wird der Wert zur Berechnungszeit ungültig (da `50%` keine `<number>`, sondern eine `<percentage>` ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

### Mehrere zulässige Typen angeben

Sie können mehrere akzeptierte Datentypen mit dem `|`-Symbol als Trennzeichen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

In solchen Fällen muss die vollständige `type()`-Syntax verwendet werden.

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` nun gültig.

## Standardwerte angeben

Sie können auch Standardwerte für Parameter angeben, nach einem Doppelpunkt am Ende ihrer Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des `--alpha`-Parameters ist nun `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Aufrufen der Funktion weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in der Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert wird stattdessen verwendet.

### Beispiel für Farb-Anpassungsfunktionen

Sie können die `--transparent()`-Funktion in unserem [Beispiel für Farb-Anpassungsfunktionen](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) sehen (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions)).

Dieses Beispiel enthält auch Funktionen namens `--lighter()` und `--darker()`, die ähnlich wie `--transparent()` funktionieren, jedoch hellere und dunklere Varianten einer Farbe zurückgeben, jeweils:

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

Eine Bibliothek von Funktionen wie diesen kann sehr nützlich sein, um Farbschemata basierend auf einer einzelnen Farbe zu definieren:

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

## Komplexe Logik einbinden

Sie können komplexere Logik in Funktionen mit Konstrukten wie {{cssxref("@media")}}-Regeln und {{cssxref("if()")}}-Funktionen einbinden.

Unser [responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/)-Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)) enthält eine Funktion namens `--narrow-wide()`, die genutzt werden kann, um zwei Wertoptionen für eine Eigenschaft bereitzustellen. Eine wird gesetzt, wenn der Viewport unter einem bestimmten Breakpoint liegt, und die andere, wenn er darüber liegt.

Die `--narrow-wide()`-Funktion akzeptiert zwei Parameter, `--narrow` und `--wide`. Der zurückgegebene `result` ist die `--wide`-Eigenschaft, es sei denn, der Viewport ist weniger als `700px` breit, in diesem Fall wird `--narrow` zurückgegeben.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Diese Funktion kann verwendet werden, um in mehreren Kontexten responsive Wertoptionen bereitzustellen:

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

### Verwendung einer `if()`-Funktion

Wir könnten die `--narrow-wide()`-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Einmal komplexe Syntax schreiben, dann wiederverwenden

Ein wesentlicher Anwendungsfall für CSS-Funktionen besteht darin, einen komplexen Abschnitt der Syntax einmal zu definieren und ihn mit einem viel einfacheren Funktionsaufruf mehrmals wiederverwenden zu können.

Unser [gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function)) liefert ein Beispiel dafür. Es enthält eine Funktion namens `--shippo-pattern()`, die Längen- und Farbartrsargumente akzeptiert und einen komplexen {{cssxref("background")}}-Wert mit mehreren {{cssxref("radial-gradient()")}}-Hintergründen zurückgibt:

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

Mit dieser definierten Funktion können wir jetzt Varianten dieses Hintergrundwerts mit unterschiedlichen Farbnuancen und Kreisgrößen erstellen:

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

- [Benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- [CSS-Benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins)-Modul
- [Benutzerdefinierte CSS-Funktionen im Browser](https://www.oddbird.net/2025/04/11/custom-functions/) von Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) von Bramus (2025)
- [5 nützliche CSS-Funktionen mit der neuen @function-Regel](https://una.im/5-css-functions/) von Una Kravets (2025)
