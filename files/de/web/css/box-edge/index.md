---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 255a29f9e5bae99fd3bd98f6af1204a98be634bb
---

{{CSSRef}}

Die **`<box-edge>`** Wertetypen repräsentieren ein [Box-Kanten](/de-DE/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Kanten-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Kanten-Schlüsselwörter sind Komponenten von, aber nicht beschränkt auf, die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

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

  - : Bezieht sich auf das rechteckige Feld, das für ein Element generiert wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, die Polsterung und den Rahmen. Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich aus. Dieser Werttyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`

  - : Bezieht sich auf den vom Element eingenommenen Raum, einschließlich seines Inhalts, der Polsterung, des Rahmens und des Randes. Dieser Werttyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Werttyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb des Layout-Feldes, der verwendet wird, um den Inhalt visuell darzustellen. Dies umfasst den Bereich, in dem der Hintergrund und die Rahmen des Elements gezeichnet werden. Da der bemalbare Bereich eines Elements seine Ränder nicht einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf das Koordinatenfeld, das zur Positionierung und Größenbestimmung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Es wird verwendet, um zu steuern, wie der Inhalt um die Kanten des Feldes fließt. Es schließt den Randbereich aus. Dieser Werttyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert das Referenzfeld für eine [Grundform](/de-DE/docs/Web/CSS/basic-shape), oder wenn es selbst angegeben wird, führen die Kanten des spezifizierten Feldes, einschließlich jeder Eckgestaltung (wie ein {{cssxref("border-radius")}}), zum Beschneidungspfad. Dieser Werttyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} sowie das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`

  - : Bezieht sich auf die äußere Kante des Inhaltsbereichs des Feldes. Der Inhaltsbereich ist das innerste Feld. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf die äußere Kante der Polsterung des Feldes. Wenn auf einer Seite keine Polsterung vorhanden ist, ist der Wert der gleiche wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Polsterbereich umgibt den Inhaltsbereich und beginnt an der äußeren Kante des Inhaltsfeldes.

- `border-box`

  - : Bezieht sich auf die äußere Kante des Rahmens des Feldes. Wenn auf einer Seite kein Rahmen vorhanden ist, ist der Wert der gleiche wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Polsterbereich und beginnt an der äußeren Kante des Polsterfeldes.

- `margin-box`

  - : Bezieht sich auf die äußere Kante des Randes des Feldes. Wenn auf einer Seite kein Rand vorhanden ist, ist der Wert der gleiche wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf das Begrenzungsfeld des Objekts in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box` Werte definierten Kanten zu wickeln.

- `stroke-box`

  - : Bezieht sich auf das Begrenzungsfeld des Strichs in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`

  - : Bezieht sich auf das Ursprungsfeld des nächsten SVG-Viewport-Elements. Das Ursprungsfeld ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegt wird. Das Ursprungsfeld ist so positioniert, dass seine obere linke Ecke am Ursprung des [Koordinatensystems](/de-DE/docs/Web/CSS/CSSOM_view/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht das Ursprungsfeld nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de-DE/docs/Web/CSS/CSS_box_model) Modul
