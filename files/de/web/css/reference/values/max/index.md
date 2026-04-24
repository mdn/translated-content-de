---
title: "`max()` CSS-Funktion"
short-title: max()
slug: Web/CSS/Reference/Values/max
l10n:
  sourceCommit: 6857a53b4ef756a062310b555e61f2ec722a2441
---

Die **`max()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im ersten Beispiel oben wird die Breite mindestens 400px betragen, ist aber breiter, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wäre 1vw gleich 20px, sodass 20vw gleich 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert je nach größerem Viewport wachsen zu lassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()`-Funktion nimmt ein oder mehrere kommagetrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), Literalwerte oder andere Ausdrücke, wie {{cssxref("attr()")}}, sein, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) ausgewertet werden, oder verschachtelte {{cssxref("min()")}}- und `max()`-Funktionen.

Sie können für jeden Wert in Ihrem Ausdruck verschiedene Einheiten verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, falls erforderlich.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, daher können Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst verwenden.
- Der Ausdruck kann Werte umfassen, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der Standardregeln der Operatorpräzedenz. Achten Sie darauf, auf jeder Seite der + und - Operanden einen Leerraum zu setzen. Die Operanden im Ausdruck können jeder \<length>-Syntaxwert sein.
- Sie können (und oft müssen) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Ein Vorschlag ist, die {{cssxref("min()")}}-Funktion innerhalb einer `max()` zu verschachteln, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) hat, die immer groß genug ist, um gelesen werden zu können. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die skaliert wird, wenn die Seite gezoomt wird.

- [MDN-Verständnis von WCAG, Erklärung zur Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  [Verständnis des Erfolgskriteriums 1.4.4: Text vergrößern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist, eine Schriftgröße wachsen zu lassen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um anpassungsfähige Schriftgrößen zu ermöglichen und gleichzeitig die Lesbarkeit zu gewährleisten.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße beträgt mindestens 2rems oder das Doppelte der Standardschriftgröße der Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion als die Suche nach dem minimal erlaubten Wert für eine Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("min()")}}
- [Erlernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
