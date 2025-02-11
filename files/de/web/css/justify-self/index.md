---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`justify-self`** legt fest, wie ein Element innerhalb seines Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet wird.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab:

- In blockbasierten Layouts richtet sie ein Element auf der Inline-Achse innerhalb seines enthaltenden Blocks aus.
- Für absolut positionierte Elemente richtet sie ein Element auf der Inline-Achse innerhalb seines enthaltenden Blocks aus, wobei die Versatzwerte von top, left, bottom und right berücksichtigt werden.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über das [Ausrichten in blockbasierten, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über das [Ausrichten in Flexbox-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet sie ein Element auf der Inline-Achse innerhalb seines Gitterbereichs aus. Lesen Sie mehr über das [Ausrichten in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

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
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, optional zusammen mit `first` oder `last`.
- Positionelle Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Optional zusätzlich `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert entspricht dem Wert der `justify-items`-Eigenschaft des übergeordneten Containers, es sei denn, das Element hat keinen übergeordneten Container oder ist absolut positioniert. In diesen Fällen entspricht `auto` `normal`.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab:

    - In blockbasierten Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich wie bei `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.

- `start`
  - : Das Element wird an der Startkante des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet.
- `end`
  - : Das Element wird an der Endkante des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird an der Startkante des Ausrichtungscontainers der Startseite des Elements in der entsprechenden Achse ausgerichtet.
- `self-end`
  - : Das Element wird an der Endkante des Ausrichtungscontainers der Endseite des Elements in der entsprechenden Achse ausgerichtet.
- `center`
  - : Die Elemente werden in der Mitte des Ausrichtungscontainers ausgerichtet.
- `left`
  - : Die Elemente werden an der linken Kante des Ausrichtungscontainers ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden an der rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung: richtet die Ausrichtungsbasislinie des Elements mit der entsprechenden Baseline in der gemeinsamen ersten oder letzten Baseline-Gruppe aller Elemente in seiner Gruppe aus.
    Die fallback-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist sie `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-dimensionierten Elemente gleichermaßen (nicht proportional) vergrößert, wobei weiterhin die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalitäten) auferlegten Einschränkungen berücksichtigt werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Bei [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet dieser Wert das Element in der Inline-Richtung in der Mitte des zugeordneten Anker-Elements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert berücksichtigt.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Gitter-Layout. Anfangs erhält der Gitter-Container den `justify-items`-Wert `stretch`, was der Standardwert ist. Dadurch erstrecken sich die Gitter-Elemente über die gesamte Breite ihrer Zellen.

Die zweiten, dritten und vierten Gitter-Elemente erhalten dann unterschiedliche Werte für `justify-self`, um zu zeigen, wie diese den `justify-items`-Wert überschreiben. Diese Werte bewirken, dass die Gitter-Elemente nur so breit wie die Breite ihres Inhalts sind und an verschiedenen Positionen in ihren Zellen ausgerichtet werden.

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

- [Ausrichten in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
- {{CSSxRef("justify-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
