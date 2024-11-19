---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`** Eigenschaft legt fest, wie ein Kasten innerhalb seines Ausrichtungscontainers entlang der entsprechenden Achse gerechtfertigt wird.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab, in dem wir uns befinden:

- In Block-Layout-Modi richtet es ein Element innerhalb seines Umgebungsblocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet es ein Element innerhalb seines Umgebungsblocks auf der Inline-Achse aus, unter Berücksichtigung der Abstandsparameter oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet es ein Element innerhalb seines Rasterbereichs auf der Inline-Achse aus. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

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

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal`, `auto` oder `stretch`.
- Basislinienausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionelle Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Plus optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items` Eigenschaft des Elternelements, es sei denn, die Box hat kein Elternteil oder ist absolut positioniert. In diesen Fällen repräsentiert `auto` `normal`.
- `normal`

  - : Die Wirkung dieses Schlüsselwortes ist abhängig vom Layoutmodus, in dem wir uns befinden:

    - In Block-Layout-Modi ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder intrinsischen Größen, wo es sich wie `start` verhält.

- `start`
  - : Das Element wird bündig zur Startkante des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig zur Endkante des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements, in der entsprechenden Achse, gepackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements, in der entsprechenden Achse, gepackt.
- `center`
  - : Die Elemente werden bündig zur Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zur linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zur rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Basislinienausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basislinensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basislinensatz aller Boxen in seiner Basislinien-Sharing-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, wird die Größe aller `auto`-mäßig dimensionierten Elemente gleichmäßig (nicht proportional) erhöht, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen eingehalten werden, damit die kombinierte Größe den Ausrichtungscontainer genau füllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element in der Inline-Richtung zum Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Rasterlayout. Zunächst wird dem Rastercontainer ein `justify-items` Wert von `stretch` zugewiesen — der Standard —, der dazu führt, dass sich die Rasterelemente über die gesamte Breite ihrer Zellen erstrecken.

Das zweite, dritte und vierte Rasterelement erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items` Wert überschreiben. Diese Werte bewirken, dass sich die Rasterelemente nur so breit wie ihre Inhaltsbreite erstrecken und in verschiedenen Positionen innerhalb ihrer Zellen ausrichten.

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

- {{CSSxRef("justify-items")}}
- [Kastenausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Kastenausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) modul
