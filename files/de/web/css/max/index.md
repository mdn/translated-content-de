---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`max()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

Im obigen ersten Beispiel wird die Breite mindestens 400px betragen, kann aber größer sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wäre 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen und eine relative Einheit, um den Wert an größere Viewports anzupassen.

## Syntax

Die `max()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der größte (positivste) Ausdruckswert als Wert der zugewiesenen Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mithilfe von Rechenoperatoren), literale Werte oder andere Ausdrücke sein, wie {{CSSxRef("attr", "attr()")}}, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{CSSxRef("min", "min()")}}- und `max()`-Funktionen.

Sie können für jeden Wert in Ihrem Ausdruck verschiedene Einheiten verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke mit Prozentangaben für Breiten und Höhen in Tabellenspalten, Tabellen-Spaltengruppen, Tabellenzeilen, Tabellen-Zeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `min()`- und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, so dass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der Funktion calc() selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Rechenoperatoren Addition (+), Subtraktion (-), Multiplikation (\*) und Division (/) verwenden, unter Verwendung der Standardregeln der Operatorpräzedenz. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und sollten oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug ist, um gelesen zu werden. Eine Empfehlung ist, die {{CSSxRef("min", "min()")}}-Funktion, verschachtelt innerhalb einer `max()`, zu verwenden, die als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug ist, um gelesen zu werden. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies gewährleistet eine Mindestgröße von _1rem_, mit einer Textgröße, die skaliert wird, wenn die Seite vergrößert wird.

- [MDN Verständnis der WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` besteht darin, eine Schriftgröße zu ermöglichen, die wächst, während sie sicherstellt, dass es mindestens eine Mindestgröße gibt, um reaktionsfähige Schriftgrößen zu ermöglichen, die gut lesbar sind.

Betrachten Sie folgendes CSS:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße beträgt mindestens 2rems oder das Zweifache der Standardgröße der Schriftart für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>Dieser Text ist immer lesbar, ändert jedoch nicht seine Größe</h1>
<h1 class="responsive">
  Dieser Text ist immer lesbar und passt sich bis zu einem gewissen Punkt an
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion als die Findung des Mindestwertes, der für eine Eigenschaft erlaubt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
