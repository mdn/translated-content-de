---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen bei der Angabe von CSS-Eigenschaftswerten durchzuführen. Sie kann mit Werten vom Typ {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} verwendet werden.

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

Die `calc()`-Funktion nimmt einen einzigen Ausdruck als Parameter, und das Ergebnis des Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} unter Verwendung der unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die Standard-[Operatorvorrangsregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operand von dem ersten Operand.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operand (Dividend) durch den rechten Operand (Divisor).

Alle Operanden, außer solche vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einem geeigneten Einheitenstring wie `px`, `em` oder `%` versehen sein. Sie können in Ihrem Ausdruck für jeden Operand eine andere Einheit verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

## Beschreibung

Es gibt einige Punkte zu beachten bei `calc()`, die in den unten aufgeführten Abschnitten detailliert sind.

### Resultierende Werte

Die `calc()`-Funktion muss als vollständiger CSS-Wert eines der folgenden Typen stehen:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Einer der gemischten Typen, wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längenwerten usw. ersetzen, ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext, in dem er verwendet wird, kompatibel sein. Zum Beispiel, `margin: calc(1px + 2px)` ist gültig, aber `margin: calc(1 + 2)` nicht: es ist gleichbedeutend mit der Angabe von `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()`-Ausdruck auch zu einem `<number>` ausgewertet werden, welcher auf die nächste ganze Zahl gerundet wird. So resultiert `calc(1.4)` in einem Wert von `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert zur positiven Unendlichkeit gerundet. Zum Beispiel resultiert `calc(1.5)` in einem Wert von `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Fließkommazahlenarithmetik nach dem IEEE-754 Standard durch, was einige Überlegungen bezüglich der `infinity`- und `NaN`-Werte mit sich bringt. Für weitere Details, wie Konstanten serialisiert werden, siehe die Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

### Eingabebedingungen

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die `*`- und `/`-Operatoren erfordern keinen Leerraum, aber das Hinzufügen ist zur Konsistenz empfohlen.
- Es ist erlaubt, `calc()`-Funktionen zu verschachteln, in welchem Fall die inneren als einfache Klammern behandelt werden.
- Aktuelle Implementierungen erfordern, dass bei Verwendung der `*`- und `/`-Operatoren einer der Operanden einheitenlos ist. Für `/` muss der rechte Operand einheitenlos sein. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` ungültig.
- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layouttabellen umfassen, _können_ behandelt werden, als ob `auto` angegeben ist.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen über die Syntax von `+`- und `-`-Ausdrücken.

### Unterstützung zur Berechnung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen. Dies ermöglicht dynamische Anpassungen der Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte lösen sich in `<number>`-Werte auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()`-Funktion kann diese Farbkanal-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbkanälen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, achten Sie darauf, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) beinhaltet, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass sich die Textgröße skaliert, wenn die Seite vergrößert wird.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Rand

`calc()` erleichtert die Positionierung eines Objekts mit einem festgelegten Rand. In diesem Beispiel erstellt das CSS ein Banner, das sich über das Fenster erstreckt, mit einem 40-Pixel-Abstand zwischen beiden Seiten des Banners und den Kanten des Fensters:

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

Ein weiterer Anwendungsfall für `calc()` ist die Unterstützung, um sicherzustellen, dass Formularfelder in den verfügbaren Raum passen, ohne über den Rand ihres Containers hinauszuragen, und dabei einen angemessenen Rand beibehalten.

Werfen wir einen Blick auf etwas CSS:

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

Hier wird das Formular so eingerichtet, dass es 1/6 der verfügbaren Fensterbreite nutzt. Dann wird erneut `calc()` verwendet, um sicherzustellen, dass Eingabefelder eine geeignete Größe behalten sollen, indem sie die Breite ihres Containers minus 1em betragen. Dann macht das folgende HTML Gebrauch von diesem CSS:

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

Nachdem alle Variablen expandiert sind, wird der Wert von `widthC` `calc(calc(100px / 2) / 2)` sein. Wenn er der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()`-Funktionen (unabhängig davon, wie tief sie verschachtelt sind) einfach in Klammern abgeflacht. Daher wird der Wert der `width`-Eigenschaft letztendlich `calc((100px / 2) / 2)` sein, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbkanälen in relativen Farben

Die `calc()`-Funktion kann verwendet werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne dass es nötig ist, Farbkanalwerte als Variablen zu speichern.

Im folgenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color).
In den darauf folgenden Absätzen wird `calc()` mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwendet, um die Werte jedes Farbkanals relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel der Verwendung der `calc()`-Funktion, um relative Farben abzuleiten, siehe den Abschnitt [Verwendung von mathematischen Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwendung relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Eine vollständige Anleitung zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
