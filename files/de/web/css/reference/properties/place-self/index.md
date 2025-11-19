---
title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`place-self`** [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es, ein einzelnes Element gleichzeitig sowohl in Block- als auch Inline-Richtung auszurichten (d.h. die {{cssxref("align-self")}}- und {{cssxref("justify-self")}}-Eigenschaften). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht angegeben ist, wird der erste Wert ebenfalls für ihn verwendet.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`align-self`](/de/docs/Web/CSS/Reference/Properties/align-self)
- [`justify-self`](/de/docs/Web/CSS/Reference/Properties/justify-self)

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
  - : Berechnet sich zum Wert der übergeordneten {{cssxref("align-items")}}-Eigenschaft.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenspalten.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Querstarter-Rand des Flex-Elements ist bündig mit dem Querstarter-Rand der Linie.
- `flex-end`
  - : Der Querend-Rand des Flex-Elements ist bündig mit dem Querend-Rand der Linie.
- `center`
  - : Die Randbox des Flex-Elements ist innerhalb der Linie auf der Querachse zentriert. Wenn die Querschnittsgröße des Elements größer als der Flex-Container ist, wird es zu gleichen Teilen in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie der ersten oder letzten Basisliniengruppe der Box mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basisliniengruppe aller Boxen in ihrer Basisliniengruppe aus.
    Die Ausrichtungsrückfallebene für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-größe hat, wird seine Größe gleichmäßig (nicht proportional) erhöht, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe aller `auto`-großen Elemente genau den Ausrichtungscontainer entlang der Querachse ausfüllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet das Element in Block- und Inlinerichtung auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die `justify-items`- und `align-items`-Werte `stretch` — die Standardeinstellungen —, was dazu führt, dass die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte für `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte führen dazu, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe sind und sich in verschiedenen Positionen innerhalb ihrer Zellen in Block- und Inlinerichtung ausrichten.

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

#### Ergebnis

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
