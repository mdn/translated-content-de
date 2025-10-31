---
title: Verwendung von CSS Custom Functions
slug: Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

CSS-Custom-Functions ermöglichen es Ihnen, wiederverwendbare CSS-Codeblöcke zu erstellen, die Argumente akzeptieren, komplexe Logik enthalten können (definiert durch Funktionen wie CSS-{{cssxref("if()")}}-Funktionen und {{cssxref("@media")}}-Regeln) und Werte basierend auf dieser Logik zurückgeben. Sie funktionieren ähnlich wie [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*), bieten jedoch mehr Flexibilität.

In diesem Artikel zeigen wir Ihnen, wie Sie sie verwenden können und präsentieren einige praxisnahe Beispiele.

## Grundlagen der Funktion

Eine grundlegende Definition einer CSS-Custom-Function sieht folgendermaßen aus:

```css
@function --half-opacity() {
  result: 0.5;
}
```

Nach der `@function`-Syntax definieren wir einen Namen für die Funktion: `--half-opacity`. Dieser muss vom Typ {{cssxref("&lt;dashed-ident>")}} sein – er muss mit doppeltem Bindestrich beginnen und ist case-sensitiv. Der Funktionsname wird direkt gefolgt von einem Satz Klammern (`()`) und einem Satz geschweifter Klammern (`{}`).

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskadierung ({{cssxref("@layer")}}). Wenn alle in derselben Schicht sind, gewinnt die zuletzt definierte Funktion in der Quelldatei.

