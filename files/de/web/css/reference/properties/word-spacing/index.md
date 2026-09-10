---
title: "`word-spacing` CSS property"
short-title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`word-spacing`** legt den Abstand zwischen Wörtern und zwischen Tags fest.

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
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2");
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
  - : Der normale Wortabstand, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length-percentage")}}
  - : Gibt zusätzlichen Abstand zusätzlich zum durch die Schriftart definierten intrinsischen Wortabstand an. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert formatiert ist, liegen die Wörter so weit auseinander, dass er nicht mehr wie ein Satz erscheint. Bei Text, der mit einem großen negativen Wert formatiert ist, können sich die Wörter so weit überlappen, dass Anfang und Ende jedes Wortes nicht mehr erkennbar sind.

Lesbare `word-spacing`-Werte müssen von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzelnen Wert, der sicherstellen kann, dass alle Schriftfamilien ihre Lesbarkeit automatisch beibehalten.

- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.8 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung von `word-spacing`.

#### HTML

Unser HTML enthält zwei Textabsätze:

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

Unser CSS wendet auf jeden Absatz einen unterschiedlichen `word-spacing` an:

```css live-sample___basic-usage
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample("live-sample___basic-usage", "100%", "100") }}

### Vergleich von mit Länge und Prozentwert festgelegtem word-spacing

Dieses Beispiel demonstriert, dass prozentuale `word-spacing`-Werte für responsive Textgrößen nützlich sind.

Der Code zeigt mehrere Absätze an, die denselben `word-spacing` auf Text mit zunehmender Schriftgröße angewendet haben. Wir stellen eine Funktion bereit, um zwischen einem Längen- und einem prozentualen `word-spacing`-Wert umzuschalten, sodass Sie die responsiven Eigenschaften der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt sowie ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem Längen-`word-spacing` und einem prozentualen `word-spacing`-Wert umzuschalten.

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

Unser CSS beginnt damit, auf jeden aufeinanderfolgenden Absatz zunehmende {{cssxref("font-size")}}-Werte anzuwenden:

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

Standardmäßig wenden wir auf alle Absätze einen `word-spacing`-Wert von `10px` an. Wenn das Kontrollkästchen aktiviert ist, ändern wir den `word-spacing`-Wert jedoch in `15%`:

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

Beachten Sie zunächst, dass der anfängliche Buchstabenabstandswert als Länge bei den größeren Schriftgrößen gut aussieht, bei den kleineren Schriftgrößen jedoch nicht gut aussieht. Aktivieren Sie nun das Kontrollkästchen und beachten Sie, dass der prozentuale Buchstabenabstand auf allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

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
- SVG-Attribut {{SVGAttr("word-spacing")}}
