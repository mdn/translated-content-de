---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschrifts-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## Bestandteilseigenschaften

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
  - : Errechnet sich zum Wert des übergeordneten Elements von {{cssxref("align-items")}}.
- `normal`

  - : Die Wirkung dieses Schlüsselwortes hängt vom verwendeten Layout-Modus ab:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Margin-Rand des Flex-Elements an der Startseite wird mit dem Rand der Linie an der Startseite bündig ausgerichtet.
- `flex-end`
  - : Der Margin-Rand des Flex-Elements an der Endseite wird mit dem Rand der Linie an der Endseite bündig ausgerichtet.
- `center`
  - : Die Margen-Box des Flex-Elements wird innerhalb der Linie in der Querachse zentriert. Wenn die Quergröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überstehen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung auf die erste oder letzte Grundlinie an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensatzes der Box an der entsprechenden Grundlinie im gemeinsam genutzten ersten oder letzten Grundliniensatz aller Boxen in ihrer Grundlinien-Gruppierung aus. Die Ausrichtungsalternative für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-Größe hat, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, so dass die kombinierte Größe aller `auto`-Größe Elemente genau den Ausrichtungscontainer entlang der Querachse ausfüllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element im Block- und Inline-Richtung am Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Anfänglich hat der Grid-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — die Standardwerte —, was dazu führt, dass sich die Grid-Elemente über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte führen dazu, dass die Grid-Elemente nur so breit/hoch sind wie ihre Inhaltsbreite/-höhe und sich an verschiedenen Positionen innerhalb ihrer Zellen ausrichten, sowohl in der Block- als auch in der Inline-Richtung.

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
- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ausrichtung von Boxen im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausgleichsmodul](/de/docs/Web/CSS/CSS_box_alignment)
