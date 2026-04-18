---
title: "`max()` CSS-Funktion"
short-title: max()
slug: Web/CSS/Reference/Values/max
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im ersten Beispiel oben wird die Breite mindestens 400px betragen, kann aber breiter sein, wenn das Ansichtsfenster mehr als 2000px breit ist (in diesem Fall wäre 1vw gleich 20px, sodass 20vw 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an größere Ansichtsfenster anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mithilfe arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{cssxref("attr()")}} sein, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{cssxref("min()")}} und `max()`-Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Rechenreihenfolge festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentangaben für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen sowohl in automatischen als auch festen Layout-Tabellen enthalten, _könnten_ als würden sie `auto` verwenden, behandelt werden.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der calc()-Funktion selbst möglich sind.
- Der Ausdruck kann Werte enthalten, die die Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) Operatoren kombinieren, unter Anwendung der Standard-Regeln für Operator-Prioritäten. Achten Sie darauf, auf beiden Seiten der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck dürfen jeden \<length> Syntax-Wert haben.
- Sie können (und oft müssen) `min()` und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()` oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Eine Empfehlung ist, die {{cssxref("min()")}}-Funktion innerhalb einer `max()`-Funktion zu verwenden, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies gewährleistet eine Mindestgröße von _1rem_, wobei die Textgröße skalierbar ist, wenn die Seite gezoomt wird.

- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, einer Schriftgröße zu erlauben zu wachsen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, was es ermöglicht, responsive Schriftgrößen zu haben, während die Lesbarkeit gewährleistet bleibt.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rem betragen, also das Doppelte der Standardschriftgröße für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Betrachten Sie die `max()`-Funktion als Finden des minimalen Wertes, der für eine Eigenschaft erlaubt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
