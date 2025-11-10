---
title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`<box-edge>`** Werttypen repräsentieren ein [Box-Edge](/de/docs/Web/CSS/Guides/Box_model/Introduction) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements sowie die Positionierung und Darstellung von Elementen auf dem Bildschirm zu definieren.

Die Box-Edge-Schlüsselwörter sind Bestandteile, aber nicht beschränkt auf, die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

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

  - : Bezieht sich auf das rechteckige Box-Modell, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, den Innenabstand (Padding) und den Rahmen (Border). Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich (Margin) aus. Dieser Wert wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`

  - : Bezieht sich auf den Raum, den ein Element einnimmt, einschließlich seines Inhalts, Innenabstands, Rahmens und Randes. Dieser Wert wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der zur visuellen Darstellung des Inhalts verwendet wird. Dies umfasst den Bereich, in dem der Hintergrund und die Rahmen eines Elements gemalt werden. Da der bemalbare Bereich eines Elements seine Ränder nicht umfasst, schließt dieser Wert `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf die Koordinaten-Box, die zur Positionierung und Größenbestimmung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Sie wird verwendet, um zu steuern, wie der Inhalt um die Ränder der Box fließt. Es schließt den Randbereich aus. Dieser Wert wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/Reference/Values/basic-shape) oder, wenn sie allein angegeben ist, bewirkt sie, dass die Ränder der angegebenen Box, einschließlich jeglicher Eckformungen (wie ein {{cssxref("border-radius")}}), den Pfad abschneiden. Dieser Wert wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} sowie das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`

  - : Bezieht sich auf die äußere Kante des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf die äußere Kante des Innenabstands der Box. Wenn es auf einer Seite keinen Innenabstand gibt, ist der Wert derselbe wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Innenbereich umgibt den Inhaltsbereich und beginnt an der äußeren Kante der Content-Box.

- `border-box`

  - : Bezieht sich auf die äußere Kante des Rahmens der Box. Wenn es auf einer Seite keinen Rahmen gibt, ist der Wert derselbe wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Innenbereich und beginnt an der äußeren Kante der Padding-Box.

- `margin-box`

  - : Bezieht sich auf die äußere Kante des Randes der Box. Wenn es auf einer Seite keinen Rand gibt, ist der Wert derselbe wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf die Objektumrahmungsbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box` Werte definierten Ränder zu legen.

- `stroke-box`

  - : Bezieht sich auf die Strichumrahmungsbox in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf die Ursprungsbox des nächstgelegenen SVG-Ansichtsfeld-Elements. Die Ursprungsbox ist ein Rechteck mit der Breite und Höhe des durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegten initialen SVG-Koordinatensystems. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke am Ursprung des [Koordinatensystems](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn das SVG-Ansichtsfeld nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Ansichtsfeld.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
