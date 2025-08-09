---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen bei der Angabe von CSS-Werten durchzuführen. Sie kann verwendet werden mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}}, und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten.

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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter an, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operatorprioritätsregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Teilt den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer solchen des Typs {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheitenzeichenkette wie `px`, `em` oder `%` versehen werden. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn dies erforderlich ist.

## Beschreibung

Es gibt einige Punkte zu beachten bei `calc()`, die in den folgenden Abschnitten detailliert beschrieben werden.

### Resultierende Werte

Die `calc()` Funktion muss anstelle eines vollständigen CSS-Wertes eines der folgenden Typen stehen:

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

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: Es ist äquivalent zur Angabe von `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste Ganzzahl gerundet wird. Also wird `calc(1.4)` zu einem Wert von `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert aufgerundet. Zum Beispiel wird `calc(1.5)` zu einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkommaberechnungen entsprechend dem IEEE-754 Standard durch, was zu einigen Überlegungen hinsichtlich der `unendlich` und `NaN` Werte führt. Für weitere Details, wie Konstanten serialisiert werden, siehe die Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

### Eingabebedenken

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die `*` und `/` Operatoren erfordern keinen Leerraum, aber es wird empfohlen, diesen zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Die aktuellen Implementierungen erfordern, dass bei Verwendung der `*` und `/` Operatoren einer der Operanden keine Einheit hat. Für `/` muss der rechte Operand keine Einheit haben. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` ist ungültig.
- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenspalten sowohl in Auto- als auch Festlayout-Tabellen enthalten, _können_ so behandelt werden, als wäre `auto` angegeben.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### Unterstützung für das Berechnen von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen von Farbkanälen in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, die jeweils den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellen (siehe [Kanalwerte lösen sich zu `<number>` Werten auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()` Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

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

- [MDN-Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C-Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` macht es einfach, ein Objekt mit einem festgelegten Rand zu positionieren. In diesem Beispiel erstellt das CSS ein Banner, das über das Fenster gestreckt wird, mit einem 40-Pixel-Abstand zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatisches Anpassen der Größe von Formularfeldern, um in ihren Container zu passen

Ein weiterer Anwendungsfall für `calc()` ist es, sicherzustellen, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszugehen, während ein angemessener Rand beibehalten wird.

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

Hier wird das Formular so festgelegt, dass es 1/6 der verfügbaren Fensterbreite nutzt. Dann wird, um sicherzustellen, dass Eingabefelder eine angemessene Größe behalten, `calc()` erneut verwendet, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollen. Das folgende HTML nutzt dieses CSS:

```html
<form>
  <div id="form-box">
    <label for="misc">Type something:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### Verschachtelung mit CSS-Variablen

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nachdem alle Variablen erweitert wurden, hat der Wert von `--width-c` die Form `calc(calc(100px / 2) / 2)`. Wenn er der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (egal wie tief verschachtelt) zu einfachen Klammern reduziert. Daher wird der Wert der `width`-Eigenschaft schließlich `calc((100px / 2) / 2)`, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne dass die Farbkanalwerte als Variablen gespeichert werden müssen.

Im folgenden Beispiel verwendet der erste Absatz einen [`<named-color>`](/de/docs/Web/CSS/named-color).
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

Für ein weiteres Beispiel zur Verwendung der `calc()` Funktion zur Ableitung relativer Farben siehe den Abschnitt [Mathematische Funktionen verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Using relative colors_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
