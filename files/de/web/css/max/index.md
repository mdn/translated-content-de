---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den größten (am positivsten) Wert aus einer Liste von komma-getrennten Ausdrücken als Wert einer CSS-Eigenschaft zu setzen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, aber breiter sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wäre 1vw 20px, sodass 20vw 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an größere Viewports anpassen zu lassen.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere komma-getrennte Ausdrücke als Parameter, wobei der größte (am positivsten) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}), oder verschachtelte {{CSSxRef("min", "min()")}} und `max()`-Funktionen.

Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Berechnungsreihenfolge bei Bedarf festzulegen.

### Hinweise

- Mathematische Ausdrücke mit Prozentangaben für Breiten und Höhen bei Tabellen-Spalten, Tabellen-Spaltengruppen, Tabellen-Zeilen, Tabellen-Zeilengruppen und Tabellen-Zellen in sowohl automatischen als auch festgelegten Layout-Tabellen _könnten_ so behandelt werden, als wäre `auto` angegeben.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind volle mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()`-Funktion selbst nutzen können.
- Der Ausdruck kann Werte enthalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, wobei die Standardregeln für die Operatorrangfolge gelten. Stellen Sie sicher, dass Sie auf jeder Seite der + und - Operanden ein Leerzeichen setzen. Die Operanden im Ausdruck können jedem \<length>-Syntaxwert entsprechen.
- Sie können (und müssen häufig) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug ist, um gelesen zu werden. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb eines `max()` zu verschachteln, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug ist, um gelesen zu werden. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die skaliert, wenn die Seite vergrößert wird.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist das Ermöglichen, dass eine Schriftgröße wächst, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um reaktionsfähige Schriftgrößen zu ermöglichen und die Lesbarkeit zu gewährleisten.

Betrachten wir etwas CSS:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße beträgt mindestens 2rems oder das Doppelte der Standardschriftgröße der Seite. Dies stellt sicher, dass sie lesbar und barrierefrei ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion als eine Möglichkeit, den minimal erlaubten Wert für eine Eigenschaft zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
