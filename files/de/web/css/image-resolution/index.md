---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die intrinsische Auflösung aller Rasterbilder an, die in oder auf dem Element verwendet werden. Sie betrifft Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image`.

Die Bildauflösung wird als Anzahl der Bildpixel pro Längeneinheit definiert, z.B. Pixel pro Zoll. Standardmäßig geht CSS von einer Auflösung von einem Bildpixel pro CSS px Einheit aus; die Eigenschaft `image-resolution` erlaubt jedoch die Angabe einer anderen Auflösung.

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
  - : Verwendet die intrinsische Auflösung, wie sie durch das Bildformat angegeben wird. Wenn das Bild seine eigene Auflösung nicht angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls ist der Standard `1dppx` (1 Bildpixel pro CSS px Einheit).
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung zur nächsten Zahl gerundet, die ein Bildpixel einer ganzen Zahl von Gerätepixeln zuordnet. Wenn die Auflösung vom Bild genommen wird, dann ist die verwendete intrinsische Auflösung die nativen Auflösung des Bildes, ebenfalls angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkungen auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine hohe dpi für den Druck einstellen

Verwenden Sie beim Drucken des Dokuments eine höhere Auflösung.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Verwenden der Bildauflösung mit Fallback

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle des Standards 1dppx.

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
- [Chromium Bug: 1086473](https://crbug.com/1086473).
