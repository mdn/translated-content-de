---
title: "`letter-spacing` CSS property"
short-title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`letter-spacing`** legt den Abstand zwischen Textzeichen fest. Dieser Wert wird beim Rendern des Textes zum natürlichen Abstand zwischen Zeichen hinzugefügt. Positive Werte von `letter-spacing` vergrößern den Abstand zwischen Zeichen, während negative Werte von `letter-spacing` Zeichen näher zusammenrücken lassen.

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `normal`
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Anders als ein Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User Agent")}}, den Abstand zwischen Zeichen zu verändern, um Text im Blocksatz auszurichten.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Gibt zusätzlichen Abstand zwischen Zeichen _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Obwohl Werte negativ sein können, können sie auf implementationsspezifische Grenzen beschränkt sein. User Agents dürfen den Abstand zwischen Zeichen zur Ausrichtung von Text im Blocksatz nicht weiter vergrößern oder verkleinern.

    Prozentwerte werden relativ zur Breite des Leerzeichens der auf den Text angewendeten Schriftart berechnet.

    > [!NOTE]
    > Wenn `letter-spacing` nicht null ist, wenden User Agents optionale Ligaturen wie die OpenType-Features `liga` (Standardligaturen) und `clig` (kontextabhängige Ligaturen), die normalerweise durch {{cssxref("font-variant-ligatures")}} gesteuert werden, nicht an.
    > Diese Features können mit {{cssxref("font-feature-settings")}} explizit wieder aktiviert werden.

## Barrierefreiheit

Ein großer positiver oder negativer Wert für `letter-spacing` macht die Wörter, auf die das Styling angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert formatiert ist, liegen die Buchstaben so weit auseinander, dass die Wörter wie eine Reihe einzelner, nicht miteinander verbundener Buchstaben erscheinen. Bei Text, der mit einem sehr großen negativen Wert formatiert ist, können sich die Buchstaben so weit überlappen, dass die Wörter möglicherweise nicht mehr erkennbar sind.

Lesbarer Zeichenabstand muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzelnen Wert, der sicherstellen kann, dass alle Schriftfamilien automatisch lesbar bleiben.

- [MDN: Erläuterungen zum Verständnis von WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.8 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Hinweise zur Internationalisierung

Bei einigen geschriebenen Sprachen sollte kein Zeichenabstand angewendet werden. Beispielsweise erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Das Anwenden von Zeichenabstand kann dazu führen, dass der Text unterbrochen aussieht.

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

### Zeichenabstand mit Längenwerten festlegen

Dieses Beispiel zeigt mehrere Absätze mit unterschiedlichen festgelegten `letter-spacing`-Längenwerten, sodass Sie sie vergleichen können.

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

Unser CSS weist jedem Absatz einen unterschiedlichen `letting-spacing`-Wert zu.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("length-letter-spacing", "100%", 200) }}

### Vergleich von mit Länge und Prozentwert festgelegtem Zeichenabstand

Dieses Beispiel zeigt, dass prozentuale `letter-spacing`-Werte für responsive Textgrößen nützlich sind.

Der Code zeigt mehrere Absätze mit demselben `letter-spacing` für Text mit zunehmender Schriftgröße. Wir stellen eine Funktion bereit, um zwischen einem `letter-spacing`-Längenwert und einem prozentualen `letter-spacing`-Wert umzuschalten, damit Sie die responsiven Eigenschaften eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt sowie ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden, um zwischen einem `letter-spacing`-Längenwert und einem prozentualen `letter-spacing`-Wert umzuschalten.

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

Unser CSS beginnt damit, jedem aufeinanderfolgenden Absatz zunehmende {{cssxref("font-size")}}-Werte zuzuweisen:

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

Standardmäßig wenden wir auf alle Absätze einen `letter-spacing`-Wert von `8px` an. Wenn das Kontrollkästchen aktiviert ist, ändern wir den `letter-spacing`-Wert jedoch in `12%`:

```css live-sample___percentage-versus-length
p {
  letter-spacing: 8px;
}

p:has(~ form > input:checked) {
  letter-spacing: 12%;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

Beachten Sie zunächst, dass der anfängliche Zeichenabstand mit Längenwert bei den größeren Schriftgrößen gut aussieht, bei den kleineren Schriftgrößen jedoch nicht gut wirkt. Aktivieren Sie nun das Kontrollkästchen und beachten Sie, dass der prozentuale Zeichenabstand in allen Zeilen angemessen aussieht, da er mit der Schriftgröße skaliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG-Attribut {{SVGAttr("letter-spacing")}}
