---
title: "`calc()`-CSS-Funktion"
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`calc()`**-Funktion ermöglicht es Ihnen, Berechnungen bei der Angabe von CSS-Eigenschaftswerten durchzuführen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()`-Funktion nimmt einen einzigen Ausdruck als Parameter und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgelisteten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Regeln der Operator-Präzedenz](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheitenspezifikation wie `px`, `em` oder `%` ergänzt werden. Sie können im Ausdruck unterschiedliche Einheiten für jeden Operanden verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen.

## Beschreibung

Es gibt ein paar Punkte zu beachten bei `calc()`, die in den folgenden Abschnitten detailliert beschrieben werden.

### Ergebniswerte

Die `calc()`-Funktion muss an Stelle eines vollständigen CSS-Wertes eines der folgenden Typen stehen:

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

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten etc. ersetzen, ohne auch die nachfolgende Einheit zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: Es ist gleichbedeutend mit der Angabe `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, das auf die nächste ganze Zahl gerundet wird. Also wird `calc(1.4)` zu einem Wert von `1` führen. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert gegen Unendlich gerundet. Zum Beispiel wird `calc(1.5)` einen Wert von `2` ergeben, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkommaberechnungen nach dem IEEE-754-Standard durch, was einige Überlegungen bezüglich `infinity` und `NaN`-Werten zur Folge hat. Für weitere Details darüber, wie Konstanten serialisiert werden, siehe die Seite {{cssxref("calc-keyword")}}.

### Eingabebedingungen

- `calc()` kann keine Berechnungen bei {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die Operatoren `*` und `/` erfordern keinen Leerraum, aber es wird empfohlen, ihn zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, in diesem Fall werden die inneren als einfache Klammern behandelt.
- Mathematik-Ausdrücke, die Prozentsätze für Breiten und Höhen in Tabellenspalten, -spaltengruppen, -zeilen, -zeilengruppen und -zellen in sowohl automatischen als auch festgesetzten Layouttabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben ist.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### CSS-getypte Arithmetik

Wenn Sie `calc()` zum Multiplizieren von Werten verwenden, wobei der `*`-Operator benutzt wird, darf nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keinen Sinn ergibt.

In umgekehrter Weise löst `200px / 4px` sich zu `50` auf, was in CSS Sinn macht. Daher erlauben unterstützende Browser, wenn die `calc()`-Funktion zum Dividieren von Zahlen mit dem `/`-Operator verwendet wird, Einheiten auf beiden Seiten des Operanden, vorausgesetzt, sie sind vom gleichen Datentyp. Zum Beispiel ist `100vw / 1px` gültig und führt zu einem einheitslosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die eine {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplikation mit einem getypten Wert in einen anderen Datentyp umgewandelt werden.

Für eine vollständige Erklärung der getypten Arithmetik in CSS, zusammen mit Beispielen, siehe [Using CSS typed arithmetic](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für das Berechnen von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann innerhalb des Kontexts von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) direkt zur Manipulation von Farbkanälen verwendet werden. Dadurch können Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) dynamisch angepasst werden.

Die Syntax für relative Farben definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Channel values resolve to `<number>` values](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, z. B. `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` verwendet wird, um die Textgröße zu steuern, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) einschließt, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße bei Zoom des Seiteninhalts skaliert wird.

- [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Platzierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` ermöglicht die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Fensterkanten:

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

### Automatische Größeneinstellung von Formularfeldern zur Anpassung an ihren Container

Ein weiterer Anwendungsfall für `calc()` ist, sicherzustellen, dass Formularfelder in den verfügbaren Platz passen, ohne über den Rand ihres Containers hinauszuragen, während sie einen angemessenen Rand beibehalten.

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

Hier wird das Formular selbst so festgelegt, dass es ein Sechstel der verfügbaren Fensterbreite ausnutzt. Dann verwenden wir `calc()` erneut, um festzulegen, dass die Eingabefelder die Breite ihres Containers minus 1em beibehalten sollen. Dann wird das folgende HTML für dieses CSS verwendet:

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

Sie können `calc()` zusammen mit [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nachdem alle Variablen aufgelöst sind, hat `--width-c` den Wert `calc(calc(100px / 2) / 2)`. Wenn es der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (egal wie tief verschachtelt) zu einfachen Klammern vereinfacht. Daher wird der Wert der `width`-Eigenschaft letztendlich `calc((100px / 2) / 2)`, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne die Notwendigkeit, Farbkanalwerte als Variablen zu speichern.

Im untenstehenden Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
In den nachfolgenden Absätzen wird `calc()` zusammen mit den Funktionen [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) genutzt, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe zu justieren.

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

Für ein weiteres Beispiel zur Verwendung der `calc()`-Funktion zur Ableitung relativer Farben siehe den Abschnitt [Using math functions](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Using relative colors_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
