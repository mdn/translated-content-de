---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird auch der erste Wert für diesen verwendet.

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

## Bestandteileigenschaften

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
  - : Berechnet sich zum Wert des Elternelements von {{cssxref("align-items")}}.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Aspektverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig an der Kante des Ausrichtungscontainers aus, die der Startseite des Elements auf der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig an der Kante des Ausrichtungscontainers aus, die der Endseite des Elements auf der Kreuzachse entspricht.
- `flex-start`
  - : Der Marginalrand des Flex-Elements am Anfang wird mit dem Start-Rand der Linie bündig ausgerichtet.
- `flex-end`
  - : Der Marginalrand des Flex-Elements am Ende wird mit dem End-Rand der Linie bündig ausgerichtet.
- `center`
  - : Die Randbox des Flex-Elements wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basissatzes der Box mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basissatzgruppe aller Boxen in ihrer Basisliniengruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner als die Größe des Ausrichtungscontainers ist und das Element auf `auto`-Größe gesetzt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, unter Beachtung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} auferlegten Einschränkungen (oder gleichwertiger Funktionalität), sodass die kombinierte Größe aller `auto`-größen Elemente den Ausrichtungscontainer entlang der Kreuzachse genau füllt.
- `anchor-center`
  - : Im Falle von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element auf die Mitte des zugehörigen Ankerelements in Block- und Inline-Richtung aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — den Standardwerten —, wodurch die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Den zweiten, dritten und vierten Grid-Elementen werden dann unterschiedliche Werte von `place-self` zugewiesen, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass sich die Grid-Elemente nur so weit/hoch wie ihre Inhaltsbreite/-höhe erstrecken und sich in unterschiedliche Positionen in ihren Zellen in Block- und Inline-Richtung ausrichten.

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
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
