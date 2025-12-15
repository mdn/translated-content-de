---
title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, Berechnungen bei der Spezifikation von CSS-Eigenschaften durchzuführen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die Standard-[Vorrangregeln für Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linksseitigen Operanden (Dividende) durch den rechtsseitigen Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer entsprechenden Einheit, wie `px`, `em` oder `%`, versehen sein. Es kann für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwendet werden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn notwendig.

## Beschreibung

Es gibt einige Punkte bezüglich `calc()`, die in den folgenden Abschnitten näher erläutert werden.

### Ergebniswerte

Die `calc()` Funktion muss anstelle eines kompletten CSS-Wertes eines der folgenden Typen stehen:

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

Der errechnete Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: es ist gleichwertig mit der Angabe `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch einen `<number>` ergeben, der auf die nächstgelegene ganze Zahl gerundet wird. Somit wird `calc(1.4)` zu einem Wert von `1`. Wenn der Bruchteil genau `0.5` beträgt, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel resultiert `calc(1.5)` in einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Fließkomma-Arithmetik gemäß dem IEEE-754-Standard durch, was einige Überlegungen hinsichtlich der Werte `infinity` und `NaN` mit sich bringt. Für weitere Details zur Serialisierung von Konstanten siehe die Seite [`calc-keyword`](/de/docs/Web/CSS/Reference/Values/calc-keyword).

### Überlegungen zu Eingaben

- `calc()` kann keine Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die `*` und `/` Operatoren erfordern keinen Leerraum, aber es wird empfohlen, Leerraum für Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben wäre.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### CSS-typisierte Arithmetik

Bei der Verwendung von `calc()` zum Multiplizieren von Werten unter Verwendung des `*` Operators kann nur ein Wert eine Einheit beinhalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS bedeutungslos ist.

Im Gegensatz dazu ergibt `200px / 4px` `50`, was in CSS Sinn ergibt. Daher ermöglichen [unterstützte Browser](#browser-kompatibilität) bei der Verwendung der `calc()` Funktion zum Dividieren von Zahlen unter Verwendung des `/` Operators Einheiten auf beiden Seiten des Operanden, sofern sie vom selben Datentyp sind. Zum Beispiel ist `100vw / 1px` gültig und ergibt einen einheitenlosen Wert.

Der Quotient kann dann in den Werten von Eigenschaften oder Funktionen verwendet werden, die ein {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder durch Multiplizieren mit einem typisierten Wert in einen anderen Datentyp umgewandelt werden.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS sowie Beispiele siehe [Using CSS typed arithmetic](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann direkt zum Manipulieren von Farbkanälen im Kontext von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) verwendet werden. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die Syntax für relative Farben definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Channel values resolve to `<number>` values](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values) für mehr Informationen). Die `calc()` Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formaler Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Schriftgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) beinhaltet, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Schriftgröße skaliert wird, wenn die Seite gezoomt wird.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` ermöglicht die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

### Automatische Größenanpassung von Formularelementen zum Passendmachen in ihrem Container

Ein weiterer Anwendungsfall für `calc()` ist, um sicherzustellen, dass Formularelemente in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszuwachsen und gleichzeitig einen passenden Rand beizubehalten.

Betrachten wir folgendes CSS:

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

Hierbei wird im Formular selbst festgelegt, dass es 1/6 der verfügbaren Fensterbreite nutzt. Dann, um sicherzustellen, dass die Eingabefelder eine angemessene Größe beibehalten, verwenden wir erneut `calc()`, um festzustellen, dass sie die Breite ihres Containers minus 1em haben sollten. Dann nutzt das folgende HTML dieses CSS:

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

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) verwenden. Betrachten Sie folgenden Code:

```css
.foo {
  --width-a: 100px;
  --width-b: calc(var(--width-a) / 2);
  --width-c: calc(var(--width-b) / 2);
  width: var(--width-c);
}
```

Nachdem alle Variablen erweitert wurden, wird der Wert von `--width-c` als `calc(calc(100px / 2) / 2)` dargestellt. Wenn es der Breiten-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (unabhängig davon, wie tief verschachtelt) auf nur umschließende Klammern reduziert. Somit wird der Wert der `width` Eigenschaft letztendlich `calc((100px / 2) / 2)`, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassen von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne dass die Farbkanalwerte als Variablen gespeichert werden müssen.

Im untenstehenden Beispiel wird in dem ersten Absatz eine [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) verwendet. In den folgenden Absätzen wird `calc()` mit den [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Funktionen verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

{{EmbedLiveSample('Adjusting_color_channels_in_relative_colors', '700', '300')}}

Für ein weiteres Beispiel zur Verwendung der `calc()` Funktion zur Ableitung relativer Farben siehe den Abschnitt [Mathematische Funktionen verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
