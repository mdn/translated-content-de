---
title: max()
slug: Web/CSS/max
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`max()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, den größten (positivsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `max()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im ersten oben gezeigten Beispiel wird die Breite mindestens 400px betragen, kann aber breiter werden, wenn der Viewport mehr als 2000px breit ist (in diesem Fall wären 1vw 20px, also wären 20vw 400px). Diese Technik verwendet eine absolute Maßeinheit, um einen festen Mindestwert für die Eigenschaft zu definieren, und eine relative Einheit, um den Wert an größere Viewports anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `max()`-Funktion nimmt einen oder mehrere durch Komma getrennte Ausdrücke als Parameter. Der größte (positivste) Ausdruckswert wird als Wert der zugewiesenen Eigenschaft verwendet.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Literalwerte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die sich zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten, oder verschachtelte {{CSSxRef("min", "min()")}}- und `max()`-Funktionen.

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenzellen sowohl in automatischen als auch festen Layout-Tabellen enthalten, _können_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist zulässig, `min()` und andere `max()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Anwendung der Standardregeln für Operatorpräzedenz. Stellen Sie sicher, dass Sie auf beiden Seiten der + und - Operanden ein Leerzeichen setzen. Die Operanden im Ausdruck können jeden \<length>-Syntaxwert haben.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `max()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `max()` zur Steuerung der Textgröße verwendet wird, stellen Sie sicher, dass der Text immer groß genug ist, um gelesen zu werden. Ein Vorschlag ist, die {{CSSxRef("min", "min()")}}-Funktion innerhalb eines `max()` zu verwenden, das als zweiten Wert eine [relative Längeneinheit](/de/docs/Web/CSS/length#relative_length_units) hat, die immer groß genug ist, um gelesen zu werden. Zum Beispiel:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

Dies stellt eine Mindestgröße von _1rem_ sicher, mit einer Textgröße, die skaliert, wenn die Seite gezoomt wird.

- [MDN Verständnis WCAG, Erklärung des Leitfadens 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer Mindestgröße für eine Schriftart

Ein weiterer Anwendungsfall für `max()` besteht darin, eine Schriftgröße anwachsen zu lassen, während sichergestellt wird, dass sie mindestens eine Mindestgröße hat, um responsive Schriftgrößen zu ermöglichen, die gut lesbar bleiben.

Schauen wir uns etwas CSS an:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

Die Schriftgröße wird mindestens 2rems betragen oder das Doppelte der Standardschriftgröße der Seite. Dies stellt sicher, dass sie lesbar und zugänglich ist.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Denken Sie an die `max()`-Funktion als Mittel, um den minimal zugelassenen Wert für eine Eigenschaft zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
