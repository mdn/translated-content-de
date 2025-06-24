---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`<box-edge>`** Werttypen repräsentieren ein [Box-Kante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Kante-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Boxmodells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Kante-Schlüsselwörter sind Komponenten von, aber nicht beschränkt auf, die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* the three <box> values */
<layout-box> = <visual-box> | margin-box /* the <shape-box> values */
<paint-box> = <visual-box> | fill-box | stroke-box
<coord-box> = <paint-box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann vom Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` oder `<geometry-box>` sein.

- `<visual-box>`

  - : Bezieht sich auf das rechteckige Feld, das für ein Element generiert wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt, den Innenabstand und die Grenze des Elements. Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich aus. Dieser Werttyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`

  - : Bezieht sich auf den vom Element belegten Raum, einschließlich Inhalt, Innenabstand, Grenze und Rand. Dieser Werttyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Werttyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der visuell den Inhalt darstellt. Dies umfasst den Bereich, in dem der Hintergrund und die Grenzen des Elements gemalt werden. Da der bemalbare Bereich eines Elements seine Ränder nicht einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf die Koordinatenbox, die für die Positionierung und Dimensionierung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Sie wird verwendet, um zu steuern, wie der Inhalt um die Ränder der Box fließt. Sie schließt den Randbereich aus. Dieser Werttyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/basic-shape), oder wenn sie selbst spezifiziert ist, verursacht sie, dass die Kanten der spezifizierten Box, einschließlich jeder Eckenformung (wie ein {{cssxref("border-radius")}}), der Clipping-Pfad sind. Dieser Werttyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} und das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`

  - : Bezieht sich auf die Außenkante des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf die Außenkante des Innenabstands der Box. Wenn auf einer Seite kein Innenabstand vorhanden ist, ist der Wert derselbe wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Innenabstandsbereich umgibt den Inhaltsbereich und beginnt an der Außenkante der Content-Box.

- `border-box`

  - : Bezieht sich auf die Außenkante der Grenze der Box. Wenn auf einer Seite keine Grenze vorhanden ist, ist der Wert derselbe wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Grenzbereich umgibt den Innenabstandsbereich und beginnt an der Außenkante der Padding-Box.

- `margin-box`

  - : Bezieht sich auf die Außenkante des Randes der Box. Wenn auf einer Seite kein Rand vorhanden ist, ist der Wert derselbe wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf die Objektbegrenzungsbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box` Werte definierten Kanten herum zu umschließen.

- `stroke-box`

  - : Bezieht sich auf die Strichbegrenzungsbox in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf die Ursprungsbox des nächsten SVG-Viewport-Elements. Die Ursprungsbox ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegt wird. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke am Ursprung des [Koordinatensystems](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn das SVG-Viewport nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
