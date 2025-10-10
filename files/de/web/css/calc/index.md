---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: da5384d0d11e250ab735379eaa6856468ffd52cd
---

Die **`calc()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, Berechnungen durchzuführen, wenn Sie CSS-Werte für Eigenschaften angeben. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}}-Werten verwendet werden.

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

Die Funktion `calc()` nimmt einen einzelnen Ausdruck als Parameter und das Ergebnis dieses Ausdrucks wird als Wert einer CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den folgenden {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operatorrangfolgeregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Teilt den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, mit Ausnahme der vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer entsprechenden Einheit, wie `px`, `em` oder `%` versehen sein. Sie können für jeden Operanden in Ihrem Ausdruck eine unterschiedliche Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen bei Bedarf festzulegen.

## Beschreibung

Es gibt einige Punkte zu beachten, wenn Sie `calc()` verwenden. Diese werden in den folgenden Abschnitten detaillierter erläutert.

### Ergebniswerte

Die Funktion `calc()` muss anstelle eines kompletten CSS-Werts eines der folgenden Typen stehen:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Einer der Mischtypen wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` ist ungültig: Es ist gleichbedeutend mit der Angabe `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste ganze Zahl gerundet wird. So führt `calc(1.4)` zu einem Wert von `1`. Wenn der Bruchteil des Wertes genau `0,5` ist, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel ergibt `calc(1.5)` den Wert `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Fließkomma-Arithmetik gemäß dem IEEE-754-Standard durch, was einige Überlegungen in Bezug auf die Werte `infinity` und `NaN` mit sich bringt. Für weitere Details zur Serialisierung von Konstanten, siehe die Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

### Eingabebedingungen

- `calc()` kann keine Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die Operatoren `*` und `/` benötigen keinen Leerraum, aber es wird empfohlen, diesen aus Konsistenzgründen hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, wobei die inneren wie einfache Klammern behandelt werden.
- Mathematische Ausdrücke mit Prozentsätzen für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl auto- als auch fixierten Layout-Tabellen _können_ so behandelt werden, als ob `auto` angegeben wäre.
- Weitere Informationen zur Syntax von `+` und `-`-Ausdrücken finden Sie unter {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}.

### CSS-typisierte Arithmetik

Bei der Verwendung von `calc()` zum Multiplizieren von Werten mit dem `*`-Operator darf nur einer der Werte eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS bedeutungslos ist.

Im Gegensatz dazu löst sich `200px / 4px` zu `50` auf, was in CSS durchaus sinnvoll ist. Daher dürfen beim Verwenden der `calc()`-Funktion zur Division von Zahlen mit dem `/`-Operator [unterstützte Browser](#browser-kompatibilität) Einheiten auf beiden Seiten des Operanden erlauben, sofern sie vom gleichen Datentyp sind. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen einheitslosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die einen {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplikation mit einem typisierten Wert in einen anderen Datentyp umgewandelt werden.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS, zusammen mit Beispielen, siehe [Using CSS typed arithmetic](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic).

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Keywords, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} repräsentiert (siehe [Kanalwerte werden in `<number>`-Werte aufgelöst](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Keywords verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße skaliert wird, wenn die Seite gezoomt wird.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` macht es einfach, ein Objekt mit einem festgelegten Rand zu positionieren. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatische Größenanpassung von Formularfeldern, damit sie in ihren Container passen

Ein weiterer Anwendungsfall für `calc()` ist die Unterstützung bei der Sicherstellung, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszugehen, während sie einen angemessenen Rand beibehalten.

Lassen Sie uns einen Blick auf etwas CSS werfen:

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

Hier wird festgelegt, dass das Formular selbst 1/6 der verfügbaren Fensterbreite verwendet. Um sicherzustellen, dass Eingabefelder eine angemessene Größe beibehalten, verwenden wir erneut `calc()`, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollten. Dann verwendet das folgende HTML dieses CSS:

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

Sobald alle Variablen erweitert sind, lautet der Wert von `--width-c` `calc(calc(100px / 2) / 2)`. Wenn es der Breiten-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (egal wie tief verschachtelt) auf einfache Klammern reduziert. Daher wird der Wert der Breiten-Eigenschaft schließlich `calc((100px / 2) / 2)`, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne die Farbkanalwerte als Variablen speichern zu müssen.

Im folgenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color).
In den folgenden Absätzen wird `calc()` mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel zur Verwendung der `calc()`-Funktion zur Ableitung relativer Farben siehe den Abschnitt [Verwenden von mathematischen Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwenden von relativen Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
