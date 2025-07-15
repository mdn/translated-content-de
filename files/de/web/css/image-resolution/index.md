---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die intrinsische Auflösung aller Rasterbilder fest, die im oder auf dem Element verwendet werden. Sie beeinflusst Inhaltsbilder wie ersetzte Elemente und generierten Inhalt sowie dekorative Bilder wie `background-image` Bilder.

Die Bildauflösung ist definiert als die Anzahl der Bildpixel pro Längeneinheit, z. B. Pixel pro Zoll. Standardmäßig nimmt CSS eine Auflösung von einem Bildpixel pro CSS-px-Einheit an; jedoch ermöglicht die `image-resolution` Eigenschaft, eine andere Auflösung festzulegen.

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
  - : Gibt die intrinsische Auflösung explizit an.
- `from-image`
  - : Verwendet die intrinsische Auflösung, wie sie durch das Bildformat angegeben ist. Wenn das Bild keine eigene Auflösung spezifiziert, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls wird `1dppx` (1 Bildpixel pro CSS-px-Einheit) angenommen.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel einer ganzen Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} zuordnet. Wenn die Auflösung vom Bild übernommen wird, ist die verwendete intrinsische Auflösung die entsprechend angepasste native Auflösung des Bildes.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hohe dpi für den Druck einstellen

Wenn das Dokument gedruckt wird, verwenden Sie eine höhere Auflösung.

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

Derzeit unterstützt kein Browser diese Eigenschaft.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Fehler: 1086473](https://crbug.com/1086473).
