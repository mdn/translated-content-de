---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element gleichzeitig in Block- und Inline-Richtung auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht angegeben ist, wird der erste Wert auch für diesen verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Zusammensetzende Eigenschaften

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
  - : Wird auf den Wert der Elternelements {{cssxref("align-items")}} berechnet.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt von dem Layout-Modus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Die cross-start Randkante des Flex-Elements ist bündig mit der cross-start Kante der Linie.
- `flex-end`
  - : Die cross-end Randkante des Flex-Elements ist bündig mit der cross-end Kante der Linie.
- `center`
  - : Die Randbox des Flex-Elements ist in der Linie auf der Querachse zentriert. Wenn die Quergröße des Elements größer als der Flex-Container ist, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ausrichtung auf der ersten oder letzten Baseline: richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Satzes der Box an der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Satz aller Boxen in ihrer Baseline-Teilnahmegruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner als die Größe des Ausrichtungscontainers ist und das Element `auto`-größenmäßig ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe aller `auto`-größenmäßigen Elemente den Ausrichtungscontainer entlang der Querachse vollständig ausfüllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element an der Mitte des zugehörigen Ankerelements in der Block- und Inline-Richtung aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — die Standardwerte —, was dazu führt, dass die Grid-Elemente die gesamte Breite ihrer Zellen einnehmen.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch sind wie der Inhalt und sich in verschiedenen Positionen über ihre Zellen hinweg, in Block- und Inline-Richtung, ausrichten.

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
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- Modul [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
