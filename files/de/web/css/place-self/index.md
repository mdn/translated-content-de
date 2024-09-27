---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in der Block- als auch in der Inline-Richtung gleichzeitig auszurichten (d. h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}) in einem relevanten Layoutsystem wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout). Wenn der zweite Wert nicht vorhanden ist, wird auch der erste Wert dafür verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Bestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`align-self`](/de/docs/Web/CSS/align-self)
- [`justify-self`](/de/docs/Web/CSS/justify-self)

## Syntax

```css
/* Positional alignment */
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

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### Werte

- `auto`
  - : Wird zum Wert der übergeordneten {{cssxref("align-items")}}-Eigenschaft berechnet.
- `normal`

  - : Die Auswirkung dieses Schlüsselworts hängt vom verwendeten Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - Im statischen Zustand von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Auf block-level Boxen und Tabelleneinträge hat die Eigenschaft keine Anwendung.

- `self-start`
  - : Richten Sie die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die mit der Startseite des Elements in der Kreuzachse übereinstimmt.
- `self-end`
  - : Richten Sie die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die mit der Endseite des Elements in der Kreuzachse übereinstimmt.
- `flex-start`
  - : Die cross-start-Randkante des Flex-Elements ist bündig mit der cross-start-Kante der Linie.
- `flex-end`
  - : Die cross-end-Randkante des Flex-Elements ist bündig mit der cross-end-Kante der Linie.
- `center`
  - : Der Randkasten des Flex-Elements ist innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im geteilten ersten oder letzten Basisliniensatz aller Boxen in seiner Basislinien-Sharing-Gruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner als die Größe des Ausrichtungscontainers ist und das Element `auto`-größenangepasst ist, wird seine Größe gleichmäßig (nicht proportional) erhöht und respektiert weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen, sodass die kombinierte Größe aller `auto`-größenangepassten Elemente den Ausrichtungscontainer entlang der Kreuzachse genau ausfüllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element zum Zentrum des zugehörigen Ankerelements in der Block- und Inline-Richtung aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die Werte `stretch` für [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) — die Standardwerte —, wodurch die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte für `place-self`, um zu zeigen, wie diese die Standardeinstellungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente sich nur so weit/höchstens wie ihre Inhaltsbreite/-höhe erstrecken und an verschiedenen Positionen innerhalb ihrer Zellen in der Block- und Inline-Richtung ausgerichtet werden.

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
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ausrichtung von Boxen in CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
