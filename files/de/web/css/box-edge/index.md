---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

Die **`<box-edge>`** Wertetypen repräsentieren ein [Box-Edge](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements und wie Elemente auf dem Bildschirm positioniert und gerendert werden, zu definieren.

Die Box-Edge-Schlüsselwörter sind Bestandteile von, aber nicht beschränkt auf, die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* the three <box> values */
<layout-box> = <visual-box> | margin-box /* the <shape-box> values */
<paint-box> = <visual-box> | fill-box | stroke-box
<coord-box> = <paint-box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann vom Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, oder `<geometry-box>` sein.

- `<visual-box>`
  - : Bezieht sich auf das rechteckige Feld, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, die Polsterung und den Rand. Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich aus. Dieser Wertetyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`
  - : Bezieht sich auf den vom Element eingenommenen Raum, einschließlich seines Inhalts, seiner Polsterung, seines Randes und seines Randabstands. Dieser Wertetyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wertetyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`
  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der verwendet wird, um den Inhalt visuell darzustellen. Dies umfasst den Bereich, in dem der Hintergrund und die Ränder des Elements gemalt werden. Da der bemalbare Bereich eines Elements nicht seine Ränder umfasst, schließt dieser Wert `margin-box` nicht ein.

- `<coord-box>`
  - : Bezieht sich auf die Koordinatenbox, die zur Positionierung und Größenbestimmung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Sie wird verwendet, um zu steuern, wie Inhalte um die Ränder der Box herumfließen. Sie schließt den Randbereich aus. Dieser Wertetyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/basic-shape), oder, wenn allein angegeben, verursacht die Ränder der spezifizierten Box, einschließlich jeder Eckformgebung (wie etwa einem {{cssxref("border-radius")}}), als Beschneidungspfad zu fungieren. Dieser Wertetyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} sowie das SVG-Attribut {{SVGAttr("clip-path")}} verwendet.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`
  - : Bezieht sich auf den äußeren Rand des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`
  - : Bezieht sich auf den äußeren Rand der Polsterung der Box. Wenn es auf einer Seite keine Polsterung gibt, entspricht der Wert der `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Polsterbereich umschließt den Inhaltsbereich, beginnend am äußeren Rand der Content-Box.

- `border-box`
  - : Bezieht sich auf den äußeren Rand des Randes der Box. Wenn auf einer Seite kein Rand vorhanden ist, entspricht der Wert `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Randbereich umschließt den Polsterbereich, beginnend am äußeren Rand der Padding-Box.

- `margin-box`
  - : Bezieht sich auf den äußeren Rand des Randabstands der Box. Wenn auf einer Seite kein Randabstand vorhanden ist, entspricht der Wert `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`
  - : Bezieht sich auf die Objektbegrenzungsbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box`-Werte definierten Ränder zu wickeln.

- `stroke-box`
  - : Bezieht sich auf die Strichbegrenzungsbox in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf die Ursprungskiste des nächstliegenden SVG-Viewport-Elements. Die Ursprungskiste ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}}-Attribut für dieses Element festgelegt wurde. Die Ursprungskiste ist so positioniert, dass ihre obere linke Ecke am [Koordinatensystem](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) Ursprung verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht die Ursprungskiste nicht dem SVG-Viewport.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
