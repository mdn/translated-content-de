---
title: place-self
slug: Web/CSS/place-self
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element sowohl in der Block- als auch in der Inline-Richtung gleichzeitig auszurichten (d.h. die {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaften). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Elemente. Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert auch für ihn verwendet.

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
  - : Berechnet sich zum Wert von {{cssxref("align-items")}} des übergeordneten Elements.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die der Startseite des Elements in der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie bündig mit der Kante des Ausrichtungscontainers sind, die der Endseite des Elements in der Kreuzachse entspricht.
- `flex-start`
  - : Die Kreuz-Start-Margen-Kante des Flex-Elements ist bündig mit der Kreuz-Start-Kante der Linie.
- `flex-end`
  - : Die Kreuz-End-Margen-Kante des Flex-Elements ist bündig mit der Kreuz-End-Kante der Linie.
- `center`
  - : Die Margen-Box des Flex-Elements wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie der ersten oder letzten Basisset des Elements mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basissatz aller Boxen in ihrer Basisteilungsgruppe aus.
    Die Ausrichtungs-Alternative für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Kreuzachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto`-Größe eingestellt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} auferlegten Einschränkungen respektiert werden (oder gleichwertige Funktionalität), sodass die kombinierte Größe aller `auto`-Größenelemente genau das Ausrichtungscontainer entlang der Kreuzachse füllt.
- `anchor-center`
  - : Bei [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element sowohl im Block als auch in der Inline-Richtung am Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Gitternetz-Layout. Zunächst hat der Grid-Container die Standardwerte [`justify-items`](/de/docs/Web/CSS/justify-items) und [`align-items`](/de/docs/Web/CSS/align-items) von `stretch`, die dazu führen, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/Inhaltshöhe werden und sich in verschiedenen Positionen innerhalb ihrer Zellen in Block- und Inline-Richtung ausrichten.

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
- [Grundlegende Konzepte des Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
