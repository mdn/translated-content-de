---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es, ein einzelnes Element sowohl in der Block- als auch in der Inline-Richtung auf einmal auszurichten (d. h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}) in einem relevanten Layoutsystem wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout). Wenn der zweite Wert nicht vorhanden ist, wird auch der erste Wert dafür verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Wird zum Wert von {{cssxref("align-items")}} des übergeordneten Elements berechnet.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Elemente und Tabellenelemente.

- `self-start`
  - : Richten Sie die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers, der der Startseite des Elements in der Querachse entspricht, bündig sind.
- `self-end`
  - : Richten Sie die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers, der der Endseite des Elements in der Querachse entspricht, bündig sind.
- `flex-start`
  - : Die Querstart-Margin-Kante des Flex-Elements ist mit der Querstart-Kante der Linie bündig.
- `flex-end`
  - : Die Querend-Margin-Kante des Flex-Elements ist mit der Querend-Kante der Linie bündig.
- `center`
  - : Die Margin-Box des Flex-Elements ist innerhalb der Linie auf der Querachse zentriert. Wenn die Quergröße des Elements größer ist als der Flex-Container, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`. `last baseline`
  - : Spezifiziert die Teilnahme an der ersten oder letzten Basislinien-Ausrichtung: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinie-Teilungsgruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auto-gestaltet ist, wird seine Größe gleichermaßen (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe aller automatisch dimensionierten Elemente den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element in der Block-und Inline-Richtung am Zentrum des zugeordneten Ankerelements aus. Siehe [Zentrierung am Anker mittels `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zu Beginn hat der Grid-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — die Standardwerte — was bewirkt, dass die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass sich die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/Inhaltshöhe erstrecken und in verschiedenen Positionen über ihre Zellen hinweg ausgerichtet sind, in Block- und Inline-Richtung.

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
- [Box-Ausrichtung in CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
