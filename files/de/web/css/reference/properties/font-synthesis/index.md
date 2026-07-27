---
title: "`font-synthesis` CSS-Eigenschaft"
short-title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`font-synthesis`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen zu bestimmen, ob der Browser die fettgedruckte, kursiv geschriebene, Kapitälchen- und/oder tief- und hochgestellte Schriftart synthetisieren darf, wenn diese in der angegebenen Schriftfamilie fehlen.

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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass keine fettgedruckte, kursive oder Kapitälchen-Schriftart vom Browser synthetisiert werden darf.
- `weight`
  - : Gibt an, dass die fehlende fettgedruckte Schriftart vom Browser synthetisiert werden darf, wenn nötig.
- `style`
  - : Gibt an, dass die kursiv geschriebene Schriftart vom Browser synthetisiert werden darf, wenn nötig.
- `small-caps`
  - : Gibt an, dass die Kapitälchen-Schriftart vom Browser synthetisiert werden darf, wenn nötig.
- `position`
  - : Gibt an, dass die tief- und hochgestellte Schriftart vom Browser synthetisiert werden darf, wenn nötig, bei Verwendung von {{cssxref("font-variant-position")}}.

## Beschreibung

Die meisten standardmäßigen westlichen Schriften enthalten kursive und fettgedruckte Varianten, und einige Schriften beinhalten Kapitälchen- und tief- oder hochgestellte Varianten. Viele Schriften tun dies jedoch nicht. Schriften, die für chinesische, japanische, koreanische und andere logografische Schreibweisen verwendet werden, enthalten diese Varianten normalerweise nicht, und ihre Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes ändern. In diesen Fällen kann es sinnvoll sein, die Standardschrifttyp-Synthese des Browsers zu deaktivieren.

Zum Beispiel können Sie mit der Pseudoklasse [:lang()](/de/docs/Web/CSS/Reference/Selectors/:lang) verhindern, dass der Browser fettgedruckte und schräge Zeichen für eine Sprache synthetisiert, in diesem Fall Arabisch:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der `font-synthesis`-Kurzform-Eigenschaft auf die zugehörigen Langform-Eigenschaften abgebildet wird.

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

### Deaktivieren der Schrifttyp-Synthese

Dieses Beispiel zeigt das Standardverhalten der Schrifttyp-Synthese des Browsers und vergleicht es mit dem Verhalten, wenn die Synthese deaktiviert ist. Beachten Sie, dass das Beispiel zwei importierte Schriften verwendet, um dieses Verhalten zu demonstrieren. Es könnte Ihnen nicht möglich sein, die Deaktivierung der Schrifttyp-Synthese bei den auf Ihrem Betriebssystem verfügbaren Standardschriften nachzubilden.

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
