---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den kleinsten (am meisten negativen) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft zu setzen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wären 1vw 4px, sodass 50vw 200px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um zu ermöglichen, dass der Wert an kleinere Ansichtsfenster angepasst werden kann.

## Syntax

Die `min()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der kleinste (am meisten negative) Ausdruck als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), Literale oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentwerte für Breiten und Höhen bei Tabellenspalten, Tabellenspalten-Gruppen, Tabellenreihen, Tabellenreihen-Gruppen und Tabellenzellen in sowohl Auto- als auch Festlayout-Tabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu verwenden.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Verwendung der standardmäßigen Regeln zur Präzedenz der Operatoren. Stellen Sie sicher, dass Sie auf beiden Seiten der + und - Operanden einen Leerraum lassen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert sein.
- Sie können (und brauchen oft) `min()` und `max()`-Werte zu kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion zu verwenden.
- Sie können mehr als zwei Argumente bereitstellen, wenn Sie mehrere Einschränkungen anwenden müssen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftart immer noch mindestens 200% skalierbar ist, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoom-Funktion).

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und Input

Ein weiterer Anwendungsfall für `min()` ist, eine maximale Größe auf responsive Formularelemente festzulegen: Dadurch können die Breiten von Labels und Eingabefeldern verkleinert werden, wenn sich die Breite des Formulars verkleinert.

Sehen wir uns einige CSS-Eigenschaften an:

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

Hier wird das Formular selbst, zusammen mit dem Rand, der Grenze und der Polsterung, 100% der Breite seines Elternelements einnehmen. Wir deklarieren das Eingabefeld und das Label als den kleineren Wert von 40% der Formularbreite bis zu der Polsterung oder einer Breite von 400px, je nachdem, welcher kleiner ist. Mit anderen Worten, das breiteste, was Label und Eingabefeld sein können, ist 400px. Das engste, das sie sein werden, sind 40% der Breite des Formulars, was auf dem Bildschirm einer Smartwatch sehr klein ist.

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
