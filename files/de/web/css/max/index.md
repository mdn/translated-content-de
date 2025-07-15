---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`max()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den größten (am positivsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort eingesetzt werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, aber breiter sein, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wäre 1vw 20px, sodass 20vw 400px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Mindestwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert wachsen zu lassen, damit er größere Viewports berücksichtigt.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()`-Funktion nimmt einen oder mehrere kommagetrennte Ausdrücke als Parameter, wobei der größte (am positivsten) Ausdruckswert als Wert der zugeordneten Eigenschaft verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Literale oder andere Ausdrücke sein, wie {{CSSxRef("attr", "attr()")}}, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) ausgewertet werden, oder geschachtelte {{CSSxRef("min", "min()")}} und `max()` Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentwerte für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl auto- als auch festgelegten Layout-Tabellen umfassen, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu schachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden und den Standardregelungen für Operatorvorrang folgen. Achten Sie darauf, auf jeder Seite der Operanden + und - ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug zum Lesen ist. Es wird empfohlen, die {{CSSxRef("min", "min()")}}-Funktion innerhalb einer `max()`-Funktion zu verschachteln, die als zweiter Wert eine [relativ Längeinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug ist, um gelesen zu werden. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, wobei die Textgröße skaliert, wenn die Seite gezoomt wird.

- [MDN Verständnis von WCAG, Leitlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` ist es, eine Schriftgröße zu ermöglichen, die wächst und gleichzeitig sicherzustellen, dass sie mindestens eine Mindestgröße hat, was responsive Schriftgrößen ermöglicht und Lesbarkeit sicherstellt.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rems betragen oder doppelt so groß wie die Standardgröße der Schriftart für die Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Betrachten Sie die `max()`-Funktion als eine Funktion, die den minimal erlaubten Wert für eine Eigenschaft findet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
