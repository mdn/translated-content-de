---
title: -moz-image-region
slug: Web/CSS/-moz-image-region
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_Header}}

Für bestimmte XUL-Elemente und Pseudo-Elemente, die ein Bild aus der Eigenschaft {{CSSxRef("list-style-image")}} verwenden, gibt diese Eigenschaft einen Bereich des Bildes an, der anstelle des gesamten Bildes genutzt wird. Dies ermöglicht es Elementen, verschiedene Teile desselben Bildes zu verwenden, um die Leistung zu verbessern.

Die Syntax ist ähnlich wie bei der Eigenschaft {{CSSxRef("clip")}}. Alle vier Werte beziehen sich auf die obere linke Ecke des Bildes.

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
  - : Definiert automatisch den zu verwendenden Bereich des Bildes.
- [`<shape>`](/de/docs/Web/CSS/shape)
  - : Eine Form, die den zu verwendenden Teil des Bildes definiert. Die Funktion `rect()` definiert ein Rechteck, das als Form verwendet wird. Ihre Parameter definieren die oberen, rechten, unteren und linken Abstände der Kanten des Bildes, in dieser Reihenfolge.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-image-region = <shape> | auto`)}}

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

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("-moz-image-rect")}}
