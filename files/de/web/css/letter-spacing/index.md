---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`letter-spacing`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt das horizontale Abstandverhalten zwischen Textzeichen fest. Dieser Wert wird dem natürlichen Abstand zwischen Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` bewirken, dass Zeichen weiter auseinander rücken, während negative Werte von `letter-spacing` die Zeichen näher zusammenbringen.

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
  - : Der normale Zeichenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{Glossary("user_agent", "User Agent")}}, den Abstand zwischen Zeichen zu ändern, um den Text zu rechtfertigen.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Zwischenzeichenabstand _zusätzlich zu_ dem Standardabstand zwischen Zeichen an. Werte können negativ sein, aber es kann implementierungsspezifische Grenzen geben. User Agents dürfen den Zwischenzeichenabstand nicht weiter erhöhen oder verringern, um den Text zu rechtfertigen.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing`-Wert macht das Wort oder die Worte, auf die das Styling angewendet wird, unleserlich. Für Text, der mit einem sehr großen positiven Wert gestylt ist, werden die Buchstaben so weit auseinanderliegen, dass das Wort oder die Worte wie eine Reihe individueller, nicht verbundener Buchstaben erscheinen. Bei Text, der mit einem sehr großen negativen Wert gestylt ist, überlappen sich die Buchstaben so stark, dass das Wort oder die Worte möglicherweise nicht mehr erkennbar sind.

Lesbare Zeichenabstände müssen im Einzelfall bestimmt werden, da verschiedene Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der sicherstellen kann, dass alle Schriftarten automatisch ihre Lesbarkeit behalten.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsanliegen

In einigen Schriftsystemen sollte kein Zeichenabstand angewendet werden. Zum Beispiel erwarten Sprachen, die das arabische Schriftsystem verwenden, dass verbundene Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Zeichenabstand würde dazu führen, dass der Text gebrochen aussieht.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zeichenabstand festlegen

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
