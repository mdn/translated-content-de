---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 255a29f9e5bae99fd3bd98f6af1204a98be634bb
---

{{CSSRef}}

Die **`<box-edge>`** Werttypen repräsentieren ein [Boxrand](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Boxrand-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Boxmodells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Boxrand-Schlüsselwörter sind Bestandteile, aber nicht beschränkt auf die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* die drei <box> Werte */
<layout-box> = <box> | margin-box /* die <shape-box> Werte */
<paint-box> = <box> | fill-box | stroke-box
<coord-box> = <box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann vom Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, oder `<geometry-box>` sein.

- `<visual-box>`

  - : Bezieht sich auf das rechteckige Kästchen, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, die Innenabstände (Padding) und den Rand (Border). Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich (Margin) aus. Dieser Werttyp wird für die {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} Eigenschaften verwendet.

- `<layout-box>`

  - : Bezieht sich auf den von einem Element eingenommenen Raum, einschließlich seines Inhalts, der Innenabstände, des Randes und des Außenabstandes. Dieser Werttyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Werttyp für die {{cssxref("shape-outside")}} Eigenschaft verwendet.

- `<paint-box>`

  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der für die visuelle Darstellung des Inhalts genutzt wird. Dies umfasst den Bereich, in dem der Hintergrund und die Ränder eines Elements gezeichnet werden. Da der bemalbare Bereich eines Elements seine Ränder nicht einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`

  - : Bezieht sich auf die Koordinatenbox, die zur Positionierung und Größenanpassung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Sie wird verwendet, um zu kontrollieren, wie der Inhalt um die Ränder des Kastens fließt. Sie schließt den Randbereich aus. Dieser Werttyp wird für die {{cssxref("offset-path")}} Eigenschaft verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/basic-shape) oder, wenn sie allein spezifiziert wird, führt dazu, dass die Ränder der angegebenen Box, einschließlich jeder Eckformgebung (wie ein {{cssxref("border-radius")}}), der Beschneidungspfad sind. Dieser Werttyp wird für die {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} Eigenschaften und das SVG {{SVGAttr("clip-path")}} Attribut verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter werden wie folgt definiert:

- `content-box`

  - : Bezieht sich auf den äußeren Rand des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`

  - : Bezieht sich auf den äußeren Rand des Polsters der Box. Wenn auf einer Seite kein Polster vorhanden ist, entspricht der Wert `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Polsterbereich umgibt den Inhaltsbereich und beginnt am äußeren Rand der Content-Box.

- `border-box`

  - : Bezieht sich auf den äußeren Rand des Randes der Box. Wenn auf einer Seite kein Rand vorhanden ist, entspricht der Wert `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Randbereich umgibt den Polsterbereich und beginnt am äußeren Rand der Polster-Box.

- `margin-box`

  - : Bezieht sich auf den äußeren Rand des Außenabstandes der Box. Wenn auf einer Seite kein Außenabstand vorhanden ist, entspricht der Wert `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`

  - : Bezieht sich auf die Objektbegrenzungsbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box` Werte definierten Kanten zu umschließen.

- `stroke-box`

  - : Bezieht sich auf die Strichbegrenzungsbox in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`

  - : Bezieht sich auf die Ursprungsbox des nächsten SVG-Viewport-Elements. Die Ursprungsbox ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegt wird. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke an der [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) Ursprung verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Viewport.

## Specifications

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
