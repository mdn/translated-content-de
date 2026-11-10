---
title: "`word-spacing` CSS property"
short-title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
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

Diese Eigenschaft wird durch das Schlüsselwort `normal` oder einen `<length-percentage>`-Wert angegeben:

- `normal`
  - : Der normale Wortabstand, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length-percentage")}}
  - : Gibt einen zusätzlichen Abstand zum durch die Schriftart definierten Wortabstand an. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein sehr großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die er angewendet wird, unlesbar. Bei einem sehr großen positiven Wert stehen die Wörter so weit auseinander, dass der Text nicht mehr wie ein Satz wirkt. Bei einem großen negativen Wert können sich die Wörter so stark überlappen, dass Anfang und Ende der einzelnen Wörter nicht mehr zu erkennen sind.

Ein lesbarer `word-spacing`-Wert muss im Einzelfall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzelnen Wert, der die Lesbarkeit für alle Schriftfamilien automatisch gewährleistet.

- [MDN-Erläuterungen zu WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von `word-spacing`.

#### HTML

Das HTML enthält zwei Textabsätze:

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

Das CSS weist jedem Absatz einen anderen `word-spacing`-Wert zu:

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

{{ EmbedLiveSample("basic-usage", "100%", "100") }}

### Vergleich von Längen- und Prozentwerten für word-spacing

Dieses Beispiel zeigt, dass Prozentwerte für `word-spacing` bei responsiven Textgrößen nützlich sind.

Der Code zeigt mehrere Absätze, bei denen für Text mit zunehmender Schriftgröße jeweils derselbe `word-spacing`-Wert festgelegt ist. Sie können zwischen einem Längen- und einem Prozentwert für `word-spacing` wechseln, um zu sehen, wie sich der Prozentwert an die Schriftgröße anpasst.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Text sowie ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), mit dem Sie zwischen einem Längen- und einem Prozentwert für `word-spacing` wechseln können.

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

Zunächst weist das CSS jedem folgenden Absatz einen höheren {{cssxref("font-size")}}-Wert zu:

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

Standardmäßig weisen wir allen Absätzen einen `word-spacing`-Wert von `10px` zu. Wenn die Checkbox aktiviert ist, ändern wir den `word-spacing`-Wert auf `15%`:

```css live-sample___percentage-versus-length
p {
  word-spacing: 10px;
}

p:has(~ form > input:checked) {
  word-spacing: 15%;
}
```

#### Ergebnis

Das dargestellte Ergebnis sieht so aus:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

Beachten Sie zunächst, dass der anfängliche Längenwert für den Wortabstand bei größeren Schriftgrößen gut aussieht, bei kleineren jedoch nicht. Aktivieren Sie nun die Checkbox: Der prozentuale Wortabstand wirkt in allen Zeilen angemessen, da er mit der Schriftgröße skaliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
- SVG-Attribut {{SVGAttr("word-spacing")}}
