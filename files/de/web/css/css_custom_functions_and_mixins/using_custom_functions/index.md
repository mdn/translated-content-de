---
title: Verwendung von benutzerdefinierten CSS-Funktionen
slug: Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

Benutzerdefinierte CSS-Funktionen ermöglichen es Ihnen, wiederverwendbare Blöcke von CSS-Code zu erstellen, die Argumente akzeptieren, komplexe Logik (definiert mit Funktionen wie CSS {{cssxref("if()")}}-Funktionen und {{cssxref("@media")}}-Regeln) enthalten und Werte basierend auf dieser Logik zurückgeben können. Sie funktionieren ähnlich wie [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/--*), bieten jedoch mehr Flexibilität.

In diesem Artikel zeigen wir Ihnen, wie man sie verwendet und präsentieren einige praktische Beispiele.

## Grundlagen der Funktion

Eine grundlegende Definition einer benutzerdefinierten CSS-Funktion sieht folgendermaßen aus:

```css
@function --half-opacity() {
  result: 0.5;
}
```

Nach der `@function`-Syntax definieren wir einen Namen für die Funktion: `--half-opacity`. Dieser muss vom Typ {{cssxref("&lt;dashed-ident>")}} sein – er muss mit einem Doppelstrich beginnen und ist case-sensitive. Dem Funktionsnamen folgt unmittelbar ein Satz von Klammern (`()`) und ein Satz von geschweiften Klammern (`{}`).

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Falls alle in derselben Ebene sind, gewinnt die zuletzt definierte Funktion in der Quellreihenfolge.

Innerhalb der geschweiften Klammern befindet sich der **Funktionskörper**, in dem die Funktionslogik definiert wird. Dieser kann mehrere Deklarationen enthalten, einschließlich benutzerdefinierter Eigenschaften (die lokal auf den Funktionskörper beschränkt werden), Regeln wie {{cssxref("@media")}} und den [`result`](/de/docs/Web/CSS/@function#result_2) Deskriptor. Der Wert des `result`-Deskriptors wird ausgewertet, um den von der Funktion zurückgegebenen Wert zu bestimmen.

Hier setzen wir `result` auf den Wert `0.5`: die Funktion `--half-opacity()` wird immer `0.5` zurückgeben.

### Warum "result" und nicht "return"?

Der `result`-Deskriptor klingt funktional ähnlich wie die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) JavaScript-Anweisung. `return` wird jedoch in CSS-Funktionen nicht verwendet, da CSS-Funktionen im Gegensatz zu JavaScript-Anweisungen keinen Wert zurückgeben, sobald eine `result`-Deklaration erreicht wird.

Der Körper einer CSS-Funktion wird von Anfang bis Ende ausgewertet. Wenn es mehrere `result`-Deklarationen im Körper gibt, überschreibt die letzte in der Quellreihenfolge die vorherigen.

### Aufrufen einer CSS-Funktion

Eine CSS-Funktion kann anstelle eines geeigneten Eigenschaftswerts mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen werden, die aus dem Funktionsnamen mit anschließenden Klammern besteht, die die Argumente enthalten, die an die Funktion übergeben werden, falls vorhanden. Beispielsweise können wir unsere `--half-opacity()`-Funktion folgendermaßen aufrufen:

```css
h2 {
  opacity: --half-opacity();
}
```

Da diese Funktion immer den Wert `0.5` zurückgibt, entspricht die vorherige Deklaration `opacity: 0.5`. Dies ist nicht sehr nützlich. Sie könnten genauso gut eine benutzerdefinierte Eigenschaft oder den Literalwert `0.5` verwenden.

Lassen Sie uns fortfahren, um zu sehen, wie wir CSS-Funktionen verwenden können.

## Funktionen zur Erkennung von Funktionen in CSS

