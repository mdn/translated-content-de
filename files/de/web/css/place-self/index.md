---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, ein individuelles Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaften). Diese Eigenschaft gilt für Block-Elemente, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

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

## Einzelne Eigenschaften

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
  - : Wird zum Wert des übergeordneten Elements von {{cssxref("align-items")}} berechnet.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position absolut positionierter Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenspalten.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Startseite des Elements auf der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Endseite des Elements auf der Kreuzachse entspricht.
- `flex-start`
  - : Der Rand der Flexseite an der Startseite ist bündig mit der Startkante der Linie.
- `flex-end`
  - : Der Rand der Flexseite an der Endseite ist bündig mit der Endkante der Linie.
- `center`
  - : Der Rand des Flex-Elementes wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, überläuft es gleichmäßig in beide Richtungen.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes des Elements mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basislinengruppe aller Boxen in der Basislinien-Teilungsgruppe aus.
    Die Ersatzausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner als die Größe des Ausrichtungscontainers ist und das Element auf `auto`-Größe eingestellt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe aller `auto`-großen Elemente genau den Ausrichtungscontainer entlang der Kreuzachse ausfüllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element auf die Mitte des zugehörigen Ankerelements in Block- und Inline-Richtung aus. Siehe [Zentrieren am Anker mithilfe von `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2-Rasterlayout. Zunächst hat der Rastercontainer Werte für [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — den Standardwerten — was dazu führt, dass sich die Rasterelemente über die gesamte Breite ihrer Zellen erstrecken.

Den zweiten, dritten und vierten Rasterelementen werden dann unterschiedliche `place-self` Werte zugewiesen, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte führen dazu, dass sich die Rasterelemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe erstrecken und in unterschiedlichen Positionen über ihre Zellen hinweg in Block- und Inline-Richtungen ausgerichtet sind.

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
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
