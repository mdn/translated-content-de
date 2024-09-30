---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft
**`src`**, die das HTML [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut widerspiegelt, gibt das Bild an, das im {{HTMLElement("img")}}
Element angezeigt werden soll.

## Wert

Wenn nur ein einzelnes Bild bereitgestellt wird, anstatt eines Satzes von Bildern, aus dem der Browser das beste für die Viewport-Größe und Pixeldichte auswählt, ist das
`src`-Attribut ein String, der die URL des gewünschten Bildes angibt. Dies kann entweder direkt im HTML durch das
[`src`](/de/docs/Web/HTML/Element/img#src) Inhaltsattribut gesetzt werden oder programmgesteuert durch Setzen der
`src`-Eigenschaft des Elements.

Wenn Sie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Inhaltsattribut verwenden, um mehrere
Bildoptionen für verschiedene Pixeldichten bereitzustellen, wird die URL, die durch das
`src`-Attribut angegeben wird, auf eine von zwei Arten verwendet:

- als Fallback für Browser, die `srcset` nicht unterstützen.
- als Äquivalent zur Angabe eines Bildes in `srcset` mit dem
  Größemultiplikator `1x`; das bedeutet, dass das durch `src` angegebene Bild
  auf Bildschirmen mit niedriger Dichte (wie typischen 72 DPI oder 96 DPI Displays) verwendet wird.

Wenn Sie `src` zusammen mit _beiden_
[`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) (oder dem
entsprechenden [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Inhaltsattribut) _und_
`srcset` verwenden, um ein Bild basierend auf der Viewport-Größe zu wählen, wird das
`src`-Attribut nur als Fallback für Browser verwendet, die
`sizes` und `srcset` nicht unterstützen; ansonsten wird es überhaupt nicht verwendet.

## Beispiele

### Ein einzelnes Bild angeben

#### HTML

```html
<img
  src="grapefruit-slice-332-332.jpg"
  width="160"
  alt="Slices of grapefruit, looking yummy." />
```

#### Ergebnis

{{EmbedLiveSample("Specifying_a_single_image", 640,200)}}

### Verwendung von src mit einem Bildsatz

Beim Verwenden eines Satzes von Bildern mit der [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
Eigenschaft dient `src` entweder als Fallback für ältere Browser oder als
`1x` Größe des Bildes.

#### HTML

#### Ergebnis

### Ein Fallback für viewport-basierte Auswahl angeben

Bei der viewport-basierten Auswahl eines Bildes aus einem `srcset` durch
gleichzeitige Angabe der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) Eigenschaft dient die
`src`-Eigenschaft als Fallback für Browser, die keine
viewport-basierte Auswahl unterstützen. Browser, die eine
viewport-basierte Auswahl unterstützen, werden `src` in diesem Fall ignorieren.

#### HTML

#### Ergebnis

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
