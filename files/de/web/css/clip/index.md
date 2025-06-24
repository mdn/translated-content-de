---
title: clip
slug: Web/CSS/clip
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Deprecated_Header}}

> [!WARNING]
> Autoren wird empfohlen, stattdessen die {{cssxref("clip-path")}}-Eigenschaft zu verwenden.

Die **`clip`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen sichtbaren Bereich eines Elements. Die `clip`-Eigenschaft gilt nur für absolut positionierte Elemente – das heißt, Elemente mit {{cssxref("position","position:absolute")}} oder {{cssxref("position","position:fixed")}}.

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

  - : Ein Rechteck, definiert mit einer `rect()`-Funktion der Form `rect(<top>, <right>, <bottom>, <left>)`. Die `<top>`- und `<bottom>`-Werte sind Abstände vom _inneren oberen Rand des Rahmens_ der Box, während `<right>` und `<left>` Abstände vom _inneren linken Rand des Rahmens_ der Box sind, also die Ausdehnung des Padding-Bereichs.

    Die Werte `<top>`, `<right>`, `<bottom>` und `<left>` können entweder eine {{cssxref("&lt;length&gt;")}} oder `auto` sein. Wenn der Wert einer Seite `auto` ist, wird das Element bis zur _inneren Rahmenkante_ dieser Seite beschnitten.

> [!NOTE]
> Die `rect()` {{cssxref("shape")}}-Funktion, die in der veralteten `clip`-Eigenschaft verwendet wird, unterscheidet sich von der CSS {{cssxref("basic-shape/rect","rect()")}}-Funktion, die verwendet wird, um eine CSS {{cssxref("basic-shape")}} zu definieren.

- `auto`
  - : Das Element wird nicht beschnitten (Standard). Dies unterscheidet sich von `rect(auto, auto, auto, auto)`, welches das Element bis zu den inneren Rahmenkanten beschneidet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Bild beschneiden

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
