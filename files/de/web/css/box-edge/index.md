---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 255a29f9e5bae99fd3bd98f6af1204a98be634bb
---

{{CSSRef}}

Die **`<box-edge>`** Werttypen repräsentieren ein Schlüsselwort für den [Boxrand](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), wie z.B. [`content-box`](#content-box) und [`border-box`](#border-box). Die Boxrand-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Boxmodells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und dargestellt werden.

Die Boxrand-Schlüsselwörter sind Bestandteile, aber nicht beschränkt auf die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, und `<geometry-box>`. Diese Typen werden für Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* the three <box> values */
<layout-box> = <box> | margin-box /* the <shape-box> values */
<paint-box> = <box> | fill-box | stroke-box
<coord-box> = <box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann vom Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, oder `<geometry-box>` sein.

- `<visual-box>`

  - : Bezieht sich auf das rechteckige Feld, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt, das Padding und den Rahmen des Elements. Auch als `<box>` bezeichnet, schließt dieser Wert den Margin-Bereich aus. Dieser Werttyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`

  - : Bezieht sich auf den Raum, den ein Element einnimmt, einschließlich seines Inhalts, Paddings, Rahmens und Margins. Dieser Werttyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Werttyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb des Layout-Feldes, der zur visuellen Darstellung des Inhalts verwendet wird. Dies umfasst den Bereich, in dem der Hintergrund und die Rahmen des Elements gezeichnet werden. Da der bemalbare Bereich eines Elements keine Margen umfasst, schließt dieser Wert `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf das Koordinatenfeld, das zur Positionierung und Größenanpassung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Es wird verwendet, um zu steuern, wie der Inhalt um die Kanten des Feldes herumfließt. Es schließt den Margin-Bereich aus. Dieser Werttyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert das Referenzfeld für eine [Grundform](/de/docs/Web/CSS/basic-shape), oder wenn es alleine angegeben wird, werden die Kanten des angegebenen Feldes, einschließlich jeder Eckenformung (wie ein {{cssxref("border-radius")}}), zum Clipping-Pfad. Dieser Werttyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} und das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`

  - : Bezieht sich auf die äußere Kante des Inhaltsbereichs des Feldes. Der Inhaltsbereich ist der innerste Kasten. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf die äußere Kante des Innenabstands des Feldes. Wenn auf einer Seite kein Innenabstand vorhanden ist, entspricht der Wert dem `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Innenabstandsbereich umgibt den Inhaltsbereich, beginnend an der äußeren Kante des Inhaltsbereichs.

- `border-box`

  - : Bezieht sich auf die äußere Kante des Rahmens des Feldes. Wenn auf einer Seite kein Rahmen vorhanden ist, entspricht der Wert dem `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Innenabstandsbereich, beginnend an der äußeren Kante des Innenabstandsbereichs.

- `margin-box`

  - : Bezieht sich auf die äußere Kante des Außenabstands des Feldes. Wenn auf einer Seite kein Außenabstand vorhanden ist, entspricht der Wert dem `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf das Objekt-Begrenzungsfeld in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box`-Werte definierten Kanten zu wickeln.

- `stroke-box`

  - : Bezieht sich auf das Strich-Begrenzungsfeld in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements festzulegen, wenn Striche angewendet werden.

- `view-box`

  - : Bezieht sich auf das Ursprungsfeld des nächsten SVG-Ansichtsport-Elements. Das Ursprungsfeld ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}}-Attribut für dieses Element festgelegt wird. Das Ursprungsfeld ist so positioniert, dass seine obere linke Ecke am Ursprung des [Koordinatensystems](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Ansichtsport nicht am Ursprung verankert ist, entspricht das Ursprungsfeld nicht dem SVG-Ansichtsport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
