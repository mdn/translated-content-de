---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert den standardmäßigen {{CSSxRef("justify-self")}} für alle Elemente der Box und bietet ihnen allen eine standardmäßige Art, jede Box entlang der entsprechenden Achse auszurichten.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab, in dem wir uns befinden:

- In Block-Level-Layouts richtet sie die Elemente innerhalb ihres enthaltenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres enthaltenden Blocks auf der Inline-Achse aus und berücksichtigt dabei die Versatzwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über die Ausrichtung in Block-, absolut positionierten und Tabellendesigns)
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über die Ausrichtung in Flexbox)
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Grid-Bereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über die Ausrichtung in Grid-Layouts)

## Syntax

```css
/* Grundlegende Schlüsselwörter */
justify-items: normal;
justify-items: stretch;

/* Positionale Ausrichtung */
justify-items: center; /* Elemente um die Mitte packen */
justify-items: start; /* Elemente vom Startpunkt packen */
justify-items: end; /* Elemente vom Endpunkt packen */
justify-items: flex-start; /* Entspricht 'start'. Beachten Sie, dass justify-items in Flexbox-Layouts ignoriert wird. */
justify-items: flex-end; /* Entspricht 'end'. Beachten Sie, dass justify-items in Flexbox-Layouts ignoriert wird. */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Elemente von links packen */
justify-items: right; /* Elemente von rechts packen */
justify-items: anchor-center;

/* Baseline-Ausrichtung */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Überlauf-Ausrichtung (nur für positional alignment) */
justify-items: safe center;
justify-items: unsafe center;

/* Legacy-Ausrichtung */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Globale Werte */
justify-items: inherit;
justify-items: initial;
justify-items: revert;
justify-items: revert-layer;
justify-items: unset;
```

Diese Eigenschaft kann eine von vier verschiedenen Formen annehmen:

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, plus optional `first` oder `last`.
- Positionale Ausrichtung: einer von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von einem von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem Seitenverhältnis oder intrinsischen Größen, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig in Richtung der Startkante des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig in Richtung der Endkante des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers auf der Startseite des Elements in der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers auf der Endseite des Elements in der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander in Richtung der Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander in Richtung der linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander in Richtung der rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in seiner Baseline-sharing-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist sie `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-großen Elemente gleichmäßig (nicht proportional) vergrößert, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Im Fall von [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sich das Element in der Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beibehalten.
- `legacy`
  - : Macht den Wert für die descendenten Boxen vererbbar. Beachten Sie, dass wenn ein Nachfahre einen Wert `justify-self: auto` hat, das Schlüsselwort `legacy` nicht von Bedeutung ist, sondern nur der damit verbundene Wert `left`, `right`, oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items`-Wert von `stretch` (der Standard), der dazu führt, dass die Grid-Elemente sich über die gesamte Breite ihrer Zellen erstrecken.

Wenn Sie jedoch über den Grid-Container fahren oder ihn fokussieren, erhält er einen `justify-items`-Wert von `center`, was dazu führt, dass die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und in der Mitte ihrer Zellen ausgerichtet werden.

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
