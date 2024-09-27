---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`calc()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, Berechnungen beim Festlegen von CSS-Eigenschaften vorzunehmen. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}}-Werten verwendet werden.

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

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

Die `calc()`-Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die [Operanden](/de/docs/Glossary/operand) mit den unten aufgeführten [Operatoren](/de/docs/Glossary/operator) kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operator-Präzedenzregeln](/de/docs/Learn/JavaScript/First_steps/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer solchen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheit wie `px`, `em` oder `%` versehen sein. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Es ist auch möglich, Klammern zu verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn dies erforderlich ist.

## Beschreibung

Einige Punkte sind bei der Verwendung von `calc()` zu beachten:

- Die Serialisierung der Argumente innerhalb von `calc()` folgt dem IEEE-754-Standard für Fließkommaberechnungen, was bedeutet, dass es einige Fälle gibt, auf die Sie bei den Konstanten `infinity` und `NaN` achten müssen. Weitere Informationen zur Serialisierung von Konstanten finden Sie auf der Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layouttabellen beinhalten, _könnten_ so behandelt werden, als sei `auto` angegeben.

- Die `calc()`-Funktion kann den numerischen Wert für Prozentangaben nicht direkt ersetzen; `calc(100 / 4)%` ist beispielsweise ungültig, während `calc(100% / 4)` gültig ist.

- Wenn `calc()` dort verwendet wird, wo ein {{cssxref("&lt;integer&gt;")}} erwartet wird, wird der Wert auf die nächste ganze Zahl gerundet. So ergibt `calc(1.4)` einen Wert von `1`. Wenn der Nachkommaanteil des Wertes genau `0.5` beträgt, wird der Wert aufgerundet. Zum Beispiel ergibt `calc(1.5)` einen Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

### Regeln und bewährte Praktiken bei der Verwendung von `calc()`

- Die `+` und `-` Operatoren **müssen von [Leerzeichen](/de/docs/Glossary/whitespace) umgeben sein**. Zum Beispiel wird `calc(50% -8px)` als "ein Prozentsatz gefolgt von einer negativen Länge" geparst – was ein ungültiger Ausdruck ist – während `calc(50% - 8px)` als "ein Prozentsatz gefolgt von einem Subtraktionsoperator und einer Länge" angesehen wird. Ebenso wird `calc(8px + -50%)` als "eine Länge gefolgt von einem Additionsoperator und einem negativen Prozentsatz" behandelt.
- Die `*` und `/` Operatoren benötigen keine Leerzeichen, aber es wird empfohlen, sie zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()`-Funktionen zu schachteln, wobei die inneren wie einfache Klammern behandelt werden.
- Für Längen können Sie `0` nicht als `0px` (oder eine andere Längeneinheit) verwenden; stattdessen müssen Sie die Version mit der Einheit verwenden: `margin-top: calc(0px + 20px);` ist gültig, während `margin-top: calc(0 + 20px);` ungültig ist.
- Aktuelle Implementierungen erfordern, dass für die `*` und `/` Operatoren einer der Operanden einheitenlos sein muss. Für `/` muss der rechte Operand einheitenlos sein. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` ungültig.

### Unterstützung zur Berechnung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen von Farbkanälen in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die Syntax für relative Farben definiert eine Reihe von Farbkanal-Schlüsselwörtern, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte zu `<number>`-Werten auflösen](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies gewährleistet, dass die Textgröße skaliert wird, wenn die Seite gezoomt wird.

- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriterium 1.4.4 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` vereinfacht die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das gesamte Fenster erstreckt und einen 40-Pixel-Abstand zwischen beiden Seiten des Banners und den Rändern des Fensters aufweist:

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

### Automatische Anpassung von Formularfeldern an ihren Container

Ein weiterer Anwendungsfall für `calc()` ist die Sicherstellung, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszugehen, während ein angemessener Rand beibehalten wird.

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

Hier wird das Formular so festgelegt, dass es 1/6 der verfügbaren Fensterbreite nutzt. Um sicherzustellen, dass Eingabefelder eine angemessene Größe behalten, verwenden wir `calc()` erneut, um festzulegen, dass sie die Breite ihres Containers minus 1em betragen. Dann verwendet der folgende HTML-Code dieses CSS:

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
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

Nachdem alle Variablen erweitert wurden, ist der Wert von `widthC` `calc(calc(100px / 2) / 2)`. Wenn er der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (egal wie tief verschachtelt) auf einfache Klammern reduziert. Daher wird der Wert der `width`-Eigenschaft schließlich `calc((100px / 2) / 2)` sein, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne die Werte der Farbkanäle als Variablen speichern zu müssen.

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

Ein weiteres Beispiel für die Verwendung der `calc()`-Funktion zur Ableitung relativer Farben finden Sie im Abschnitt [Verwendung mathematischer Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions)
- [Eine vollständige Anleitung zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
