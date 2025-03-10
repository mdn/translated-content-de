---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das horizontale Abstandsverhalten zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` führen dazu, dass Zeichen weiter auseinander liegen, während negative Werte von `letter-spacing` Zeichen näher zusammenbringen.

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
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar;
}
```

## Syntax

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Werte

- `normal`
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Anders als ein Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User Agent")}}, den Abstand zwischen Zeichen zu ändern, um den Text auszurichten.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Abstand zwischen den Zeichen _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Die Werte können negativ sein, es können jedoch implementierungsspezifische Grenzen bestehen. User Agents dürfen den Abstand zwischen Zeichen nicht weiter erhöhen oder verringern, um Text auszurichten.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing` Wert kann die Lesbarkeit der Worte beeinträchtigen, auf die das Styling angewendet wird. Bei Text mit einem sehr großen positiven Wert sind die Buchstaben so weit auseinander, dass die Worte wie eine Reihe einzelner, unverbundener Buchstaben erscheinen. Bei Text mit einem sehr großen negativen Wert überlappen sich die Buchstaben so stark, dass die Worte möglicherweise unkenntlich werden.

Lesbarer Zeichenabstand muss fallweise bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der automatisch alle Schriftfamilien lesbar hält.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsbedenken

Einige Schriftsysteme sollten keinen Zeichenabstand haben. Zum Beispiel erwarten Sprachen, die das arabische Schriftsystem verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Zeichenabstand würde dazu führen, dass der Text gebrochen aussieht.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zeichenabstand einstellen

#### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

```css
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

{{ EmbedLiveSample('Setting_letter_spacing', 440, 185) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG {{SVGAttr("letter-spacing")}} Attribut
