---
title: CSS-Funktion `min()`
short-title: min()
slug: Web/CSS/Reference/Values/min
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Mit der **`min()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) in [CSS](/de/docs/Web/CSS) können Sie den kleinsten (gegebenenfalls am stärksten negativen) Wert aus einer Liste kommagetrennter Ausdrücke als Wert einer CSS-Eigenschaft festlegen. Die Funktion `min()` kann überall dort verwendet werden, wo {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} zulässig ist.

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

Im ersten Beispiel oben beträgt die Breite höchstens 200px. Ist der Viewport jedoch schmaler als 400px, fällt sie geringer aus (in diesem Fall entspräche 1vw einem Wert von 4px und 50vw somit 200px). Bei dieser Technik legt eine absolute Einheit einen festen Höchstwert für die Eigenschaft fest, während eine relative Einheit dafür sorgt, dass der Wert bei kleineren Viewports sinken kann.

## Syntax

```css
min(1, 2, 3)
min(1px, 2px, 3px)
```

### Parameter

Die Funktion `min()` akzeptiert einen oder mehrere kommagetrennte Ausdrücke als Parameter. Als Wert wird das kleinste (gegebenenfalls am stärksten negative) Ergebnis dieser Ausdrücke verwendet.

Die Ausdrücke können mathematische Ausdrücke (mit arithmetischen Operatoren), Literalwerte oder andere Ausdrücke wie {{cssxref("attr()")}} sein, sofern sie einen gültigen Argumenttyp (etwa {{CSSxRef("&lt;length&gt;")}}) ergeben.

Sie können für jeden Wert in Ihrem Ausdruck eine andere Einheit verwenden. Bei Bedarf können Sie außerdem mit Klammern die Reihenfolge der Berechnung festlegen.

### Hinweise

- Mathematische Ausdrücke mit Prozentwerten für Breiten und Höhen von Tabellenspalten, Tabellenspalten-Gruppen, Tabellenzeilen, Tabellenzeilen-Gruppen und Tabellenzellen können sowohl bei Tabellen mit automatischem als auch mit festem Layout so behandelt werden, als wäre `auto` angegeben worden.
- `max()`- und weitere `min()`-Funktionen dürfen als Ausdruckswerte verschachtelt werden. Da es sich um vollständige mathematische Ausdrücke handelt, können Sie Addition, Subtraktion, Multiplikation und Division direkt verwenden, ohne die Funktion `calc()` aufzurufen.
- Der Ausdruck kann Werte mit den Operatoren für Addition (`+`), Subtraktion (`-`), Multiplikation (`*`) und Division (`/`) kombinieren. Dabei gelten die üblichen Vorrangregeln für Operatoren. Achten Sie darauf, vor und nach den Operatoren `+` und `-` jeweils ein Leerzeichen zu setzen.
- Sie können Werte von `min()` und `max()` kombinieren (was häufig nötig ist) oder `min()` innerhalb einer `clamp()`- oder `calc()`-Funktion verwenden.
- Wenn mehrere Einschränkungen gelten sollen, können Sie mehr als zwei Argumente angeben.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Wenn Sie mit `min()` eine maximale Schriftgröße festlegen, stellen Sie sicher, dass sich die Schrift zur besseren Lesbarkeit weiterhin auf mindestens 200 % vergrößern lässt (ohne assistive Technologien wie eine Zoomfunktion).

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  [Erfolgskriterium 1.4.4 verstehen: Text vergrößern | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Beispiele

### Eine maximale Größe für ein Label und ein Eingabefeld festlegen

Ein weiterer Anwendungsfall für `min()` besteht darin, eine maximale Größe für responsive Formularsteuerelemente festzulegen: So können Label und Eingabefeld schmaler werden, wenn sich die Breite ihres Containers verringert.

Sehen wir uns dazu etwas CSS an:

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

.container {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Der Container selbst nimmt einschließlich Außenabstand, Rahmen und Innenabstand 100 % der Breite seines Elternelements ein. Für das Eingabefeld und das Label legen wir als Breite den kleineren der beiden Werte fest: 40 % der Containerbreite bis zum Innenabstand oder 400px. Anders ausgedrückt: Label und Eingabefeld können höchstens 400px breit sein. Ihre geringste Breite beträgt 40 % der Containerbreite – auf dem Bildschirm einer Smartwatch ist das sehr wenig.

```html
<div class="container">
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc" />
</div>
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
