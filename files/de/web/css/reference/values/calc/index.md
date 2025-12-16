---
title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erlaubt es Ihnen, Berechnungen bei der Angabe von CSS-Property-Werten durchzuführen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

{{InteractiveExample("CSS Demo: calc()")}}

```css interactive-example-choice
width: calc(10px + 100px);
```

```css interactive-example-choice
width: calc(100% - 30px);
```

```css interactive-example-choice
width: calc(2em * 5);
```

```css interactive-example-choice
width: calc(var(--variable-width) + 20px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Change my width.</div>
</section>
```

```css interactive-example
:root {
  --variable-width: 100px;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

## Syntax

```css
/* calc(expression) */
calc(100% - 80px)

/* Expression with a CSS function */
calc(100px * sin(pi / 2))

/* Expression containing a variable */
calc(var(--hue) + 180)

/* Expression with color channels in relative colors */
lch(from aquamarine l c calc(h + 180))
```

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Property verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgelisteten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operator-Prioritätsregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem passenden Einheit-String versehen werden, wie `px`, `em` oder `%`. Sie können in Ihrem Ausdruck mit jedem Operanden eine unterschiedliche Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

## Beschreibung

Es gibt einige Punkte, die über `calc()` zu beachten sind, die in den folgenden Abschnitten detailliert beschrieben werden.

### Ergebniswerte

Die `calc()` Funktion muss anstelle eines vollständigen CSS-Wertes eines der folgenden Typen verwendet werden:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("angle")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("resolution")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Einer der gemischten Typen wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten etc. ersetzen, ohne auch die nachfolgende Einheit zu ersetzen. Beispiel: `calc(100 / 4)%` ist ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Beispiel: `margin: calc(1px + 2px)` ist gültig, `margin: calc(1 + 2)` jedoch nicht; es entspricht `margin: 3`, was dazu führt, dass die Property ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste ganze Zahl gerundet wird. Somit ergibt `calc(1.4)` einen Wert von `1`. Wenn der Bruchteil genau `0.5` beträgt, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel ergibt `calc(1.5)` einen Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkomma-Mathematik nach dem IEEE-754-Standard durch, was einige Überlegungen zu den Werten `infinity` und `NaN` mit sich bringt. Für weitere Details zur Serialisierung von Konstanten siehe die Seite {{cssxref("calc-keyword")}}.

### Eingabebedingungen

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die Operatoren `*` und `/` erfordern keinen Leerraum, aber es wird empfohlen, diesen der Konsistenz halber hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu schachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematikausdrücke, die Prozentsätze für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatisierten als auch festen Layouttabellen umfassen, _können_ behandelt werden, als ob `auto` angegeben ist.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### CSS-typisierte Arithmetik

Beim Verwenden von `calc()` zur Multiplikation von Werten mit dem `*` Operator darf nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS bedeutungslos ist.

Umgekehrt ergibt `200px / 4px` `50`, was in CSS Sinn ergibt. Daher erlauben unterstützende Browser beim Verwenden der `calc()` Funktion zum Teilen von Zahlen, unter Verwendung des `/` Operators, auf beiden Seiten des Operanden Einheiten, vorausgesetzt, sie sind vom gleichen Datentyp. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen einheitslosen Wert.

Der Quotient kann dann in den Werten von Properties oder Funktionen verwendet werden, die eine {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder indem er durch einen typisierten Wert multipliziert in einen anderen Datentyp umgewandelt wird.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS, zusammen mit Beispielen, siehe [Using CSS typed arithmetic](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für das Berechnen von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbkanäle direkt innerhalb des Kontexts von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte werden zu `<number>` Werten aufgelöst](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values) für mehr Informationen). Die `calc()` Funktion kann diese Farbkanal-Schlüssel zum Durchführen dynamischer Anpassungen auf den Farbkanälen verwenden, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, sollten Sie sicherstellen, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass sich die Textgröße beim Zoomen der Seite anpasst.

- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` ermöglicht die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem 40-Pixel-Abstand zwischen beiden Seiten des Banners und den Rändern des Fensters:

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">This is a banner!</div>
```

{{EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', 'auto', '60')}}

### Automatisches Anpassen von Formularfeldern an ihren Container

Ein anderer Anwendungsfall für `calc()` ist die Hilfe, um sicherzustellen, dass Formularfelder in den verfügbaren Platz passen, ohne über den Rand ihres Containers hinauszustehen, und dabei einen angemessenen Abstand einzuhalten.

Schauen wir uns etwas CSS an:

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#form-box {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

Hier wird das Formular selbst so festgelegt, dass es 1/6 der verfügbaren Fensterbreite verwendet. Dann verwenden wir erneut `calc()`, um sicherzustellen, dass die Eingabefelder eine angemessene Größe beibehalten, indem wir festlegen, dass sie die Breite ihres Containers abzüglich 1em haben. Dann nutzt das folgende HTML dieses CSS:

```html
<form>
  <div id="form-box">
    <label for="misc">Type something:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### Schachteln mit CSS-Variablen

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nachdem alle Variablen expandiert sind, wird der Wert von `--width-c` `calc(calc(100px / 2) / 2)` sein. Wenn er der `width`-Property von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (egal wie tief geschachtelt) zu einfachen Klammern flachgerechnet. Letztendlich wird der Wert der `width`-Eigenschaft `calc((100px / 2) / 2)` sein, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne die Werte der Farbkanäle als Variablen speichern zu müssen.

Im folgenden Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
In den nachfolgenden Absätzen wird `calc()` mit den Funktionen [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

```html
<p class="original">Original text color in rebeccapurple</p>
<p class="increase-hue">Hue increased by 80</p>
<p class="increase-lightness">Lightness increased by 20</p>
<p class="decrease-lightness">Lightness decreased by 10</p>
```

```css hidden
p {
  font-family: monospace;
  font-size: 16px;
}
```

```css
.original {
  color: rebeccapurple;
}

.increase-hue {
  color: lch(from rebeccapurple l c calc(h + 80));
}

.increase-lightness {
  color: lch(from rebeccapurple calc(l + 20) c h);
}

.decrease-lightness {
  color: lch(from rebeccapurple calc(l - 10) c h);
}
```

{{EmbedLiveSample('Adjusting color channels in relative colors', '700', '300')}}

Für ein weiteres Beispiel zur Verwendung der `calc()` Funktion zur Ableitung relativer Farben, siehe den Abschnitt [Using math functions](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Using relative colors_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
