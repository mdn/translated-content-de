---
title: CSS-Funktion `calc()`
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: de1ffe9d19ce381ed182255fcc8fe0517029cfa2
---

Die **`calc()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, Berechnungen durchzuführen, wenn Sie Werte für CSS-Eigenschaften angeben. Sie kann mit Werten vom Typ {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} verwendet werden.

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

Die Funktion `calc()` akzeptiert einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Regeln zur Operatorpriorität](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linksseitigen Operanden (Dividend) durch den rechtsseitigen Operanden (Divisor).

Alle Operanden, mit Ausnahme derer vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheit wie `px`, `em` oder `%` versehen sein. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Bei Bedarf können Sie außerdem Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen.

## Beschreibung

Bei `calc()` gibt es einige Punkte zu beachten, die in den folgenden Abschnitten näher erläutert werden.

### Ergebniswerte

Die Funktion `calc()` muss anstelle eines vollständigen CSS-Werts eines der folgenden Typen stehen:

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

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die dahinterstehende Einheit zu ersetzen. Beispielsweise ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der Ergebniswert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Beispielsweise ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: Dies entspricht der Angabe von `margin: 3`, wodurch die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, das auf die nächste ganze Zahl gerundet wird. Daher ergibt `calc(1.4)` den Wert `1`. Wenn der Nachkommateil des Werts genau `0.5` beträgt, wird der Wert in Richtung positive Unendlichkeit gerundet. Beispielsweise ergibt `calc(1.5)` den Wert `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkomma-Arithmetik gemäß dem IEEE-754-Standard durch, was einige Überlegungen bezüglich der Werte `infinity` und `NaN` mit sich bringt. Weitere Details zur Serialisierung von Konstanten finden Sie auf der Seite {{cssxref("calc-keyword")}}.

### Hinweise zur Eingabe

- `calc()` kann keine Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("width#auto", "auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die Operatoren `*` und `/` erfordern keine Leerzeichen, deren Verwendung wird jedoch aus Gründen der Konsistenz empfohlen.
- Es ist zulässig, `calc()`-Funktionen zu verschachteln; in diesem Fall werden die inneren Funktionen als einfache Klammern behandelt.
- Mathematische Ausdrücke mit Prozentangaben für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in Tabellen mit sowohl automatischem als auch festem Layout _können_ so behandelt werden, als wäre `auto` angegeben.
- Weitere Informationen zur Syntax von `+`- und `-`-Ausdrücken finden Sie unter {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}.

### Typisierte CSS-Arithmetik

Wenn `calc()` zum Multiplizieren von Werten mit dem Operator `*` verwendet wird, darf nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keine Bedeutung hat.

Umgekehrt wird `200px / 4px` zu `50` aufgelöst, was in CSS sinnvoll ist. Wenn Sie daher die Funktion `calc()` verwenden, um Zahlen mit dem Operator `/` zu dividieren, erlauben [unterstützende Browser](#browser-kompatibilität) Einheiten auf beiden Seiten des Operanden, sofern sie denselben Datentyp haben. Beispielsweise ist `100vw / 1px` gültig und ergibt einen einheitenlosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die ein {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplikation mit einem typisierten Wert in einen anderen Datentyp umgewandelt werden.

Eine vollständige Erklärung der typisierten Arithmetik in CSS einschließlich Beispielen finden Sie unter [Verwendung typisierter CSS-Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die Funktion `calc()` kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen von Farbkanälen in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die Syntax für relative Farben definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (weitere Informationen finden Sie unter [Kanalwerte werden zu `<number>`-Werten aufgelöst](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values)). Die Funktion `calc()` kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, beispielsweise `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße skaliert wird, wenn die Seite gezoomt wird.

- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.4 verstehen: Textgröße ändern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Positionieren eines Objekts auf dem Bildschirm mit einem Rand

`calc()` ermöglicht es, ein Objekt mit einem festgelegten Rand zu positionieren. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

Ein weiterer Anwendungsfall für `calc()` besteht darin, sicherzustellen, dass Formularfelder in den verfügbaren Platz passen, ohne über den Rand ihres Containers hinauszuragen, und dabei einen angemessenen Rand beibehalten.

Sehen wir uns etwas CSS an:

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

Hier wird für das Formular selbst festgelegt, dass es 1/6 der verfügbaren Fensterbreite verwendet. Um dann sicherzustellen, dass Eingabefelder eine angemessene Größe behalten, verwenden wir erneut `calc()`, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollen. Das folgende HTML verwendet anschließend dieses CSS:

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

Nachdem alle Variablen erweitert wurden, lautet der Wert von `--width-c` `calc(calc(100px / 2) / 2)`. Wenn er der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen – unabhängig davon, wie tief sie verschachtelt sind – zu einfachen Klammern reduziert. Daher lautet der Wert der `width`-Eigenschaft letztlich `calc((100px / 2) / 2)`, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassen von Farbkanälen in relativen Farben

Die Funktion `calc()` kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne Farbkanalwerte als Variablen speichern zu müssen.

Im folgenden Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
In den folgenden Absätzen wird `calc()` mit den Funktionen [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

Ein weiteres Beispiel für die Verwendung der Funktion `calc()`, um relative Farben abzuleiten, finden Sie im Abschnitt [Verwendung mathematischer Funktionen](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
