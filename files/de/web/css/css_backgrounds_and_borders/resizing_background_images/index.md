---
title: Hintergrundbilder mit background-size skalieren
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **{{cssxref("background-size")}}** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Hintergrundbild eines Elements zu skalieren. Damit können Sie das Standardverhalten des Kachelns des Bildes in seiner vollen Größe außer Kraft setzen, indem Sie die Breite und/oder Höhe des Bildes angeben. Dadurch können Sie das Bild nach Bedarf vergrößern oder verkleinern.

## Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten (aus irgendeinem Grund, der wahrscheinlich mit entsetzlich schlechtem Webdesign zusammenhängt) vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln. Dazu können wir einen festen `background-size`-Wert von 150 Pixel verwenden.

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

Sie können auch sowohl die horizontale als auch die vertikale Größe des Bildes angeben, so wie hier:

```css
background-size: 300px 150px;
```

Das Ergebnis sieht folgendermaßen aus:

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

Zusätzlich zu {{cssxref("&lt;length&gt;")}}-Werten bietet die {{cssxref("background-size")}} CSS-Eigenschaft zwei spezielle Größenwerte, `contain` und `cover`. Schauen wir uns diese genauer an.

### `contain`

Der `contain`-Wert gibt an, dass das Hintergrundbild unabhängig von der Größe des umgebenden Rahmens so skaliert werden sollte, dass jede Seite so groß wie möglich ist, ohne die Länge der entsprechenden Rahmenseite zu überschreiten. Versuchen Sie, das untenstehende Beispiel zu verkleinern oder zu vergrößern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeContain">
  <p>Versuchen Sie, dieses Element zu verkleinern oder zu vergrößern!</p>
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

Der `cover`-Wert gibt an, dass das Hintergrundbild so bemessen werden sollte, dass es so klein wie möglich ist, während beide Dimensionen größer oder gleich der entsprechenden Größe des Containers sind. Versuchen Sie, das untenstehende Beispiel zu verkleinern oder zu vergrößern, um dies in Aktion zu sehen.

#### HTML

```html
<div class="bgSizeCover">
  <p>Versuchen Sie, dieses Element zu verkleinern oder zu vergrößern!</p>
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
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds)
