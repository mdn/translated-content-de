---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`src`** des {{domxref("HTMLImageElement")}} spiegelt das HTML-Attribut [`src`](/de/docs/Web/HTML/Element/img#src) wider und gibt das Bild an, das im {{HTMLElement("img")}}-Element angezeigt werden soll.

## Wert

Wenn Sie nur ein einzelnes Bild bereitstellen, anstatt eines Satzes von Bildern, aus dem der Browser das am besten geeignete für die Viewport-Größe und Pixeldichte des Displays auswählt, ist das `src`-Attribut ein String, der die URL des gewünschten Bildes angibt. Dies kann entweder direkt im HTML mit dem [`src`](/de/docs/Web/HTML/Element/img#src)-Content-Attribut oder programmgesteuert durch Setzen der `src`-Eigenschaft des Elements geschehen.

Wenn Sie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Content-Attribut verwenden, um mehrere Bildoptionen für unterschiedliche Pixeldichten bereitzustellen, wird die durch das `src`-Attribut angegebene URL auf eine von zwei Weisen verwendet:

- als Fallback für Browser, die `srcset` nicht unterstützen.
- als Gegenstück zur Angabe eines Bildes in `srcset` mit dem Größtenmultiplikator `1x`; das bedeutet, dass das durch `src` angegebene Bild auf Bildschirmen mit niedriger Dichte verwendet wird (wie etwa bei typischen 72-DPI oder 96-DPI-Displays).

Darüber hinaus wird, wenn Sie `src` zusammen mit _beiden_ {{domxref("HTMLImageElement.sizes", "sizes")}} (oder dem entsprechenden [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Content-Attribut) _und_ `srcset` verwenden, um ein Bild basierend auf der Viewport-Größe auszuwählen, das `src`-Attribut nur als Fallback für Browser genutzt, die `sizes` und `srcset` nicht unterstützen; andernfalls wird es überhaupt nicht verwendet.

## Beispiele

### Angabe eines einzelnen Bildes

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

Bei Verwendung eines Bildsatzes mit der {{domxref("HTMLImageElement.srcset", "srcset")}}-Eigenschaft dient `src` entweder als Fallback für ältere Browser oder als `1x`-Größe des Bildes.

#### HTML

#### Ergebnis

### Angabe eines Fallbacks für Viewport-basierte Auswahl

Bei der Verwendung der Viewport-basierten Auswahl eines Bildes aus einem `srcset` durch zusätzliche Angabe der {{domxref("HTMLImageElement.sizes", "sizes")}}-Eigenschaft dient die `src`-Eigenschaft als Fallback für Browser, die die Viewport-basierte Auswahl nicht unterstützen. Browser, die _sehr wohl_ die Viewport-basierte Auswahl unterstützen, werden `src` in diesem Fall ignorieren.

#### HTML

#### Ergebnis

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
