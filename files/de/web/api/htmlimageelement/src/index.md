---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`src`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), die das HTML [`src`](/de/docs/Web/HTML/Element/img#src) Attribut widerspiegelt, gibt das Bild an, das im {{HTMLElement("img")}} Element angezeigt werden soll.

## Wert

Wenn nur ein einzelnes Bild angegeben wird, anstatt einer Reihe von Bildern, aus denen der Browser das am besten geeignete für die Viewportgröße und Pixeldichte auswählt, ist das `src`-Attribut ein String, der die URL des gewünschten Bildes angibt. Dies kann entweder im HTML selbst mithilfe des [`src`](/de/docs/Web/HTML/Element/img#src) Inhaltsattributs festgelegt werden oder programmatisch durch Festlegen der `src`-Eigenschaft des Elements.

Wenn Sie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Inhaltsattribut verwenden, um mehrere Bildoptionen für unterschiedliche Pixeldichten bereitzustellen, wird die durch das `src`-Attribut angegebene URL auf eine von zwei Arten verwendet:

- als Fallback für Browser, die `srcset` nicht unterstützen.
- als Äquivalent zur Angabe eines Bildes in `srcset` mit dem Größenmultiplikator `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typische 72 DPI oder 96 DPI Anzeigen).

Zusätzlich, wenn Sie `src` zusammen mit _sowohl_ [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) (oder dem entsprechenden [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Inhaltsattribut) _als auch_ `srcset` verwenden, um ein Bild basierend auf der Viewportgröße auszuwählen, wird das `src`-Attribut nur als Fallback für Browser verwendet, die `sizes` und `srcset` nicht unterstützen; andernfalls wird es überhaupt nicht verwendet.

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

### Verwendung von src mit einem Bildersatz

Bei der Verwendung eines Bildersatzes mit der [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) Eigenschaft dient `src` entweder als Fallback für ältere Browser oder als `1x` Größe des Bildes.

#### HTML

#### Ergebnis

### Angeben eines Fallbacks für viewportbasierte Auswahl

Bei der viewportbasierten Auswahl eines Bildes aus einem `srcset` durch zusätzliche Angabe der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) Eigenschaft dient die `src`-Eigenschaft als Fallback für Browser, die keine viewportbasierte Auswahl unterstützen. Browser, die viewportbasierte Auswahl _unterstützen_, ignorieren `src` in dieser Situation.

#### HTML

#### Ergebnis

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
