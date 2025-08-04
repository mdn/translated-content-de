---
title: image-resolution
slug: Web/CSS/image-resolution
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Die **`image-resolution`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die intrinsische Auflösung aller Rasterbilder, die in oder auf dem Element verwendet werden. Sie beeinflusst Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image` Bilder.

Die Bildauflösung wird als Anzahl der Bildpunkte pro Längeneinheit definiert, z.B. Pixel pro Zoll. Standardmäßig geht CSS von einer Auflösung von einem Bildpunkt pro CSS-Px-Einheit aus; die `image-resolution` Eigenschaft erlaubt jedoch die Angabe einer anderen Auflösung.

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
  - : Verwendet die intrinsische Auflösung wie vom Bildformat angegeben. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), ansonsten wird auf `1dppx` (1 Bildpunkt pro CSS-Px-Einheit) zurückgegriffen.
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächstgelegenen Wert gerundet, der einen Bildpunkt auf eine ganzzahlige Anzahl von {{Glossary("device_pixel", "Gerätepixeln")}} abbilden würde. Wenn die Auflösung vom Bild übernommen wird, dann ist die verwendete intrinsische Auflösung die native Auflösung des Bildes, ähnlich angepasst.

> [!NOTE]
> Da Vektorformate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkung auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen einer hohen dpi für den Druck

Beim Drucken des Dokuments verwenden Sie eine höhere Auflösung.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Verwendung der Bildauflösung mit Fallback

Verwendet die Auflösung vom Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300 dpi anstelle des Standardwerts von 1dppx.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Zurzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Fehler: 1086473](https://crbug.com/1086473).
