---
title: "`letter-spacing` CSS property"
short-title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen Textzeichen fest. Dieser Wert wird zu dem natürlichen Abstand zwischen Zeichen hinzugefügt, während der Text gerendert wird. Positive Werte von `letter-spacing` spreizen die Zeichen weiter auseinander, während negative Werte die Zeichen näher zusammenbringen.

{{InteractiveExample("CSS Demo: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: 30%;
```

```css interactive-example-choice
letter-spacing: -1px;
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
letter-spacing: normal;

/* <length-percentage> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: -0.5px;
letter-spacing: 50%;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Werte

Diese Eigenschaft wird als Einzelwert aus der folgenden Liste angegeben:

- `normal`
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User Agent")}}, den Abstand zwischen Zeichen zu verändern, um Text auszurichten.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Während die Werte negativ sein können, können sie durch implementierungsspezifische Grenzen eingeschränkt sein. User Agents dürfen den Zeichenabstand zur Textausrichtung nicht weiter vergrößern oder verkleinern.

    Prozentwerte werden relativ zur Breite des Leerzeichens der auf den Text angewendeten Schriftart berechnet.

    > [!NOTE]
    > Wenn `letter-spacing` ungleich null ist, wenden User Agents keine optionalen Ligaturen an, wie die `liga` (Standardligaturen) und `clig` (kontextuelle Ligaturen) OpenType-Features, die normalerweise durch {{cssxref("font-variant-ligatures")}} gesteuert werden.
    > Diese Features können explizit durch {{cssxref("font-feature-settings")}} erneut aktiviert werden.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das/die Wort(e), auf die das Styling angewendet wird, unleserlich. Bei Text, der mit einem sehr großen positiven Wert gestylt ist, sind die Buchstaben so weit voneinander entfernt, dass das/die Wort(e) wie eine Reihe von einzelnen, unverbundenen Buchstaben erscheinen. Bei Text, der mit einem sehr großen negativen Wert gestylt ist, können die Buchstaben so stark übereinander liegen, dass das/die Wort(e) nicht mehr erkennbar sind.

Ein lesbarer Buchstabenabstand muss fallweise bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit beibehalten.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs Kriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsprobleme

In einigen Schriftsystemen sollte kein Buchstabenabstand angewendet werden. Zum Beispiel erwarten Sprachen, die das arabische Alphabet verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Das Anwenden von Buchstabenabstand kann dazu führen, dass der Text kaputt aussieht.

```html live-sample___i18n-sample
<p lang="ar" dir="rtl">شسيبتنمك</p>
```

```css hidden live-sample___i18n-sample
p {
  font-size: 3em;
  margin-inline-start: 5px;
}
```

{{ EmbedLiveSample("i18n-sample", "100%", 180) }}

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Buchstabenabstand mit Längenwerten einstellen

Dieses Beispiel zeigt mehrere Absätze mit unterschiedlichen Längenwerten für den `letter-spacing`, die es Ihnen ermöglichen, sie zu vergleichen.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt.

```html live-sample___length-letter-spacing
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

Unser CSS wendet jedem Absatz einen anderen `letter-spacing`-Wert zu.

```css live-sample___length-letter-spacing
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("length-letter-spacing", "100%", 200) }}

### Vergleich von letter-spacing, gesetzt mit Länge und Prozentwerten

Dieses Beispiel zeigt, dass Prozentwerte für `letter-spacing` nützlich für die responsive Textgrößenanpassung sind.

Der Code zeigt mehrere Absätze, die denselben `letter-spacing`-Wert aufweisen, aber den Text mit zunehmender Schriftgröße. Wir bieten eine Funktionalität, zwischen einem Längen- und einem Prozentwert für `letter-spacing` zu wechseln, sodass Sie die responsiven Eigenschaften der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem Längen-`letter-spacing`-Wert und einem Prozent-`letter-spacing`-Wert zu wechseln.

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    Toggle <code>letter-spacing</code> (off: <code>8px</code>, on:
    <code>12%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

Unser CSS beginnt mit der Anwendung von zunehmenden {{cssxref("font-size")}}-Werten auf jeden aufeinanderfolgenden Absatz:

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

Wir wenden standardmäßig einen `letter-spacing`-Wert von `8px` auf alle Absätze an. Wenn das Kontrollkästchen aktiviert ist, ändern wir jedoch den `letter-spacing`-Wert auf `12%`:

```css live-sample___percentage-versus-length
p {
  letter-spacing: 8px;
}

p:has(~ form > input:checked) {
  letter-spacing: 12%;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

Beachten Sie zunächst, wie der anfängliche Längen-Buchstabenabstandswert bei größeren Schriftgrößen gut aussieht, aber bei kleineren Schriftgrößen nicht gut aussieht. Schalten Sie nun das Kontrollkästchen um und beachten Sie, wie der Prozent-Buchstabenabstand auf allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG {{SVGAttr("letter-spacing")}} Attribut
