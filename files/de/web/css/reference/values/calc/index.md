---
title: CSS-Funktion `calc()`
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Mit der **`calc()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) können Sie Berechnungen durchführen, wenn Sie Werte für CSS-Eigenschaften angeben. Sie kann mit Werten der Typen {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} und {{cssxref("color_value", "&lt;color-function&gt;")}} verwendet werden.

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

Die Funktion `calc()` nimmt einen einzelnen Ausdruck als Parameter entgegen. Das Ergebnis dieses Ausdrucks wird als Wert für eine CSS-Eigenschaft verwendet. Innerhalb des Ausdrucks können die {{Glossary("operand", "Operanden")}} mit den unten aufgeführten {{Glossary("operator", "Operatoren")}} kombiniert werden. Enthält der Ausdruck mehrere Operanden, wendet `calc()` die üblichen [Regeln für die Operatorrangfolge](/de/docs/Learn_web_development/Core/Scripting/Math#operator_precedence) an:

- `+`
  - : Addiert die angegebenen Operanden.
- `-`
  - : Subtrahiert den zweiten Operanden vom ersten.
- `*`
  - : Multipliziert die angegebenen Operanden.
- `/`
  - : Dividiert den linken Operanden (Dividend) durch den rechten Operanden (Divisor).

Alle Operanden außer denen vom Typ {{cssxref("&lt;number&gt;")}} müssen eine passende Einheit wie `px`, `em` oder `%` haben. Sie können für jeden Operanden in Ihrem Ausdruck eine andere Einheit verwenden. Bei Bedarf können Sie auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen.

## Beschreibung

Bei `calc()` sind einige Punkte zu beachten, die in den folgenden Abschnitten erläutert werden.

### Ergebniswerte

Die Funktion `calc()` muss einen vollständigen CSS-Wert eines der folgenden Typen ersetzen:

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

`calc()` kann nicht nur den numerischen Teil eines Prozentwerts, Längenwerts usw. ersetzen, ohne auch die darauffolgende Einheit zu ersetzen. Beispielsweise ist `calc(100 / 4)%` ungültig, während `calc(100% / 4)` gültig ist.

Der Ergebniswert von `calc()` muss zum Kontext passen, in dem er verwendet wird. Beispielsweise ist `margin: calc(1px + 2px)` gültig, `margin: calc(1 + 2)` dagegen nicht: Letzteres entspricht `margin: 3`, wodurch die Eigenschaft ignoriert wird.

Wenn ein {{cssxref("&lt;integer&gt;")}} erwartet wird, darf der `calc()`-Ausdruck auch einen `<number>` ergeben, der auf die nächste Ganzzahl gerundet wird. Somit ergibt `calc(1.4)` den Wert `1`. Beträgt der Nachkommateil des Werts genau `0.5`, wird in Richtung positiv unendlich gerundet. Beispielsweise ergibt `calc(1.5)` den Wert `2`, während `calc(-1.5)` auf `-1` gerundet wird.

`calc()` führt Gleitkommaberechnungen gemäß dem IEEE-754-Standard durch. Daraus ergeben sich einige Besonderheiten für die Werte `infinity` und `NaN`. Weitere Informationen zur Serialisierung von Konstanten finden Sie auf der Seite zu {{cssxref("calc-keyword")}}.

### Hinweise zu Eingabewerten

- `calc()` kann keine Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} wie {{cssxref("width#auto", "auto")}} und {{cssxref("fit-content")}} durchführen. Verwenden Sie stattdessen die Funktion {{cssxref("calc-size()")}}.
- Die Operatoren `*` und `/` erfordern keine Leerzeichen. Aus Gründen der Einheitlichkeit wird jedoch empfohlen, Leerzeichen zu verwenden.
- `calc()`-Funktionen dürfen ineinander verschachtelt werden. Die inneren Funktionen werden dabei wie einfache Klammern behandelt.
- Mathematische Ausdrücke mit Prozentwerten für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen können sowohl in Tabellen mit automatischem als auch mit festem Layout _so behandelt werden, als wäre_ `auto` angegeben.
- Weitere Informationen zur Syntax von Ausdrücken mit `+` und `-` finden Sie unter {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}.

### CSS-Arithmetik mit typisierten Werten

Wenn Sie mit `calc()` und dem Operator `*` Werte multiplizieren, darf nur einer der Werte eine Einheit haben. Berechnungen wie `200px * 4px` werden nicht unterstützt, da 800px<sup>2</sup> in CSS keine Bedeutung hat.

Dagegen ergibt `200px / 4px` den Wert `50`, was in CSS sinnvoll ist. Wenn Sie mit der Funktion `calc()` und dem Operator `/` Werte dividieren, erlauben [unterstützende Browser](#browser-kompatibilität) daher Einheiten auf beiden Seiten des Operators, sofern sie denselben Datentyp haben. Beispielsweise ist `100vw / 1px` gültig und ergibt einen Wert ohne Einheit.

Der Quotient kann anschließend als Wert für Eigenschaften oder als Parameter für Funktionen verwendet werden, die einen {{cssxref("number")}} akzeptieren. Alternativ lässt er sich durch Multiplikation mit einem typisierten Wert in einen anderen Datentyp umwandeln.

Eine ausführliche Erklärung der Arithmetik mit typisierten Werten in CSS samt Beispielen finden Sie unter [CSS-Arithmetik mit typisierten Werten verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Berechnung von Farbkanälen in relativen Farben

Mit der Funktion `calc()` lassen sich Farbkanäle direkt innerhalb [relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) verändern. Dadurch können Farbkanäle in Farbmodellen wie [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) und [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) dynamisch angepasst werden.

Die Syntax für relative Farben definiert mehrere Schlüsselwörter für Farbkanäle. Jedes davon repräsentiert den Wert eines Farbkanals als {{cssxref("&lt;number&gt;")}} (weitere Informationen finden Sie unter [Kanalwerte werden zu `<number>`-Werten aufgelöst](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#channel_values_resolve_to_number_values)). Die Funktion `calc()` kann diese Schlüsselwörter verwenden, um Farbkanäle dynamisch anzupassen, beispielsweise mit `calc(r + 10)`.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Wenn Sie `calc()` zur Steuerung der Textgröße verwenden, achten Sie darauf, dass einer der Werte eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) enthält, zum Beispiel:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

So wird sichergestellt, dass die Textgröße beim Zoomen der Seite mitskaliert.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.4 verstehen: Textgröße ändern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Ein Objekt mit einem Abstand auf dem Bildschirm positionieren

Mit `calc()` können Sie ein Objekt mit einem festgelegten Abstand positionieren. In diesem Beispiel erzeugt das CSS ein Banner, das sich über das Fenster erstreckt. Zwischen beiden Seiten des Banners und den Fensterrändern bleibt jeweils ein Abstand von 40 Pixeln:

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

### Formularfelder automatisch an ihren Container anpassen

Ein weiterer Anwendungsfall für `calc()` ist, sicherzustellen, dass Formularfelder in den verfügbaren Platz passen. Dabei behalten sie einen angemessenen Abstand zum Rand ihres Containers bei, ohne über diesen hinauszuragen.

Betrachten wir dazu etwas CSS:

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

Hier wird festgelegt, dass der Container 1/6 der verfügbaren Fensterbreite einnimmt. Damit die Eingabefelder eine passende Größe behalten, verwenden wir erneut `calc()`: Ihre Breite soll der Breite des Containers minus 1em entsprechen. Das folgende HTML verwendet dieses CSS:

```html
<div id="form-box">
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc" />
</div>
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

