---
title: buchstabenabstand
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`letter-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das horizontale Abstandsverhalten zwischen Textzeichen fest. Dieser Wert wird zum natürlichen Abstand zwischen Zeichen beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` bewirken, dass Zeichen weiter auseinander liegen, während negative Werte von `letter-spacing` Zeichen näher zusammenbringen.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## Syntax

```css
/* Schlüsselwortwert */
letter-spacing: normal;

/* <length> Werte */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Globale Werte */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Werte

- `normal`
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` erlaubt dieses Schlüsselwort dem {{glossary("user agent")}}, den Abstand zwischen Zeichen zu ändern, um den Text zu rechtfertigen.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _zusätzlich zum_ Standardabstand zwischen Zeichen an. Werte können negativ sein, es kann jedoch implementierungsspezifische Grenzen geben. Benutzeragenten dürfen den Zeichenabstand nicht weiter erhöhen oder verringern, um den Text zu rechtfertigen.

## Barrierefreiheit

Ein großer positiver oder negativer `letter-spacing` Wert macht das/die Wort(e), auf das/die die Formatierung angewandt wird, unleserlich. Bei Text mit einem sehr großen positiven Wert werden die Buchstaben so weit auseinanderliegen, dass das/die Wort(e) wie eine Reihe einzelner, unverbundener Buchstaben erscheinen. Bei Text mit einem sehr großen negativen Wert überlappen sich die Buchstaben so weit, dass das/die Wort(e) möglicherweise nicht erkennbar sind.

Lesbarer Buchstabenabstand muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit beibehalten.

- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierung

In einigen Schriftsystemen sollte kein Buchstabenabstand angewandt werden. Zum Beispiel erwarten Sprachen, die die arabische Schrift verwenden, dass verbundene Buchstaben optisch verbunden bleiben, wie im folgenden Beispiel. Wird Buchstabenabstand angewendet, sieht der Text unterbrochen aus.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
