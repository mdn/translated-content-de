---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert die Standard-{{CSSxRef("justify-self")}}-Eigenschaft für alle Elemente eines Containers und gibt ihnen eine Standardmethode, jeden Kasten entlang der entsprechenden Achse auszurichten.

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

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In Block-Layouten richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus.
- Bei absolut positionierten Elementen richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus und berücksichtigt die Offset-Werte von oben, links, unten und rechts.
- In Tabellenzellen-Layouten wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables))
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox))
- In Raster-Layouts richtet sie die Elemente innerhalb ihrer Rasterbereiche auf der Inline-Achse aus (siehe [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout))

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

- Basis-Schlüsselwörter: eines der Schlüsselwort-Werte `normal` oder `stretch`.
- Baseline-Ausrichtung: das `baseline` Schlüsselwort, optional zusammen mit `first` oder `last`.
- Positionsausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, oder `right`. Optional mit `safe` oder `unsafe`.
- Legacy-Ausrichtung: das `legacy` Schlüsselwort, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab:
    - In Block-Layouten ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Raster-Layouts führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
- `start`
  - : Das Element wird aneinandergereiht zur Startkante des Ausrichtung-Containers in der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird aneinandergereiht zur Endkante des Ausrichtung-Containers in der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird an die Kante des Ausrichtung-Containers der Startseite des Elements in der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird an die Kante des Ausrichtung-Containers der Endseite des Elements in der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden zentriert im Ausrichtung-Container aneinandergereiht.
- `left`
  - : Die Elemente werden aneinandergereiht zur linken Kante des Ausrichtung-Containers. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden aneinandergereiht zur rechten Kante des Ausrichtung-Containers in der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt eine Teilnahme an erster oder letzter Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-Teilen-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungs-Containers ist, wird die Größe von `auto`-größen Elementen gleichmäßig (nicht proportional) erhöht, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungs-Container füllt.
- `anchor-center`
  - : Im Fall von [ankergestützten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sie die Elemente zur Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Zentrieren auf dem Anker mithilfe von `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungs-Container überschreitet, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Ungeachtet der relativen Größen des Elements und des Ausrichtungs-Containers wird der angegebene Ausrichtungswert beachtet.
- `legacy`
  - : Macht den Wert von den Box-Nachkommen geerbt. Beachten Sie, dass, wenn ein Nachkomme einen `justify-self: auto` Wert hat, das `legacy` Schlüsselwort von dem Nachkommen nicht berücksichtigt wird, nur der `left`, `right` oder `center` Wert, der ihm zugeordnet ist.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Raster-Layout. Zunächst erhält der Raster-Container einen `justify-items` Wert von `stretch` (der Standardwert), der bewirkt, dass die Raster-Elemente die gesamte Breite ihrer Zellen ausfüllen.

Wenn Sie jedoch mit der Maus über den Raster-Container fahren oder mit der Tastatur darauf wechseln, erhält es einen `justify-items` Wert von `center`, wodurch die Raster-Elemente nur so breit wie ihre Inhaltsbreite sind und in der Mitte ihrer Zellen ausgerichtet werden.

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
- {{CSSxRef("place-items")}} Kurzform
- [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
