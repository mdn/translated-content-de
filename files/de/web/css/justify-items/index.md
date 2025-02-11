---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert den Standardwert von {{CSSxRef("justify-self")}} für alle Elemente innerhalb der Box und gibt ihnen eine Standardmethode, um jedes Kästchen entlang der entsprechenden Achse auszurichten.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In Block-Layout-Modi richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inline-Achse aus.
- Bei absolut positionierten Elementen richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inline-Achse aus und berücksichtigt dabei die Offset-Werte von `top`, `left`, `bottom` und `right`.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über Ausrichtung in Flexbox).
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Grid-Bereiche entlang der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über Ausrichtung in Grid-Layouts).

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

- Basis-Schlüsselwörter: eins der Schlüsselwörter `normal` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, optional ergänzt um `first` oder `last`.
- Positionelle Ausrichtung: eins von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Optional ergänzt durch `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - In Block-Layout-Modi ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich wie `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig zur Startkante des Ausrichtungscontainers auf der entsprechenden Achse ausgerichtet.
- `end`
  - : Das Element wird bündig zur Endkante des Ausrichtungscontainers auf der entsprechenden Achse ausgerichtet.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zum Rand des Ausrichtungscontainers an der Startseite des Elements auf der entsprechenden Achse ausgerichtet.
- `self-end`
  - : Das Element wird bündig zum Rand des Ausrichtungscontainers an der Endseite des Elements auf der entsprechenden Achse ausgerichtet.
- `center`
  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers ausgerichtet.
- `left`
  - : Die Elemente werden bündig zueinander zur linken Kante des Ausrichtungscontainers ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander zur rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Legt die Teilnahme an einer Ausrichtung an der ersten oder letzten Basislinie fest: Richtet die Ausrichtungsbasislinie des ersten oder letzten Basissatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basissatz aller Boxen in der Basislinienteilungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden Elemente mit der Größe `auto` gleichmäßig (nicht proportional) vergrößert, unter Berücksichtigung der durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente im Inline-Bereich zur Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert berücksichtigt.
- `legacy`
  - : Lässt den Wert von den Nachfahren-Boxen erben. Beachten Sie, dass, wenn ein Nachfahre den Wert `justify-self: auto` hat, das Schlüsselwort `legacy` nicht berücksichtigt wird, sondern nur der damit verbundene Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container den Wert `stretch` (Standardwert) für `justify-items`, wodurch die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Wenn Sie jedoch mit der Maus darüber fahren oder den Fokus darauf setzen, erhält der Grid-Container den Wert `center` für `justify-items`, wodurch die Grid-Elemente nur so breit wie ihr Inhaltsbreite werden und in der Mitte ihrer Zellen ausgerichtet sind.

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
- [Ausrichtung von Boxen im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
