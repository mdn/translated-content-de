---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das horizontale Abstandsverhalten zwischen Textzeichen fest. Dieser Wert wird zum natürlichen Abstand zwischen Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` bewirken, dass Zeichen weiter auseinander liegen, während negative Werte von `letter-spacing` Zeichen näher zusammenbringen.

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
  font-family: Amstelvar, serif;
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
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` ermöglicht dieses Schlüsselwort dem {{Glossary("user_agent", "Benutzeragenten")}}, den Abstand zwischen Zeichen zu ändern, um Text auszurichten.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _zusätzlich zum_ Standardabstand zwischen Zeichen an. Werte können negativ sein, aber es können implementierungsspezifische Grenzen bestehen. Benutzeragenten dürfen den Zeichenabstand nicht weiter vergrößern oder verkleinern, um Text auszurichten.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das/die Wort(e), auf das/die die Gestaltung angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert gestaltet ist, werden die Buchstaben so weit auseinander liegen, dass das/die Wort(e) wie eine Reihe von einzelnen, unverbundenen Buchstaben erscheint. Bei Text, der mit einem sehr großen negativen Wert gestaltet ist, überlappen sich die Buchstaben so stark, dass das/die Wort(e) möglicherweise nicht erkennbar ist/sind.

Lesbare Zeichenabstände müssen im Einzelfall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit behalten.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungskonzerns

In einigen Schriftsprachen sollte kein Zeichenabstand angewendet werden. Beispielsweise erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Zeichenabstand führt dazu, dass der Text gebrochen aussieht.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Zeichenabstands

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
