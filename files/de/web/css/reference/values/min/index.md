---
title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`min()`**-[CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, den kleinsten (negativsten) Wert aus einer Liste von kommagetrennten Ausdrücken als Wert einer CSS-Eigenschaft festzulegen. Die `min()`-Funktion kann überall dort verwendet werden, wo ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} erlaubt ist.

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

Im obigen ersten Beispiel wird die Breite maximal 200px betragen, kann aber kleiner sein, wenn der Viewport weniger als 400px breit ist (in diesem Fall wären 1vw 4px, also wären 50vw 200px). Diese Technik verwendet eine absolute Einheit, um einen festen Maximalwert für die Eigenschaft festzulegen, und eine relative Einheit, um den Wert an kleinere Viewports anzupassen.

## Syntax

```css
max(1, 2, 3)
max(1px, 2px, 3px)
```

### Parameter

Die `min()`-Funktion nimmt ein oder mehrere kommagetrennte Ausdrücke als Parameter, wobei der kleinste (negativste) Ausdruckswert als Wert verwendet wird.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Literalwerte oder andere Ausdrücke, wie {{CSSxRef("attr", "attr()")}}, sein, die zu einem gültigen Argumenttyp auswerten (wie {{CSSxRef("&lt;length&gt;")}}).

Sie können für jeden Wert in Ihrem Ausdruck verschiedene Einheiten verwenden, wenn Sie möchten. Sie können auch Klammern verwenden, um die Reihenfolge der Berechnung festzulegen, wenn nötig.

### Hinweise

- Mathematische Ausdrücke mit Prozentsätzen für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen in sowohl automatischen als auch festen Layout-Tabellen _können_ behandelt werden, als ob `auto` angegeben wurde.
- Es ist erlaubt, `max()` und andere `min()`-Funktionen als Ausdruckswerte zu verschachteln. Die Ausdrücke sind vollständige mathematische Ausdrücke, sodass Sie direkte Addition, Subtraktion, Multiplikation und Division verwenden können, ohne die `calc()`-Funktion selbst zu verwenden.
- Der Ausdruck kann Werte kombinieren, die die Addition ( + ), Subtraktion ( - ), Multiplikation ( \* ) und Division ( / ) Operatoren verwenden, basierend auf den Standardregeln der Operatorpräzedenz. Stellen Sie sicher, dass auf jeder Seite der Operanden + und - ein Leerzeichen ist. Die Operanden im Ausdruck können jeden \<length\>-Syntaxwert haben.
- Sie können (und oft müssen) `min()`- und `max()`-Werte kombinieren oder `min()` in einer `clamp()`- oder `calc()`-Funktion verwenden.
- Sie können mehr als zwei Argumente angeben, wenn Sie mehrere Einschränkungen anwenden möchten.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie `min()` verwenden, um eine maximale Schriftgröße festzulegen, stellen Sie sicher, dass die Schriftart immer noch mindestens 200% vergrößert werden kann, um die Lesbarkeit zu gewährleisten (ohne Hilfstechnologie wie eine Zoom-Funktion).

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Beispiele

### Festlegen einer maximalen Größe für ein Label und ein Eingabefeld

Ein weiteres Anwendungsbeispiel für `min()` ist das Festlegen einer maximalen Größe für responsive Formularelemente, wodurch die Breite von Labels und Eingabefeldern verkleinert werden kann, wenn die Breite des Formulars abnimmt.

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

Hier wird das Formular selbst zusammen mit dem Rand, Rahmen und der Polsterung 100% der Breite seines übergeordneten Elements einnehmen. Wir deklarieren, dass die Eingabe und das Label das kleinere von 40% der Formularbreite bis zum Rand oder 400px breit sein sollen, je nachdem, was kleiner ist. Mit anderen Worten, das breiteste, das das Label und die Eingabe sein können, ist 400px. Das schmalste, was sie sein werden, ist 40% der Formularbreite, was auf einem Smartwatch-Bildschirm sehr klein ist.

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
