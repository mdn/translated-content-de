---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den kleinsten (am negativsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft zu setzen. Die `min()` Funktion kann überall verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, kann aber kleiner sein, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wären 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen und eine relative Einheit, die es erlaubt, den Wert zu verkleinern, um sich an kleinere Ansichtsfenster anzupassen.

## Syntax

Die `min()` Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der kleinste (am negativsten) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke sein, wie z.B. {{CSSxRef("attr", "attr()")}}, die sich zu einem gültigen Argumenttyp auswerten lassen (z.B. {{CSSxRef("&lt;length&gt;")}}).

Sie können, wenn gewünscht, verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden. Es ist auch möglich, Klammern zu verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen sowohl in automatischen als auch in festen Layout-Tabellen beinhalten, _können_ behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()` Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()` Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Anwendung der Regeln für die Standard-Operatorreihenfolge. Stellen Sie sicher, dass auf jeder Seite der + und - Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können jeglichen `<length>` Syntax-Wert annehmen.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden müssen.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftart mindestens um 200% skalierbar bleibt, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` besteht darin, eine maximale Größe für responsive Formularelemente festzulegen: Die Breite von Labels und Eingabefeldern kann verringert werden, wenn sich die Breite des Formulars verkleinert.

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

Hier werden das Formular selbst, zusammen mit dem Rand, der Rahmen und die Auffüllung, 100% der Breite des übergeordneten Elements sein. Wir erklären, dass das Eingabefeld und das Label kleiner als 40% der Formularbreite bis zur Auffüllung oder 400px breit sein sollen, je nachdem, welcher Wert kleiner ist. Mit anderen Worten, die breiteste Breite, die das Label und das Eingabefeld haben können, ist 400px. Die schmalste Breite, die sie haben werden, ist 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
