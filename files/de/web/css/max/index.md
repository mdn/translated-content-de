---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den größten (am meisten positiven) Wert aus einer Liste von durch Komma getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im ersten Beispiel, das oben gezeigt wird, wird die Breite mindestens 400px betragen, kann aber breiter sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wären 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an größere Viewports anpassen zu können.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (am meisten positive) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Werte oder andere Ausdrücke, wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) ausgewertet werden, oder verschachtelte {{CSSxRef("min", "min()")}}- und `max()`-Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn dies erforderlich ist.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatisch als auch fest layouteten Tabellen enthalten, _können_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst nutzen können.
- Der Ausdruck kann Werte enthalten, die Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) Operatoren kombinieren, unter Verwendung der Standardregeln für die Operatorpriorität. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden \<length> Syntaxwert sein.
- Sie können (und oft müssen) `min()` und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb einer `max()` zu verschachteln, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die skaliert wird, wenn die Seite gezoomt wird.

- [MDN Verständniss WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegung einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist, eine Schriftgröße wachsen zu lassen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um reaktionsfähige Schriftgrößen zu ermöglichen und zugleich die Lesbarkeit sicherzustellen.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rem betragen, oder das Doppelte der Standardschriftgröße der Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Betrachten Sie die `max()`-Funktion als das Finden des minimal erlaubten Wertes für eine Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Erlernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
