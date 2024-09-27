---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`**-Eigenschaft legt fest, wie ein Feld innerhalb seines Ausrichtungscontainers entlang der entsprechenden Achse gerechtfertigt wird.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In Block-Layoutmodi richtet sie ein Element innerhalb seines enthaltenen Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie ein Element innerhalb seines enthaltenen Blocks auf der Inline-Achse aus, unter Berücksichtigung der Offset-Werte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet sie ein Element innerhalb seines Grid-Bereichs auf der Inline-Achse aus. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

## Syntax

```css
/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center; /* Pack item around the center */
justify-self: start; /* Pack item from the start */
justify-self: end; /* Pack item from the end */
justify-self: flex-start; /* Equivalent to 'start'. Note that justify-self is ignored in flexbox layouts. */
justify-self: flex-end; /* Equivalent to 'end'. Note that justify-self is ignored in flexbox layouts. */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* Pack item from the left */
justify-self: right; /* Pack item from the right */
justify-self: anchor-center;

/* Baseline alignment */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-self: safe center;
justify-self: unsafe center;

/* Global values */
justify-self: inherit;
justify-self: initial;
justify-self: revert;
justify-self: revert-layer;
justify-self: unset;
```

Diese Eigenschaft kann in drei verschiedenen Formen auftreten:

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal`, `auto` oder `stretch`.
- Grundlinienausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionelle Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Plus optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items`-Eigenschaft des übergeordneten Containers, es sei denn, das Element hat keinen übergeordneten Container oder ist absolut positioniert. In diesen Fällen stellt `auto` `normal` dar.
- `normal`

  - : Die Wirkung dieses Schlüsselwortes hängt vom verwendeten Layout-Modus ab:

    - In Block-Layoutmodi ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer für Boxen mit einem Seitenverhältnis oder intrinsischen Größen, wo es sich wie `start` verhält.

- `start`
  - : Das Element wird lückenlos zum Start-Rand des Ausrichtungscontainers in der entsprechenden Achse ausgerichtet.
- `end`
  - : Das Element wird lückenlos zum End-Rand des Ausrichtungscontainers in der entsprechenden Achse ausgerichtet.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird lückenlos zum Rand des Ausrichtungscontainers an der Start-Seite des Elements in der entsprechenden Achse ausgerichtet.
- `self-end`
  - : Das Element wird lückenlos zum Rand des Ausrichtungscontainers an der End-Seite des Elements in der entsprechenden Achse ausgerichtet.
- `center`
  - : Die Elemente werden lückenlos zur Mitte des Ausrichtungscontainers hin zusammengepackt.
- `left`
  - : Die Elemente werden lückenlos zum linken Rand des Ausrichtungscontainers hin zusammengepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden lückenlos zum rechten Rand des Ausrichtungscontainers in der entsprechenden Achse zusammengepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensatzes der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundliniensatz aller Boxen in ihrer Grundlinien-Gruppe aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, wird jedes `auto`-große Element gleichmäßig (nicht proportional) vergrößert, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalitäten) auferlegten Beschränkungen respektiert werden, so dass die kombinierte Größe den Ausrichtungscontainer genau ausfüllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element in der Inline-Richtung auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert respektiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2x2-Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items`-Wert von `stretch` — dem Standardwert —, der dazu führt, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items`-Wert überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und sich an verschiedenen Positionen innerhalb ihrer Zellen ausrichten.

#### HTML

```html
<article class="container">
  <span>First child</span>
  <span>Second child</span>
  <span>Third child</span>
  <span>Fourth child</span>
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
  grid-auto-rows: 40px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
  justify-items: stretch;
}

span:nth-child(2) {
  justify-self: start;
}

span:nth-child(3) {
  justify-self: center;
}

span:nth-child(4) {
  justify-self: end;
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

{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("justify-items")}}
- [Kastenausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- Modul [CSS-Kastenausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
