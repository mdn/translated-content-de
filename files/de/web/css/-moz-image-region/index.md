---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
l10n:
  sourceCommit: 69f92b8a249a9da025a5b12d98aafd84d417c8d9
---

{{CSSRef}}{{Non-standard_Header}}

Für bestimmte XUL-Elemente und Pseudo-Elemente, die ein Bild aus der {{CSSxRef("list-style-image")}}-Eigenschaft verwenden, gibt diese Eigenschaft einen Bereich des Bildes an, der anstelle des gesamten Bildes verwendet wird. Dies ermöglicht es Elementen, unterschiedliche Teile desselben Bildes zu nutzen, um die Leistung zu verbessern.

Die Syntax ist der Eigenschaft {{CSSxRef("clip")}} ähnlich. Alle vier Werte beziehen sich auf die obere linke Ecke des Bildes.

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
  - : Eine Form, die den zu verwendenden Teil des Bildes definiert. Die Funktion `rect()` definiert ein Rechteck als Form. Ihre Parameter legen die Abstände der Kanten des Bildes von oben, rechts, unten und links fest, in dieser Reihenfolge.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
 -moz-image-region =
   <shape> | auto
```

## Beispiele

### Ein Bild beschneiden

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
