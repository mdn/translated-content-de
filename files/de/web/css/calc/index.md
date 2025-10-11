---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, Berechnungen bei der Angabe von CSS-Werteigenschaften durchzuführen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}}, und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Regeln der Operatorrangfolge](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividende) durch den rechten Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem geeigneten Einheitensuffix wie `px`, `em` oder `%` versehen werden. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen.

## Beschreibung

Es gibt einige Punkte zu beachten bei `calc()`, die in den unten stehenden Abschnitten detailliert beschrieben sind.

### Resultierende Werte

Die `calc()` Funktion muss anstelle eines vollständigen CSS-Werts eines der folgenden Typen stehen:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Einer der gemischten Typen wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten etc. ersetzen, ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext, in dem er verwendet wird, kompatibel sein. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: es entspricht der Angabe von `margin: 3`, wodurch die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste ganze Zahl gerundet wird. So ergibt `calc(1.4)` einen Wert von `1`. Wenn der Dezimalteil des Werts genau `0.5` ist, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel resultiert `calc(1.5)` in einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Fließkomma-Berechnungen gemäß dem IEEE-754-Standard durch, was einige Überlegungen hinsichtlich der `infinity` und `NaN` Werte mit sich bringt. Für mehr Details, wie Konstanten serialisiert werden, schauen Sie auf der Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword) nach.

### Eingabeüberlegungen

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die `*` und `/` Operatoren benötigen keine Leerzeichen, aber es wird empfohlen, sie aus Konsistenzgründen hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematische Ausdrücke mit Prozentwerten für Breiten und Höhen in Tabellenspalten, Tabellen-Spaltengruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl Auto- als auch Festlayouttabellen _können_ so behandelt werden, als ob `auto` angegeben wäre.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### CSS typisierte Arithmetik

Bei der Verwendung von `calc()` zum Multiplizieren von Werten mit dem `*` Operator kann nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keinen Sinn ergibt.

Im Gegensatz dazu ergibt `200px / 4px` `50`, was in CSS sinnvoll ist. Daher erlaubt die Verwendung der `calc()` Funktion zum Dividieren von Zahlen mit dem `/` Operator es in [unterstützenden Browsern](#browser-kompatibilität), Einheiten auf beiden Seiten des Operanden zu haben, vorausgesetzt, sie haben denselben Datentyp. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen wertlosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplikation mit einem typisierten Wert in einen anderen Datentyp konvertiert werden.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS mit Beispielen siehe [Verwendung der CSS typisierten Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic).

### Unterstützung zur Berechnung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen von Farbkanälen in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (sehen Sie [Kanalwerte lösen sich zu `<number>` Werten auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für mehr Informationen). Die `calc()` Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße skalierbar ist, wenn die Seite gezoomt wird.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` erleichtert es, ein Objekt mit einem festgelegten Rand zu positionieren. In diesem Beispiel erstellt das CSS ein Banner, das sich über das gesamte Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatisches Anpassen der Größe von Formularfeldern an ihren Container

Ein weiterer Anwendungsfall für `calc()` ist, um sicherzustellen, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszuragen, und dabei einen geeigneten Rand beizubehalten.

Betrachten wir einige CSS:

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

Hier wird das Formular selbst festgelegt, um 1/6 der verfügbaren Fensterbreite zu verwenden. Dann nutzen wir `calc()` erneut, um sicherzustellen, dass Eingabefelder eine geeignete Größe behalten, indem wir festlegen, dass sie die Breite ihres Containers minus 1em haben sollten. Dann wird das folgende HTML für dieses CSS verwendet:

```html
<form>
  <div id="form-box">
    <label for="misc">Type something:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### Verschachteln mit CSS-Variablen

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nachdem alle Variablen erweitert wurden, wird der Wert von `--width-c` `calc(calc(100px / 2) / 2)` sein. Wenn er der `width` Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (unabhängig davon, wie tief sie verschachtelt sind) zu einfachen Klammern reduziert. Daher wird der Wert der `width` Eigenschaft schließlich `calc((100px / 2) / 2)` sein, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassen von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne dass die Werte der Farbkanäle als Variablen gespeichert werden müssen.

Im folgenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color).
In den folgenden Absätzen wird `calc()` mit den [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) Funktionen verwendet, um die Werte der einzelnen Farbkanäle relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel der Verwendung der `calc()` Funktion zur Ableitung relativer Farben siehe den Abschnitt [Verwendung von mathematischen Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
