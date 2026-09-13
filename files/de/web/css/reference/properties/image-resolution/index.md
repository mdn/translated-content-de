---
title: "`image-resolution` CSS property"
short-title: image-resolution
slug: Web/CSS/Reference/Properties/image-resolution
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

{{SeeCompatTable}}

Die CSS-Eigenschaft **`image-resolution`** gibt die intrinsische Auflösung aller Rasterbilder an, die in oder auf dem Element verwendet werden. Sie betrifft Inhaltsbilder wie ersetzte Elemente und generierte Inhalte sowie dekorative Bilder wie `background-image`-Bilder.

Die Bildauflösung wird als Anzahl der Bildpunkte pro Längeneinheit definiert, z. B. Pixel pro Zoll. Standardmäßig geht CSS von einer Auflösung von einem Bildpixel pro CSS-Px-Einheit aus; jedoch ermöglicht die Eigenschaft `image-resolution` die Angabe einer anderen Auflösung.

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

Diese Eigenschaft wird als eine oder mehrere durch Leerzeichen getrennte Werte aus der folgenden Liste angegeben:

- {{cssxref("resolution")}}
  - : Gibt die intrinsische Auflösung explizit an.
- `from-image`
  - : Verwendet die intrinsische Auflösung, wie sie durch das Bildformat angegeben ist. Wenn das Bild keine eigene Auflösung angibt, wird die explizit angegebene Auflösung verwendet (falls vorhanden), andernfalls beträgt sie standardmäßig `1dppx` (1 Bildpixel pro CSS-Px-Einheit).
- `snap`
  - : Wenn das Schlüsselwort `snap` angegeben ist, wird die berechnete Auflösung auf den nächsten Wert gerundet, der ein ganzzahliges Verhältnis der Bildpixel zu {{Glossary("device_pixel", "Gerätepixel")}} bedingen würde. Wenn die Auflösung aus dem Bild übernommen wird, wird die verwendete intrinsische Auflösung entsprechend angepasst.

> [!NOTE]
> Da vektorbasierte Formate wie SVG keine intrinsische Auflösung haben, hat diese Eigenschaft keine Auswirkungen auf Vektorbilder.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine hohe dpi für den Druck festlegen

Beim Drucken des Dokuments wird eine höhere Auflösung verwendet.

```css
@media print {
  .my-image {
    image-resolution: 300dpi;
  }
}
```

### Bildauflösung mit Fallback verwenden

Verwendet die Auflösung aus dem Bild. Wenn das Bild keine Auflösung hat, verwenden Sie 300dpi anstelle des Standardwerts von 1dppx.

```css
.my-image {
  image-resolution: from-image 300dpi;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit wird diese Funktion von keinem Browser unterstützt.

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}.
- [Chromium-Bug: 1086473](https://crbug.com/1086473).
