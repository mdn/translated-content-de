---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, Berechnungen durchzuführen, wenn Sie CSS-Werte angeben. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

## Syntax

```css
/* calc(expression) */
calc(100% - 80px)

/* Ausdruck mit einer CSS-Funktion */
calc(100px * sin(pi / 2))

/* Ausdruck, der eine Variable enthält */
calc(var(--hue) + 180)

/* Ausdruck mit Farbkanälen in relativen Farben */
lch(from aquamarine l c calc(h + 180))
```

Die Funktion `calc()` nimmt einen einzigen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die Standard- [Operatorvorrangregeln](/de/docs/Learn/JavaScript/First_steps/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Teilt den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer denjenigen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem geeigneten Einheitstring wie `px`, `em` oder `%` versehen werden. Sie können in Ihrem Ausdruck für jeden Operanden eine andere Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen bei Bedarf festzulegen.

## Beschreibung

Einige Punkte, die Sie bei `calc()` beachten sollten:

- Die Serialisierung der Argumente innerhalb von `calc()` folgt dem IEEE-754-Standard für Gleitkommamathematik, was bedeutet, dass es einige Fälle gibt, die beachtet werden müssen, die die Konstanten `unendlich` und `NaN` betreffen.
  Weitere Details zur Serialisierung von Konstanten finden Sie auf der Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalzengruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenelementen in sowohl automatischem als auch festem Layout enthalten, _könnten_ so behandelt werden, als ob `auto` angegeben ist.

- Die `calc()`-Funktion kann den numerischen Wert für Prozentsatztypen nicht direkt ersetzen; zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

- Wenn `calc()` verwendet wird, wo ein {{cssxref("&lt;integer&gt;")}} erwartet wird, wird der Wert auf die nächste ganze Zahl gerundet. So führt `calc(1.4)` zu einem Wert von `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert aufgerundet. Zum Beispiel führt `calc(1.5)` zu einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

### Regeln und bewährte Praktiken bei der Verwendung von `calc()`

- Die Operatoren `+` und `-` **müssen von {{Glossary("whitespace", "Leerzeichen")}} umgeben sein**. Zum Beispiel wird `calc(50% -8px)` als "ein Prozentsatz gefolgt von einer negativen Länge" geparst — was ein ungültiger Ausdruck ist — während `calc(50% - 8px)` "ein Prozentsatz gefolgt von einem Subtraktionsoperator und einer Länge" ist. Ebenso wird `calc(8px + -50%)` als "eine Länge gefolgt von einem Additionsoperator und einem negativen Prozentsatz" behandelt.
- Die Operatoren `*` und `/` benötigen keine Leerzeichen, aber es wird empfohlen, sie aus Gründen der Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Für Längen können Sie nicht `0` verwenden, um `0px` (oder eine andere Längeneinheit) auszudrücken; stattdessen müssen Sie die Version mit der Einheit verwenden: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist.
- Aktuelle Implementierungen erfordern, dass für die Operatoren `*` und `/` einer der Operanden keine Einheit hat. Für `/` muss der rechte Operand keine Einheit haben. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` ist ungültig.

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen. Dies erlaubt dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert eine Reihe von Farbkanal-Schlüsselwörtern, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte lösen sich in `<number>`-Werte auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel: `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass die Textgröße skaliert wird, wenn die Seite vergrößert wird.

- [MDN Versteht WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` erleichtert die Positionierung eines Objekts mit einem bestimmten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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
<div class="banner">Dies ist ein Banner!</div>
```

{{EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', 'auto', '60')}}

### Automatische Größenanpassung von Formularelementen an ihren Container

Ein weiterer Anwendungsfall für `calc()` ist die Sicherstellung, dass Formularelemente in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszuragen, und gleichzeitig einen angemessenen Rand beibehalten.

Sehen wir uns einige CSS an:

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

Hier wird das Formular so eingerichtet, dass es 1/6 der verfügbaren Fensterbreite nutzt. Um sicherzustellen, dass die Eingabefelder eine angemessene Größe beibehalten, verwenden wir `calc()` erneut, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollen. Dann nutzt das folgende HTML diese CSS:

```html
<form>
  <div id="form-box">
    <label for="misc">Geben Sie etwas ein:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### Verschachtelung mit CSS-Variablen

Sie können `calc()` mit [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables) verwenden. Betrachten Sie den folgenden Code:

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

Nach der Erweiterung aller Variablen wird der Wert von `widthC` `calc(calc(100px / 2) / 2)` sein. Wenn es der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (egal wie tief verschachtelt) zu einfachen Klammern reduziert. Daher wird der Wert der Eigenschaft `width` schließlich `calc((100px / 2) / 2)` sein, was `25px` ergibt. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne dass die Farbkanalwerte als Variablen gespeichert werden müssen.

Im folgenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color).
In den folgenden Absätzen wird `calc()` zusammen mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwendet, um die Werte der jeweiligen Farbkanäle relativ zur ursprünglichen benannten Farbe anzupassen.

```html
<p class="original">Originale Textfarbe in Rebeccapurple</p>
<p class="increase-hue">Farbton um 80 erhöht</p>
<p class="increase-lightness">Helligkeit um 20 erhöht</p>
<p class="decrease-lightness">Helligkeit um 10 verringert</p>
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

Ein weiteres Beispiel für die Verwendung der `calc()`-Funktion zur Ableitung relativer Farben finden Sie im Abschnitt [Verwendung von mathematischen Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwendung von relativen Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions)
- [Ein vollständiger Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
