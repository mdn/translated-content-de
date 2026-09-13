---
title: "`padding` CSS-Eigenschaft"
short-title: padding
slug: Web/CSS/Reference/Properties/padding
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`padding`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt den [Auffüllbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#padding_area) auf allen vier Seiten eines Elements gleichzeitig.

{{InteractiveExample("CSS Demo: padding")}}

```css interactive-example-choice
padding: 1em;
```

```css interactive-example-choice
padding: 10% 0;
```

```css interactive-example-choice
padding: 10px 50px 20px;
```

```css interactive-example-choice
padding: 10px 50px 30px 0;
```

```css interactive-example-choice
padding: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

Der Auffüllbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

> [!NOTE]
> Padding schafft zusätzlichen Raum innerhalb eines Elements. Im Gegensatz dazu schafft {{cssxref("margin")}} zusätzlichen Raum _um_ ein Element herum.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## Syntax

```css
/* Apply to all four sides */
padding: 1em;

/* top and bottom | left and right */
padding: 5% 10%;

/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;

/* Global values */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

Die `padding`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Padding für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt das erste Padding für **oben und unten**, das zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt das erste Padding für **oben**, das zweite für **rechts und links**, das dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Paddings in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Padding mit Pixeln einstellen

#### HTML

```html
<h4>This element has moderate padding.</h4>
<h3>The padding is huge in this element!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_padding_with_pixels', '100%', 300)}}

### Padding mit Pixeln und Prozenten einstellen

```css
padding: 5%; /* All sides: 5% padding */

padding: 10px; /* All sides: 10px padding */

padding: 10px 20px; /* top and bottom: 10px padding */
/* left and right: 20px padding */

padding: 10px 3% 20px; /* top:            10px padding */
/* left and right: 3% padding   */
/* bottom:         20px padding */

padding: 1em 3px 30px 5px; /* top:    1em padding  */
/* right:  3px padding  */
/* bottom: 30px padding */
/* left:   5px padding  */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschreibweisen
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
