---
title: "`letter-spacing` CSS property"
short-title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: d62aeb53943b4861f18a3e895d32b020e09ce0aa
---

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Abstand zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen den Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` verteilen die Zeichen weiter auseinander, während negative Werte von `letter-spacing` die Zeichen näher zusammenbringen.

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
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User-Agent")}}, den Abstand zwischen Zeichen zu ändern, um den Text zu rechtfertigen.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Während Werte negativ sein können, können diese auf implementierungsspezifische Grenzen beschränkt sein. Benutzeragenten dürfen den Zeichenabstand nicht weiter erhöhen oder verringern, um den Text auszurichten.

    Prozentwerte werden relativ zur Breite des Leerzeichens der auf den Text angewendeten Schriftart berechnet.

    > [!NOTE]
    > Wenn `letter-spacing` ungleich null ist, wenden Benutzeragenten keine optionalen Ligaturen an, wie die `liga` (Standardligaturen) und `clig` (kontextuelle Ligaturen) OpenType-Features, die normalerweise von {{cssxref("font-variant-ligatures")}} gesteuert werden.
    > Diese Funktionen können explizit mit {{cssxref("font-feature-settings")}} wieder aktiviert werden.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das Wort/die Wörter, auf die das Styling angewendet wird, unleserlich. Bei Texten, die mit einem sehr großen positiven Wert gestylt sind, werden die Buchstaben so weit auseinander stehen, dass das Wort/die Wörter wie eine Reihe von einzelnen, nicht verbundenen Buchstaben erscheinen. Bei Texten, die mit einem sehr großen negativen Wert gestylt sind, können sich die Buchstaben so stark überlappen, dass das Wort/die Wörter möglicherweise nicht mehr erkennbar sind.

Ein lesbarer Buchstabenabstand muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der automatisch die Lesbarkeit aller Schriftfamilien sicherstellt.

- [MDN Verstehen von WCAG, Richtlinien 1.4 Erklärung](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsbedenken

Einige Schriftsysteme sollten keinen Buchstabenabstand haben. Zum Beispiel erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben optisch verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Buchstabenabstand kann dazu führen, dass der Text gebrochen aussieht.

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

### Einstellen von letter-spacing mit Längenwerten

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

Unser CSS wendet jedem Absatz einen unterschiedlichen `letting-spacing`-Wert zu.

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

### Vergleich von letter-spacing, das mit Längen und Prozentwerten eingestellt ist

Dieses Beispiel zeigt, dass Prozentwerte für `letter-spacing` nützlich für das responsive Textsizing sind.

Der Code zeigt mehrere Absätze, die denselben `letter-spacing`-Wert auf Text mit steigendem Schriftgrad haben. Wir bieten eine Funktionalität an, zwischen einem Längen- und einem Prozentwert für `letter-spacing` zu wechseln, damit Sie die responsiven Eigenschaften der Verwendung eines Prozentwerts beobachten können.

#### HTML

Das HTML enthält mehrere {{htmlelement("p")}}-Elemente mit Textinhalt und ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), das wir verwenden werden, um zwischen einem Längen- und einem Prozentwert für `letter-spacing` zu wechseln.

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

Unser CSS beginnt damit, jeden folgenden Absatz mit steigenden {{cssxref("font-size")}}-Werten zu versehen:

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

Zunächst beachten Sie, wie der anfängliche Buchstabenabstandswert in der Länge bei größeren Schriftgrößen in Ordnung aussieht, aber bei kleineren Schriftgrößen nicht gut aussieht. Schalten Sie nun das Kontrollkästchen um und bemerken Sie, wie der prozentuale Buchstabenabstand auf allen Zeilen geeignet aussieht, da er sich mit der Schriftgröße anpasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG-{{SVGAttr("letter-spacing")}}-Attribut
