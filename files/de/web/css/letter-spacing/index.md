---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`letter-spacing`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das horizontale Abstandsverhalten zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen Zeichen beim Rendern des Texts hinzugefügt. Positive Werte von `letter-spacing` bewirken, dass Zeichen weiter auseinander liegen, während negative Werte die Zeichen näher zusammenbringen.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

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
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` ermöglicht dieses Schlüsselwort dem [User-Agent](/de/docs/Glossary/user_agent), den Abstand zwischen Zeichen zu ändern, um den Text zu blocksatzgerecht zu verteilen.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Werte können negativ sein, es kann jedoch implementierungsspezifische Begrenzungen geben. User-Agents dürfen den Zeichenzwischenraum nicht weiter vergrößern oder verkleinern, um den Text zu blocksatzgerecht zu verteilen.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht die Wörter, auf die die Gestaltung angewendet wird, unleserlich. Bei Text, der mit einem sehr großen positiven Wert gestaltet ist, sind die Buchstaben so weit voneinander entfernt, dass die Wörter wie eine Reihe einzelner, unverbundener Buchstaben erscheinen. Bei Text, der mit einem sehr großen negativen Wert gestaltet ist, überlappen sich die Buchstaben so stark, dass die Wörter möglicherweise nicht erkennbar sind.

Lesbarer Buchstabenabstand muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien ihre Lesbarkeit automatisch beibehalten.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierung

In einigen Schriftsystemen sollte kein Buchstabenabstand angewendet werden. Beispielsweise erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Das Anwenden von Buchstabenabstand lässt den Text gebrochen aussehen.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Buchstabenabstand festlegen

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
