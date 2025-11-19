---
title: justify-items
slug: Web/CSS/Reference/Properties/justify-items
l10n:
  sourceCommit: 05e0ea073802694cc49d76d566778bd607a9511f
---

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert die Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box und gibt ihnen allen eine Standardmethode, um jede Box entlang der entsprechenden Achse auszurichten.

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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft hängt vom Layout-Modus ab, in dem wir uns befinden:

- In Block-Level-Layouts richtet sie die Elemente innerhalb ihres umschließenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres umschließenden Blocks auf der Inline-Achse aus, unter Berücksichtigung der Versatzwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)).
- In Raster-Layouts richtet sie die Elemente innerhalb ihrer Rasterbereiche auf der Inline-Achse aus (siehe [Box-Ausrichtung in Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)).

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
justify-items: legacy left;
justify-items: legacy right;
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
- Basislinienausrichtung: das `baseline` Schlüsselwort, plus optional eines von `first` oder `last`.
- Positionale Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das `legacy` Schlüsselwort, gefolgt von einem von `left`, `right` oder `center`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` auf _ersetzten_ absolut positionierten Boxen, und als `stretch` auf _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Raster-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element ist bündig zueinander gepackt in Richtung der Startkante des Ausrichtungscontainers auf der entsprechenden Achse.
- `end`
  - : Das Element ist bündig zueinander gepackt in Richtung der Endkante des Ausrichtungscontainers auf der entsprechenden Achse.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element ist bündig zur Kante des Ausrichtungscontainers der Startseite des Elements gepackt, auf der entsprechenden Achse.
- `self-end`
  - : Das Element ist bündig zur Kante des Ausrichtungscontainers der Endseite des Elements gepackt, auf der entsprechenden Achse.
- `center`
  - : Die Elemente sind bündig zueinander gepackt in Richtung der Mitte des Ausrichtungscontainers.
- `left`
  - : Die Elemente sind bündig zueinander gepackt in Richtung der linken Kante des Ausrichtungscontainers. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander gepackt in Richtung der rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baselines-Ausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Baselinesets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselineset aller Boxen in ihrer Baseline-Teilungsgruppe aus.
    Die Ausrichtungsalternative für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, wird jedes `auto`-größenangepasste Element in seiner Größe gleichermaßen (nicht proportional) erhöht, unter Beachtung der Beschränkungen, die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegt werden, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richten Sie die Elemente entlang der Inline-Richtung zum Mittelpunkt des zugehörigen Ankerelements aus. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von der relativen Größe des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert honoriert.
- `legacy`
  - : Macht den Wert von den Box-Nachkommen ererbt. Beachten Sie, dass wenn ein Nachkomme den Wert `justify-self: auto` hat, das `legacy` Schlüsselwort vom Nachkommen nicht berücksichtigt wird, sondern nur der damit verbundene Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Raster-Layout. Anfänglich erhält der Raster-Container den `justify-items` Wert `stretch` (der Standard), der dazu führt, dass die Raster-Elemente sich über die gesamte Breite ihrer Zellen strecken.

Wenn Sie jedoch über den Raster-Container fahren oder darauf tabben, erhält er einen `justify-items` Wert von `center`, was dazu führt, dass die Raster-Elemente sich nur so breit wie ihre Inhaltsbreite spannen und in der Mitte ihrer Zellen ausrichten.

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
  font-family: "Helvetica", "Arial", sans-serif;
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
- {{CSSxRef("place-items")}} Kurzform
- [Box-Ausrichtung in Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
