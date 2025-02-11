---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es, ein einzelnes Element gleichzeitig sowohl in der Block- als auch in der Inline-Ausrichtung auszurichten (d. h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für diesen verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
  - : Wird auf den Wert von {{cssxref("align-items")}} des übergeordneten Elements berechnet.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ Absolut-Positionierten-Boxen und wie `stretch` bei _allen anderen_ Absolut-Positionierten-Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten, das ähnlich dem von `stretch` ist, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es wie `start` agiert.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers abschließen, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers abschließen, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Quer-Start-Rand des Flex-Elements ist bündig mit dem Quer-Start-Rand der Linie.
- `flex-end`
  - : Der Quer-End-Rand des Flex-Elements ist bündig mit dem Quer-End-Rand der Linie.
- `center`
  - : Die Randbox des Flex-Elements wird innerhalb der Linie auf der Querachse zentriert. Wenn die Quergröße des Elements größer als der Flexcontainer ist, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung auf der ersten oder letzten Baseline an: Richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-Sharing-Gruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto` eingestellt ist, wird seine Größe gleichmäßig (nicht proportional) vergrößert, wobei weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionen) auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe aller `auto`-Elemente den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Bei [anchor-positioned](/de/docs/Web/CSS/CSS_anchor_positioning)-Elementen richtet dieses die Elemente in der Block- und Inline-Ausrichtung in der Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — den Standardwerten — wodurch die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Die zweite, dritte und vierte Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die standardmäßigen Platzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihr Inhaltsbreite/-höhe sind und sich in verschiedenen Positionen über ihre Zellen hinweg ausrichten, sowohl in Block- als auch Inline-Ausrichtung.

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

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
