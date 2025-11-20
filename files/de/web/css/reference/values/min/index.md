---
title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: 0d53570dc316db106e63a6e7bd18b5072d85b35a
---

Die **`min()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erlaubt es Ihnen, den kleinsten (negativsten) Wert aus einer Liste von durch Kommata getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn der Viewport weniger als 400px breit ist (in diesem Fall wären 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert so zu verringern, dass er zu kleineren Viewports passt.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt ein oder mehrere durch Kommata getrennte Ausdrücke als Parameter, wobei das kleinste (negativste) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), literale Werte oder andere Ausdrücke, wie {{CSSxRef("attr", "attr()")}}, sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können, wenn gewünscht, unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen bei Tabellenspalten, Tabellenkolonnengruppen, Tabellenreihen, Tabellengruppen und Tabellenzellen in sowohl automatisierten als auch festen Layouttabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu schachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()`-Funktion selbst nutzen können.
- Der Ausdruck kann Werte beinhalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren und die Standardprioritätsregeln für Operatoren verwenden. Stellen Sie sicher, dass auf jeder Seite der + und - Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert haben.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schrift mindestens 200% für eine bessere Lesbarkeit skaliert werden kann (ohne unterstützende Technologien wie eine Zoom-Funktion).

- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriterium 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für reaktionsfähige Formularelemente: Dadurch können die Breite von Labels und Eingabefeldern schrumpfen, wenn die Breite des Formulars kleiner wird.

Sehen wir uns etwas CSS an:

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

Hier wird das Formular selbst zusammen mit dem Abstand, dem Rahmen und der Polsterung 100% der Breite des übergeordneten Elements haben. Wir deklarieren das Eingabefeld und das Label als den kleineren Wert zwischen 40% der Formularbreite bis zur Polsterung oder 400px Breite, je nachdem, welcher kleiner ist. Mit anderen Worten, die größte Breite, die das Label und das Eingabefeld erreichen können, beträgt 400px. Die kleinste Breite, die sie haben werden, beträgt 40% der Formularbreite, die auf einem Smartwatch-Bildschirm sehr klein ist.

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

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
