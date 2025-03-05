---
title: font-synthesis
slug: Web/CSS/font-synthesis
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`font-synthesis`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft erlaubt Ihnen, festzulegen, ob der Browser die fettgedruckten, kursiven, Kapitälchen- und/oder Tief- und Hochstellungsschriftarten synthetisieren darf, wenn sie in der angegebenen Schriftfamilie fehlen.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## Bestandteile

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

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
  - : Gibt an, dass keine fettgedruckte, kursiven oder Kapitälchen-Schriftarten vom Browser synthetisiert werden dürfen.
- `weight`
  - : Gibt an, dass die fehlende fettgedruckte Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `style`
  - : Gibt an, dass die kursive Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `small-caps`
  - : Gibt an, dass die Kapitälchen-Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `position`
  - : Gibt an, dass die Tief- und Hochstellungsschriftarten bei Bedarf vom Browser synthetisiert werden dürfen, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten standardmäßigen westlichen Schriftarten beinhalten kursiven und fettgedruckte Varianten, einige Schriftarten beinhalten Kapitälchen- und Tief- und Hochstellung-Varianten. Allerdings tun viele Schriftarten dies nicht. Schriftarten, die für Chinesisch, Japanisch, Koreanisch und andere logografische Schriftsysteme verwendet werden, enthalten diese Varianten tendenziell nicht, und die Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes verändern. In diesen Fällen kann es wünschenswert sein, die Standardschrift-Synthese des Browsers auszuschalten.

Beispielsweise können Sie mit der Pseudo-Klasse [:lang()](/de/docs/Web/CSS/:lang) den Browser daran hindern, fettgedruckte und kursive Zeichen für eine Sprache zu synthetisieren, in diesem Fall Arabisch:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der Shorthand-Eigenschaft `font-synthesis` auf die zugehörigen Langform-Eigenschaften abgebildet wird.

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

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Schriftarten-Synthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schriftarten-Synthese des Browsers und vergleicht es mit dem Verhalten, wenn die Synthese ausgeschaltet ist. Beachten Sie, dass im Beispiel zwei importierte Schriftarten verwendet werden, um dieses Verhalten zu demonstrieren. Möglicherweise können Sie die Deaktivierung der Schriftarten-Synthese bei Schriftarten, die standardmäßig auf Ihrem Betriebssystem verfügbar sind, nicht replizieren.

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
