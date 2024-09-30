---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`**-Eigenschaft definiert die Standard-{{CSSxRef("justify-self")}}-Eigenschaft für alle Elemente der Box und gibt ihnen allen eine Standardmethode, um jede Box entlang der entsprechenden Achse auszurichten.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab, in dem wir uns befinden:

- In Block-Layout-Elementen richtet sie die Elemente auf der Inline-Achse innerhalb ihres enthaltenden Blocks aus.
- Für absolut positionierte Elemente richtet sie die Elemente auf der Inline-Achse innerhalb ihres enthaltenden Blocks aus und berücksichtigt die Versatzwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über Ausrichtung in Block-, absolut positionierten und Tabellenlayouts).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über Ausrichtung in Flexbox).
- In Grid-Layouts richtet sie die Elemente auf der Inline-Achse innerhalb ihrer Rasterbereiche aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über Ausrichtung in Grid-Layouts).

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
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In Block-Layout-Elementen ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` für _ersetzte_ absolut positionierte Boxen und wie `stretch` für _alle anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder intrinsischen Größen, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig zur Startkante des Ausrichtungscontainers entlang der entsprechenden Achse verpackt.
- `end`
  - : Das Element wird bündig zur Endkante des Ausrichtungscontainers entlang der entsprechenden Achse verpackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements entlang der entsprechenden Achse verpackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements entlang der entsprechenden Achse verpackt.
- `center`
  - : Die Elemente werden bündig zur Mitte des Ausrichtungscontainers verpackt.
- `left`
  - : Die Elemente werden bündig zur linken Kante des Ausrichtungscontainers verpackt. Wenn sich die Achse der Eigenschaft nicht parallel zur Inline-Achse befindet, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zur rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse verpackt. Wenn sich die Achse der Eigenschaft nicht parallel zur Inline-Achse befindet, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des ersten oder letzten Baselinesatzes der Box mit der entsprechenden Baseline im geteilten ersten oder letzten Baselinesatz aller Boxen in ihrer Baseline-Teilnahme-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, wird bei `auto`-größen Elementen die Größe gleichmäßig erhöht (nicht proportional), während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen beachtet werden, sodass die kombinierte Größe den Ausrichtungscontainer genau ausfüllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente in der in-line Richtung zum Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.
- `legacy`
  - : Lässt den Wert von den Box-Nachfahren erben. Beachten Sie, dass wenn ein Nachfahre einen `justify-self: auto`-Wert hat, das `legacy`-Schlüsselwort nicht von den Nachfahren berücksichtigt wird, nur der zugehörige Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Rasterlayout. Zunächst wird dem Rastercontainer ein `justify-items`-Wert von `stretch` (der Standard) zugewiesen, wodurch die Rasterelemente die gesamte Breite ihrer Zellen einnehmen.

Wenn Sie jedoch mit der Maus über den Rastercontainer fahren oder darauf tabben, wird ihm ein `justify-items`-Wert von `center` zugewiesen, wodurch die Rasterelemente nur so breit wie ihre Inhaltsbreite werden und im Zentrum ihrer Zellen ausgerichtet sind.

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

{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("justify-self")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("place-items")}} Kurzschreibweise
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
