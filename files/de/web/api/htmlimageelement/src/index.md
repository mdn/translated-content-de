---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`src`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), die das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) widerspiegelt, gibt das anzuzeigende Bild im {{HTMLElement("img")}}-Element an.

## Wert

Wenn Sie nur ein einzelnes Bild bereitstellen, anstatt eines Satzes von Bildern, aus dem der Browser die beste Anpassung an die Viewport-Größe und Pixeldichte auswählt, ist das `src`-Attribut eine Zeichenkette, die die URL des gewünschten Bildes angibt. Dies kann entweder direkt im HTML mit dem [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Inhaltsattribut oder programmatisch durch Setzen der `src`-Eigenschaft des Elements festgelegt werden.

Wenn Sie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Inhaltsattribut verwenden, um mehrere Bildoptionen für verschiedene Pixeldichten bereitzustellen, wird die durch das `src`-Attribut angegebene URL auf eine von zwei Weisen verwendet:

- als Fallback für Browser, die `srcset` nicht unterstützen.
- als Äquivalent zur Angabe eines Bildes in `srcset` mit dem Größenmultiplikator `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit geringer Pixeldichte (wie typischen 72 DPI oder 96 DPI Displays) verwendet.

Darüber hinaus, wenn Sie `src` zusammen mit _sowohl_ [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) (oder dem entsprechenden [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Inhaltsattribut) _als auch_ `srcset` verwenden, um ein Bild basierend auf der Viewport-Größe auszuwählen, wird das `src`-Attribut nur als Fallback verwendet für Browser, die `sizes` und `srcset` nicht unterstützen; andernfalls wird es überhaupt nicht verwendet.

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

{{EmbedLiveSample("Specifying_a_single_image", 640, 200)}}

### Verwendung von `src` mit einem Bildsatz

Bei der Verwendung eines Bildsatzes mit der [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Eigenschaft dient `src` entweder als Fallback für ältere Browser oder als `1x`-Größe des Bildes.

#### HTML

#### Ergebnis

### Festlegen eines Fallbacks für Viewport-basierte Auswahl

Bei der Viewport-basierten Auswahl eines Bildes aus einem `srcset` durch zusätzliches Angeben der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft dient die `src`-Eigenschaft als Fallback, das auf Browsern verwendet wird, die die Viewport-basierte Auswahl nicht unterstützen. Browser, die die Viewport-basierte Auswahl _unterstützen_, ignorieren `src` in dieser Situation.

#### HTML

#### Ergebnis

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
