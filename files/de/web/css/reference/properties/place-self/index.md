---
title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

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

## Bestandteil-Eigenschaften

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

- `auto`
  - : Bewertet den übergeordneten Wert von {{cssxref("align-items")}}.
- `normal`
  - : Der Effekt dieses Schlüsselwortes hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es wie `start` wirkt.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers an der Startseite des Elements in der Kreuzachse sind.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers an der Endseite des Elements in der Kreuzachse sind.
- `flex-start`
  - : Der cross-start Ränderand des Flex-Elements ist bündig mit dem cross-start Rand der Linie.
- `flex-end`
  - : Der cross-end Ränderand des Flex-Elements ist bündig mit dem cross-end Rand der Linie.
- `center`
  - : Die Margin-Box des Flex-Elements ist innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Basislinienausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in seiner Basislinien-Sharing-Gruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner als die Größe des Ausrichtungscontainers ist und das Element `auto`-größenangepasst ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, so dass die kombinierte Größe aller `auto`-größenangepassten Elemente den Ausrichtungscontainer entlang der Kreuzachse genau ausfüllt.
- `anchor-center`
  - : Im Falle von [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet das Element in der Block- und Inline-Richtung in der Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die Werte {{cssxref("justify-items")}} und {{cssxref("align-items")}} `stretch` — die Standardeinstellungen — was bewirkt, dass sich die Grid-Elemente über die gesamte Breite ihrer Zellen erstrecken.

Den zweiten, dritten und vierten Grid-Elementen werden dann unterschiedliche Werte von `place-self` zugewiesen, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltshöhe/-breite spannen und in unterschiedlichen Positionen über ihre Zellen hinweg ausgerichtet sind, in Block- und Inline-Richtung.

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
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
