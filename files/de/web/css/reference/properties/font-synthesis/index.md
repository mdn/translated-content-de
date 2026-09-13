---
title: "`font-synthesis` CSS-Eigenschaft"
short-title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`font-synthesis`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es, anzugeben, ob der Browser fehlende Fettdruck-, Kursiv-, Kapitälchen- und/oder Tief- und Hochstellung-Schriftarten synthetisieren darf, wenn sie in der angegebenen Schriftfamilie fehlen.

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

## Einzelbestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass der Browser keine Fettdruck-, Kursiv- oder Kapitälchen-Schriftart synthetisieren darf.
- `weight`
  - : Gibt an, dass der fehlende Fettdruck bei Bedarf vom Browser synthetisiert werden darf.
- `style`
  - : Gibt an, dass die kursive Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `small-caps`
  - : Gibt an, dass die Kapitälchen-Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `position`
  - : Gibt an, dass die Tief- und Hochstellung-Schriftart vom Browser synthetisiert werden darf, wenn sie benötigt wird, bei Verwendung von {{cssxref("font-variant-position")}}.

## Beschreibung

Die meisten standardmäßigen westlichen Schriftarten enthalten Kursiv- und Fettdruckvarianten, und einige Schriftarten enthalten Kapitälchen- und Tief-/Hochstellung-Varianten. Viele Schriftarten jedoch nicht. Schriftarten, die für Chinesische, Japanische, Koreanische und andere logographische Schriften verwendet werden, enthalten diese Varianten normalerweise nicht, und deren Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes verändern. In diesen Fällen kann es sinnvoll sein, die standardmäßige Schriftartensynthese des Browsers abzuschalten.

Zum Beispiel können Sie mit der Pseudo-Klasse [:lang()](/de/docs/Web/CSS/Reference/Selectors/:lang) den Browser daran hindern, fettgedruckte und schräge Zeichen für eine Sprache zu synthetisieren, in diesem Fall Arabisch:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der Kurzform `font-synthesis`-Eigenschaft den ausführlichen Langform-Eigenschaften zugeordnet wird.

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

### Deaktivierung der Schriftartensynthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schriftartensynthese des Browsers und vergleicht es mit dem Verhalten, wenn die Synthese deaktiviert ist. Beachten Sie, dass das Beispiel zwei importierte Schriftarten verwendet, um dieses Verhalten zu demonstrieren. Möglicherweise können Sie die Deaktivierung der Schriftartensynthese nicht mit Standardschriftarten Ihres Betriebssystems replizieren.

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
