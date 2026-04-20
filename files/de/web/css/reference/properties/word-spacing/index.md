---
title: "`word-spacing` CSS property"
short-title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`word-spacing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Abstand zwischen Wörtern und zwischen Tags fest.

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

- `normal`
  - : Der normale Wortabstand, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length-percentage")}}
  - : Gibt zusätzlichen Abstand an, der zu dem durch die Schriftart definierten intrinsischen Wortabstand hinzugefügt wird. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unleserlich. Bei Text, der mit einem sehr großen positiven Wert gestylt ist, sind die Wörter so weit auseinander, dass es nicht mehr wie ein Satz erscheint. Wird ein großer negativer Wert verwendet, können sich die Wörter überlappen, sodass Anfang und Ende jedes Wortes unkenntlich werden.

Lesbare `word-spacing`-Werte müssen von Fall zu Fall ermittelt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der automatisch die Lesbarkeit aller Schriftfamilien sicherstellt.

- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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

Unser CSS wendet einen unterschiedlichen `word-spacing` auf jeden Absatz an:

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

### Vergleich von `word-spacing` mit Längen- und Prozentangaben

Dieses Beispiel zeigt, dass prozentuale `word-spacing`-Werte für eine reaktionsfähige Textgrößenanpassung nützlich sind.

Der Code zeigt mehrere Absätze an, die denselben `word-spacing`-Wert auf Text mit zunehmender Schriftgröße haben. Es gibt eine Funktionalität, um zwischen einem Längen- und einem Prozentwert des `word-spacing` zu wechseln, damit Sie die reaktionsfähigen Eigenschaften der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem Längen- und einem Prozentwert des `word-spacing` zu wechseln.

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

Unser CSS beginnt mit der Anwendung zunehmender {{cssxref("font-size")}}-Werte auf jeden nachfolgenden Absatz:

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

Standardmäßig wird allen Absätzen ein `word-spacing`-Wert von `10px` zugewiesen. Wenn das Kontrollkästchen jedoch aktiviert ist, ändern wir den `word-spacing`-Wert auf `15%`:

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

Beachten Sie zunächst, wie der anfängliche Längenbuchstaben-Abstandswert bei den größeren Schriftgrößen in Ordnung aussieht, aber bei den kleineren Schriftgrößen nicht gut aussieht. Jetzt schalten Sie das Kontrollkästchen um und achten Sie darauf, wie der prozentuale Buchstabenabstand auf allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

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
