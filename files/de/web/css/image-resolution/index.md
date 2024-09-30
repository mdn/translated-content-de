---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die intrinsische Auflösung aller Rasterbilder an, die im oder auf dem Element verwendet werden. Sie beeinflusst Inhaltsbilder wie ersetzte Elemente und erzeugten Inhalt sowie dekorative Bilder wie `background-image`.

Die Bildauflösung wird als die Anzahl der Bildpixel pro Längeneinheit definiert, z.B. Pixel pro Inch. Standardmäßig geht CSS von einer Auflösung von einem Bildpixel pro CSS-Px-Einheit aus; jedoch erlaubt die `image-resolution`-Eigenschaft, eine andere Auflösung anzugeben.

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
  - : Verwendet die intrinsische Auflösung, wie sie im Bildformat angegeben ist. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls wird auf `1dppx` (1 Bildpixel pro CSS-Px-Einheit) zurückgegriffen.
- `snap`
  - : Wenn das `snap`-Schlüsselwort angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel auf eine ganze Anzahl von Gerätepixeln abbilden würde. Wenn die Auflösung vom Bild übernommen wird, ist die verwendete intrinsische Auflösung die native Auflösung des Bildes, entsprechend angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung einer hohen DPI für den Druck

Beim Drucken des Dokuments sollte eine höhere Auflösung verwendet werden.

```css
@media print {
  .myimage {
    image-resolution: 300dpi;
  }
}
```

### Bildauflösung mit Fallback verwenden

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle der Standardauflösung von 1dppx.

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
- [Chromium-Fehler: 1086473](https://crbug.com/1086473).
