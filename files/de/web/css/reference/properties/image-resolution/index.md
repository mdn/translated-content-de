---
title: "`image-resolution` CSS property"
short-title: image-resolution
slug: Web/CSS/Reference/Properties/image-resolution
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die intrinsische Auflösung aller Rasterbilder, die in oder auf dem Element verwendet werden. Sie wirkt sich auf Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie auf dekorative Bilder wie `background-image`-Bilder aus.

Die Bildauflösung wird als Anzahl der Bildpixel pro Längeneinheit definiert, z. B. Pixel pro Inch. Standardmäßig nimmt CSS eine Auflösung von einem Bildpixel pro CSS-`px`-Einheit an; die `image-resolution`-Eigenschaft erlaubt jedoch, eine andere Auflösung anzugeben.

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

- {{cssxref("resolution")}}
  - : Gibt die intrinsische Auflösung explizit an.
- `from-image`
  - : Verwendet die intrinsische Auflösung, wie sie vom Bildformat angegeben wird. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls wird `1dppx` (1 Bildpixel pro CSS-`px`-Einheit) als Standard verwendet.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel auf eine ganze Zahl von {{Glossary("device_pixel", "Gerätepixeln")}} abbilden würde. Wenn die Auflösung aus dem Bild entnommen wird, wird die verwendete intrinsische Auflösung wie die native Auflösung des Bildes entsprechend angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer hohen DPI für den Druck

Beim Drucken des Dokuments eine höhere Auflösung verwenden.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Verwendung der Bildauflösung mit Fallback

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, wird 300dpi anstelle des Standards von 1dppx verwendet.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützt kein Browser dieses Feature.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Fehler: 1086473](https://crbug.com/1086473).
