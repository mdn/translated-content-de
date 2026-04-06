---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`letter-spacing`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Abstand zwischen Textzeichen fest. Dieser Wert wird zum natürlichen Abstand zwischen den Zeichen hinzugefügt, während der Text gerendert wird. Positive Werte von `letter-spacing` vergrößern den Abstand zwischen den Zeichen, während negative Werte die Zeichen näher zusammenbringen.

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

- `normal`
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User Agent")}}, den Abstand zwischen den Zeichen anzupassen, um den Text auszurichten.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Gibt zusätzlichen Abstand zwischen den Zeichen _zusätzlich zu_ dem Standardabstand zwischen den Zeichen an. Während die Werte negativ sein können, können diese auf implementationsspezifische Grenzen beschränkt sein. User Agents dürfen den Zeichenabstand nicht weiter erhöhen oder verringern, um den Text auszurichten.

    Prozentwerte werden relativ zur Breite des Leerzeichens der auf den Text angewendeten Schriftart berechnet.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das Wort bzw. die Wörter, auf die das Styling angewendet wird, unlesbar. Bei Text mit einem sehr großen positiven Wert sind die Buchstaben so weit auseinander, dass das Wort bzw. die Wörter wie eine Reihe einzelner, unverbundener Buchstaben erscheinen. Bei Text mit einem sehr großen negativen Wert können sich die Buchstaben so weit überlappen, dass das Wort bzw. die Wörter unkenntlich werden könnten.

Gut lesbare Zeichenabstände müssen fallweise bestimmt werden, da verschiedene Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftarten automatisch ihre Lesbarkeit behalten.

- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsaspekte

In einigen Schriftsystemen sollte kein Zeichenabstand angewendet werden. Zum Beispiel erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Zeichenabstand könnte dazu führen, dass der Text zerbrochen aussieht.

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

### Festlegen von letter-spacing mit Längenwerten

Dieses Beispiel zeigt mehrere Absätze mit unterschiedlichen Längenwerten für `letter-spacing`, sodass Sie diese vergleichen können.

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

Unser CSS wendet einen anderen `letter-spacing`-Wert auf jeden Absatz an.

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

### Vergleich von letter-spacing mit Länge und Prozentwerten

Dieses Beispiel zeigt, dass Prozentwerte für `letter-spacing` nützlich für responsive Textgrößen sind.

Der Code zeigt mehrere Absätze, die dasselbe `letter-spacing` auf Text mit zunehmender Schriftgröße anwenden. Wir bieten die Möglichkeit, zwischen einem Längenwert und einem Prozentwert für `letter-spacing` zu wechseln, damit Sie die responsiven Eigenschaften eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem Längen- und einem Prozentwert für `letter-spacing` zu wechseln.

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

Unser CSS beginnt mit der Anwendung von zunehmenden {{cssxref("font-size")}}-Werten auf jeden nachfolgenden Absatz:

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

Standardmäßig wenden wir einen `letter-spacing`-Wert von `8px` auf alle Absätze an. Wenn das Kontrollkästchen jedoch aktiviert ist, ändern wir den `letter-spacing`-Wert auf `12%`:

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

Zuerst sehen Sie, wie der anfängliche Längenbuchstabenabstand auf die größeren Schriftgrößen angewendet in Ordnung aussieht, aber nicht auf den kleineren Schriftgrößen. Aktivieren Sie nun das Kontrollkästchen und sehen Sie, wie der Prozentbuchstabenabstand auf allen Zeilen angemessen aussieht, da er sich mit der Schriftgröße skaliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG-Attribut {{SVGAttr("letter-spacing")}}
