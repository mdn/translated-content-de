---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den kleinsten (am negativsten) Wert aus einer Liste von Komma-getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, aber kleiner sein, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wären 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an kleinere Ansichtsfenster anzupassen.

## Syntax

Die `min()`-Funktion nimmt ein oder mehrere Komma-getrennte Ausdrücke als Parameter, wobei das kleinste (am negativsten) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung von arithmetischen Operatoren), Literalwerte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn erforderlich.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _dürfen_ behandelt werden, als wäre `auto` angegeben.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu schachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu nutzen.
- Der Ausdruck kann Werte enthalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, wobei die standardmäßigen Operatorvorfahrtsregeln gelten. Stellen Sie sicher, dass Sie auf jeder Seite der + und - Operanden ein Leerzeichen setzen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert sein.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden müssen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftart auch ohne Unterstützungstechnologien wie eine Zoomfunktion mindestens 200% skaliert werden kann, um die Lesbarkeit zu gewährleisten.

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsive Formularsteuerelemente: die Breite von Labels und Eingabefeldern kann so schrumpfen, wie es die Breite des Formulars tut.

Werfen wir einen Blick auf etwas CSS:

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

Hier wird das Formular selbst zusammen mit dem Rand, der Umrandung und der Polsterung 100% der Breite seines übergeordneten Elements betragen. Wir geben ein, dass das Eingabe- und das Label das kleinere von 40% der Formularbreite bis zur Polsterung oder 400px Breite sein sollen, je nachdem, was kleiner ist. Mit anderen Worten, die maximale Breite, die das Label und das Eingabefeld haben können, beträgt 400px. Die kleinste Breite, die sie haben werden, ist 40% der Formularbreite, was auf dem Bildschirm einer Smartwatch sehr klein ist.

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
