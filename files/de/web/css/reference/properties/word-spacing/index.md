---
title: "`word-spacing` CSS property"
short-title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`word-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen Wörtern und zwischen Tags fest.

{{InteractiveExample("CSS Demo: word-spacing")}}

```css interactive-example-choice
word-spacing: normal;
```

```css interactive-example-choice
word-spacing: 1rem;
```

```css interactive-example-choice
word-spacing: 4px;
```

```css interactive-example-choice
word-spacing: 50%;
```

```css interactive-example-choice
word-spacing: -0.4ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

## Syntax

```css
/* Keyword value */
word-spacing: normal;

/* <length> values */
word-spacing: 3px;
word-spacing: 0.3em;
word-spacing: 65%;
word-spacing: -1ex;

/* Global values */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### Werte

Diese Eigenschaft wird als Schlüsselwort `normal` oder als `<length-percentage>` angegeben:

- `normal`
  - : Der normale Wortabstand, wie vom aktuellen Schriftart und/oder Browser definiert.
- {{cssxref("length-percentage")}}
  - : Gibt zusätzlichen Abstand zusätzlich zum intrinsischen Wortabstand an, der durch die Schriftart definiert wird. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert gestaltet ist, sind die Wörter so weit auseinander, dass sie nicht mehr als Satz erscheinen. Bei Text mit einem großen negativen Wert können sich die Wörter so stark überlappen, dass der Anfang und das Ende jedes Wortes nicht mehr erkennbar sind.

Lesbarer `word-spacing` muss je nach Fall bestimmt werden, da verschiedene Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftarten automatisch ihre Lesbarkeit beibehalten.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von `word-spacing`.

#### HTML

Unser HTML enthält zwei Textabsätze:

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

Unser CSS wendet auf jeden Absatz einen anderen `word-spacing` an:

```css live-sample___basic-usage
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

#### Ergebnis

Das Beispiel wird folgendermaßen dargestellt:

{{ EmbedLiveSample("live-sample___basic-usage", "100%", "100") }}

### Vergleich von `word-spacing` mit Längenangaben und Prozentwerten

Dieses Beispiel zeigt, dass Prozentwerte für `word-spacing` nützlich für responsives Textsizing sind.

Der Code zeigt mehrere Absätze, die denselben `word-spacing` bei zunehmend größerem Font haben. Wir bieten eine Funktion, um zwischen einem Längenwert und einem Prozentwert für `word-spacing` zu wechseln, damit Sie die responsiven Eigenschaften der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}} Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), mit dem wir zwischen einem Längenwert und einem Prozentwert für `word-spacing` wechseln.

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    Toggle <code>word-spacing</code> (off: <code>10px</code>, on:
    <code>15%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

Unser CSS beginnt damit, auf jeden aufeinander folgenden Absatz zunehmende {{cssxref("font-size")}}-Werte anzuwenden:

```css hidden live-sample___percentage-versus-length
html {
  font-family: "Arial", sans-serif;
}
```

```css live-sample___percentage-versus-length
.x-small {
  font-size: 0.8em;
}

.small {
  font-size: 1.3em;
}

.medium {
  font-size: 2em;
}

.large {
  font-size: 3em;
}

.x-large {
  font-size: 3.5em;
}
```

Wir wenden standardmäßig einen `word-spacing`-Wert von `10px` auf alle Absätze an. Wenn das Kontrollkästchen aktiviert ist, ändern wir jedoch den `word-spacing`-Wert auf `15%`:

```css live-sample___percentage-versus-length
p {
  word-spacing: 10px;
}

p:has(~ form > input:checked) {
  word-spacing: 15%;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

Zunächst beachten Sie, wie der anfängliche Längenwert für den Buchstabenabstand bei größeren Schriftgrößen in Ordnung aussieht, aber bei kleineren Schriftgrößen nicht gut aussieht. Schalten Sie jetzt das Kontrollkästchen um und beachten Sie, wie der prozentuale Buchstabenabstand in allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
- SVG {{SVGAttr("word-spacing")}} Attribut