Eine praktische Verwendung von CSS-Funktionen ohne Parameter ist die Funktionserkennung. In allen [Beispielen, die wir uns in diesem Artikel ansehen werden](https://github.com/mdn/dom-examples/tree/main/css-custom-functions), definieren wir eine `--supports()`-Funktion, die so aussieht:

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

In Browsern, die benutzerdefinierte Funktionen unterstützen, wird `display` auf `none` gesetzt und das Unterstützung-Banner wird ausgeblendet. In nicht unterstützenden Browsern wird die `display: --supports()`-Deklaration ungültig und daher ignoriert; das Banner wird angezeigt.

## Festlegen von Funktionsparametern

CSS-Funktionsparameter werden als kommagetrennte benutzerdefinierte Eigenschaften innerhalb der Klammern nach dem Funktionsnamen angegeben. Zum Beispiel:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Diese Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter: `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält einen `result`-Deskriptor, der die [CSS relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwendet, um den Eingabewert `--color` in einen [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbwert mit einem Alphakanalwert zu konvertieren, der im Eingabewert `--alpha` angegeben ist.

Sie können diese Funktion dann überall dort aufrufen, wo Sie eine halbtransparente Version einer bestehenden Farbe erzeugen möchten.

Zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

## Datentypen angeben

Es ist möglich, zulässige Datentypen für die Funktionsparameter und den Rückgabewert anzugeben. Wenn Sie diese nicht angeben, akzeptiert die Funktion jeden Typ für diese Werte.

Lassen Sie uns unsere vorherige Funktion ändern, um Datentypen anzugeben:

```css
@function --transparent(--color type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Datentyp jedes Parameters wird nach dem Parameternamen angegeben, und der Datentyp des `result` wird kurz vor der öffnenden geschweiften Klammer angegeben, dem das Schlüsselwort `returns` vorausgeht. Die {{cssxref("type()")}}-Funktion wird verwendet, um einen Datentyp anzugeben.

Beachten Sie, dass in Fällen, in denen Sie nur einen einzelnen Datentyp angeben, die `type()`-Syntax ausgelassen werden kann und der Typ als Kurzschrift geschrieben wird:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt wird die Funktion nur dann einen gültigen Wert erzeugen, wenn die Eingabeargumente jeweils ein {{cssxref("&lt;color>")}} und ein {{cssxref("&lt;number>")}} sind und das `result` ein {{cssxref("&lt;color>")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (da `50%` kein `<number>` sondern ein `<percentage>` ist) und die `background-color` wird am Ende auf `transparent` gesetzt.

### Mehrfach zulässige Typen angeben

Sie können mehrere akzeptierte Datentypen mithilfe des `|`-Symbols als Trennzeichen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

In solchen Fällen muss die vollständige `type()`-Syntax verwendet werden.

Mit dieser Anpassung wird der `--transparent(var(--base-color), 50%)`-Funktionsaufruf jetzt gültig.

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
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in der Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert verwendet.

### Beispiel für Farbkorrekturfunktionen

Sie können die Funktion `--transparent()` in unserem [color-adjust-functions](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/)-Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions)).

Dieses Beispiel enthält auch Funktionen namens `--lighter()` und `--darker()`, die ähnlich wie `--transparent()` funktionieren, jedoch hellere bzw. dunklere Variante einer Farbe zurückgeben:

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

Eine Bibliothek von Funktionen wie diesen kann sehr nützlich werden, um Farbschemata basierend auf einer einzelnen Farbe zu definieren:

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

## Komplexe Logik einbeziehen

Sie können komplexere Logik in Funktionen einbeziehen, indem Sie Konstrukte wie {{cssxref("@media")}}-Regeln und {{cssxref("if()")}}-Funktionen verwenden.

Unser [responsive-narrow-wide](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide)-Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)) verfügt über eine Funktion namens `--narrow-wide()`, die verwendet werden kann, um zwei Wertoptionen für jede Eigenschaft bereitzustellen. Einer wird gesetzt, wenn der Ansichtsbereich unter einem bestimmten Schwellenwert liegt, und der andere wird gesetzt, wenn er darüber liegt.

Die `--narrow-wide()`-Funktion nimmt zwei Parameter entgegen: `--narrow` und `--wide`. Der zurückgegebene `result` ist die `--wide`-Eigenschaft, es sei denn, der Ansichtsbereich ist weniger als `700px` breit, in diesem Fall wird `--narrow` zurückgegeben.

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

### Verwendung einer `if()`-Funktion

Wir könnten die `--narrow-wide()`-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Komplexe Syntax einmal schreiben, dann wiederverwenden

Ein Hauptanwendungsfall für CSS-Funktionen besteht darin, einen komplexen Syntaxabschnitt einmal zu definieren und ihn dann mit einem viel einfacheren Funktionsaufruf mehrfach wiederverwenden zu können.

Unser [gradient-function](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function)-Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function)) bietet ein Beispiel hierfür. Es verfügt über eine Funktion namens `--shippo-pattern()`, die Längen- und Farbargumente akzeptiert und einen komplexen {{cssxref("background")}}-Wert zurückgibt, der mehrere {{cssxref("radial-gradient()")}}-Hintergründe enthält:

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

Mit dieser definierten Funktion können wir nun Varianten dieses Hintergrundwerts mit unterschiedlichen Farbtönungen und Kreisgrößen erstellen:

```css
#one {
  background: --shippo-pattern(100px, #def);
}

#two {
  background: --shippo-pattern(3.5rem, lime);
}

#three {
  background: --shippo-pattern(10vw, purple);
}
```

## Siehe auch

- [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
- [Custom CSS Functions in the Browser](https://www.oddbird.net/2025/04/11/custom-functions/) von Miriam Suzanne (2025)
- [CSS @function + CSS if()](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) von Bramus (2025)
- [5 nützliche CSS-Funktionen mit der neuen @function-Regel](https://una.im/5-css-functions/) von Una Kravets (2025)