Nachdem alle Variablen aufgelöst wurden, hat `--width-c` den Wert `calc(calc(100px / 2) / 2)`. Wird dieser Wert der Eigenschaft `width` von `.foo` zugewiesen, werden alle inneren `calc()`-Funktionen – unabhängig von der Verschachtelungstiefe – zu einfachen Klammern reduziert. Der Wert der Eigenschaft `width` lautet schließlich `calc((100px / 2) / 2)`, was `25px` entspricht. Kurz gesagt: Ein `calc()` innerhalb eines anderen `calc()` ist gleichbedeutend mit der Verwendung von Klammern.

### Farbkanäle in relativen Farben anpassen

Mit der Funktion `calc()` können Sie einzelne Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) anpassen, ohne die Werte der Farbkanäle als Variablen speichern zu müssen.

Im folgenden Beispiel verwendet der erste Absatz eine {{cssxref("named-color")}}.
In den nachfolgenden Absätzen wird `calc()` zusammen mit den Funktionen [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) und [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet, um die Werte der einzelnen Farbkanäle relativ zur ursprünglich benannten Farbe anzupassen.

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

Ein weiteres Beispiel dafür, wie sich mit der Funktion `calc()` relative Farben ableiten lassen, finden Sie im Abschnitt [Mathematische Funktionen verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) auf der Seite _Relative Farben verwenden_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
- [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [Ein umfassender Leitfaden zu calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
