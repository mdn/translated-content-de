---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{Non-standard_Header}}

Für bestimmte XUL-Elemente und Pseudo-Elemente, die ein Bild aus der {{CSSxRef("list-style-image")}}-Eigenschaft verwenden, gibt diese Eigenschaft eine Region des Bildes an, die anstelle des gesamten Bildes verwendet wird. Dies ermöglicht es, dass Elemente verschiedene Teile desselben Bildes verwenden, um die Performance zu verbessern.

Die Syntax ähnelt der {{CSSxRef("clip")}}-Eigenschaft. Alle vier Werte sind relativ zur oberen linken Ecke des Bildes.

## Syntax

```css
/* Schlüsselwortwert */
-moz-image-region: auto;

/* <shape>-Wert */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Globale Werte */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

### Werte

- `auto`
  - : Definiert automatisch die Region des zu verwendenden Bildes.
- [`<shape>`](/de/docs/Web/CSS/shape)
  - : Eine Form, die den zu verwendenden Teil des Bildes definiert. Die `rect()`-Funktion definiert ein Rechteck, das als Form verwendet wird. Ihre Parameter definieren die Versätze der oberen, rechten, unteren und linken Kanten des Bildes in dieser Reihenfolge.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
 -moz-image-region =
   <shape> | auto
```

## Beispiele

### Zuschneiden eines Bildes

```css
#example-button {
  /* zeigt nur den 4x4 Bereich aus der oberen linken Ecke dieses Bildes an */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* verwendet den 4x4 Bereich rechts vom ersten für den Schwebebutton */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-image-rect")}}
