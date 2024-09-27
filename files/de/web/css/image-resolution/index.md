---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die intrinsische Auflösung aller Rasterbilder fest, die im oder auf dem Element verwendet werden. Sie betrifft Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image`-Bilder.

Die Bildauflösung wird als Anzahl der Bildpixel pro Längeneinheit definiert, z.B. Pixel pro Zoll. Standardmäßig geht CSS von einer Auflösung von einem Bildpixel pro CSS-px-Einheit aus; die `image-resolution`-Eigenschaft ermöglicht jedoch die Spezifikation einer anderen Auflösung.

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
  - : Verwendet die intrinsische Auflösung, wie sie vom Bildformat angegeben wird. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls wird der Standardwert `1dppx` (1 Bildpixel pro CSS-px-Einheit) angenommen.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel einer ganzen Zahl von Gerätepixeln zuordnet. Wenn die Auflösung vom Bild übernommen wird, wird die verwendete intrinsische Auflösung ähnlich angepasste native Auflösung des Bildes verwendet.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer hohen dpi für den Druck

Beim Drucken des Dokuments eine höhere Auflösung verwenden.

```css
@media print {
  .myimage {
    image-resolution: 300dpi;
  }
}
```

### Verwendung der Bildauflösung mit Fallback

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle des Standardwerts von 1dppx.

```css
.myimage {
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
