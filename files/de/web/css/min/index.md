---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es Ihnen, den kleinsten (am negativsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, sie wird jedoch kleiner sein, wenn der Ansichtsbereich weniger als 400px breit ist (in diesem Fall wären 1vw 4px, sodass 50vw 200px wären). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an kleinere Ansichtsbereiche anzupassen.

## Syntax

Die `min()`-Funktion nimmt ein oder mehrere kommagetrennte Ausdrücke als Parameter, wobei das Ergebnis des kleinsten (am negativsten) Ausdrucks als der Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die sich zu einem gültigen Argumenttyp auswerten lassen (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können verschiedene Einheiten für jeden Wert in Ihrem Ausdruck verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen bei Bedarf festzulegen.

### Hinweise

- Mathematische Ausdrücke, die Prozentwerte für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne die Benutzung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte enthalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der Standard-Operatorvorrangsregeln. Stellen Sie sicher, dass auf jeder Seite der + und - Operanden ein Leerzeichen steht. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert haben.
- Sie können (und müssen oft) `min()`- und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

### Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftgröße zur besseren Lesbarkeit mindestens um 200% vergrößert werden kann (ohne Hilfstechnologien wie eine Zoom-Funktion).

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegung einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist die Festlegung einer maximalen Größe für responsive Formularelemente: Dadurch können sich die Breiten von Labels und Eingaben entsprechend der Breite des Formulars verkleinern.

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

Hier wird das Formular selbst zusammen mit dem Rand, der Umrandung und der Auffüllung 100% der Breite seines übergeordneten Elements einnehmen. Wir geben an, dass input und label entweder 40% der Formularbreite bis zur Auffüllung oder maximal 400px breit sind, je nachdem, was kleiner ist. Mit anderen Worten, die maximale Breite, die das Label und die Eingabe haben können, beträgt 400px. Die minimale Breite beträgt 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

```html
<form>
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc" />
</form>
```

{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [CSS-Werte](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
