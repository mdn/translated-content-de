---
title: "`<box-edge>` CSS-Typ"
short-title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Die **`<box-edge>`** Wert-Typen repräsentieren ein [Box Edge](/de/docs/Web/CSS/Guides/Box_model/Introduction) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Edge-Schlüsselwörter sind Bestandteile, aber nicht darauf beschränkt, der Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* the three <box> values */
<layout-box> or <shape-box> = <visual-box> | margin-box
<paint-box> = <visual-box> | fill-box | stroke-box
<coord-box> = <paint-box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann vom Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` oder `<geometry-box>` sein.

- `<visual-box>`
  - : Bezieht sich auf das rechteckige Feld, das für ein Element generiert wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt, das Padding und den Rahmen des Elements. Auch als `<box>` bezeichnet, schließt dieser Wert die Margenfläche aus. Dieser Wert-Typ wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`
  - : Bezieht sich auf den von einem Element belegten Raum, einschließlich Inhalt, Padding, Rahmen und Rand. Dieser Wert-Typ wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wert-Typ für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`
  - : Bezieht sich auf den Bereich innerhalb des Layout-Feldes, der zur visuellen Darstellung des Inhalts verwendet wird. Dazu gehört der Bereich, in dem der Hintergrund und die Rahmen des Elements gezeichnet werden. Da der bemalbare Bereich eines Elements seine Ränder nicht einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`
  - : Bezieht sich auf das Koordinatenfeld, das zur Positionierung und Größenbestimmung eines Elements innerhalb seines Elternelements verwendet wird. Es wird verwendet, um zu steuern, wie der Inhalt um die Ränder des Feldes fließt. Es schließt die Margenfläche aus. Dieser Wert-Typ wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert das Referenzfeld für eine [Basisshape](/de/docs/Web/CSS/Reference/Values/basic-shape), oder wenn allein angegeben, verursacht dies, dass die Kanten des angegebenen Feldes, einschließlich jeglicher Eckenformen (wie ein {{cssxref("border-radius")}}), der Clipping-Pfad sind. Dieser Wert-Typ wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} und das SVG-Attribut {{SVGAttr("clip-path")}} verwendet; es wird auch als Teil der Eigenschaftswerte von {{cssxref("border-shape")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`
  - : Bezieht sich auf den äußeren Rand des Inhaltsbereichs der Box. Die Inhaltsbox ist die innerste Box. Der Inhaltsbereich enthält den eigentlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`
  - : Bezieht sich auf den äußeren Rand des Paddings der Box. Wenn an einer Seite kein Padding vorhanden ist, entspricht der Wert der `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Padding-Bereich umgibt den Inhaltsbereich, beginnend am äußeren Rand der Inhaltsbox.

- `border-box`
  - : Bezieht sich auf den äußeren Rand des Rahmens der Box. Wenn an einer Seite kein Rahmen vorhanden ist, entspricht der Wert der `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Padding-Bereich, beginnend am äußeren Rand der Padding-Box.

- `half-border-box`
  - : Bezieht sich auf eine Box-Form, die durch die Mitte des Randbereichs verläuft; die innere Hälfte des Randbereichs befindet sich innerhalb der Form, und die äußere Hälfte des Randbereichs befindet sich außerhalb der Form.

- `margin-box`
  - : Bezieht sich auf den äußeren Rand des Margen der Box. Wenn an einer Seite kein Margin vorhanden ist, entspricht der Wert der `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`
  - : Bezieht sich auf das Objektbegrenzungsfeld in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box`-Werte definierten Ränder zu wickeln.

- `stroke-box`
  - : Bezieht sich auf das Strichbegrenzungsfeld in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf das Ursprungsfeld des nächsten SVG-Viewport-Elements. Das Ursprungsfeld ist ein Rechteck mit der Breite und Höhe des durch das Attribut {{svgattr("viewBox")}} für dieses Element festgelegten initialen Benutzerkoordinatensystems des SVG. Das Ursprungsfeld ist so positioniert, dass seine obere linke Ecke am [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) Ursprung verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht das Ursprungsfeld nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
