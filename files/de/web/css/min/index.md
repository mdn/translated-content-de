---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, den kleinsten (bzw. negativsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft zu definieren. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im ersten obigen Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn das Viewport weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert zu verringern, um kleinere Viewports anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter an, wobei der kleinste (bzw. negativste) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), literale Werte oder andere Ausdrücke sein, wie z. B. {{CSSxRef("attr", "attr()")}}, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn dies erforderlich ist.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festgelegten Layout-Tabellen enthalten, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu verwenden.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, gemäß den Standardregeln für die Operatorenreihenfolge. Stellen Sie sicher, dass Sie auf beiden Seiten der + und - Operanden einen Leerraum lassen. Die Operanden im Ausdruck können jeden `<length>` Syntaxwert haben.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden müssen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße zu setzen, stellen Sie sicher, dass die Schriftart immer noch mindestens 200% für die Lesbarkeit skaliert werden kann (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Understanding WCAG, Leitfaden 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Setzen einer maximalen Größe bei responsiven Formularelementen: Dadurch können die Breiten von Labels und Eingabefeldern verkleinert werden, wenn die Breite des Formulars abnimmt.

Werfen wir einen Blick auf einige CSS:

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

Hier wird das Formular selbst, zusammen mit Rand, Rahmen und Auffüllung, 100% der Breite seines übergeordneten Elements sein. Wir deklarieren, dass das Eingabefeld und das Label entweder 40% der Formularbreite ausfüllen oder bis zu 400px breit sein können, je nachdem, welches kleiner ist. Mit anderen Worten, die größte Breite, die das Label und Eingabefeld haben können, ist 400px. Die kleinste Breite beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
