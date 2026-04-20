---
title: "`clip` CSS property"
short-title: clip
slug: Web/CSS/Reference/Properties/clip
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Deprecated_Header}}

> [!WARNING]
> Autoren wird empfohlen, stattdessen die Eigenschaft {{cssxref("clip-path")}} zu verwenden.

Die **`clip`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen sichtbaren Bereich eines Elements. Die `clip`-Eigenschaft gilt nur für absolut positionierte Elemente, das heißt, Elemente mit {{cssxref("position","position:absolute")}} oder {{cssxref("position","position:fixed")}}.

## Syntax

```css
/* Keyword value */
clip: auto;

/* <shape> values */
clip: rect(1px, 10em, 3rem, 2ch);

/* Global values */
clip: inherit;
clip: initial;
clip: revert;
clip: revert-layer;
clip: unset;
```

### Werte

- `rect()`
  - : Ein Rechteck, definiert durch eine `rect()`-Funktion der Form `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` sind Abstände vom _inneren oberen Rand des Rahmens_ der Box, während `<right>` und `<left>` Abstände vom _inneren linken Rand des Rahmens_ der Box sind – also vom Umfang des Innenraums der Box.

    Die Werte `<top>`, `<right>`, `<bottom>`, und `<left>` können entweder eine {{cssxref("&lt;length&gt;")}} oder `auto` sein. Wenn der Wert einer Seite `auto` ist, wird das Element an der _inneren Rahmenkante_ dieser Seite abgeschnitten.

> [!NOTE]
> Die in der veralteten `clip`-Eigenschaft verwendete `rect()`-{{cssxref("shape")}}-Funktion unterscheidet sich von der CSS-{{cssxref("basic-shape/rect","rect()")}}-Funktion, die verwendet wird, um eine CSS-{{cssxref("basic-shape")}} zu definieren.

- `auto`
  - : Das Element wird nicht abgeschnitten (Standard). Dies ist anders als `rect(auto, auto, auto, auto)`, welches das Element an den inneren Rahmenkanten abschneidet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zuschneiden eines Bildes

```html
<p class="dotted-border">
  <img src="macarons.png" alt="Original graphic" />
  <img id="top-left" src="macarons.png" alt="Graphic clipped to upper left" />
  <img id="middle" src="macarons.png" alt="Graphic clipped towards middle" />
  <img
    id="bottom-right"
    src="macarons.png"
    alt="Graphic clipped to bottom right" />
</p>
```

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 390px;
  height: 400px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 400px;
  clip: rect(0, 130px, 90px, 0);
}

#middle {
  left: 270px;
  clip: rect(100px, 260px, 190px, 130px);
}

#bottom-right {
  left: 140px;
  clip: rect(200px, 390px, 290px, 260px);
}
```

{{EmbedLiveSample('clipping_an_image', '', '450px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("clip-path")}}
- {{cssxref("position")}}
- {{cssxref("mask")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-outside")}}
