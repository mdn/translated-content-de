---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das horizontale Abstandverhalten zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` führen dazu, dass Zeichen weiter auseinanderliegen, während negative Werte von `letter-spacing` Zeichen näher zusammenbringen.

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
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem [User-Agent](/de/docs/Glossary/user_agent), den Abstand zwischen Zeichen zu verändern, um den Text auszurichten.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen interkaraktären Abstand _zusätzlich zu_ dem standardmäßigen Abstand zwischen Zeichen an. Die Werte können negativ sein, es kann jedoch implementationsspezifische Beschränkungen geben. User-Agents dürfen den interkaraktären Abstand nicht weiter erhöhen oder verringern, um Text auszurichten.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht die Wörter, auf die das Styling angewendet wird, unleserlich. Bei Texten, die mit einem sehr großen positiven Wert gestylt werden, sind die Buchstaben so weit auseinander, dass die Wörter wie eine Serie von einzelnen, nicht verbundenen Buchstaben erscheinen. Bei Texten, die mit einem sehr großen negativen Wert gestylt werden, überlappen sich die Buchstaben so stark, dass die Wörter möglicherweise nicht erkennbar sind.

Ein lesbarer Buchstabenabstand muss fallweise bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen universellen Wert, der automatisch sicherstellt, dass alle Schriftfamilien ihre Lesbarkeit beibehalten.

- [MDN Understanding WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsbelange

In einigen Schriftsystemen sollte kein Buchstabenabstand angewendet werden. Beispielsweise erwarten Sprachen, die das arabische Schriftsystem verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Buchstabenabstand würde dazu führen, dass der Text gebrochen aussieht.

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
