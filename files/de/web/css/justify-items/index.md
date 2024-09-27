---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert das Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box und gibt ihnen allen eine Standardmethode, um jede Box entlang der entsprechenden Achse auszurichten.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- Bei Blockebenen-Layouts richtet es die Elemente innerhalb ihres umschließenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet es die Elemente innerhalb ihres umschließenden Blocks auf der Inline-Achse aus und berücksichtigt dabei die Offset-Werte von oben, links, unten und rechts.
- Bei Tabellenzell-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über die Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts)
- Bei Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über die Ausrichtung in Flexbox)
- Bei Grid-Layouts richtet es die Elemente innerhalb ihrer Grid-Bereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über die Ausrichtung in Grid-Layouts)

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

- Basisschlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, optional gefolgt von `first` oder `last`.
- Positionelle Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Optional gefolgt von `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - Bei Blockebenen-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - Bei absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - Bei Tabellenzell-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - Bei Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - Bei Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnlich ist, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element ist bündig zueinander am Startpunkt des Ausrichtungscontainers entlang der entsprechenden Achse gepackt.
- `end`
  - : Das Element ist bündig zueinander am Endpunkt des Ausrichtungscontainers entlang der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element ist bündig zur Kante des Ausrichtungscontainers auf der Startseite des Elements entlang der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element ist bündig zur Kante des Ausrichtungscontainers auf der Endseite des Elements entlang der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente sind bündig zueinander zum Zentrum des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente sind bündig zueinander zur linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander zur rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des Boxensets mit der entsprechenden Baseline im geteilten ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-Teilgruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, wird die Größe der auf `auto`-eingestellten Elemente gleichmäßig (nicht proportional) erhöht, während weiterhin die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder vergleichbare Funktionen) aufgestellten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Im Fall von [ankerverankerten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente im Inline-Bereich auf das Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.
- `legacy`
  - : Lässt den Wert von den Box-Nachkommen erben. Beachten Sie, dass wenn ein Nachkomme den Wert `justify-self: auto` hat, das Schlüsselwort `legacy` vom Nachkommen nicht berücksichtigt wird, sondern nur der damit verbundene Wert von `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items` Wert von `stretch` (Standard), wodurch die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Wenn Sie jedoch über den Grid-Container fahren oder ihn fokussieren, erhält er einen `justify-items` Wert von `center`, wodurch die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und sich in der Mitte ihrer Zellen ausrichten.

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
- {{CSSxRef("place-items")}} Kurzform
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
