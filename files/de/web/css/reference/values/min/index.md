---
title: "`min()` CSS-Funktion"
short-title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: 11c522da37b7469cbce26bbe220936aec1d372d0
---

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den kleinsten (am wenigsten negativen) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()` Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

{{InteractiveExample("CSS Demo: min()")}}

```css interactive-example-choice
width: min(50vw, 200px);
```

```css interactive-example-choice
width: min(100vw, 4000px);
```

```css interactive-example-choice
width: min(150vw, 100px);
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

Im ersten oben genannten Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn der Ansichtsbereich weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen maximalen Wert für die Eigenschaft festzulegen, und eine relative Einheit, um zu ermöglichen, dass sich der Wert an kleinere Ansichtsbereiche anpasst.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die `min()` Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der kleinste (am wenigsten negative) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{cssxref("attr()")}} sein, die sich zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können, wenn gewünscht, verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellen-Spaltengruppen, Tabellenzeilen, Tabellen-Zeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()` Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()` Funktion selbst durchführen können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) verwenden, wobei normale Regeln der Operatorpriorität gelten. Stellen Sie sicher, dass Sie auf jeder Seite der `+` und `-` Operanden ein Leerzeichen setzen.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schrift zur Lesbarkeit noch mindestens um 200% vergrößert werden kann (ohne unterstützende Technologien wie eine Zoom-Funktion).

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  [Understanding Success Criterion 1.4.4: Textgröße ändern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsive Formularelemente: Ermöglichen, dass die Breite von Labels und Eingabefeldern mit der Breite des Formulars schrumpft.

Schauen wir uns etwas CSS an:

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Hierbei wird das Formular selbst, zusammen mit dem Rand, Rahmen und der Polsterung, 100% der Breite seines Elternteils einnehmen. Wir erklären das Eingabefeld und das Label als den kleineren Wert von 40% der Formularbreite bis zur Polsterung oder 400px breit, je nachdem, was kleiner ist. Mit anderen Worten, die größte Breite, die Label und Eingabefeld haben können, ist 400px. Die kleinste Breite, die sie haben werden, ist 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

```html
<form>
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc" />
</form>
```

{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- {{cssxref("clamp()")}}
- {{cssxref("max()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
