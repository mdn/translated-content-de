---
title: "`min()` CSS-Funktion"
short-title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`min()`**- [CSS-](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den kleinsten (am meisten negativen) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort eingesetzt werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im obigen ersten Beispiel wird die Breite höchstens 200px betragen, aber sie wird kleiner sein, wenn der Viewport weniger als 400px breit ist (in diesem Fall wären 1vw 4px, daher wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an kleinere Viewports anzupassen.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt einen oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der kleinste (am meisten negative) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), literale Werte oder andere Ausdrücke sein, wie z.B. {{cssxref("attr()")}}, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten.

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn erforderlich.

### Hinweise

- Mathematische Ausdrücke mit Prozentangaben für Breiten und Höhen bei Tabellen-Spalten, Tabellen-Spaltengruppen, Tabellen-Zeilen, Tabellen-Zeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie Addition, Subtraktion, Multiplikation und Division direkt verwenden können, ohne die `calc()`-Funktion selbst zu benutzen.
- Der Ausdruck kann Werte kombinieren, die die Addition (+), die Subtraktion (-), die Multiplikation (\*) und die Division (/) Operatoren verwenden, unter Verwendung standardmäßiger Operatorvorrangregeln. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert sein.
- Sie können (und müssen oft) `min()` und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente bereitstellen, wenn Sie mehrere Beschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schrift noch mindestens 200% für die Lesbarkeit skaliert werden kann (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Verständnis der WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und eine Eingabe

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsive Formularsteuerungen: Dadurch können sich die Breiten von Labels und Eingaben verkleinern, wenn die Breite des Formulars schrumpft.

Werfen wir einen Blick auf einige CSS-Beispiele:

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

Hier sind das Formular selbst zusammen mit dem Rand, der Rahmen und das Padding 100% der Breite des übergeordneten Elements. Wir deklarieren, dass das Eingabefeld und das Label zu höchstens 40% der Formularbreite bis zu Padding oder 400px breit sind, je nachdem, welches kleiner ist. Mit anderen Worten, die größte Breite, die das Label und das Eingabefeld erreichen können, ist 400px. Die kleinste Breite beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
