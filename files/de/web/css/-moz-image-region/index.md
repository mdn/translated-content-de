---
title: -moz-image-region
slug: Web/CSS/-moz-image-region
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_Header}}

Für bestimmte XUL-Elemente und Pseudo-Elemente, die ein Bild aus der {{CSSxRef("list-style-image")}}-Eigenschaft verwenden, gibt diese Eigenschaft einen Bereich des Bildes an, der anstelle des gesamten Bildes genutzt wird. Dadurch können verschiedene Teile desselben Bildes von Elementen verwendet werden, um die Leistung zu verbessern.

Die Syntax ist der {{CSSxRef("clip")}}-Eigenschaft ähnlich. Alle vier Werte beziehen sich auf die obere linke Ecke des Bildes.

## Syntax

```css
/* Keyword value */
-moz-image-region: auto;

/* <shape> value */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Global values */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

### Werte

- `auto`
  - : Definiert automatisch den Bereich des Bildes, der verwendet werden soll.
- [`<shape>`](/de/docs/Web/CSS/shape)
  - : Eine Form, die den zu verwendenden Teil des Bildes definiert. Die `rect()`-Funktion definiert ein Rechteck, das als Form verwendet wird. Ihre Parameter definieren die oberen, rechten, unteren und linken Abstände der Bildränder in dieser Reihenfolge.

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
  /* display only the 4x4 area from the top left of this image */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* use the 4x4 area to the right of the first for the hovered button */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-image-rect")}}
