---
title: font-synthesis
slug: Web/CSS/font-synthesis
l10n:
  sourceCommit: ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{CSSRef}}

Die **`font-synthesis`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, anzugeben, ob der Browser fehlende Fettdruck-, Kursiv-, Kapitälchen- und/oder Tiefgestellt- und Hochgestellt-Schriftarten im angegebenen Schriftarten-Familie synthetisieren darf oder nicht.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style)
- [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps)
- [font-synthesis-position](/de/docs/Web/CSS/font-synthesis-position)

## Syntax

```css
/* none oder einer oder mehrere der anderen Schlüsselwortwerte */
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: position;
font-synthesis: small-caps style; /* Eigenschaftswerte können in beliebiger Reihenfolge sein */
font-synthesis: style small-caps weight position; /* Eigenschaftswerte können in beliebiger Reihenfolge sein */

/* Globale Werte */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### Werte

- `none`
  - : Gibt an, dass kein Fettdruck-, Kursiv- oder Kapitälchen-Schriftstil vom Browser synthetisiert werden darf.
- `weight`
  - : Gibt an, dass der fehlende Fettdruck-Schriftstil vom Browser bei Bedarf synthetisiert werden darf.
- `style`
  - : Gibt an, dass der Kursiv-Schriftstil vom Browser bei Bedarf synthetisiert werden darf.
- `small-caps`
  - : Gibt an, dass der Kapitälchen-Schriftstil vom Browser bei Bedarf synthetisiert werden darf.
- `position`
  - : Gibt an, dass der Tiefgestellt- und Hochgestellt-Schriftstil vom Browser, bei Bedarf, synthetisiert werden darf, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten standardisierten westlichen Schriften enthalten Kursiv- und Fettdruck-Varianten, und einige Schriften enthalten Kapitälchen- sowie Tiefgestellt/Hochgestellt-Varianten. Jedoch viele Schriften tun das nicht. Schriften, die für chinesische, japanische, koreanische und andere logografische Schriften verwendet werden, neigen dazu, diese Varianten nicht zu enthalten und deren Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes verändern. In diesen Fällen kann es wünschenswert sein, die standardmäßige Schriftensynthese des Browsers abzuschalten.

Zum Beispiel, durch die Verwendung der [:lang()](/de/docs/Web/CSS/:lang) Pseudo-Klasse, können Sie den Browser davon abhalten, Fettdruck- und oblique Zeichen für eine Sprache zu synthetisieren, in diesem Fall Arabisch:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die Tabelle unten zeigt, wie ein Wert der `font-synthesis` Kurzform-Eigenschaft auf die zusammengesetzen Langform-Eigenschaften abgebildet wird.

| font-synthesis Wert                | [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight) Wert | [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style) Wert | [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps) Wert | [font-synthesis-position](/de/docs/Web/CSS/font-synthesis-position) Wert |
| :--------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `none`                             | `none`                                                                 | `none`                                                               | `none`                                                                           | `none`                                                                       |
| `weight`                           | `auto`                                                                 | `none`                                                               | `none`                                                                           | `none`                                                                       |
| `style`                            | `none`                                                                 | `auto`                                                               | `none`                                                                           | `none`                                                                       |
| `small-caps`                       | `none`                                                                 | `none`                                                               | `auto`                                                                           | `none`                                                                       |
| `position`                         | `none`                                                                 | `none`                                                               | `none`                                                                           | `auto`                                                                       |
| `weight style`                     | `auto`                                                                 | `auto`                                                               | `none`                                                                           | `none`                                                                       |
| `weight small-caps`                | `auto`                                                                 | `none`                                                               | `auto`                                                                           | `none`                                                                       |
| `weight position`                  | `auto`                                                                 | `none`                                                               | `none`                                                                           | `auto`                                                                       |
| `style small-caps`                 | `none`                                                                 | `auto`                                                               | `auto`                                                                           | `none`                                                                       |
| `style position`                   | `none`                                                                 | `auto`                                                               | `none`                                                                           | `auto`                                                                       |
| `weight style small-caps`          | `auto`                                                                 | `auto`                                                               | `auto`                                                                           | `none`                                                                       |
| `weight style position`            | `auto`                                                                 | `auto`                                                               | `none`                                                                           | `auto`                                                                       |
| `weight small-caps position`       | `auto`                                                                 | `none`                                                               | `auto`                                                                           | `auto`                                                                       |
| `style small-caps position`        | `none`                                                                 | `auto`                                                               | `auto`                                                                           | `auto`                                                                       |
| `weight style small-caps position` | `auto`                                                                 | `auto`                                                               | `auto`                                                                           | `auto`                                                                       |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Schriftensynthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schriftensynthese des Browsers und vergleicht es mit der Deaktivierung des Syntheseverhaltens. Beachten Sie, dass das Beispiel zwei importierte Schriftarten verwendet, um dieses Verhalten zu demonstrieren. Sie können möglicherweise die Deaktivierung der Schriftensynthese bei den standardmäßig auf Ihrem Betriebssystem verfügbaren Schriftarten nicht reproduzieren.

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
