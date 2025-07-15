---
title: Hintergrundbilder mit background-size skalieren
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **{{cssxref("background-size")}}** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Hintergrundbild eines Elements zu skalieren, indem Sie das Standardverhalten überschreiben, das Bild in voller Größe kachelartig anzuzeigen. Sie können die Breite und/oder Höhe des Bildes angeben und so das Bild nach Wunsch vergrößern oder verkleinern.

## Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten (aus Gründen, die wahrscheinlich mit schrecklich schlechtem Seitendesign zu tun haben) vier Kopien dieses Bildes in ein 300x300 Pixel großes Element kacheln. Dazu können wir einen festen `background-size`-Wert von 150 Pixeln verwenden.

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

## Dehnen eines Bildes

Sie können auch sowohl die horizontale als auch vertikale Größe des Bildes angeben, wie hier:

```css
background-size: 300px 150px;
```

Das Ergebnis sieht so aus:

![Firefox Logo gestreckt](stretched_firefox_logo.png)

## Vergrößern eines Bildes

Am anderen Ende des Spektrums können Sie ein Bild im Hintergrund vergrößern. Hier skalieren wir ein 32x32 Pixel Favicon auf 300x300 Pixel:

![MDN Logo skaliert](scaled_mdn_logo.png)

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

Wie Sie sehen können, ist das CSS im Wesentlichen identisch, abgesehen vom Namen der Bilddatei.

## Spezielle Werte: `contain` und `cover`

Neben {{cssxref("&lt;length&gt;")}}-Werten bietet die {{cssxref("background-size")}} CSS-Eigenschaft zwei spezielle Größenwerte, `contain` und `cover`. Lassen Sie uns diese ansehen.

### `contain`

Der Wert `contain` gibt an, dass das Hintergrundbild unabhängig von der Größe des enthaltenen Rahmens so skaliert werden soll, dass jede Seite so groß wie möglich ist, ohne die Länge der entsprechenden Seite des Containers zu überschreiten. Versuchen Sie, das Beispiel unten zu ändern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeContain">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  resize: both;
  overflow: scroll;
}
```

#### Ergebnis

{{EmbedLiveSample('contain', 250, 250)}}

### `cover`

Der Wert `cover` gibt an, dass das Hintergrundbild so dimensioniert werden sollte, dass es so klein wie möglich ist, während beide Dimensionen größer oder gleich der entsprechenden Größe des Containers sind. Versuchen Sie, das Beispiel unten zu ändern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeCover">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  resize: both;
  overflow: scroll;
}
```

#### Ergebnis

{{EmbedLiveSample('cover', 250, 250)}}

## Siehe auch

- {{cssxref("background-size")}}
- {{cssxref("background")}}
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds) Leitfaden
