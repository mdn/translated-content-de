---
title: "`place-self` CSS-Eigenschaft"
short-title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in der Block- als auch in der Inline-Richtung gleichzeitig zu auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Elemente, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

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

## Zugehörige Eigenschaften

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
  - : Berechnet sich zum Wert von {{cssxref("align-items")}} des Elternteils.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Elemente und Tabellenzellen.

- `self-start`
  - : Richten Sie die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers übereinstimmen, der der Startseite des Elements in der Kreuzachse entspricht.
- `self-end`
  - : Richten Sie die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers übereinstimmen, der der Endseite des Elements in der Kreuzachse entspricht.
- `flex-start`
  - : Der Rand der Flex-Elemente am Anfang der Kreuzachse wird mit dem Anfangsrand der Linie abgeglichen.
- `flex-end`
  - : Der Rand der Flex-Elemente am Ende der Kreuzachse wird mit dem Endrand der Linie abgeglichen.
- `center`
  - : Die Randbox des Flex-Elements wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, läuft es in beide Richtungen über.
- `baseline`, `first baseline`, `last baseline`
  - : Spezifiziert die Teilnahme an der Ausrichtung zur ersten oder letzten Basislinie: richtet die Ausrichtungsbasislinie der ersten oder letzten Basissatz der Box mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinien-Sharing-Gruppe aus. Die Ausrichtungsfalle für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-größenbasiert ist, wird seine Größe gleichmäßig (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe aller `auto`-größengebasierten Elemente den Ausrichtungscontainer entlang der Kreuzachse genau ausfüllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet das Element entlang der Block- und Inline-Richtung im Zentrum des zugeordneten Ankerelements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Anfangs hat der Grid-Container `justify-items` und `align-items` Werte von `stretch` — die Standardwerte —, was dazu führt, dass die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte für `place-self`, um zu zeigen, wie diese die Standardplatzierungen übersteuern. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe sind und in unterschiedlichen Positionen innerhalb ihrer Zellen in der Block- und Inline-Richtung ausgerichtet werden.

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
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
