---
title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 21b975609b233dbc6fde334ff97ee9cde75e7c0f
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

- `normal`
  - : Der normale Zwischenraum zwischen Wörtern, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length-percentage")}}
  - : Gibt zusätzlichen Abstand an, der zum intrinsischen Zwischenraum zwischen Wörtern, der durch die Schriftart definiert ist, hinzugefügt wird. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unleserlich. Bei Texten, die mit einem sehr großen positiven Wert gestylt sind, sind die Wörter so weit auseinander, dass es nicht mehr als Satz erkennbar ist. Bei Texten, die mit einem großen negativen Wert gestylt sind, können sich die Wörter so sehr überlappen, dass der Anfang und das Ende jedes Wortes nicht mehr erkennbar sind.

Eine leserliche `word-spacing`-Einstellung muss von Fall zu Fall bestimmt werden, da unterschiedliche Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der sicherstellen kann, dass alle Schriftarten automatisch ihre Lesbarkeit behalten.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von `word-spacing`.

#### HTML

Unser HTML enthält zwei Absätze mit Text:

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

Unser CSS wendet auf jeden Absatz einen anderen `word-spacing`-Abstand an:

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

### Vergleich von word-spacing mit Länge und Prozentsatz

Dieses Beispiel zeigt, dass prozentuale `word-spacing`-Werte nützlich für die responsive Textgröße sind.

Der Code zeigt mehrere Absätze, die denselben `word-spacing`-Wert für Text mit zunehmender Schriftgröße haben. Wir bieten eine Funktionalität, um zwischen einem Längen- und einem prozentualen `word-spacing`-Abstandswert zu wechseln, damit Sie die responsiven Eigenschaften eines Prozentsatzwertes beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), mit dem wir zwischen einem Längen- und einem prozentualen `word-spacing`-Wert umschalten werden.

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

Unser CSS beginnt mit der Anwendung von zunehmenden {{cssxref("font-size")}}-Werten auf jeden nachfolgenden Absatz:

```css hidden live-sample___percentage-versus-length
html {
  font-family: Arial, Helvetica, sans-serif;
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

Beachten Sie zunächst, wie der anfängliche Längenbuchstaben-Abstandswert bei größeren Schriftgrößen in Ordnung aussieht, aber bei kleineren Schriftgrößen nicht gut aussieht. Wechseln Sie jetzt das Kontrollkästchen und beachten Sie, wie der Prozentbuchstaben-Abstand bei allen Zeilen passend aussieht, da er sich mit der Schriftgröße skaliert.

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
