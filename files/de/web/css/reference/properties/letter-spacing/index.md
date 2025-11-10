---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das horizontale Abstandverhalten zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen Zeichen hinzugefügt, während der Text gerendert wird. Positive Werte von `letter-spacing` führen dazu, dass Zeichen weiter auseinandergerückt werden, während negative Werte von `letter-spacing` die Zeichen näher zusammenbringen.

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
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User-Agent")}}, den Abstand zwischen Zeichen zu verändern, um den Text zu rechtfertigen.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Abstand zwischen Zeichen _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Werte können negativ sein, aber es könnte implementierungsspezifische Grenzen geben. User-Agents dürfen den Zeichenraum möglicherweise nicht weiter vergrößern oder verkleinern, um den Text zu rechtfertigen.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das Wort bzw. die Wörter, auf die das Styling angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert gestaltet wurde, sind die Buchstaben so weit auseinander, dass die Wörter wie einzelne, unverbundene Buchstaben erscheinen. Bei Text, der mit einem sehr großen negativen Wert gestaltet wurde, überlappen sich die Buchstaben so stark, dass die Wörter möglicherweise nicht mehr erkennbar sind.

Lesbare Zeichenabstände müssen im Einzelfall bestimmt werden, da verschiedene Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der automatisch die Lesbarkeit aller Schriftarten sicherstellt.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungskonzerne

Bei einigen Schriftsprachen sollte kein Zeichenabstand angewendet werden. Zum Beispiel erwarten Sprachen, die das arabische Schriftsystem verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Zeichenabstand lässt den Text gebrochen erscheinen.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formelle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Zeichenabstand

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
