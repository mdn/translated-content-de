---
title: image-resolution
slug: Web/CSS/Reference/Properties/image-resolution
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die intrinsische Auflösung aller Rasterbilder an, die in oder auf dem Element verwendet werden. Sie beeinflusst Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image` Bilder.

Die Bildauflösung wird als Anzahl der Bildpixel pro Längeneinheit definiert, z. B. Pixel pro Zoll. Standardmäßig nimmt CSS eine Auflösung von einem Bildpixel pro CSS-Px-Einheit an; jedoch ermöglicht die `image-resolution` Eigenschaft die Angabe einer anderen Auflösung.

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
  - : Verwendet die intrinsische Auflösung, wie sie durch das Bildformat spezifiziert wurde. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls wird standardmäßig `1dppx` (1 Bildpixel pro CSS-Px-Einheit) verwendet.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächsten Wert gerundet, der ein Bildpixel auf eine ganzzahlige Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} abbilden würde. Wenn die Auflösung aus dem Bild genommen wird, ist die verwendete intrinsische Auflösung die native Auflösung des Bildes, ähnlich angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keinen Effekt auf Vektorbilder.

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

### Bildauflösung mit Fallback verwenden

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle des Standardwerts 1dppx.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützt kein Browser diese Funktion.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Bug: 1086473](https://crbug.com/1086473).
