---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`**-Eigenschaft definiert das Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box, indem sie allen eine Standardmethode zum Ausrichten entlang der entsprechenden Achse gibt.

{{InteractiveExample("CSS Demo: justify-items")}}

```css interactive-example-choice
justify-items: stretch;
```

```css interactive-example-choice
justify-items: center;
```

```css interactive-example-choice
justify-items: start;
```

```css interactive-example-choice
justify-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft ist vom Layout-Modus abhängig:

- In Block-Level-Layouts richtet sie die Elemente auf der Inline-Achse innerhalb ihres enthaltenen Blocks aus.
- Für absolut positionierte Elemente richtet sie die Elemente auf der Inline-Achse innerhalb ihres enthaltenen Blocks aus, unter Berücksichtigung der Offset-Werte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables))
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox))
- In Grid-Layouts richtet sie die Elemente auf der Inline-Achse innerhalb ihrer Grid-Bereiche aus (siehe [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout))

## Syntax

```css
/* Basic keywords */
justify-items: normal;
justify-items: stretch;

/* Positional alignment */
justify-items: center; /* Pack items around the center */
justify-items: start; /* Pack items from the start */
justify-items: end; /* Pack items from the end */
justify-items: flex-start; /* Equivalent to 'start'. Note that justify-items is ignored in flexbox layouts. */
justify-items: flex-end; /* Equivalent to 'end'. Note that justify-items is ignored in flexbox layouts. */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Pack items from the left */
justify-items: right; /* Pack items from the right */
justify-items: anchor-center;

/* Baseline alignment */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-items: safe center;
justify-items: unsafe center;

/* Legacy alignment */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Global values */
justify-items: inherit;
justify-items: initial;
justify-items: revert;
justify-items: revert-layer;
justify-items: unset;
```

Diese Eigenschaft kann eine von vier verschiedenen Formen annehmen:

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionale Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich wie das von `stretch`, außer bei Boxen mit einem Aspektverhältnis oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
- `start`
  - : Das Element wird an der Startkante des Ausrichtungscontainers in der entsprechenden Achse bündig zueinander gepackt.
- `end`
  - : Das Element wird an der Endkante des Ausrichtungscontainers in der entsprechenden Achse bündig zueinander gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements in der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements in der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander zur linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander zur rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Spezifiziert die Teilnahme an der Ausrichtung zur ersten oder letzten Baseline: richtet die Ausrichtungs-Baseline der ersten oder letzten Baseline-Reihe der Box mit der entsprechenden Baseline in der geteilten ersten oder letzten Baseline-Reihe aller Boxen in ihrer Baseline-Sharing-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-großen Elemente gleichmäßig (nicht proportional) vergrößert, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder equivalent Funktionen) auferlegten Einschränkungen eingehalten werden, so dass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Im Fall von [anchor-positionierte](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente zur Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Ausrichtung zur Mitte des Ankers mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.
- `legacy`
  - : Macht den Wert, der von den Box-Nachkommen geerbt wird. Beachten Sie, dass wenn ein Nachkomme einen `justify-self: auto`-Wert hat, das `legacy`-Schlüsselwort vom Nachkommen nicht berücksichtigt wird, sondern nur der damit verbundene `left`, `right` oder `center`-Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container den `justify-items`-Wert `stretch` (der Standardwert), der dazu führt, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Wenn Sie jedoch auf den Grid-Container hoveren oder tabben, erhält er den `justify-items`-Wert `center`, der dazu führt, dass die Grid-Elemente nur so breit wie ihre Inhaltsbreite werden und in der Mitte ihrer Zellen ausgerichtet werden.

#### HTML

```html
<article class="container" tabindex="0">
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

article:hover,
article:focus {
  justify-items: center;
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

- {{CSSxRef("justify-self")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("place-items")}} Kurzbefehl
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
