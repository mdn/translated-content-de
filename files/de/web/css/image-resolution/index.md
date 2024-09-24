---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}{{SeeCompatTable}}

Die **`image-resolution`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt die intrinsische Auflösung aller Rasterbilder an, die in oder auf dem Element verwendet werden. Sie wirkt sich auf Inhaltsbilder wie ersetzte Elemente und erzeugte Inhalte sowie auf dekorative Bilder, wie `background-image`-Bilder, aus.

Die Bildauflösung ist als Anzahl der Bildpixel pro Längeneinheit definiert, z. B. Pixel pro Zoll. Standardmäßig nimmt CSS eine Auflösung von einem Bildpixel pro CSS px-Einheit an; jedoch erlaubt die `image-resolution`-Eigenschaft, eine andere Auflösung anzugeben.

## Syntax

```css
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Globale Werte */
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
  - : Verwendet die intrinsische Auflösung, wie sie vom Bildformat angegeben wird. Falls das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls gegeben), andernfalls wird auf `1dppx` (1 Bildpixel pro CSS px-Einheit) zurückgegriffen.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der ein Bildpixel auf eine ganze Zahl von Gerätepixeln abbilden würde. Wenn die Auflösung vom Bild übernommen wird, dann ist die verwendete intrinsische Auflösung die native Auflösung des Bildes, ähnlich angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hohe dpi für den Druck einstellen

Beim Drucken des Dokuments sollte eine höhere Auflösung verwendet werden.

```css
@media print {
  .myimage {
    image-resolution: 300dpi;
  }
}
```

### Bildauflösung mit Fallback verwenden

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle des Standardwerts 1dppx.

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
