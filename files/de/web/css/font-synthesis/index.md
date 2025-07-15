---
title: font-synthesis
slug: Web/CSS/font-synthesis
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-synthesis`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob der Browser die fett, kursiv, Kapitälchen und/oder tief- und hochgestellten Schriftarten synthetisieren darf, wenn diese in der angegebenen Schriftfamilie fehlen.

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
      中文排版通常不运用<span class="bold">粗体</span>或<span class="italic"
        >斜体</span
      ><span class="sub">常不</span><span class="sup">运用</span>。
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: Oxygen;
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/s/oxygen/v14/2sDfZG1Wl4LcnbuKjk0m.woff2")
    format("woff2");
}

/* [108] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.108.woff2")
    format("woff2");
}
/* [110] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.110.woff2")
    format("woff2");
}
/* [117] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.117.woff2")
    format("woff2");
}
/* [118] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.118.woff2")
    format("woff2");
}
/* [119] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.119.woff2")
    format("woff2");
}

.english {
  font-size: 1.2em;
  font-family: Oxygen, sans-serif;
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

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Gibt an, dass keine fetten, kursiven oder Kapitälchen-Schriftarten durch den Browser synthetisiert werden dürfen.
- `weight`
  - : Gibt an, dass die fehlende fette Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `style`
  - : Gibt an, dass die kursive Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `small-caps`
  - : Gibt an, dass die Kapitälchen-Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `position`
  - : Gibt an, dass die tief- und hochgestellten Schriftarten bei Bedarf vom Browser synthetisiert werden dürfen, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten standardmäßigen westlichen Schriftarten enthalten kursive und fette Varianten, und einige Schriftarten enthalten Kapitälchen sowie tief-/hochgestellte Varianten. Viele Schriftarten jedoch nicht. Schriftarten, die für Chinesisch, Japanisch, Koreanisch und andere logografische Schriften verwendet werden, enthalten diese Varianten oft nicht, und deren Synthese könnte die Lesbarkeit behindern oder die Bedeutung des Textes ändern. In diesen Fällen kann es sinnvoll sein, die standardmäßige Schriftartensynthese des Browsers zu deaktivieren.

Zum Beispiel können Sie mit der Pseudoklasse [:lang()](/de/docs/Web/CSS/:lang) den Browser daran hindern, für eine Sprache — in diesem Fall Arabisch — fette und kursiv gedruckte Zeichen zu synthetisieren:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der Kurzform `font-synthesis`-Eigenschaft den entsprechenden Langform-Eigenschaften zugeordnet ist.

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

### Deaktivieren der Schriftartensynthese

Dieses Beispiel zeigt das standardmäßige Verhalten der Schriftartensynthese des Browsers und vergleicht es mit dem Verhalten, wenn die Synthese ausgeschaltet ist. Beachten Sie, dass das Beispiel zwei importierte Schriftarten verwendet, um dieses Verhalten zu demonstrieren. Möglicherweise können Sie das Ausschalten der Schriftartensynthese nicht auf Schriftarten replizieren, die standardmäßig auf Ihrem Betriebssystem verfügbar sind.

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
