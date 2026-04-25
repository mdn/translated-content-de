---
title: "`<box-edge>` CSS-Typ"
short-title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Die **`<box-edge>`** Werttypen repräsentieren ein [Box Edge](/de/docs/Web/CSS/Guides/Box_model/Introduction) Schlüsselwort, wie zum Beispiel [`content-box`](#content-box) und [`border-box`](#border-box). Die Box-Edge-Schlüsselwörter werden verwendet, um verschiedene Aspekte des Box-Modells eines Elements zu definieren und wie Elemente auf dem Bildschirm positioniert und gerendert werden.

Die Box-Edge-Schlüsselwörter sind Komponenten von, aber nicht beschränkt auf die Datentypen `<visual-box>`, `<layout-box>`, `<paint-box>`, `<coord-box>` und `<geometry-box>`. Diese Typen werden auf Eigenschaften wie {{cssxref("transform-box")}} und {{cssxref("background-clip")}} angewendet.

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
  - : Bezieht sich auf das rechteckige Feld, das für ein Element erzeugt wird, wie es von einem Benutzer auf einer Webseite gesehen wird. Es umfasst den Inhalt des Elements, Auffüllung und Rahmen. Auch als `<box>` bezeichnet, schließt dieser Wert den Randbereich aus. Dieser Werttyp wird für die Eigenschaften {{cssxref("background-clip")}} und {{cssxref("overflow-clip-margin")}} verwendet.

- `<layout-box>`
  - : Bezieht sich auf den Raum, der von einem Element besetzt wird, einschließlich seines Inhalts, Auffüllung, Rahmen und Rand. Dieser Werttyp wird für Layout- und Positionierungszwecke verwendet. Auch als `<shape-box>` bezeichnet, wird dieser Werttyp für die Eigenschaft {{cssxref("shape-outside")}} verwendet.

- `<paint-box>`
  - : Bezieht sich auf den Bereich innerhalb der Layout-Box, der zum visuellen Rendern des Inhalts verwendet wird. Dies umfasst den Bereich, in dem der Hintergrund und die Rahmen des Elements gemalt werden. Da der bemalbare Bereich eines Elements seine Ränder nicht einschließt, schließt dieser Wert `margin-box` aus.

- `<coord-box>`
  - : Bezieht sich auf die Koordinatenbox, die zum Positionieren und Dimensionieren eines Elements innerhalb seines übergeordneten Containers verwendet wird. Es wird genutzt, um zu steuern, wie der Inhalt um die Ränder der Box herum fließt. Es schließt den Randbereich aus. Dieser Werttyp wird für die Eigenschaft {{cssxref("offset-path")}} verwendet.

- `<geometry-box>`
  - : Definiert die Referenzbox für eine [grundlegende Form](/de/docs/Web/CSS/Reference/Values/basic-shape), oder wenn sie alleine angegeben wird, bewirkt sie, dass die Ränder der spezifizierten Box, einschließlich jeder Eckenformung (wie ein {{cssxref("border-radius")}}), der Ausschneidepfad sind. Dieser Werttyp wird für die Eigenschaften {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, und {{cssxref("mask-origin")}} verwendet sowie das SVG-Attribut {{SVGAttr("clip-path")}}.

### Schlüsselwörter

Die `<box-edge>`-Schlüsselwörter sind wie folgt definiert:

- `content-box`
  - : Bezieht sich auf den äußeren Rand des Inhaltsbereichs der Box. Die Content-Box ist die innerste Box. Der Inhaltsbereich enthält den tatsächlichen Inhalt, wie Text, Bilder oder andere HTML-Elemente. In SVG wird dieser Wert als `fill-box` behandelt.

- `padding-box`
  - : Bezieht sich auf den äußeren Rand der Polsterung der Box. Wenn es auf einer Seite keine Polsterung gibt, ist der Wert derselbe wie `content-box`. In SVG wird `padding-box` als `fill-box` behandelt. Der Polsterungsbereich umgibt den Inhaltsbereich ab dem äußeren Rand der Content-Box.

- `border-box`
  - : Bezieht sich auf den äußeren Rand des Rahmens der Box. Wenn es auf einer Seite keinen Rahmen gibt, ist der Wert derselbe wie `padding-box`. In SVG wird `border-box` als `stroke-box` behandelt. Der Rahmenbereich umgibt den Polsterungsbereich ab dem äußeren Rand der Padding-Box.

- `margin-box`
  - : Bezieht sich auf den äußeren Rand des Rands der Box. Wenn es auf einer Seite keinen Rand gibt, ist der Wert derselbe wie `border-box`. In SVG wird `margin-box` als `stroke-box` behandelt.

- `fill-box`
  - : Bezieht sich auf die Objektumrissbox in SVG. In CSS wird `fill-box` als `content-box` behandelt. Es wird verwendet, um den Inhalt um die Ränder, die durch die `coord-box` Werte definiert sind, zu wickeln.

- `stroke-box`
  - : Bezieht sich auf die Umrissbox des Strichs in SVG. In CSS wird `stroke-box` als `border-box` behandelt. Es wird verwendet, um die Form des Elements zu definieren, wenn Striche angewendet werden.

- `view-box`
  - : Bezieht sich auf die Ursprungsbox des nächsten SVG-Ansichtsfeld-Elements. Die Ursprungsbox ist ein Rechteck, dessen Breite und Höhe durch das initiale SVG-Benutzerkoordinatensystem bestimmt wird, das vom {{svgattr("viewBox")}}-Attribut für dieses Element festgelegt wird. Die Ursprungsbox ist so positioniert, dass ihre obere linke Ecke am Ursprung des [Koordinatensystems](/de/docs/Web/API/CSSOM_view_API/Coordinate_systems) verankert ist. In CSS wird `view-box` als `border-box` betrachtet.
    > [!NOTE]
    > Wenn das SVG-Ansichtsfeld nicht am Ursprung verankert ist, entspricht die Ursprungsbox nicht dem SVG-Ansichtsfeld.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
