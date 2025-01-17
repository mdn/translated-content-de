---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: c5806a7b25ce499217abe53e53f909b027d3734f
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`** Eigenschaft legt fest, wie eine Box entlang der entsprechenden Achse innerhalb ihres Ausrichtungscontainers gerechtfertigt wird.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layoutmodus ab:

- In blocklevel Layouts richtet sie ein Element entlang der Inline-Achse innerhalb seines umgebenden Blocks aus.
- Für absolut positionierte Elemente richtet sie ein Element entlang der Inline-Achse innerhalb seines umgebenden Blocks aus und berücksichtigt dabei die Offsetwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet sie ein Element entlang der Inline-Achse innerhalb seines Grid-Bereichs aus. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

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

Diese Eigenschaft kann eine von drei verschiedenen Formen annehmen:

- Basis-Schlüsselwörter: eines der Schlüsselwerte `normal`, `auto` oder `stretch`.
- Baseline-Ausrichtung: das `baseline` Schlüsselwort, optional mit `first` oder `last`.
- Positionierungs-Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der des `justify-items` Attributs der übergeordneten Box, es sei denn die Box hat keinen Elternteil oder ist absolut positioniert; in diesen Fällen repräsentiert `auto` `normal`.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layoutmodus ab:

    - In blocklevel Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnlich ist, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.

- `start`
  - : Das Element ist aufeinander gedrängt in Richtung der Startkante des Ausrichtungscontainers entlang der entsprechenden Achse.
- `end`
  - : Das Element ist aufeinander gedrängt in Richtung der Endkante des Ausrichtungscontainers entlang der entsprechenden Achse.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element ist aufeinander gedrängt bis zur Kante des Ausrichtungscontainers auf der Startseite des Elements entlang der entsprechenden Achse.
- `self-end`
  - : Das Element ist aufeinander gedrängt bis zur Kante des Ausrichtungscontainers auf der Endseite des Elements entlang der entsprechenden Achse.
- `center`
  - : Die Elemente sind aufeinander gedrängt zur Mitte des Ausrichtungscontainers.
- `left`
  - : Die Elemente sind aufeinander gedrängt in Richtung der linken Kante des Ausrichtungscontainers. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind aufeinander gedrängt in Richtung der rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: Richten Sie die Ausrichtungsbaseline des ersten oder letzten Baselinesets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselineset aller Boxen in ihrer Baseline-Gruppe aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-dimensionierten Elemente gleichmäßig (nicht proportional) vergrößert, unter Beachtung der durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder entsprechender Funktionalität) auferlegten Einschränkungen, so dass die kombinierte Größe den Ausrichtungscontainer genau füllt.
- `anchor-center`
  - : Im Fall von [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sich das Element zur Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert berücksichtigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container den `justify-items` Wert `stretch` — die Standardeinstellung —, was dazu führt, dass die Grid-Elemente die gesamte Breite ihrer Zellen einnehmen.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann andere `justify-self` Werte, um zu zeigen, wie diese den `justify-items` Wert überschatten. Diese Werte bewirken, dass sich die Grid-Elemente nur so breit wie ihre Inhaltsbreite erstrecken und sich in verschiedenen Positionen innerhalb ihrer Zellen ausrichten.

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

{{EmbedLiveSample('Basic_demonstration', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- {{CSSxRef("justify-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
