---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: dcf5d5a933e9486d2e9f4af9aa27aafa7df6ac77
---

{{CSSRef}}

Die **`<box-edge>`** Werttypen repräsentieren ein [Box Edge](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Edge-Schlüsselwörter sind Bestandteile, aber nicht darauf beschränkt, der Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

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

  - : Bezieht sich auf das rechteckige Kästchen, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt, das Padding und den Rahmen des Elements. Auch als `<box>` bezeichnet, schließt dieser Wert den Margin-Bereich aus. Dieser Wertetyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`

  - : Bezieht sich auf den vom Element belegten Raum, einschließlich seines Inhalts, Paddings, Rahmens und Randes. Dieser Wertetyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wertetyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb des Layout-Box, der zum visuellen Rendern des Inhalts verwendet wird. Dieser umfasst den Bereich, in dem der Hintergrund und die Rahmen des Elements gemalt werden. Da der bemalbare Bereich eines Elements nicht seine Ränder umfasst, schließt dieser Wert den `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf die Koordinatenbox, die für die Positionierung und Größenänderung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Er wird verwendet, um zu kontrollieren, wie der Inhalt um die Kanten der Box herum fließt. Es schließt den Margin-Bereich aus. Dieser Wertetyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/basic-shape) oder, wenn alleine angegeben, verursacht dies, dass die Kanten der angegebenen Box, einschließlich jeglicher Eckformung (wie ein {{cssxref("border-radius")}}), der Clipping-Pfad werden. Dieser Wertetyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}} und {{cssxref("mask-origin")}} sowie das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`

  - : Bezieht sich auf die äußere Kante des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den eigentlichen Inhalt wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf die äußere Kante des Paddings der Box. Wenn auf einer Seite kein Padding vorhanden ist, entspricht der Wert dem `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Padding-Bereich umgibt den Inhaltsbereich und beginnt an der äußeren Kante der Content-Box.

- `border-box`

  - : Bezieht sich auf die äußere Kante des Rahmens der Box. Wenn auf einer Seite kein Rahmen vorhanden ist, entspricht der Wert dem `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Padding-Bereich und beginnt an der äußeren Kante der Padding-Box.

- `margin-box`

  - : Bezieht sich auf die äußere Kante des Margin der Box. Wenn auf einer Seite kein Margin vorhanden ist, entspricht der Wert dem `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf die objektbegrenzende Box in SVG. In CSS wird `fill-box` als `content-box` behandelt. Er wird verwendet, um den Inhalt um die durch die `coord-box`-Werte definierten Kanten herum zu wickeln.

- `stroke-box`

  - : Bezieht sich auf die Linienbegrenzungs-Box in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Er wird verwendet, um die Form des Elements zu definieren, wenn Linien angewendet werden.

- `view-box`

  - : Bezieht sich auf die Ursprungsbox des nächsten SVG-Viewportelements. Die Ursprungsbox ist ein Rechteck mit der Breite und Höhe des anfänglichen Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}}-Attribut für dieses Element erstellt wird. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke am Ursprungskoordinatensystem [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box Modell](/de/docs/Web/CSS/CSS_box_model) Modul
