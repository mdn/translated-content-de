---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{CSSRef}}{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die intrinsische Auflösung aller Rasterbilder, die im oder auf dem Element verwendet werden. Sie betrifft Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image` Bilder.

Die Bildauflösung wird als Anzahl der Bildpunkte pro Längeneinheit definiert, z.B. Pixel pro Zoll. Standardmäßig nimmt CSS eine Auflösung von einem Bildpunkt pro CSS-Px-Einheit an; jedoch ermöglicht die `image-resolution` Eigenschaft, eine andere Auflösung anzugeben.

## Syntax

```css
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Global values */
image-resolution: inherit;
image-resolution: initial;
image-resolution: revert;
image-resolution: revert-layer;
image-resolution: unset;
```

### Werte

- {{cssxref("&lt;resolution&gt;")}}
  - : Spezifiziert die intrinsische Auflösung explizit.
- `from-image`
  - : Verwendet die durch das Bildformat angegebene intrinsische Auflösung. Wenn das Bild seine eigene Auflösung nicht spezifiziert, wird die explizit angegebene Auflösung verwendet (falls gegeben), andernfalls wird `1dppx` (1 Bildpunkt pro CSS-Px-Einheit) als Standard verwendet.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, ist die berechnete Auflösung die spezifizierte Auflösung, gerundet auf den nächsten Wert, der einen Bildpunkt auf eine ganze Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} abbilden würde. Wenn die Auflösung vom Bild übernommen wird, ist die verwendete intrinsische Auflösung die entsprechend angepasste native Auflösung des Bildes.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keinen Einfluss auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer hohen dpi für den Druck

Beim Drucken des Dokuments verwenden Sie eine höhere Auflösung.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Verwendung der Bildauflösung mit Fallback

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300 dpi anstelle des Standards von 1dppx.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Kein Browser unterstützt derzeit diese Eigenschaft.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Bug: 1086473](https://crbug.com/1086473).
