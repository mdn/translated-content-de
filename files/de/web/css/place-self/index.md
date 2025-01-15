---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: a731cff4afe1132e84c29c3044c9ac4a58888f46
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es, ein einzelnes Element gleichzeitig in Block- und Inline-Richtung auszurichten (d.h. die {{cssxref("align-self")}}- und {{cssxref("justify-self")}}-Eigenschaften). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird auch der erste Wert dafür verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Bestandteil-Eigenschaften

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

  - : Die Wirkung dieses Schlüsselworts hängt vom genutzten Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenspalten.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Anpassungscontainers aus, der der Startseite des Elements in der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Anpassungscontainers aus, der der Endseite des Elements in der Kreuzachse entspricht.
- `flex-start`
  - : Der startende Rand des Flex-Elements ist bündig mit dem startenden Rand der Linie.
- `flex-end`
  - : Der endende Rand des Flex-Elements ist bündig mit dem endenden Rand der Linie.
- `center`
  - : Die Margenbox des Flex-Elements ist innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Spezifiziert die Teilnahme an der ersten oder letzten Baseline-Ausrichtung: richtet die Baseline-Ausrichtungsline der ersten oder letzten Baseline-Setzung der Box mit der entsprechenden Baseline in der gemeinsamen ersten oder letzten Baseline-Setzung aller Boxen in ihrer Baseline-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist sie `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner als die Größe des Anpassungscontainers ist und das Element auf `auto`-Größe gesetzt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} auferlegten Einschränkungen eingehalten werden, so dass die kombinierte Größe aller `auto`-großen Elemente genau den Anpassungscontainer entlang der Kreuzachse füllt.
- `anchor-center`
  - : Bei [anchor-positioned](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element in der Block- und Inline-Richtung auf die Mitte des zugehörigen Anker-Elements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Rasterlayout. Zunächst hat der Raster-Container die Werte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch` — die Standardwerte — was dazu führt, dass die Raster-Elemente die gesamte Breite ihrer Zellen ausfüllen.

Die zweiten, dritten und vierten Raster-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierung überschreiben. Diese Werte bewirken, dass die Raster-Elemente nur so weit/hoch wie ihre Inhaltsbreite/-höhe reichen und in verschiedenen Positionen in ihren Zellen in Block- und Inline-Richtung ausgerichtet sind.

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
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
