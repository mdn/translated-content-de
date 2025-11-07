---
title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, Berechnungen bei der Angabe von CSS-Werteigenschaften durchzuführen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgelisteten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operatorvorrangregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operand (Dividend) durch den rechten Operand (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer angemessenen Einheit wie `px`, `em` oder `%` angegeben werden. Sie können unterschiedliche Einheiten für jeden Operanden in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

## Beschreibung

Es gibt einige Punkte zur `calc()`, die in den unten stehenden Abschnitten ausführlich beschrieben werden.

### Ergebniswerte

Die `calc()` Funktion muss anstelle eines vollwertigen CSS-Werts eines der folgenden Typen stehen:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Eine der gemischten Typen wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die Einheit dahinter zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem es verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` ist nicht gültig: es ist gleichbedeutend mit der Angabe `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch zu einem `<number>` ausgewertet werden, das auf die nächste ganze Zahl gerundet wird. Daher ergibt `calc(1.4)` einen Wert von `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel ergibt `calc(1.5)` einen Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Fließkommaarithmetik gemäß dem IEEE-754-Standard aus, was zu einigen Überlegungen in Bezug auf die `infinity`- und `NaN`-Werte führt. Für mehr Details darüber, wie Konstanten serialisiert werden, siehe die Seite [`calc-keyword`](/de/docs/Web/CSS/Reference/Values/calc-keyword).

### Eingabebedingungen

- `calc()` kann keine Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Für die Operatoren `*` und `/` ist kein Leerzeichen erforderlich, aber es wird empfohlen, es zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematik-Ausdrücke mit Prozentwerten für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenspalten in sowohl auto als auch festen Layout-Tabellen _können_ so behandelt werden, als wäre `auto` angegeben.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für mehr Informationen zur Syntax von `+` und `-` Ausdrücken.

### Getypte Arithmetik in CSS

Wenn `calc()` verwendet wird, um Werte mit dem `*` Operator zu multiplizieren, kann nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keinen Sinn ergibt.

Umgekehrt ergibt `200px / 4px` `50`, was in CSS Sinn macht. Daher erlauben es unterstützende [Browser](#browser-kompatibilität), Einheiten auf beiden Seiten des Operanden zu haben, wenn man die `calc()` Funktion zum Dividieren von Zahlen mit dem `/` Operator verwendet, sofern sie vom gleichen Datentyp sind. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen einheitenlosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die einen {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder in einen anderen Datentyp umgewandelt werden, indem man ihn mit einem typisierten Wert multipliziert.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS inklusive Beispielen siehe [CSS typisierte Arithmetik verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für das Berechnen von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die Syntax für relative Farben definiert mehrere Farbkanalschlüsselwörter, die den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellen (siehe [Kanalwerte lösen sich zu `<number>` Werten auf](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values) für mehr Informationen). Die `calc()` Funktion kann diese Farbkanalschlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, achten Sie darauf, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße skaliert, wenn die Seite gezoomt wird.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` erleichtert es, ein Objekt mit einem festgelegten Rand zu positionieren. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatische Größenanpassung von Formularfeldern an ihren Container

Ein weiterer Anwendungsfall für `calc()` besteht darin, sicherzustellen, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszuragen, während ein geeigneter Rand erhalten bleibt.

Betrachten wir etwas CSS:

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

Hier wird festgelegt, dass das Formular selbst 1/6 der verfügbaren Fensterbreite nutzt. Um sicherzustellen, dass Eingabefelder eine geeignete Größe behalten, verwenden wir `calc()` erneut, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollten. Dann nutzt das folgende HTML dieses CSS:

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

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nach der Entfaltung aller Variablen wird der Wert von `--width-c` `calc(calc(100px / 2) / 2)` sein. Wenn es der width-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (egal wie tief verschachtelt) zu einfachen Klammern reduziert. Daher wird der Wert der `width`-Eigenschaft letztlich `calc((100px / 2) / 2)` sein, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne die Farbkanalwerte als Variablen speichern zu müssen.

Im folgenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color).
In den darauf folgenden Absätzen wird `calc()` mit den [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Funktionen verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel zur Verwendung der `calc()` Funktion zur Ableitung relativer Farben siehe den Abschnitt [Mathefunktionen verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Verwendung von relativen Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
