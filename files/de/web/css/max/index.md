---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, aber sie wird breiter, wenn der Ansichtsfenster mehr als 2000px breit ist (in diesem Fall wären 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert so zu gestalten, dass er auf größere Ansichtsfenster skaliert.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der Eigenschaft verwendet wird, der sie zugewiesen ist.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{CSSxRef("min", "min()")}} und `max()` Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Berechnungsreihenfolge festzulegen, wenn dies erforderlich ist.

### Hinweis

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, -spaltengruppen, -zeilen, -zeilengruppen und -zellen in sowohl automatischen als auch festen Layout-Tabellen umfassen, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist gestattet, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte beinhalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der Standardvorrangregeln der Operatoren. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden \<length> Syntaxwert aufweisen.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Eine Empfehlung ist, die {{CSSxRef("min", "min()")}} Funktion innerhalb einer `max()`, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug zum Lesen ist, zu verschachteln. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies gewährleistet eine Mindestgröße von _1rem_, mit einer Textgröße, die skaliert, wenn die Seite gezoomt wird.

- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiteres Anwendungsbeispiel für `max()` ist, eine Schriftgröße zuzulassen, die wächst, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um reaktionsschnelle Schriftgrößen unter Beibehaltung der Lesbarkeit zu ermöglichen.

Schauen wir uns einige CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rem betragen, also doppelt so groß wie die Standardgröße der Schriftart für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion als Möglichkeit, den minimal zulässigen Wert für eine Eigenschaft zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
