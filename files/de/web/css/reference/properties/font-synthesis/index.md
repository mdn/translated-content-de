---
title: "`font-synthesis` CSS-Eigenschaft"
short-title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-synthesis`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS)-Eigenschaft erlaubt es, festzulegen, ob der Browser die Fettschrift, Kursivschrift, Kapitälchen und/oder Tief- und Hochgestellt-Schriftarten synthetisieren darf, wenn sie in der angegebenen `font-family` fehlen.

{{InteractiveExample("CSS Demo: font-synthesis")}}

```css interactive-example-choice
font-synthesis: weight style small-caps;
```

```css interactive-example-choice
font-synthesis: none;
```

```css interactive-example-choice
font-synthesis: weight;
```

```css interactive-example-choice
font-synthesis: style;
```

```css interactive-example-choice
font-synthesis: small-caps;
```

```css interactive-example-choice
font-synthesis: position;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <p class="english">
      This font does not include <span class="bold">bold</span>,
      <span class="italic">italic</span>,
      <span class="small-caps">small-caps</span>, and
      <span class="sub">subscript</span> or
      <span class="sup">superscript</span> variants.
    </p>
    <p class="chinese">
      中文排版通常不用<span class="bold">粗体</span>或<span class="italic"
        >斜体</span
      >，也不会使用<span class="small-caps">小型大写字母</span>和<span
        class="sub"
        >下标</span
      ><span class="sup">上标</span>变体。
    </p>
  </div>
</section>
```

```css interactive-example
@import "https://fonts.googleapis.com/css2?family=Oxygen&display=swap";
@import "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap";

.english {
  font-size: 1.2em;
  font-family: "Oxygen", sans-serif;
}

.chinese {
  font-size: 1.2em;
  font-family: "Ma Shan Zheng", cursive;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-caps {
  font-variant: small-caps;
}

.sub {
  font-variant: sub;
}

.sup {
  font-variant: super;
}
```

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- [font-synthesis-style](/de/docs/Web/CSS/Reference/Properties/font-synthesis-style)
- [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps)
- [font-synthesis-position](/de/docs/Web/CSS/Reference/Properties/font-synthesis-position)

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
  - : Gibt an, dass keine Fettschrift, Kursivschrift oder Kapitälchen vom Browser synthetisiert werden dürfen.
- `weight`
  - : Gibt an, dass die fehlende Fettschrift vom Browser synthetisiert werden darf, falls erforderlich.
- `style`
  - : Gibt an, dass die Kursivschrift vom Browser synthetisiert werden darf, falls erforderlich.
- `small-caps`
  - : Gibt an, dass die Kapitälchen vom Browser synthetisiert werden dürfen, falls erforderlich.
- `position`
  - : Gibt an, dass die tiefgestellten und hochgestellten Schriftarten vom Browser synthetisiert werden dürfen, falls erforderlich, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten standardmäßigen westlichen Schriftarten umfassen Kursiv- und Fettschriftvarianten, und einige Schriftarten umfassen Kapitälchen- und Tief/Hochgestellt-Varianten. Viele Schriftarten tun dies jedoch nicht. Schriftarten, die für Chinesisch, Japanisch, Koreanisch und andere logografische Schriften verwendet werden, neigen dazu, diese Varianten nicht einzuschließen, und das Synthetisieren könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes ändern. In diesen Fällen kann es wünschenswert sein, die standardmäßige Schrift-Synthese des Browsers auszuschalten.

Zum Beispiel kann mittels der [:lang()](/de/docs/Web/CSS/Reference/Selectors/:lang) Pseudo-Klasse das Synthetisieren von fetten und schrägen Zeichen für eine Sprache, in diesem Fall Arabisch, ausgeschaltet werden:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der Shorthand-Eigenschaft `font-synthesis` den entsprechenden Einzel-Eigenschaften zugeordnet wird.

| Wert von font-synthesis            | Wert von [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight) | Wert von [font-synthesis-style](/de/docs/Web/CSS/Reference/Properties/font-synthesis-style) | Wert von [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps) | Wert von [font-synthesis-position](/de/docs/Web/CSS/Reference/Properties/font-synthesis-position) |
| :--------------------------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| `none`                             | `none`                                                                                        | `none`                                                                                      | `none`                                                                                                | `none`                                                                                            |
| `weight`                           | `auto`                                                                                        | `none`                                                                                      | `none`                                                                                                | `none`                                                                                            |
| `style`                            | `none`                                                                                        | `auto`                                                                                      | `none`                                                                                                | `none`                                                                                            |
| `small-caps`                       | `none`                                                                                        | `none`                                                                                      | `auto`                                                                                                | `none`                                                                                            |
| `position`                         | `none`                                                                                        | `none`                                                                                      | `none`                                                                                                | `auto`                                                                                            |
| `weight style`                     | `auto`                                                                                        | `auto`                                                                                      | `none`                                                                                                | `none`                                                                                            |
| `weight small-caps`                | `auto`                                                                                        | `none`                                                                                      | `auto`                                                                                                | `none`                                                                                            |
| `weight position`                  | `auto`                                                                                        | `none`                                                                                      | `none`                                                                                                | `auto`                                                                                            |
| `style small-caps`                 | `none`                                                                                        | `auto`                                                                                      | `auto`                                                                                                | `none`                                                                                            |
| `style position`                   | `none`                                                                                        | `auto`                                                                                      | `none`                                                                                                | `auto`                                                                                            |
| `weight style small-caps`          | `auto`                                                                                        | `auto`                                                                                      | `auto`                                                                                                | `none`                                                                                            |
| `weight style position`            | `auto`                                                                                        | `auto`                                                                                      | `none`                                                                                                | `auto`                                                                                            |
| `weight small-caps position`       | `auto`                                                                                        | `none`                                                                                      | `auto`                                                                                                | `auto`                                                                                            |
| `style small-caps position`        | `none`                                                                                        | `auto`                                                                                      | `auto`                                                                                                | `auto`                                                                                            |
| `weight style small-caps position` | `auto`                                                                                        | `auto`                                                                                      | `auto`                                                                                                | `auto`                                                                                            |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausschalten der Schrift-Synthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schrift-Synthese des Browsers und vergleicht es mit dem, wenn das Syntheseverhalten ausgeschaltet ist. Beachten Sie, dass im Beispiel zwei importierte Schriftarten verwendet werden, um dieses Verhalten zu demonstrieren. Es ist möglicherweise nicht möglich, das Ausschalten der Schrift-Synthese bei auf Ihrem Betriebssystem verfügbaren Standardschriftarten zu reproduzieren.

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
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";
@import "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}
.chinese {
  font-family: "Ma Shan Zheng", cursive;
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
