---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im ersten Beispiel, das oben gezeigt wird, beträgt die Breite mindestens 400px, wird aber breiter, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wäre 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an größere Viewports anzupassen.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdrückswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), literale Werte oder andere Ausdrücke sein, wie z.B. {{CSSxRef("attr", "attr()")}}, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) ausgewertet werden, oder verschachtelte {{CSSxRef("min", "min()")}} und `max()`-Funktionen.

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn dies erforderlich ist.

### Anmerkungen

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenspaltenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _könnten_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist zulässig, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu verwenden.
- Der Ausdruck kann Werte sein, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der Standard-Operator-Vorrangregeln. Stellen Sie sicher, dass Sie auf beiden Seiten der + und - Operanden ein Leerzeichen setzen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und müssen oft) `min()` und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()` oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zum Steuern der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb eines `max()` zu verwenden, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die sich anpasst, wenn die Seite gezoomt wird.

- [MDN Erklärung der WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.4 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, eine Schriftgröße zu ermöglichen, die wächst, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, wodurch die Schrifttypen reaktionsfähig und lesbar bleiben.

Betrachten wir ein wenig CSS:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rem sein, oder das Doppelte der Standardgröße der Schriftart für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion, wie Sie den minimal erlaubten Wert für eine Eigenschaft findet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
