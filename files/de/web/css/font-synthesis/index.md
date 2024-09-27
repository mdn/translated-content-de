---
title: font-synthesis
slug: Web/CSS/font-synthesis
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

Die **`font-synthesis`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, anzugeben, ob der Browser die fetten, kursiven, Small-Caps- und/oder Tief- und Hochgestellt-Schriftarten synthetisieren darf, wenn sie in der angegebenen Schriftfamilie fehlen.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

- [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style)
- [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps)
- [font-synthesis-position](/de/docs/Web/CSS/font-synthesis-position)

## Syntax

```css
/* none or one or more of the other keyword values */
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: position;
font-synthesis: small-caps style; /* property values can be in any order */
font-synthesis: style small-caps weight position; /* property values can be in any order */

/* Global values */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### Werte

- `none`
  - : Gibt an, dass keine fetten, kursiven oder Small-Caps-Schriftarten durch den Browser synthetisiert werden dürfen.
- `weight`
  - : Gibt an, dass die fehlende fette Schriftart bei Bedarf durch den Browser synthetisiert werden darf.
- `style`
  - : Gibt an, dass die kursive Schriftart bei Bedarf durch den Browser synthetisiert werden darf.
- `small-caps`
  - : Gibt an, dass die Small-Caps-Schriftart bei Bedarf durch den Browser synthetisiert werden darf.
- `position`
  - : Gibt an, dass die tief- und hochgestellte Schriftart bei Bedarf durch den Browser synthetisiert werden darf, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten Standard-Western-Schriftarten enthalten kursive und fette Varianten, und einige Schriftarten enthalten Small-Caps- und Tief-/Hochgestellt-Varianten. Viele Schriftarten tun dies jedoch nicht. Schriftarten, die für chinesische, japanische, koreanische und andere logografische Schriften verwendet werden, tendieren dazu, diese Varianten nicht einzuschließen, und deren Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes verändern. In diesen Fällen kann es wünschenswert sein, die standardmäßige Schriftart-Synthese des Browsers auszuschalten.

Zum Beispiel können Sie mit der Pseudoklasse [:lang()](/de/docs/Web/CSS/:lang) verhindern, dass der Browser für eine Sprache, in diesem Fall Arabisch, fette und kursiv gedrehte Zeichen synthetisiert:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die unten stehende Tabelle zeigt, wie ein Wert der `font-synthesis` Shorthand-Eigenschaft auf die zugehörigen Langhand-Eigenschaften abgebildet wird.

| Wert von font-synthesis            | Wert von [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight) | Wert von [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style) | Wert von [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps) | Wert von [font-synthesis-position](/de/docs/Web/CSS/font-synthesis-position) |
| :--------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `none`                             | `none`                                                                   | `none`                                                                 | `none`                                                                           | `none`                                                                       |
| `weight`                           | `auto`                                                                   | `none`                                                                 | `none`                                                                           | `none`                                                                       |
| `style`                            | `none`                                                                   | `auto`                                                                 | `none`                                                                           | `none`                                                                       |
| `small-caps`                       | `none`                                                                   | `none`                                                                 | `auto`                                                                           | `none`                                                                       |
| `position`                         | `none`                                                                   | `none`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight style`                     | `auto`                                                                   | `auto`                                                                 | `none`                                                                           | `none`                                                                       |
| `weight small-caps`                | `auto`                                                                   | `none`                                                                 | `auto`                                                                           | `none`                                                                       |
| `weight position`                  | `auto`                                                                   | `none`                                                                 | `none`                                                                           | `auto`                                                                       |
| `style small-caps`                 | `none`                                                                   | `auto`                                                                 | `auto`                                                                           | `none`                                                                       |
| `style position`                   | `none`                                                                   | `auto`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight style small-caps`          | `auto`                                                                   | `auto`                                                                 | `auto`                                                                           | `none`                                                                       |
| `weight style position`            | `auto`                                                                   | `auto`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight small-caps position`       | `auto`                                                                   | `none`                                                                 | `auto`                                                                           | `auto`                                                                       |
| `style small-caps position`        | `none`                                                                   | `auto`                                                                 | `auto`                                                                           | `auto`                                                                       |
| `weight style small-caps position` | `auto`                                                                   | `auto`                                                                 | `auto`                                                                           | `auto`                                                                       |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Schriftart-Synthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schriftart-Synthese des Browsers und vergleicht es mit dem, wenn die Synthesefunktion deaktiviert ist. Beachten Sie, dass zwei importierte Schriftarten verwendet werden, um dieses Verhalten zu demonstrieren. Möglicherweise können Sie das Deaktivieren der Schriftart-Synthese bei Schriftarten, die standardmäßig auf Ihrem Betriebssystem verfügbar sind, nicht replizieren.

#### HTML

```html
<pre> DEFAULT </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS DISABLED </pre>
<p class="english no-syn">
  This font supports <strong>bold</strong> and <em>italic.</em>
</p>
<p class="chinese no-syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS ENABLED </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.chinese {
  font-family: "Ma Shan Zheng";
}
.no-syn {
  font-synthesis: none;
}
.syn {
  font-synthesis: style weight;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling font synthesis', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-position")}}
