---
title: "`calc()` CSS-Funktion"
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: dc4a0e708bed278ea7794eaef5ea83ed368b409f
---

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht Berechnungen bei der Angabe von CSS-Eigenschaftswerten. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}}, und {{cssxref("color_value", "&lt;color-function&gt;")}}-Werten verwendet werden.

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

Die `calc()`-Funktion nimmt einen einzelnen Ausdruck als Parameter und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die Standard-[Operatorpräzedenzregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem entsprechenden Einheitensuffix wie `px`, `em` oder `%` versehen sein. Sie können in Ihrem Ausdruck bei jedem Operanden unterschiedliche Einheiten verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

## Beschreibung

Es gibt einige Punkte, die Sie über `calc()` beachten sollten, die in den unten stehenden Abschnitten näher erläutert werden.

### Ergebnende Werte

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

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die nachfolgende Einheit zu ersetzen. Beispielsweise ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Beispielsweise ist `margin: calc(1px + 2px)` gültig, jedoch `margin: calc(1 + 2)` nicht: Dies entspricht der Angabe von `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste ganze Zahl gerundet wird. Somit wird `calc(1.4)` einen Wert von `1` ergeben. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert zur positiven Unendlichkeit gerundet. Beispielsweise wird `calc(1.5)` zu einem Wert von `2` führen, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkommamathematik gemäß dem IEEE-754-Standard aus, was einige Überlegungen zu den Werten `infinity` und `NaN` mit sich bringt. Für weitere Einzelheiten zur Serialisierung von Konstanten siehe die Seite {{cssxref("calc-keyword")}}.

### Eingabebedingungen

- `calc()` kann keine Berechnungen bei {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die Operatoren `*` und `/` erfordern keine Leerzeichen, aber es wird empfohlen, sie zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Mathematische Ausdrücke, die Prozentangaben für Breiten und Höhen bei Tabellen-Spalten, Tabellen-Spaltengruppen, Tabellen-Zeilen, Tabellen-Zeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben wäre.
- Weitere Informationen zur Syntax von `+` und `-` Ausdrücken finden Sie unter {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}.

### CSS-typisierte Arithmetik

Wenn Sie `calc()` verwenden, um Werte mit dem `*`-Operator zu multiplizieren, darf nur ein Wert eine Einheit enthalten. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keinen Sinn ergibt.

Umgekehrt löst sich `200px / 4px` zu `50` auf, was in CSS sinnvoll ist. Daher erlauben [unterstützende Browser](#browser-kompatibilität), wenn Sie die `calc()`-Funktion verwenden, um Zahlen mit dem `/`-Operator zu dividieren, Einheiten auf beiden Seiten des Operanden, vorausgesetzt, sie sind vom gleichen Datentyp. Beispielsweise ist `100vw / 1px` gültig und ergibt einen einheitenlosen Wert.

Der Quotient kann dann in Wertangaben von Eigenschaften oder Funktionen verwendet werden, die ein {{cssxref("number")}} als Wert oder Parameter akzeptieren, oder in einen anderen Datentyp umgewandelt werden, indem er mit einem typisierten Wert multipliziert wird.

Für eine vollständige Erklärung der typisierten Arithmetik in CSS, einschließlich Beispielen, siehe [Verwendung von CSS-typisierter Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl), und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (weitere Informationen siehe [Channel values resolve to `<number>` values](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values)). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, z. B. `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, sollten Sie sicherstellen, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) umfasst, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße beim Zoomen der Seite skaliert wird.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4: Resize Text | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` ermöglicht die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt und auf beiden Seiten einen Abstand von 40 Pixeln zwischen dem Banner und den Fensterrändern hat:

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

### Automatische Größenanpassung von Formularfeldern, um in ihren Container zu passen

Ein weiterer Anwendungsfall für `calc()` ist die Sicherstellung, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszugehen, und dabei einen angemessenen Rand beibehalten.

Schauen wir uns einige CSS-Einstellungen an:

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

Hier wird das Formular selbst auf 1/6 der verfügbaren Fensterbreite festgelegt. Um sicherzustellen, dass Eingabefelder eine angemessene Größe beibehalten, verwenden wir `calc()` erneut, um festzulegen, dass sie die Breite ihres Containers abzüglich 1em haben sollen. Dann nutzt das folgende HTML dieses CSS:

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

Nachdem alle Variablen erweitert sind, wird der Wert von `--width-c` `calc(calc(100px / 2) / 2)` sein. Wenn er der Breiten-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (unabhängig davon, wie tief verschachtelt sie sind) zu einfachen Klammern abgeflacht. Daher wird der Wert der `width`-Eigenschaft schließlich `calc((100px / 2) / 2)` sein, was `25px` entspricht. Kurz gesagt: Ein `calc()` in einem `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um individuelle Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anzupassen, ohne dass die Farbkanalwerte als Variablen gespeichert werden müssen.

Im unteren Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
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

Für ein weiteres Beispiel zur Verwendung der `calc()`-Funktion, um relative Farben abzuleiten, siehe den Abschnitt [Using math functions](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Using relative colors_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
