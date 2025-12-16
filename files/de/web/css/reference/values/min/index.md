---
title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den kleinsten (negativsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()` Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im obigen ersten Beispiel wird die Breite höchstens 200px betragen, ist aber kleiner, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, sodass 50vw 200px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Höchstwert für die Eigenschaft festzulegen, und eine relative Einheit, damit der Wert schrumpfen kann, um kleinere Ansichtsfenster zu berücksichtigen.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die `min()` Funktion nimmt einen oder mehrere kommagetrennte Ausdrücke als ihren Parameter, wobei das kleinste (negativste) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), literale Werte oder andere Ausdrücke wie {{cssxref("attr()")}} sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können, falls gewünscht, unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um bei Bedarf die Berechnungsreihenfolge festzulegen.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatisierten als auch festen Layout-Tabellen umfassen, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()` Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division nutzen können, ohne die `calc()` Funktion selbst zu verwenden.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, und Standardregeln zur Operatorverarbeitung. Stellen Sie sicher, dass auf jeder Seite der + und - Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können jeden `<length>` Syntaxwert annehmen.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden müssen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftgröße weiterhin mindestens 200% vergrößert werden kann, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für reaktive Formularelemente: Damit können die Breiten von Labels und Eingabefeldern schrumpfen, während die Breite des Formulars abnimmt.

Lassen Sie uns einige CSS anschauen:

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

Hierbei wird das Formular selbst zusammen mit dem Rand, der Umrandung und dem Innenabstand 100% der Breite seines Elternteils ausmachen. Wir deklarieren, dass die Eingabe und das Label kleiner sind als 40% der Formularbreite bis zum Innenabstand oder 400px breit, je nachdem, welches kleiner ist. Mit anderen Worten: Die größte Breite, die das Label und die Eingabe haben können, beträgt 400px. Die kleinste Breite beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
