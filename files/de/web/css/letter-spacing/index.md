---
title: letter-spacing
slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`letter-spacing`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das horizontale Abstandsverhalten zwischen Textzeichen fest. Dieser Wert wird der natürlichen Zeichensetzung beim Rendern des Textes hinzugefügt. Positive Werte von `letter-spacing` führen dazu, dass Zeichen weiter auseinander liegen, während negative Werte von `letter-spacing` Zeichen näher zusammenbringen.

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
  - : Der normale Buchstabenabstand für die aktuelle Schriftart. Im Gegensatz zu einem Wert von `0` ermöglicht dieses Schlüsselwort dem {{Glossary("user_agent", "Benutzeragenten")}}, den Abstand zwischen Zeichen zu ändern, um den Text auszurichten.
- {{cssxref("&lt;length&gt;")}}
  - : Gibt zusätzlichen Zeichenabstand _neben_ dem Standardabstand zwischen Zeichen an. Werte können negativ sein, es können jedoch implementierungsspezifische Grenzen bestehen. Benutzeragenten dürfen den Zeichenabstand nicht weiter erhöhen oder verringern, um den Text auszurichten.

## Barrierefreiheit

Ein großer positiver oder negativer Wert von `letter-spacing` macht das/den Wort(e), auf das/die das Styling angewendet wird, unlesbar. Bei Text, der mit einem sehr großen positiven Wert gestylt ist, sind die Buchstaben so weit auseinander, dass das/die Wort(e) wie eine Reihe von einzelnen, unverbundenen Buchstaben erscheint. Bei Text, der mit einem sehr großen negativen Wert gestylt ist, überlappen sich die Buchstaben so stark, dass das/die Wort(e) möglicherweise unkenntlich wird/werden.

Lesbarer Buchstabenabstand muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit beibehalten.

- [MDN Verständnis der WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalisierungsbelange

Bei einigen Schriftsystemen sollte kein Buchstabenabstand angewendet werden. Zum Beispiel erwarten Sprachen, die das arabische Schriftsystem verwenden, dass zusammenhängende Buchstaben visuell verbunden bleiben, wie im folgenden Beispiel. Die Anwendung von Buchstabenabstand würde dazu führen, dass der Text gebrochen aussieht.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Buchstabenabstands

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
