---
title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`font-synthesis`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob der Browser die fett, kursiv, Kapitälchen und/oder Hoch- und Tiefgestellt-Schriftarten synthetisieren darf, wenn diese in der angegebenen Schriftfamilie fehlen.

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
  font-family: "Oxygen";
  font-style: normal;
  font-weight: normal;
  src: url("https://fonts.gstatic.com/s/oxygen/v14/2sDfZG1Wl4LcnbuKjk0m.woff2")
    format("woff2");
}

/* [108] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.108.woff2")
    format("woff2");
}
/* [110] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.110.woff2")
    format("woff2");
}
/* [117] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.117.woff2")
    format("woff2");
}
/* [118] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.118.woff2")
    format("woff2");
}
/* [119] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.119.woff2")
    format("woff2");
}

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

## Zusammengestzte Eigenschaften

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

- `none`
  - : Gibt an, dass kein fett, kursiv oder Kapitälchen-Schriftart vom Browser synthetisiert werden darf.
- `weight`
  - : Gibt an, dass die fehlende fett-Schriftart vom Browser bei Bedarf synthetisiert werden kann.
- `style`
  - : Gibt an, dass die kursiv-Schriftart vom Browser bei Bedarf synthetisiert werden kann.
- `small-caps`
  - : Gibt an, dass die Kapitälchen-Schriftart vom Browser bei Bedarf synthetisiert werden kann.
- `position`
  - : Gibt an, dass die hoch- und tiefgestellte Schriftart vom Browser synthetisiert werden kann, wenn {{cssxref("font-variant-position")}} verwendet wird.

## Beschreibung

Die meisten standardmäßigen westlichen Schriften enthalten kursiv und fett Varianten, und einige Schriften enthalten Kapitälchen und hoch-/tiefgestellte Varianten. Allerdings tun dies viele Schriften nicht. Schriften für Chinesisch, Japanisch, Koreanisch und andere logographische Schriften neigen dazu, diese Varianten nicht zu enthalten, und deren Synthese könnte die Lesbarkeit beeinträchtigen oder die Bedeutung des Textes verändern. In solchen Fällen kann es wünschenswert sein, die standardmäßige Schrift-Synthese des Browsers abzuschalten.

Zum Beispiel kann die Schrift-Synthese für eine Sprache, in diesem Fall Arabisch, mit der Pseudo-Klasse [:lang()](/de/docs/Web/CSS/Reference/Selectors/:lang) deaktiviert werden:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

Die folgende Tabelle zeigt, wie ein Wert der Kurzform-Eigenschaft `font-synthesis` den langformigen, zusammengesetzten Eigenschaften zugeordnet wird.

| font-synthesis Wert                | [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight) Wert | [font-synthesis-style](/de/docs/Web/CSS/Reference/Properties/font-synthesis-style) Wert | [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps) Wert | [font-synthesis-position](/de/docs/Web/CSS/Reference/Properties/font-synthesis-position) Wert |
| :--------------------------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| `none`                             | `none`                                                                                    | `none`                                                                                  | `none`                                                                                            | `none`                                                                                        |
| `weight`                           | `auto`                                                                                    | `none`                                                                                  | `none`                                                                                            | `none`                                                                                        |
| `style`                            | `none`                                                                                    | `auto`                                                                                  | `none`                                                                                            | `none`                                                                                        |
| `small-caps`                       | `none`                                                                                    | `none`                                                                                  | `auto`                                                                                            | `none`                                                                                        |
| `position`                         | `none`                                                                                    | `none`                                                                                  | `none`                                                                                            | `auto`                                                                                        |
| `weight style`                     | `auto`                                                                                    | `auto`                                                                                  | `none`                                                                                            | `none`                                                                                        |
| `weight small-caps`                | `auto`                                                                                    | `none`                                                                                  | `auto`                                                                                            | `none`                                                                                        |
| `weight position`                  | `auto`                                                                                    | `none`                                                                                  | `none`                                                                                            | `auto`                                                                                        |
| `style small-caps`                 | `none`                                                                                    | `auto`                                                                                  | `auto`                                                                                            | `none`                                                                                        |
| `style position`                   | `none`                                                                                    | `auto`                                                                                  | `none`                                                                                            | `auto`                                                                                        |
| `weight style small-caps`          | `auto`                                                                                    | `auto`                                                                                  | `auto`                                                                                            | `none`                                                                                        |
| `weight style position`            | `auto`                                                                                    | `auto`                                                                                  | `none`                                                                                            | `auto`                                                                                        |
| `weight small-caps position`       | `auto`                                                                                    | `none`                                                                                  | `auto`                                                                                            | `auto`                                                                                        |
| `style small-caps position`        | `none`                                                                                    | `auto`                                                                                  | `auto`                                                                                            | `auto`                                                                                        |
| `weight style small-caps position` | `auto`                                                                                    | `auto`                                                                                  | `auto`                                                                                            | `auto`                                                                                        |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Font-Synthese deaktivieren

Dieses Beispiel zeigt das standardmäßige Verhalten der Schrift-Synthese des Browsers und vergleicht es mit dem deaktivierten Synthese-Verhalten. Beachten Sie, dass im Beispiel zwei importierte Schriftarten verwendet werden, um dieses Verhalten zu demonstrieren. Möglicherweise können Sie das Abschalten der Schrift-Synthese bei standardmäßig auf Ihrem Betriebssystem verfügbaren Schriftarten nicht reproduzieren.

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
