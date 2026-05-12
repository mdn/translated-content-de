---
title: "`calc()` CSS-Funktion"
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, Berechnungen auszuführen, wenn Sie Werte für CSS-Eigenschaften spezifizieren. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()`-Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die Standardregeln zur [Operatorpräzedenz](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividende) durch den rechten Operanden (Divisor).

Alle Operanden, außer diejenigen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem geeigneten Einheitenstring wie `px`, `em` oder `%` versehen werden. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

## Beschreibung

Es gibt einige Punkte, die über `calc()` zu beachten sind, die in den folgenden Abschnitten detailliert beschrieben werden.

### Resultierende Werte

Die `calc()`-Funktion muss anstelle eines vollständigen CSS-Werts eines der folgenden Typen stehen:

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

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten etc., ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: Es ist gleichbedeutend mit der Angabe von `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste Ganzzahl gerundet wird. So wird `calc(1.4)` zu einem Wert von `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert Richtung positive Unendlichkeit gerundet. Zum Beispiel wird `calc(1.5)` zu einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkommaberechnungen nach dem IEEE-754 Standard durch, was einige Überlegungen bezüglich der `infinity` und `NaN` Werte mit sich bringt. Für weitere Details, wie Konstanten serialisiert werden, siehe die {{cssxref("calc-keyword")}} Seite.

### Eingabekonstellationen

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("width#auto", "auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}}-Funktion.
- Die `*` und `/` Operatoren erfordern keine Leerzeichen, aber es wird empfohlen, sie zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layou-Tabellen beinhalten, _können_ so behandelt werden, als wäre `auto` spezifiziert.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### CSS typisierte Arithmetik

Bei der Verwendung von `calc()`, um Werte zu multiplizieren, kann nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> im CSS keinen Sinn ergibt.

Umgekehrt löst `200px / 4px` zu `50` auf, was im CSS Sinn ergibt. Daher erlauben [unterstützende Browser](#browser-kompatibilität) bei der Verwendung der `calc()`-Funktion zur Division von Zahlen den `/` Operator mit Einheiten auf beiden Seiten des Operanden, sofern sie vom gleichen Datentyp sind. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen einheitslosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die einen {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplikation mit einem typisierten Wert werden in einen anderen Datentyp konvertiert.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS mit Beispielen, siehe [Verwendung von CSS typisierter Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung zum Berechnen von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen von Farbkanälen in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Die Kanalwerte lösen sich zu `<number>` Werten auf](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies gewährleistet, dass die Textgröße skaliert wird, wenn die Seite gezoomt wird.

- [MDN Verständnis der WCAG, Leitlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4: Text vergrößern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Positionieren eines Objekts auf dem Bildschirm mit einem Abstand

`calc()` ermöglicht das Positionieren eines Objekts mit einem festgelegten Abstand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem 40-Pixel-Abstand zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatisches Skalieren von Formularfeldern, um in ihr Container zu passen

Ein weiterer Anwendungsfall für `calc()` ist, um sicherzustellen, dass Formularfelder in den verfügbaren Platz passen, ohne über den Rand ihres Containers hinauszuragen, während ein geeigneter Rand beibehalten wird.

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

Hier wird das Formular so festgelegt, dass es 1/6 der verfügbaren Fensterbreite nutzt. Um sicherzustellen, dass Eingabefelder eine geeignete Größe beibehalten, wird `calc()` verwendet, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollten. Dann verwendet das folgende HTML dieses CSS:

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

Nachdem alle Variablen erweitert wurden, wird der Wert von `--width-c` `calc(calc(100px / 2) / 2)` sein. Wenn dieser der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (egal wie tief verschachtelt) auf nur noch Klammern reduziert. Daher wird der Wert der `width`-Eigenschaft letztendlich `calc((100px / 2) / 2)` sein, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassen von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne dass die Speicherung von Farbkanalwerten als Variablen erforderlich ist.

Im folgenden Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
In den nachfolgenden Absätzen wird `calc()` zusammen mit den [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Funktionen verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel, wie die `calc()`-Funktion zur Ableitung relativer Farben verwendet wird, siehe den Abschnitt [Verwendung von mathematischen Funktionen](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Eine vollständige Anleitung zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
