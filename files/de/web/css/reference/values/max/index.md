---
title: "`max()` CSS-Funktion"
short-title: max()
slug: Web/CSS/Reference/Values/max
l10n:
  sourceCommit: 11c522da37b7469cbce26bbe220936aec1d372d0
---

Die **`max()`**-Funktion von [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommata getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, aber größer sein, wenn das Ansichtsfenster mehr als 2000px breit ist (in diesem Fall wären 1vw 20px, sodass 20vw 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an größere Ansichtsfenster anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), literale Werte oder andere Ausdrücke, wie {{cssxref("attr()")}}, sein, die sich zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{cssxref("min()")}}- und `max()`-Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern zur Festlegung der Rechenreihenfolge verwenden, wenn dies erforderlich ist.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu nutzen.
- Der Ausdruck kann Werte beinhalten, die die Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) Operatoren kombinieren, unter Anwendung der Standardregeln für Operatorvorrang. Achten Sie darauf, auf jeder Seite der `+`- und `-`-Operanden ein Leerzeichen einzufügen.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Ein Vorschlag ist, die {{cssxref("min()")}}-Funktion innerhalb eines `max()` zu verwenden, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies gewährleistet eine Mindestgröße von _1rem_, mit einer Textgröße, die sich vergrößert, wenn die Seite gezoomt wird.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  [Understanding Success Criterion 1.4.4: Resize Text | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, eine Schriftgröße wachsen zu lassen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um anpassungsfähige Schriftgrößen zu ermöglichen und gleichzeitig die Lesbarkeit zu gewährleisten.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rems betragen, also das Doppelte der Standardschriftgröße der Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Betrachten Sie die `max()`-Funktion als Suche nach dem minimal erlaubten Wert für eine Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
