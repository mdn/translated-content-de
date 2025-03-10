---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht Berechnungen bei der Angabe von CSS-Werten. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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
  border: 10px solid #000;
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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter, und das Ergebnis dieses Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Wenn der Ausdruck mehrere Operanden enthält, verwendet `calc()` die standardmäßigen [Operatorvorrangregeln](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Teilt den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, außer denen vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheit versehen werden, wie `px`, `em` oder `%`. Sie können für jeden Operanden in Ihrem Ausdruck unterschiedliche Einheiten verwenden. Es ist auch möglich, Klammern zu verwenden, um die Reihenfolge der Berechnung festzulegen, wenn dies erforderlich ist.

## Beschreibung

Es gibt einige Punkte zu beachten bei `calc()`, die in den folgenden Abschnitten detailliert behandelt werden.

### Ergebniswerte

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

`calc()` kann nicht nur den nummerischen Teil von Prozentwerten, Längenwerten etc. ersetzen, ohne auch die Einheit danach zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, aber `margin: calc(1 + 2)` nicht: es ist gleichbedeutend mit der Angabe von `margin: 3`, was dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann der `calc()` Ausdruck auch zu einem `<number>` ausgewertet werden, der auf die nächste ganze Zahl gerundet wird. So ergibt `calc(1.4)` den Wert `1`. Wenn der Bruchteil des Wertes genau `0.5` ist, wird der Wert aufgerundet. Zum Beispiel ergibt `calc(1.5)` den Wert `2`, während `calc(-1.5)` zu `-1` gerundet wird.

`calc()` führt Gleitkomma-Mathematik nach dem IEEE-754-Standard aus, was einige Überlegungen zu den Werten `infinity` und `NaN` beinhaltet. Für weitere Details zur Serialisierung von Konstanten siehe die [`calc-keyword`](/de/docs/Web/CSS/calc-keyword) Seite.

### Eingangserwägungen

- `calc()` kann keine Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsische Größenwerte")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die `*` und `/` Operatoren erfordern keinen Leerraum, aber es wird empfohlen, ihn zur Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu verschachteln, wobei die inneren als einfache Klammern behandelt werden.
- Aktuelle Implementierungen erfordern, dass bei der Verwendung der `*` und `/` Operatoren einer der Operanden ohne Einheit sein muss. Für `/` muss der rechte Operand ohne Einheit sein. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` nicht.
- Mathematische Ausdrücke, die Prozentzahlen für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ behandelt werden, als wäre `auto` angegeben.
- Siehe {{cssxref("calc-sum", "&lt;calc-sum&gt;")}} für weitere Informationen zur Syntax von `+` und `-` Ausdrücken.

### Unterstützung zum Berechnen von Farbelementen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbelemente direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) zu manipulieren. Dies ermöglicht dynamische Anpassungen der Farbelemente in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch).

Die relative Farbsyntax definiert mehrere Farbelement-Schlüsselwörter, von denen jedes den Wert des Farbelements als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte lösen sich zu `<number>` Werten auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Die `calc()` Funktion kann diese Farbelement-Schlüsselwörter verwenden, um dynamische Anpassungen an den Farbelementen vorzunehmen, zum Beispiel `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) beinhaltet, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies stellt sicher, dass sich die Textgröße anpasst, wenn die Seite gezoomt wird.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionieren eines Objekts auf dem Bildschirm mit einem Abstand

`calc()` macht es einfach, ein Objekt mit einem festgelegten Abstand zu positionieren. In diesem Beispiel erstreckt sich das CSS-Banner über das gesamte Fenster, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Rändern des Fensters:

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

Ein weiterer Anwendungsfall für `calc()` ist die Sicherstellung, dass Formularfelder in den verfügbaren Platz passen, ohne über die Kante ihres Containers hinauszuragen und dabei einen geeigneten Abstand beizubehalten.

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

Hier wird das Formular so festgelegt, dass es 1/6 der verfügbaren Fensterbreite nutzt. Um sicherzustellen, dass die Eingabefelder eine geeignete Größe behalten, verwenden wir erneut `calc()`, um festzulegen, dass sie die Breite ihres Containers minus 1em haben sollen. Dann wird das folgende HTML für dieses CSS verwendet:

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

Nachdem alle Variablen expandiert sind, wird der Wert von `widthC` `calc(calc(100px / 2) / 2)` sein. Wenn er der `width` Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (egal wie tief verschachtelt) zu einfachen Klammern reduziert. Daher wird der Wert der `width` Eigenschaft schließlich `calc((100px / 2) / 2)` sein, was `25px` entspricht. Kurz gesagt, ein `calc()` innerhalb eines `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung von Farbelementen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um einzelne Farbelemente in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne die Farbelementwerte als Variablen speichern zu müssen.

Im untenstehenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color).
In den folgenden Absätzen wird `calc()` mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwendet, um die Werte jedes Farbelements relativ zur ursprünglichen benannten Farbe anzupassen.

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

Für ein weiteres Beispiel zur Verwendung der `calc()` Funktion zur Ermittlung relativer Farben siehe den Abschnitt [Verwenden von mathematischen Funktionen](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Verwenden relativer Farben_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
