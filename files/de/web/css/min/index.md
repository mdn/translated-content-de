---
title: min()
slug: Web/CSS/min
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`min()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, den kleinsten (am negativsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, sie wird jedoch kleiner sein, wenn das Viewport weniger als 400px breit ist (in diesem Fall wäre 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft anzugeben, und eine relative Einheit, um den Wert an kleinere Viewports anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt ein oder mehrere kommagetrennte Ausdrücke als Parameter an, wobei das kleinste (am negativsten) Ausdrucksergebnis als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (unter Verwendung arithmetischer Operatoren), literale Werte oder andere Ausdrücke wie {{CSSxRef("attr", "attr()")}} sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können unterschiedliche Einheiten für jeden Wert in Ihrem Ausdruck verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Berechnungsreihenfolge festzulegen, wenn nötig.

### Anmerkungen

- Mathematische Ausdrücke, die Prozentsätze für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen beinhalten, _können_ so behandelt werden, als ob `auto` angegeben worden wäre.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division ohne Verwendung der `calc()`-Funktion selbst verwenden können.
- Der Ausdruck kann Werte kombinieren, die die Operatoren Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) verwenden, unter Anwendung der Standards der Operatorpriorität. Achten Sie darauf, auf jeder Seite der + und - Operatoren ein Leerzeichen zu setzen. Die Operanden im Ausdruck können jeden `<length>`-Syntaxwert verwenden.
- Sie können (und müssen oft) `min()` und `max()`-Werte kombinieren oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente bereitstellen, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn `min()` zum Setzen einer maximalen Schriftgröße verwendet wird, stellen Sie sicher, dass die Schriftart immer noch mindestens 200% vergrößert werden kann, um die Lesbarkeit zu gewährleisten (ohne unterstützende Technologien wie eine Zoomfunktion).

- [MDN Verstehen der WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.4 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiterer Anwendungsfall für `min()` ist das Festlegen einer maximalen Größe für responsives Formularelemente: Das Ermöglichen, dass die Breite von Labels und Eingaben schrumpft, wenn die Breite des Formulars schrumpft.

Hier ein Blick auf einige CSS-Beispiele:

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

Hierbei nehmen das Formular selbst sowie der Rand, die Umrandung und der Abstand 100% der Breite des übergeordneten Elements ein. Wir erklären, dass die Eingabe und das Label im geringeren Maße 40% der Formularbreite bis zu dem Padding oder 400px breit sind, je nachdem, was kleiner ist. Mit anderen Worten, die breitesten, die das Label und die Eingabe sein können, sind 400px. Die schmalste Breite beträgt 40% der Formularbreite, was auf dem Bildschirm einer Smartwatch sehr klein ist.

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
