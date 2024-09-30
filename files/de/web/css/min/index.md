---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den kleinsten (negativsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im ersten oben genannten Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn der Ansichtsbereich weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, sodass 50vw 200px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an kleinere Ansichtsbereiche anzupassen.

## Syntax

Die `min()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei das kleinste (negativste) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Literalwerte oder andere Ausdrücke, wie z.B. {{CSSxRef("attr", "attr()")}}, sein, die sich zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) auswerten.

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen bei Bedarf festzulegen.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen in Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl Auto- als auch Festlayouts enthalten, _könnten_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu verwenden.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Anwendung der Standardregeln zur Operatorpräzedenz. Stellen Sie sicher, dass auf beiden Seiten der + und - Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können alle `<length>`-Syntaxwerte sein.
- Sie können (und müssen oft) `min()` und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftgröße sich um mindestens 200% vergrößern lässt, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Understanding WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Maximalgröße für ein Label und ein Eingabefeld festlegen

Ein weiterer Anwendungsfall für `min()` ist die Festlegung einer maximalen Größe bei responsiven Formulareingabefeldern: Dadurch können die Breite von Labels und Eingabefeldern verkleinert werden, wenn die Breite des Formulars abnimmt.

Schauen wir uns ein Beispiel-CSS an:

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

Hier werden das Formular selbst sowie der Rand, der Rahmen und die Polsterung 100% der Breite des übergeordneten Elements betragen. Wir erklären das Eingabefeld und das Label als den kleineren Wert von 40% der Formularbreite bis zur Polsterung oder 400px Breite, je nachdem, welcher Wert kleiner ist. Mit anderen Worten: Die maximale Breite, die das Label und das Eingabefeld erreichen können, beträgt 400px. Die minimale Breite beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
