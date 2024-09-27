---
title: clip
slug: Web/CSS/clip
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Deprecated_Header}}

> [!WARNING]
> Wo möglich, wird Autoren empfohlen, stattdessen die neuere Eigenschaft {{cssxref("clip-path")}} zu verwenden.

Die **`clip`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen sichtbaren Bereich eines Elements. Die `clip`-Eigenschaft gilt nur für absolut positionierte Elemente — also Elemente mit {{cssxref("position","position:absolute")}} oder {{cssxref("position","position:fixed")}}.

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

- {{cssxref("shape")}}

  - : Eine rechteckige {{cssxref("shape")}} in der Form `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` sind Versätze von der _inneren oberen Rahmenkante_ des Kastens, während `<right>` und `<left>` Versätze von der _inneren linken Rahmenkante_ des Kastens sind — das heißt, vom Umfang der Pufferzone.

    Die Werte `<top>`, `<right>`, `<bottom>`, und `<left>` können entweder eine {{cssxref("&lt;length&gt;")}} oder `auto` sein. Wenn der Wert irgendeiner Seite `auto` ist, wird das Element auf die innere Rahmenkante dieser Seite beschnitten.

- `auto`
  - : Das Element wird nicht beschnitten (Standard). Dies unterscheidet sich von `rect(auto, auto, auto, auto)`, das auf die inneren Rahmenkanten des Elements zuschneidet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beschneiden eines Bildes

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

- Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen {{cssxref("clip-path")}}.
- Verwandte CSS-Eigenschaften:
  - {{cssxref("text-overflow")}}
  - {{cssxref("white-space")}}
  - {{cssxref("overflow-x")}}
  - {{cssxref("overflow-y")}}
  - {{cssxref("overflow")}}
  - {{cssxref("display")}}
  - {{cssxref("position")}}
