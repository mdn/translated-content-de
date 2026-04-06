---
title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
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
  - : Der normale Wortabstand, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length-percentage")}}
  - : Gibt zusätzlichen Abstand an, der zum intrinsischen Wortabstand der Schriftart hinzugefügt wird. Prozentwerte werden relativ zur {{cssxref("font-size")}} des Textes berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unlesbar. Für Text, der mit einem sehr großen positiven Wert gestylt ist, wird der Abstand zwischen den Wörtern so groß sein, dass sie nicht mehr als Satz erscheinen. Bei Text, der mit einem großen negativen Wert gestylt ist, können sich die Wörter so stark überlappen, dass der Anfang und das Ende jedes Wortes unkenntlich werden.

Lesbarer `word-spacing` muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit beibehalten.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine grundlegende Verwendung von `word-spacing`.

#### HTML

Unser HTML enthält zwei Textabsätze:

```html live-sample___basic-usage
<p id="mozdiv1">Lorem ipsum dolor sit amet.</p>
<p id="mozdiv2">Lorem ipsum dolor sit amet.</p>
```

#### CSS

Unser CSS wendet für jeden Absatz einen unterschiedlichen `word-spacing` an:

```css live-sample___basic-usage
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample("live-sample___basic-usage", "100%", "100") }}

### Vergleich von word-spacing mit Längen- und Prozentwerten

Dieses Beispiel zeigt, dass prozentuale `word-spacing`-Werte für responsives Textsizing nützlich sind.

Der Code zeigt mehrere Absätze, die denselben `word-spacing` für Text mit zunehmender Schriftgröße eingestellt haben. Wir bieten die Möglichkeit, zwischen einem Längen- und einem prozentualen `word-spacing`-Wert zu wechseln, damit Sie die responsiven Qualitäten der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}} Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem Längen-`word-spacing` und einem prozentualen `word-spacing`-Wert zu wechseln.

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

Wir wenden standardmäßig einen `word-spacing`-Wert von `10px` auf alle Absätze an. Wenn das Kontrollkästchen jedoch aktiviert ist, ändern wir den `word-spacing`-Wert auf `15%`:

```css live-sample___percentage-versus-length
p {
  word-spacing: 10px;
}

p:has(~ form > input:checked) {
  word-spacing: 15%;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

Beachten Sie zuerst, wie der anfängliche Längenbuchstabenabstand bei größeren Schriftgrößen in Ordnung aussieht, aber bei kleineren Schriftgrößen nicht gut aussieht. Aktivieren Sie nun das Kontrollkästchen und beachten Sie, wie der Prozentbuchstabenabstand auf allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

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
