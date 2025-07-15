---
title: <box-edge>
slug: Web/CSS/box-edge
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`<box-edge>`** Wertetypen repräsentieren ein [Box Edge](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Edge-Schlüsselwörter sind die Komponenten von, aber nicht beschränkt auf, die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, und `<geometry-box>`. Diese Typen werden bei Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

## Syntax

```plain
<visual-box> = content-box | padding-box | border-box /* the three <box> values */
<layout-box> = <visual-box> | margin-box /* the <shape-box> values */
<paint-box> = <visual-box> | fill-box | stroke-box
<coord-box> = <paint-box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### Werte

Ein `<box-edge>` kann von dem Typ `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>`, oder `<geometry-box>` sein.

- `<visual-box>`
  - : Bezieht sich auf die rechteckige Box, die für ein Element generiert wird, wie sie von einem Benutzer auf einer Webseite gesehen wird. Sie umfasst den Inhalt des Elements, den Innenabstand (Padding) und den Rahmen (Border). Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich (Margin) aus. Dieser Wertetyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`
  - : Bezieht sich auf den Raum, der von einem Element eingenommen wird, einschließlich seines Inhalts, Innenabstands (Padding), Rahmens (Border) und Randes (Margin). Dieser Wertetyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Wertetyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`
  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der verwendet wird, um den Inhalt visuell zu rendern. Dies schließt den Bereich ein, in dem der Hintergrund und die Rahmen (Borders) des Elements gemalt werden. Da der bemalbare Bereich eines Elements seine Ränder (Margins) nicht umfasst, schließt dieser Wert `margin-box` aus.

- `<coord-box>`
  - : Bezieht sich auf die Koordinatenbox, die für die Positionierung und Größenanpassung eines Elements innerhalb seines übergeordneten Containers verwendet wird. Sie dient zur Kontrolle, wie der Inhalt entlang der Kanten der Box fließt. Sie schließt den Randbereich (Margin) aus. Dieser Wertetyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [Grundform](/de/docs/Web/CSS/basic-shape) oder bewirkt, wenn sie alleine spezifiziert wird, dass die Kanten der angegebenen Box, einschließlich jeder Eckenformung (wie ein {{cssxref("border-radius")}}), der Clipping-Pfad sind. Dieser Wertetyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} verwendet sowie für das SVG-Attribut {{SVGAttr("clip-path")}}.

### Schlüsselwörter

Die `<box-edge>` Schlüsselwörter sind wie folgt definiert:

- `content-box`
  - : Bezieht sich auf den äußeren Rand des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`
  - : Bezieht sich auf den äußeren Rand des Innenabstands (Paddings) der Box. Wenn auf einer Seite kein Innenabstand vorhanden ist, ist der Wert derselbe wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Innenabstandsbereich (Padding) umgibt den Inhaltsbereich und beginnt am äußeren Rand der Content-Box.

- `border-box`
  - : Bezieht sich auf den äußeren Rand des Rahmens (Borders) der Box. Wenn auf einer Seite kein Rahmen vorhanden ist, ist der Wert derselbe wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich (Border) umgibt den Innenabstandsbereich und beginnt am äußeren Rand der Padding-Box.

- `margin-box`
  - : Bezieht sich auf den äußeren Rand des Randes der Box. Wenn auf einer Seite kein Rand vorhanden ist, ist der Wert derselbe wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`
  - : Bezieht sich auf die Objektbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die durch die `coord-box` Werte definierten Kanten zu wickeln.

- `stroke-box`
  - : Bezieht sich auf die Schlagbox in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf die Ursprungsbox des nächsten SVG-Viewport-Elements. Die Ursprungsbox ist ein Rechteck mit der Breite und Höhe des initialen SVG-Benutzerkoordinatensystems, das durch das {{svgattr("viewBox")}} Attribut für dieses Element festgelegt wird. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke am Ursprung des [Koordinatensystems](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` behandelt.
    > [!NOTE]
    > Wenn der SVG-Viewport nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Viewport.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
