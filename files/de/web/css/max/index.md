---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, kann aber größer sein, wenn das Ansichtsfenster mehr als 2000px breit ist (in diesem Fall würde 1vw 20px und 20vw 400px entsprechen). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an größere Ansichtsfenster anzupassen.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), Literalwerte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}}, die sich in einen gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{CSSxRef("min", "min()")}} und `max()`-Funktionen sein.

Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie dürfen auch Klammern verwenden, um die Berechnungsreihenfolge bei Bedarf festzulegen.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen enthalten, können _möglicherweise_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist zulässig, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der calc()-Funktion selbst verwenden können.
- Der Ausdruck kann Werte sein, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der standardmäßigen Operatorvorfahrensregeln. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und oft müssen) `min()` und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()` oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug ist, um gelesen zu werden. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb eines `max()` zu verschachteln, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug zum Lesen ist. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die sich skaliert, wenn die Seite gezoomt wird.

- [MDN Understanding WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` besteht darin, eine Schriftgröße wachsen zu lassen, während gleichzeitig sichergestellt wird, dass sie mindestens eine Mindestgröße erreicht, um reaktionsfähige Schriftgrößen zu ermöglichen, die dennoch lesbar sind.

Betrachten wir etwas CSS:

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

Betrachten Sie die `max()`-Funktion als das Finden des minimal zulässigen Werts für eine Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
