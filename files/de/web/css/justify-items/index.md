---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert das Standardverhalten von {{CSSxRef("justify-self")}} für alle Elemente der Box und gibt ihnen eine standardmäßige Art, jede Box entlang der passenden Achse auszurichten.

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

- In Block-Layout-Modi richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inline-Achse aus und berücksichtigt dabei die Offset-Werte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables))
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox))
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Grid-Bereiche entlang der Inline-Achse aus (siehe [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout))

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
- Basislinienausrichtung: das Schlüsselwort `baseline` plus optional `first` oder `last`.
- Positionale Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Zusätzlich optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom verwendeten Layout-Modus ab:
    - In Block-Layout-Modi ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhielt sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird aneinander angrenzend zur Startkante des Ausrichtungs-Containers in der passenden Achse platziert.
- `end`
  - : Das Element wird aneinander angrenzend zur Endkante des Ausrichtungs-Containers in der passenden Achse platziert.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird an der Kante des Ausrichtungs-Containers auf der Startseite des Elements in der passenden Achse platziert.
- `self-end`
  - : Das Element wird an der Kante des Ausrichtungs-Containers auf der Endseite des Elements in der passenden Achse platziert.
- `center`
  - : Die Elemente werden aneinander angrenzend zur Mitte des Ausrichtungs-Containers platziert.
- `left`
  - : Die Elemente werden aneinander angrenzend zur linken Kante des Ausrichtungs-Containers platziert. Falls die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden aneinander angrenzend zur rechten Kante des Ausrichtungs-Containers in der passenden Achse platziert. Falls die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Spezifiziert die Teilnahme an der ersten- oder letzten-Basislinienausrichtung: richtet die Ausrichtungsbasislinie des ersten oder letzten Baselinesatzes der Box an der entsprechenden Basislinie im gemeinsamen ersten oder letzten Baselinesatz aller Boxen in ihrer Basislinien-Teilnehmergruppe aus.
    Die fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungs-Containers ist, wird bei allen `auto`-größen Elementen die Größe gleichmäßig (nicht proportional) erhöht, während die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungs-Container ausfüllt.
- `anchor-center`
  - : Im Falle von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet dies die Elemente im Inlinedirection zur Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungs-Container überschreitet, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus auf `start` gesetzt.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungs-Containers wird der gegebene Ausrichtungswert berücksichtigt.
- `legacy`
  - : Macht den Wert für die Box-Nachkommen erblich. Beachten Sie, dass wenn ein Nachkomme einen `justify-self: auto` Wert hat, das `legacy` Schlüsselwort vom Nachkommen nicht berücksichtigt wird, sondern nur der damit verbundene `left`, `right` oder `center` Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items` Wert von `stretch` (der Standard), wodurch die Grid-Elemente die gesamte Breite ihrer Zellen strecken.

Wenn Sie jedoch auf den Grid-Container zeigen oder mit der Tabulatortaste darauf gehen, wird ihm ein `justify-items` Wert von `center` zugewiesen, wodurch die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und in der Mitte ihrer Zellen ausgerichtet werden.

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
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
