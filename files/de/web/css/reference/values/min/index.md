---
title: "`min()` CSS-Funktion"
short-title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: 1131815f48d54465a99c1c5fd0e63e0d1f549caf
---

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den kleinsten (negativsten) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert für eine CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im ersten obigen Beispiel beträgt die Breite maximal 200px, wird jedoch kleiner, wenn der Ansichtsbereich weniger als 400px breit ist (in diesem Fall würde 1vw 4px entsprechen, also würden 50vw 200px sein). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an kleinere Ansichtsbereiche anzupassen.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei das kleinste (negativste) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), wörtliche Werte oder andere Ausdrücke sein, wie z. B. {{cssxref("attr()")}}, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können für jeden Wert in Ihrem Ausdruck unterschiedliche Einheiten verwenden, wenn Sie dies wünschen. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn dies erforderlich ist.

### Hinweise

- Mathematische Ausdrücke, die Prozentwerte für Breiten und Höhen auf Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte enthalten, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) kombinieren, unter Verwendung der Standardvorrangregeln für Operatoren. Stellen Sie sicher, dass Sie ein Leerzeichen auf jeder Seite der + und - Operanden setzen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert einnehmen.
- Sie können (und müssen häufig) `min()`- und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftgröße mindestens um 200% skaliert werden kann, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoom-Funktion).

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  [Verständnis des Erfolgskriteriums 1.4.4: Text vergrößern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Etikett und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsive Formularelemente: Dadurch können die Breiten von Etiketten und Eingabefeldern schrumpfen, wenn die Breite des Formulars abnimmt.

Schauen wir uns einige CSS-Beispiele an:

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

Hier, das Formular selbst, zusammen mit dem Rand, dem Rahmen und dem Innenabstand, wird 100% der Breite seines übergeordneten Elements sein. Wir legen fest, dass das Eingabefeld und das Etikett die kleinere von 40% der Formularbreite bis zum Innenabstand oder 400px breit sind, je nachdem, welches kleiner ist. Mit anderen Worten, die maximale Breite, die das Etikett und das Eingabefeld haben können, beträgt 400px. Die minimale Breite beträgt 40% der Breite des Formulars, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
