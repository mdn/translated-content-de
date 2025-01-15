---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: a731cff4afe1132e84c29c3044c9ac4a58888f46
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert die Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box, indem sie ihnen eine Standardmethode zur Rechtfertigung jeder Box entlang der entsprechenden Achse gibt.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab, in dem wir uns befinden:

- In Blockebenen-Layouts richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus.
- Bei absolut positionierten Elementen werden die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse ausgerichtet, wobei die Offset-Werte von oben, links, unten und rechts berücksichtigt werden.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über Ausrichtung in Block-, absolut positionierten und Tabellenlayouts)
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über Ausrichtung in Flexbox)
- In Rasterlayouts richtet sie die Elemente innerhalb ihrer Rasterbereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über Ausrichtung in Rasterlayouts)

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

- Basis-Schlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das `baseline` Schlüsselwort, plus optional eines von `first` oder `last`.
- Positionale Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von einem der `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In Blockebenen-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Rasterlayouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnlich ist, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig in Richtung der Startkante des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig in Richtung der Endkante des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements auf der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements auf der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander in Richtung der Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander in Richtung der linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander in Richtung der rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline der ersten oder letzten Baseline-Gruppe des Boxen mit der entsprechenden Baseline in der geteilten ersten oder letzten Baseline-Gruppe aller Boxen in seiner Baseline-Sharing-Gruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle auf `auto`-größene Elemente gleichmäßig (nicht proportional) größer, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Im Falle von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen, richtet die Elemente in der Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Zentrieren auf dem Anker unter Verwendung von `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.
- `legacy`
  - : Macht den Wert von den Box-Nachkommen geerbt. Beachten Sie, dass wenn ein Nachkomme einen Wert von `justify-self: auto` hat, das `legacy` Schlüsselwort nicht vom Nachkommen berücksichtigt wird, nur der mit ihm assoziierte Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Rasterlayout. Zunächst erhält der Rastercontainer einen `justify-items` Wert von `stretch` (der Standard), wodurch die Rasterelemente über die gesamte Breite ihrer Zellen gestreckt werden.

Wenn Sie jedoch über den Rastercontainer hovern oder auf ihn tabben, erhält er einen Wert von `center`, wodurch die Rasterelemente nur so breit wie ihre Inhaltsbreite werden und sich in der Mitte ihrer Zellen ausrichten.

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
- {{CSSxRef("place-items")}} Kurzschreibweise
- [Box-Ausrichtung in CSS-Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
