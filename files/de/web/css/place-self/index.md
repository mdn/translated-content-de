---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS)-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es, ein einzelnes Element sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird auch der erste Wert dafür verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Berechnet sich zum {{cssxref("align-items")}}-Wert des Elternteils.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` auf _ersetzten_ absolut positionierten Boxen und wie `stretch` auf _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenelemente.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements in der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements in der Kreuzachse entspricht.
- `flex-start`
  - : Der Start-Margenrand des Flex-Elements liegt bündig mit dem Start-Rand der Linie in der Kreuzachse.
- `flex-end`
  - : Der End-Margenrand des Flex-Elements liegt bündig mit dem End-Rand der Linie in der Kreuzachse.
- `center`
  - : Die Margen-Box des Flex-Elements ist innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer ist als der Flex-Container, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung auf der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in seiner Basislinien-Gruppenbeteiligung aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto`-Größe eingestellt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen weiterhin beachtet werden, sodass die kombinierte Größe aller `auto`-großen Elemente genau den Ausrichtungscontainer entlang der Kreuzachse füllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element auf die Mitte des zugehörigen Ankerelements in Block- und Inline-Richtung aus. Siehe [Zentrierung beim Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Vorführung

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zu Beginn hat der Grid-Container Werte von [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) mit `stretch` — den Standardwerten —, was dazu führt, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen strecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe spannen und sich in verschiedenen Positionen innerhalb ihrer Zellen in Block- und Inline-Richtung ausrichten.

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
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
