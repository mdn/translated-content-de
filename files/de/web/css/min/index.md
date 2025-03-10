---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den kleinsten (am meisten negativen) Wert aus einer Liste von durch Kommas getrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, kann aber kleiner sein, wenn das Ansichtsfenster weniger als 400px breit ist (in diesem Fall wäre 1vw gleich 4px, somit wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, die es ermöglicht, den Wert entsprechend kleineren Ansichtsfenstern zu verkleinern.

## Syntax

Die `min()`-Funktion nimmt ein oder mehrere durch Kommas getrennte Ausdrücke als Parameter, wobei der kleinste (am meisten negative) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp ausgewertet werden (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnungen festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl Auto- als auch Festlayout-Tabellen enthalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Additionen, Subtraktionen, Multiplikationen und Divisionen ohne Nutzung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) Operatoren verwenden, unter Anwendung der Standardregeln zur Operatorenrangfolge. Achten Sie darauf, auf jeder Seite der Operanden + und - ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert haben.
- Sie können (und müssen oft) `min()` und `max()` Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden müssen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftart um mindestens 200% vergrößert werden kann, um die Lesbarkeit zu gewährleisten (ohne assistive Technologien wie eine Zoomfunktion).

- [MDN Verständnis von WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegung einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist die Festlegung einer maximalen Größe für responsive Formularsteuerelemente, sodass die Breite von Labels und Eingaben entsprechend der Breite des Formulars schrumpfen kann.

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

Hier werden das Formular selbst sowie Rand, Rahmen und Auffüllung 100% der Breite des übergeordneten Elements einnehmen. Wir legen fest, dass die Eingabe und das Label den kleineren Wert aus 40% der Formularbreite bis zur Auffüllung oder 400px breit sein sollen, je nachdem, welcher Wert kleiner ist. Mit anderen Worten, die maximale Breite, die das Label und das Eingabefeld haben können, beträgt 400px. Die geringste Breite ist 40% der Breite des Formulars, was auf dem Bildschirm einer Smartwatch sehr klein ist.

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
