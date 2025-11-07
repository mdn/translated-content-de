---
title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`<box-edge>`** Wertetypen repräsentieren ein [Box-Kanten](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie z.B. [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Kanten-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Kanten-Schlüsselwörter sind Bestandteile, aber nicht beschränkt auf die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

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
  - : Bezieht sich auf das rechteckige Feld, das für ein Element generiert wird, wie es vom Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, den Abstand und den Rahmen. Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich aus. Dieser Wertetyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`
  - : Bezieht sich auf den Raum, der von einem Element beansprucht wird, einschließlich seines Inhalts, Abstands, Rahmens und Rands. Dieser Wertetyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wertetyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`
  - : Bezieht sich auf den Bereich innerhalb des Layout-Box, der verwendet wird, um den Inhalt visuell darzustellen. Dies umfasst den Bereich, in dem der Hintergrund und die Rahmen des Elements gemalt werden. Da der malbare Bereich eines Elements nicht seine Ränder einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`
  - : Bezieht sich auf das Koordinatenfeld, das zum Positionieren und Größenanpassen eines Elements innerhalb seines Elternelements verwendet wird. Es wird verwendet, um zu steuern, wie sich der Inhalt um die Kanten des Feldes herum bewegt. Es schließt den Randbereich aus. Dieser Wertetyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert das Referenzfeld für eine [Grundform](/de/docs/Web/CSS/Reference/Values/basic-shape), oder, wenn alleine angegeben, bewirkt, dass die Kanten des angegebenen Feldes, einschließlich jeder Eckformung (wie ein {{cssxref("border-radius")}}), der Abgrenzungspfad sind. Dieser Wertetyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}} und {{cssxref("mask-origin")}} sowie das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter werden wie folgt definiert:

- `content-box`
  - : Bezieht sich auf die äußere Kante des Inhaltsbereichs des Feldes. Das Inhaltsfeld ist das innerste Feld. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`
  - : Bezieht sich auf die äußere Kante des Abstands des Feldes. Wenn es keinen Abstand auf einer Seite gibt, ist der Wert derselbe wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Abstandbereich umgibt den Inhaltsbereich, beginnend an der äußeren Kante des Inhaltsfeldes.

- `border-box`
  - : Bezieht sich auf die äußere Kante des Rahmens des Feldes. Wenn es keinen Rahmen auf einer Seite gibt, ist der Wert derselbe wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Abstandbereich, beginnend an der äußeren Kante des Abstandfeldes.

- `margin-box`
  - : Bezieht sich auf die äußere Kante des Randes des Feldes. Wenn es keinen Rand auf einer Seite gibt, ist der Wert derselbe wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`
  - : Bezieht sich auf das Objektbegrenzungsfeld in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die Kanten zu wickeln, die durch die `coord-box` Werte definiert werden.

- `stroke-box`
  - : Bezieht sich auf das Strichbegrenzungsfeld in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf das Ursprungsfeld des nächsten SVG-Viewport-Elements. Das Ursprungsfeld ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegt wird. Das Ursprungsfeld ist so positioniert, dass seine obere linke Ecke am [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) Ursprung verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht das Ursprungsfeld nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
