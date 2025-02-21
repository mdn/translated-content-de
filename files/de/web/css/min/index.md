---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den kleinsten (am negativsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()` Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im obigen ersten Beispiel wird die Breite höchstens 200px betragen, sie wird jedoch kleiner sein, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft anzugeben, und eine relative Einheit, damit der Wert schrumpfen kann, um sich kleineren Ansichtsfenstern anzupassen.

## Syntax

Die `min()` Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei das kleinste (am negativsten) Ergebnisausdruckswert als Wert genutzt wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), literale Werte oder andere Ausdrücke, wie {{CSSxRef("attr", "attr()")}}, sein, die zu einem gültigen Argumenttyp (wie {{CSSxRef("&lt;length&gt;")}}) ausgewertet werden.

Sie können in Ihren Ausdrücken unterschiedliche Einheiten für jeden Wert verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen bei Tabellen-Spalten, Tabellen-Spaltengruppen, Tabellenzeilen, Tabellenzeilengruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als wäre `auto` angegeben worden.
- Es ist erlaubt, `max()` und andere `min()` Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Verwendung der `calc()` Funktion selbst einsetzen können.
- Der Ausdruck kann Werte kombinieren, unter Verwendung der Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ), unter Anwendung der Standardvorrangregeln der Operatoren. Achten Sie darauf, auf jeder Seite der + und - Operanden ein Leerzeichen zu setzen. Die Operanden im Ausdruck dürfen jeden `<length>` Syntaxwert darstellen.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()` oder `calc()` Funktion verwenden.
- Sie können mehr als zwei Argumente bereitstellen, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftgröße immer noch mindestens 200% für die Lesbarkeit skaliert werden kann (ohne unterstützende Technologien wie eine Zoom-Funktion).

- [MDN Verstehen der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen von Erfolgskriterium 1.4.4 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsiv gestaltete Formularelemente: Dadurch können die Breite von Labels und Eingabefeldern schrumpfen, wenn die Breite des Formulars schrumpft.

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

Hiermit wird das Formular selbst, zusammen mit dem Abstand, der Rand und die Innenabstände, 100% der Breite seines Elternteils einnehmen. Wir deklarieren, dass das Eingabefeld und Label entweder 40% der Formularbreite bis zu den Innenabständen oder bis zu 400px breit sein soll, je nachdem was kleiner ist. Anders gesagt, die größte Breite, die das Label und das Eingabefeld erreichen können, beträgt 400px. Die kleinste Breite, die sie haben werden, beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
