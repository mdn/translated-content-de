---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`** Eigenschaft legt fest, wie ein Element innerhalb seines Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet wird.

{{InteractiveExample("CSS Demo: justify-self")}}

```css interactive-example-choice
justify-self: stretch;
```

```css interactive-example-choice
justify-self: center;
```

```css interactive-example-choice
justify-self: start;
```

```css interactive-example-choice
justify-self: end;
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
  grid-auto-rows: 40px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In Block-Level-Layouts wird ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse ausgerichtet.
- Bei absolut positionierten Elementen wird ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse ausgerichtet, wobei die Offset-Werte von oben, links, unten und rechts berücksichtigt werden.
- In Tabellenzellenlayouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block- und absolut positionierten sowie Tabellenausrichtungen](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts wird ein Element innerhalb seines Grid-Bereichs auf der Inline-Achse ausgerichtet. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

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

- Grundlegende Schlüsselwörter: eines der Schlüsselwörter `normal`, `auto` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionelle Ausrichtung:
  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items` Eigenschaft des übergeordneten Elements, es sei denn, das Element hat kein übergeordnetes Element oder ist absolut positioniert, in diesen Fällen repräsentiert `auto` `normal`.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellenlayouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.

- `start`
  - : Das Element wird eng aneinander gegen den Start-Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird eng aneinander gegen den End-Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird eng an den Rand des Ausrichtungscontainers auf der Startseite des Elements in der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird eng an den Rand des Ausrichtungscontainers auf der Endseite des Elements in der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden eng aneinander gegen die Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden eng aneinander gegen den linken Rand des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden eng aneinander gegen den rechten Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: Richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im geteilten ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-sharing-Gruppe aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, werden alle `auto`-dimensionierten Elemente gleichmäßig (nicht proportional) vergrößert, unter Berücksichtigung der durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen wird das Element im Inline-Bereich zum Zentrum des zugehörigen Ankerelements ausgerichtet. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert berücksichtigt.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Dem Grid-Container wird zunächst ein `justify-items` Wert von `stretch` zugewiesen — dem Standardwert —, wodurch die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Gitterelemente erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items` Wert überschreiben. Diese Werte führen dazu, dass sich die Grid-Elemente nur so breit wie ihre Inhaltsbreite erstrecken und an verschiedenen Positionen innerhalb ihrer Zellen ausrichten.

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

- [Box-Ausgleich in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- {{CSSxRef("justify-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
