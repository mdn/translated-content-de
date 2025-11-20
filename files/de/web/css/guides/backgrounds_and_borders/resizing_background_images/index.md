---
title: Ändern der Größe von Hintergrundbildern mit `background-size`
short-title: Ändern der Größe von Hintergrundbildern
slug: Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Die **{{cssxref("background-size")}}** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, die Größe des Hintergrundbildes eines Elements zu ändern, indem sie das Standardverhalten des Kachelns des Bildes in voller Größe überschreibt. Indem Sie die Breite und/oder Höhe des Bildes angeben, können Sie das Bild nach Bedarf vergrößern oder verkleinern.

## Kachelung eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten (aus Gründen, die wahrscheinlich mit einem erschreckend schlechten Seitendesign zusammenhängen) vier Kopien dieses Bildes in einem 300x300-Pixel-Element kacheln. Dazu können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url("https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png");
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

## Strecken eines Bildes

Sie können auch die horizontale und vertikale Größe des Bildes angeben, wie folgt:

```css
background-size: 300px 150px;
```

Das Ergebnis sieht so aus:

![Firefox-Logo gestreckt](stretched_firefox_logo.png)

## Vergrößern eines Bildes

Am anderen Ende des Spektrums können Sie ein Bild im Hintergrund vergrößern. Hier skalieren wir ein 32x32 Pixel Favicon auf 300x300 Pixel:

![MDN Logo vergrößert](scaled_mdn_logo.png)

```css
.square2 {
  background-image: url("favicon.png");
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

Zusätzlich zu {{cssxref("&lt;length&gt;")}} Werten bietet die {{cssxref("background-size")}} CSS-Eigenschaft zwei spezielle Größenwerte, `contain` und `cover`. Schauen wir uns diese an.

### `contain`

Der Wert `contain` gibt an, dass das Hintergrundbild, unabhängig von der Größe der enthaltenen Box, so skaliert werden soll, dass jede Seite so groß wie möglich ist, ohne die Länge der entsprechenden Seite des Containers zu überschreiten. Versuchen Sie, das folgende Beispiel zu ändern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeContain">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url("https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png");
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

Der Wert `cover` gibt an, dass das Hintergrundbild so dimensioniert werden soll, dass es so klein wie möglich ist, während beide Dimensionen größer oder gleich der entsprechenden Größe des Containers sind. Versuchen Sie, das folgende Beispiel zu ändern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeCover">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url("https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png");
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
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Skalieren von SVG-Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
