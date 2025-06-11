---
title: Hintergrundbilder mit background-size skalieren
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die **{{cssxref("background-size")}}** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Hintergrundbild eines Elements zu skalieren. Dabei wird das Standardverhalten, das Bild in voller Größe zu kacheln, außer Kraft gesetzt, indem die Breite und/oder Höhe des Bildes angegeben wird. Auf diese Weise können Sie das Bild nach Bedarf vergrößern oder verkleinern.

## Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten (aus wahrscheinlich entsetzlich schlechten Designgründen) vier Kopien dieses Bildes in ein 300x300 Pixel großes Element kacheln. Dazu können wir einen festen `background-size` Wert von 150 Pixel verwenden.

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

## Strecken eines Bildes

Sie können auch sowohl die horizontalen als auch die vertikalen Größen des Bildes angeben, wie folgt:

```css
background-size: 300px 150px;
```

Das Ergebnis sieht so aus:

![Firefox-Logo gestreckt](stretched_firefox_logo.png)

## Vergrößern eines Bildes

Am anderen Ende des Spektrums können Sie ein Bild im Hintergrund vergrößern. Hier skalieren wir ein 32x32 Pixel großes Favicon auf 300x300 Pixel:

![MDN-Logo skaliert](scaled_mdn_logo.png)

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

## Spezialwerte: `contain` und `cover`

Zusätzlich zu {{cssxref("&lt;length&gt;")}} Werten bietet die {{cssxref("background-size")}} CSS Eigenschaft zwei spezielle Größenwerte, `contain` und `cover`. Lassen Sie uns einen Blick auf diese werfen.

### `contain`

Der `contain` Wert gibt an, dass das Hintergrundbild, unabhängig von der Größe des enthaltenen Kastens, so skaliert werden sollte, dass jede Seite so groß wie möglich ist, ohne die Länge der entsprechenden Seite des Containers zu überschreiten. Probieren Sie aus, das folgende Beispiel zu skalieren, um dies in Aktion zu sehen.

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

Der `cover` Wert gibt an, dass das Hintergrundbild so skaliert werden sollte, dass es so klein wie möglich ist, während sichergestellt wird, dass beide Dimensionen größer oder gleich der entsprechenden Größe des Containers sind. Probieren Sie aus, das folgende Beispiel zu skalieren, um dies in Aktion zu sehen.

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
