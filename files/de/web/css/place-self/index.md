---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzhand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}) in einem relevanten Layout-System wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout). Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Bestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`align-self`](/de/docs/Web/CSS/align-self)
- [`justify-self`](/de/docs/Web/CSS/justify-self)

## Syntax

```css
/* Positionsausrichtung */
place-self: auto center;
place-self: normal start;
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: anchor-center;

/* Baseline-Ausrichtung */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Globale Werte */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### Werte

- `auto`
  - : Berechnet sich zum Wert der Eltern {{cssxref("align-items")}}.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{glossary("aspect ratio")}} oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für block-level Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers bündig sind, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers bündig sind, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Cross-Start-Margin-Rand des Flex-Elements ist mit dem Cross-Start-Rand der Linie bündig.
- `flex-end`
  - : Der Cross-End-Margin-Rand des Flex-Elements ist mit dem Cross-End-Rand der Linie bündig.
- `center`
  - : Die Margin-Box des Flex-Elements ist innerhalb der Linie auf der Querachse zentriert. Wenn die Quergröße des Elements größer ist als der Flex-Container, wird es gleichermaßen in beide Richtungen überlaufen.
- `baseline`, `first baseline`. `last baseline`
  - : Bestimmt die Teilnahme an der Erstausrichtungs- oder Endausrichtungs-Baseline: richtet die Ausrichtungs-Baseline des ersten oder letzten Baselinesatzes der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselinesatz aller Boxen in ihrer Baseline-Gruppe aus.
    Die Ausrichtungsvariante für `first baseline` ist `start`, für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-größenbasiert ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, wobei die Beschränkungen durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder eine gleichwertige Funktionalität) berücksichtigt werden, so dass die kombinierte Größe aller `auto`-größenbasierten Elemente den Ausrichtungscontainer entlang der Querachse vollständig ausfüllt.
- `anchor-center`
  - : Bei [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element in der Block- und Inline-Richtung mittig zum zugehörigen Ankerelement aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formaler Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Raster-Layout. Zunächst hat der Raster-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — die Standardwerte —, die dazu führen, dass die Raster-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Die zweiten, dritten und vierten Raster-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Raster-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe sind und sich in verschiedenen Positionen über ihre Zellen in der Block- und Inline-Richtung ausrichten.

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
  <span>Fourth</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### Ergebnis

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
