---
title: calc()
slug: Web/CSS/calc
l10n:
  sourceCommit: 73349b0441acc8e32cd435b94ab4bd4c4bb9ee18
---

{{CSSRef}}

Die **`calc()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht die Durchführung von Berechnungen bei der Spezifikation von CSS-Werteigenschaften. Sie kann mit {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} Werten verwendet werden.

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

Die `calc()` Funktion nimmt einen einzelnen Ausdruck als Parameter, dessen Ergebnis als Wert einer CSS-Eigenschaft verwendet wird. In diesem Ausdruck können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Bei mehreren Operanden innerhalb des Ausdrucks folgt `calc()` den standardmäßigen [Prioritätsregeln für Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence):

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten Operanden.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Teilt den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden, ausgenommen die vom Typ {{cssxref("&lt;number&gt;")}}, müssen mit einer geeigneten Einheit, wie `px`, `em` oder `%`, versehen sein. Unterschiedliche Einheiten können in einem Ausdruck verwendet werden. Ebenso ist es möglich, Klammern zu nutzen, um die Reihenfolge der Berechnung festzulegen.

## Beschreibung

Es gibt einige wichtige Punkte zu `calc()`, die in den folgenden Abschnitten näher erläutert werden.

### Resultierende Werte

Die `calc()` Funktion muss einen vollständigen CSS-Wert eines der folgenden Typen darstellen:

- {{cssxref("&lt;length&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;integer&gt;")}}
- Einen gemischten Typ wie {{cssxref("&lt;length-percentage&gt;")}}

`calc()` kann nicht nur den numerischen Teil von Prozentwerten, Längeneinheiten, usw. ersetzen, ohne auch die dahinterstehende Einheit zu ersetzen. Zum Beispiel ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der resultierende Wert von `calc()` muss mit dem Kontext kompatibel sein, in dem er verwendet wird. Zum Beispiel ist `margin: calc(1px + 2px)` gültig, jedoch nicht `margin: calc(1 + 2)`: Letzteres entspricht der Angabe von `margin: 3`, welche dazu führt, dass die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, kann sich der `calc()`-Ausdruck auch zu einem `<number>` auswerten, der auf die nächste ganze Zahl gerundet wird. Somit ergibt `calc(1.4)` einen Wert von `1`. Wenn der Bruchteil genau `0.5` beträgt, wird der Wert auf die nächsthöhere Zahl aufgerundet. Zum Beispiel wird `calc(1.5)` zu `2`, während `calc(-1.5)` zu `-1` wird.

`calc()` führt Gleitkommaberechnungen gemäß dem IEEE-754-Standard aus, was Überlegungen bezüglich der Werte `infinity` und `NaN` mit sich bringt. Weitere Details dazu, wie Konstanten serialisiert werden, finden Sie auf der Seite [`calc-keyword`](/de/docs/Web/CSS/calc-keyword).

### Eingabebedingungen

- `calc()` kann keine Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die {{cssxref("calc-size()")}} Funktion.
- Die Operatoren `*` und `/` erfordern keine Leerzeichen, es wird jedoch empfohlen, diese aus Gründen der Konsistenz hinzuzufügen.
- Es ist erlaubt, `calc()` Funktionen zu schachteln, wobei innere Funktionen wie einfache Klammern behandelt werden.
- Aktuelle Implementierungen fordern, dass bei Verwendung der Operatoren `*` und `/` einer der Operanden einheitenlos sein muss. Für `/` muss der rechte Operand einheitenlos sein. Zum Beispiel ist `font-size: calc(1.25rem / 1.25)` gültig, aber `font-size: calc(1.25rem / 125%)` ist ungültig.
- Mathematikausdrücke mit Prozentwerten für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in auto- und fixed-Layout-Tabellen _können_ so behandelt werden, als sei `auto` angegeben.
- Weitere Informationen zur Syntax von `+` und `-` Ausdrücken finden Sie unter {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}.

### Unterstützung für die Berechnung von Farbkanälen in relativen Farben

Die `calc()` Funktion kann verwendet werden, um Farbkanäle direkt im Kontext von [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen. Damit können Farbkanäle dynamisch in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/color_value/lch) verändert werden.

Die relative Farbsyntax definiert mehrere Farbkanal-Schlüsselwörter, von denen jedes den Wert des Farbkanals als {{cssxref("&lt;number&gt;")}} darstellt (siehe [Kanalwerte lösen sich zu `<number>`-Werten auf](/de/docs/Web/CSS/CSS_colors/Relative_colors#channel_values_resolve_to_number_values) für weitere Informationen). Mit der `calc()` Funktion können diese Farbkanal-Schlüsselwörter genutzt werden, um dynamische Anpassungen vorzunehmen, z. B. `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn `calc()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) beinhaltet, beispielsweise:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies gewährleistet, dass sich die Textgröße bei Vergrößerung der Seite anpasst.

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Positionierung eines Objekts auf dem Bildschirm mit einem Abstand

`calc()` erleichtert die Positionierung eines Objekts mit einem festgelegten Abstand. In diesem Beispiel erstreckt sich das Banner über das gesamte Fenster, mit einem Abstand von 40 Pixeln zwischen beiden Seiten des Banners und den Fensterrändern:

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

Ein weiterer Anwendungsfall von `calc()` ist die Sicherstellung, dass Formularfelder in den verfügbaren Platz passen, ohne über die Ränder ihres Containers hinauszugehen, während ein angemessener Abstand beibehalten wird.

Ein Beispiel für CSS:

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

Hier wird das Formular selbst auf 1/6 der verfügbaren Fensterbreite gesetzt. Um sicherzustellen, dass Eingabefelder eine angemessene Größe beibehalten, verwenden wir erneut `calc()`, um festzulegen, dass sie die Breite ihres Containers minus 1em einnehmen sollen. Anschließend wird dieser CSS-Code in folgender HTML-Struktur verwendet:

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

Nach der vollständigen Auflösung aller Variablen hat `widthC` den Wert `calc(calc(100px / 2) / 2)`. Wenn dieser Wert der `width`-Eigenschaft von `.foo` zugewiesen wird, werden alle inneren `calc()` Funktionen (egal wie tief geschachtelt) auf einfache Klammern reduziert. Schließlich ergibt der Wert der `width`-Eigenschaft `calc((100px / 2) / 2)`, was 25px entspricht. Kurz gesagt, eine `calc()` innerhalb einer `calc()` ist identisch mit der Verwendung von Klammern.

### Anpassung der Farbkanäle in relativen Farben

Die `calc()` Funktion kann benutzt werden, um einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors) anzupassen, ohne dass Farbkanalwerte als Variablen gespeichert werden müssen.

Im unten stehenden Beispiel verwendet der erste Absatz eine [`<named-color>`](/de/docs/Web/CSS/named-color). In den folgenden Absätzen wird `calc()` zusammen mit den Funktionen [`rgb()`](/de/docs/Web/CSS/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/color_value/hsl) verwendet, um die Werte der einzelnen Farbkanäle relativ zur ursprünglichen benannten Farbe anzupassen.

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

Weitere Beispiele für die Verwendung der `calc()` Funktion zur Ableitung relativer Farben finden Sie im Abschnitt [Using math functions](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) auf der Seite _Using relative colors_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions)
- [Ein umfassender Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
