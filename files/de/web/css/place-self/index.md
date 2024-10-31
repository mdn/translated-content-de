---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: b505d75f1dbc5f31dd06eecab86e0b86159a4caa
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element gleichzeitig sowohl in Block- als auch in Inline-Richtung auszurichten (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für diesen verwendet.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Einzelne Eigenschaften

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
  - : Ermittelt sich zum Wert der {{cssxref("align-items")}} Eigenschaft des übergeordneten Elements.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - Im statischen Zustand von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder intrinsischen Größen, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Startseite des Elements in der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Endseite des Elements in der Kreuzachse entspricht.
- `flex-start`
  - : Der Anfangsrand der Flex-Elemente wird mit dem Anfangsrand der Linie bündig ausgerichtet.
- `flex-end`
  - : Der Endrand der Flex-Elemente wird mit dem Endrand der Linie bündig ausgerichtet.
- `center`
  - : Die Margin-Box des Flex-Elements wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer ist als der Flex-Container, läuft es in beide Richtungen gleichmäßig über.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ausrichtung der ersten oder letzten Grundlinie: richtet die Grundlinie des Ausrichtungsbereichs der Box mit der entsprechenden Grundlinie der geteilten ersten oder letzten Grundliniensammlung aller Boxen in ihrer Grundliniengruppe aus.
    Die standardmäßige Ausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-größenbasiert ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, unter Wahrung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen, so dass die kombinierte Größe aller `auto`-größenbasierten Elemente den Ausrichtungscontainer entlang der Kreuzachse genau füllt.
- `anchor-center`
  - : Bei [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element so aus, dass es in der Block- und Inline-Richtung im Zentrum des zugehörigen Ankerelements liegt. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die `justify-items` und `align-items` Werte `stretch` — die Standardwerte —, was bewirkt, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche `place-self` Werte, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe sind und sich in verschiedenen Positionen innerhalb ihrer Zellen, in Block- und Inline-Richtungen, ausrichten.

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

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
