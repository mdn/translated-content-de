---
title: CSS-Eigenschaft `place-self`
short-title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaften). Diese Eigenschaft gilt für Block-Element-Boxen, absolut positionierte Boxen und Raster-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert ebenfalls für diesen verwendet.

{{InteractiveExample("CSS Demo: place-self")}}

```css interactive-example-choice
place-self: stretch center;
```

```css interactive-example-choice
place-self: center start;
```

```css interactive-example-choice
place-self: start end;
```

```css interactive-example-choice
place-self: end center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 220px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}

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

Diese Eigenschaft wird als eines oder zwei der folgenden Schlüsselwort-Werte angegeben:

- `auto`
  - : Berechnet sich aus dem Wert von {{cssxref("align-items")}} des übergeordneten Elements.
- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom genutzten Layoutmodus ab:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Raster-Elementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Element-Boxen und Tabellzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Anfangsrand des Flex-Elements liegt an der Anfängskante der Zeile an.
- `flex-end`
  - : Der Endrand des Flex-Elements liegt an der Endkante der Zeile an.
- `center`
  - : Die Randbox des Flex-Elements wird innerhalb der Zeile auf der Querachse zentriert. Wenn die Quergröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Erst- oder Letzt-Basislinienausrichtung an: Richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinienteilungsgruppe aus. Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner als die Größe des Ausrichtungscontainers ist und das Element auf `auto` eingestellt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, wobei trotzdem die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen beachtet werden, sodass die kombinierte Größe aller `auto`-elementierten Elemente den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Im Fall von [Anker-positionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet das Element in der Mitte des zugehörigen Ankerelements in der Block- und Inline-Richtung aus. Siehe [Zentrieren auf den Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Rasterlayout. Zu Beginn hat der Raster-Container die Werte {{cssxref("justify-items")}} und {{cssxref("align-items")}} von `stretch` — den Standardwerten —, wodurch die Raster-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Dem zweiten, dritten und vierten Raster-Element werden dann unterschiedliche Werte für `place-self` zugewiesen, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass sich die Raster-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe erstrecken und sich in unterschiedlichen Positionen über ihre Zellen hinweg, in Block- und Inline-Richtung, ausrichten.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

#### Resultat

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundlagen von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung in Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)-Modul
