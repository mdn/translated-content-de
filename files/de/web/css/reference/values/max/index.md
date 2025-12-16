---
title: max()
slug: Web/CSS/Reference/Values/max
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste kommagetrennter Ausdrücke als Wert einer CSS-Eigenschaft festzulegen. Die `max()` Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{InteractiveExample("CSS Demo: max()")}}

```css interactive-example-choice
width: max(20vw, 400px);
```

```css interactive-example-choice
width: max(20vw, 100px);
```

```css interactive-example-choice
width: max(5vw, 100px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <img
      alt="Firefox logo"
      class="logo"
      src="/shared-assets/images/examples/firefox-logo.svg" />
  </div>
</section>
```

Im ersten Beispiel, das oben gezeigt wird, beträgt die Breite mindestens 400px, kann jedoch breiter sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wären 1vw gleich 20px, sodass 20vw 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Minimalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an größere Viewports anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()` Funktion nimmt einen oder mehrere kommagetrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), wörtliche Werte oder andere Ausdrücke sein, wie {{cssxref("attr()")}}, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{cssxref("min()")}} und `max()` Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, falls erforderlich.

### Hinweise

- Mathematische Ausdrücke unter Einbeziehung von Prozentzahlen für Breiten und Höhen von Tabellenspalten, Tabellenkantengruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen _können_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `min()` und andere `max()` Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der calc() Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) Operatoren verwenden, wobei die Standardregeln zur Operatorpräzedenz gelten. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können Werte im \<length> Syntax-Stil sein.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `max()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Ein Vorschlag ist, die {{cssxref("min()")}} Funktion innerhalb einer `max()` Funktion zu verwenden, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die skaliert, wenn die Seite vergrößert wird.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, eine Schriftgröße wachsen zu lassen und gleichzeitig sicherzustellen, dass sie mindestens eine Mindestgröße hat, was es ermöglicht, dass Schriftgrößen anpassungsfähig sind und die Lesbarkeit gewährleistet bleibt.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rems betragen, oder das Doppelte der Standardschriftgröße der Seite. Dies gewährleistet, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()` Funktion als eine Methode, den minimalen erlaubten Wert für eine Eigenschaft zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
