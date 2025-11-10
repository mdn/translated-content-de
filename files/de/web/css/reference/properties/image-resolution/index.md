---
title: image-resolution
slug: Web/CSS/Reference/Properties/image-resolution
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die intrinsische Auflösung aller Rasterbilder fest, die im oder auf dem Element verwendet werden. Sie beeinflusst Inhaltsbilder wie ersetzte Elemente und generierten Inhalt sowie dekorative Bilder wie `background-image`.

Die Bildauflösung wird als Anzahl von Bildpixeln pro Längeneinheit definiert, z. B. Pixel pro Zoll. Standardmäßig geht CSS von einer Auflösung von einem Bildpixel pro CSS-Px-Einheit aus; jedoch erlaubt die Eigenschaft `image-resolution`, eine andere Auflösung anzugeben.

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
  - : Verwendet die intrinsische Auflösung, wie sie vom Bildformat angegeben wird. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls gegeben), andernfalls wird standardmäßig `1dppx` (1 Bildpixel pro CSS-Px-Einheit) angenommen.
- `snap`
  - : Wenn das `snap` Schlüsselwort angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel einer ganzzahligen Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} zuordnet. Wenn die Auflösung vom Bild stammt, wird die verwendete intrinsische Auflösung analog angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Wirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer hohen DPI für den Druck

Beim Drucken des Dokuments wird eine höhere Auflösung verwendet.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Verwendung der Bildauflösung mit Fallback

Verwendet die Auflösung vom Bild. Falls das Bild keine Auflösung hat, wird 300dpi anstelle des Standardwerts 1dppx verwendet.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Bug: 1086473](https://crbug.com/1086473).
