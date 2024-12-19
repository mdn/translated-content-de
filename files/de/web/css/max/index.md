---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, aber breiter sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wären 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert entsprechend größeren Viewports wachsen zu lassen.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere kommagetrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die sich zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{CSSxRef("min", "min()")}} und `max()`-Funktionen.

Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung bei Bedarf festzulegen.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layou-Tabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben wurde.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die Funktion `calc()` selbst verwenden zu müssen.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Verwendung der Standardregeln für die Operatorenreihenfolge. Achten Sie darauf, auf jeder Seite der + und - Operanden einen Abstand zu lassen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug ist, um ihn zu lesen. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb eines `max()` zu verschachteln, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt sicher, dass eine Mindestgröße von _1rem_ erreicht wird, wobei die Textgröße skaliert, wenn die Seite vergrößert wird.

- [MDN Verstehen von WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, eine Schriftgröße wachsen zu lassen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um responsive Schriftgrößen bei gleichzeitiger Lesbarkeit zu ermöglichen.

Sehen wir uns einige CSS-Beispiele an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rems betragen, oder doppelt so groß wie die Standardgröße der Schriftart für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Stellen Sie sich die `max()`-Funktion so vor, dass sie den minimal zulässigen Wert für eine Eigenschaft findet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