Innerhalb der geschweiften Klammern befindet sich der **Funktionstext**, in dem die Logik der Funktion definiert wird. Dieser kann mehrere Deklarationen enthalten, einschließlich benutzerdefinierter Properties (die lokal auf den Funktionstext beschränkt sind), @-Regeln wie {{cssxref("@media")}} und den [`result`](/de/docs/Web/CSS/@function#result_2)-Deskriptor. Der Wert des `result`-Deskriptors wird ausgewertet, um den von der Funktion zurückgegebenen Wert zu bestimmen.

Hier setzen wir `result` auf den Wert `0.5`: Die `--half-opacity()`-Funktion wird immer `0.5` zurückgeben.

### Warum "result" und nicht "return"?

Der `result`-Deskriptor klingt in seiner Funktionalität ähnlich wie die JavaScript-Funktion [`return`](/de/docs/Web/JavaScript/Reference/Statements/return). Allerdings wird `return` in CSS-Funktionen nicht verwendet. Dies liegt daran, dass CSS-Funktionen im Gegensatz zu JavaScript-`return`-Anweisungen keinen Wert zurückgeben, sobald eine `result`-Deklaration erreicht wird.

Der Funktionstext einer CSS-Funktion wird von Anfang bis Ende ausgewertet. Wenn mehrere `result`-Deklarationen im Text enthalten sind, überschreibt die letzte in der Quelldatei die vorherigen.

### Aufrufen einer CSS-Funktion

Eine CSS-Funktion kann anstelle eines geeigneten Eigenschaftswerts mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen werden, die aus dem Funktionsnamen besteht, gefolgt von Klammern, die die an die Funktion zu übergebenden Argumente enthalten, falls vorhanden. Zum Beispiel können wir unsere `--half-opacity()`-Funktion so aufrufen:

```css
h2 {
  opacity: --half-opacity();
}
```

Da diese Funktion immer den Wert `0.5` zurückgibt, entspricht die vorherige Deklaration `opacity: 0.5`. Dies ist nicht sehr nützlich. Sie könnten genauso gut eine benutzerdefinierte Property oder den wörtlichen Wert `0.5` verwenden.

Lassen Sie uns weitersehen, wie wir CSS-Funktionen verwenden können.

## Erkennen von Funktionen in CSS

Ein praktischer Nutzen von CSS-Funktionen ohne Parameter liegt in der Funktionserkennung. In allen [Beispielen, die wir uns ansehen werden](https://github.com/mdn/dom-examples/tree/main/css-custom-functions) in diesem Artikel, definieren wir eine `--supports()`-Funktion, die so aussieht:

```css
@function --supports() {
  result: none;
}
```

Sie können dann ein "Funktion nicht unterstützt"-Banner definieren und dessen {{cssxref("display")}}-Eigenschaft auf `--supports()` setzen:

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

In Browsern, die Custom-Functions unterstützen, wird `display` auf `none` gesetzt und das Support-Banner ausgeblendet. In nicht unterstützenden Browsern wird die Deklaration `display: --supports()` ungültig und daher ignoriert; das Banner wird also angezeigt.

## Spezifizieren von Funktionsparametern

CSS-Funktionsparameter werden als kommagetrennte benutzerdefinierte Properties innerhalb der Klammern nach dem Funktionsnamen angegeben. Zum Beispiel:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Diese Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Properties als Parameter auf, `--color` und `--alpha`, die lokal innerhalb des Funktionstextes verwendet werden können. Der Text enthält einen `result`-Deskriptor, der die [CSS-relative-Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet, um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe mit einem Alpha-Kanal-Wert zu konvertieren, wie im Eingabewert `--alpha` angegeben.

Sie können diese Funktion überall aufrufen, um eine halbtransparente Version einer vorhandenen Farbe zu erzeugen.

Zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## Spezifizieren von Datentypen

Es ist möglich, zulässige Datentypen für die Funktionsparameter und den Rückgabewert anzugeben. Wenn Sie diese nicht angeben, akzeptiert die Funktion jeden Typ für diese Werte.

Lassen Sie uns unsere vorherige Funktion ändern, um Datentypen bereitzustellen:

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Datentyp jedes Parameters wird nach dem Parameternamen angegeben, und der Datentyp des `result` wird direkt vor der öffnenden geschweiften Klammer angegeben, gefolgt vom Schlüsselwort `returns`. Die {{cssxref("type()")}}-Funktion wird verwendet, um einen Datentyp anzugeben.

Beachten Sie, dass Sie in Fällen, in denen Sie nur einen einzigen Datentyp angeben, die `type()`-Syntax weglassen und den Typ einfach als Abkürzung schreiben können:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt wird die Funktion nur dann einen gültigen Wert erzeugen, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` ein {{cssxref("&lt;color>")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Laufzeit ungültig (da `50%` kein `<number>`, sondern ein `<percentage>` ist) und der `background-color` wird letztendlich auf `transparent` gesetzt.

### Angabe mehrerer zulässiger Typen

Sie können mehrere akzeptierte Datentypen mit dem Symbol `|` als Trennzeichen spezifizieren, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

In solchen Fällen muss die vollständige `type()`-Syntax verwendet werden.

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` nun gültig.

## Standardswerte festlegen

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
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert, und der Standardwert wird stattdessen verwendet.

### Beispiel für Farb-Anpassungsfunktionen

Sie können die `--transparent()`-Funktion in Aktion in unserem [color-adjust-functions](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) Beispiel sehen (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions) an).

Dieses Beispiel enthält auch Funktionen namens `--lighter()` und `--darker()`, die ähnlich wie `--transparent()` funktionieren, jedoch hellere und dunklere Varianten einer Farbe zurückgeben:

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

Eine Bibliothek von Funktionen wie diesen kann sehr nützlich werden, um Farbschemata basierend auf einer einzigen Farbe zu definieren:

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

## Einschluss komplexer Logik

Sie können komplexere Logik in Funktionen einbinden, indem Sie Konstrukte wie {{cssxref("@media")}}-Regeln und {{cssxref("if()")}}-Funktionen verwenden.

Unser [responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/) Beispiel (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide) an) enthält eine Funktion namens `--narrow-wide()`, die verwendet werden kann, um zwei Wertoptionen für eine beliebige Eigenschaft bereitzustellen. Eine wird gesetzt, wenn das Ansichtsfenster unter einem bestimmten Grenzwert liegt, und die andere, wenn es darüber liegt.

Die `--narrow-wide()` Funktion akzeptiert zwei Parameter, `--narrow` und `--wide`. Das zurückgegebene `result` ist die `--wide` Property, es sei denn, das Ansichtsfenster ist weniger als `700px` breit, in diesem Fall wird `--narrow` zurückgegeben.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Diese Funktion kann verwendet werden, um responsive Wertoptionen in mehreren Kontexten bereitzustellen:

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

Wir könnten die `--narrow-wide()` Funktion umschreiben, um eine `if()` Funktion anstelle davon zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Komplexe Syntax einmal schreiben, dann wiederverwenden

Ein Hauptanwendungsfall für CSS-Funktionen ist, einen komplexen Syntaxabschnitt einmal zu definieren und ihn mehrmals mit einem viel einfacheren Funktionsaufruf wiederverwenden zu können.

Unser [gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) Beispiel (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function) an) bietet ein Beispiel dafür. Es enthält eine Funktion namens `--shippo-pattern()`, die Längen- und Farbargumente akzeptiert und einen komplexen {{cssxref("background")}}-Wert mit mehreren {{cssxref("radial-gradient()")}}-Hintergründen zurückgibt:

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

Mit dieser Funktion definiert, können wir jetzt Varianten dieses Hintergrundwerts mit verschiedenen Farbnuancen und Kreisgrößen erstellen:

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
- [CSS-Custom-Functions und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
- [Custom CSS Functions in the Browser](https://www.oddbird.net/2025/04/11/custom-functions/) von Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) von Bramus (2025)
- [5 Useful CSS functions using the new @function rule](https://una.im/5-css-functions/) von Una Kravets (2025)
