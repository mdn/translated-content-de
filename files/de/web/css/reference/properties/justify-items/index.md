---
title: justify-items
slug: Web/CSS/Reference/Properties/justify-items
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert die Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box, wodurch ihnen eine standardmäßige Ausrichtung entlang der passenden Achse gegeben wird.

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

- In Block-Level-Layouts richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inlinachse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres umgebenden Blocks entlang der Inlinachse aus und berücksichtigt die Versatzwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables))
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox))
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Grid-Bereiche entlang der Inlinachse aus (siehe [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout))

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

Diese Eigenschaft kann in einer von vier verschiedenen Formen vorkommen:

- Basis-Schlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionelle Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von einem der Werte `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhielt sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es wie `start` wirkt.
- `start`
  - : Das Element wird bündig zueinander in Richtung der Startkante des Ausrichtungscontainers auf der passenden Achse positioniert.
- `end`
  - : Das Element wird bündig zueinander in Richtung der Endkante des Ausrichtungscontainers auf der passenden Achse positioniert.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements auf der passenden Achse positioniert.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements auf der passenden Achse positioniert.
- `center`
  - : Die Elemente werden bündig zueinander in Richtung der Mitte des Ausrichtungscontainers positioniert.
- `left`
  - : Die Elemente werden bündig zueinander in Richtung der linken Kante des Ausrichtungscontainers positioniert. Wenn die Achse der Eigenschaft nicht parallel zur Inlinachse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander in Richtung der rechten Kante des Ausrichtungscontainers auf der passenden Achse positioniert. Wenn die Achse der Eigenschaft nicht parallel zur Inlinachse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der First- oder Last-Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des ersten oder letzten Baselinesatzes der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselinesatz aller Boxen in ihrer Baselinesharing-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe von `auto`-größen Elementen gleichmäßig (nicht proportional) erhöht, während sie dennoch die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} auferlegten Beschränkungen respektieren (oder gleichwertige Funktionalität), sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Bei [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente in der Mitte des zugeordneten Ankerelements in der Inlinerichtung aus. Weitere Informationen finden Sie unter [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert berücksichtigt.
- `legacy`
  - : Macht den Wert für die Nachkommen der Box vererbbar. Beachten Sie, dass, wenn ein Nachkomme einen `justify-self: auto` Wert hat, das `legacy` Schlüsselwort nicht von den Nachkommen berücksichtigt wird, sondern nur der zugehörige `left`, `right` oder `center` Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst wird dem Grid-Container ein `justify-items` Wert von `stretch` (dem Standardwert) zugewiesen, wodurch die Gitterelemente die gesamte Breite ihrer Zellen einnehmen.

Wenn Sie jedoch auf den Grid-Container zeigen oder darauf tabben, wird ihm ein `justify-items` Wert von `center` zugewiesen, wodurch die Gitterelemente nur so breit wie ihre Inhaltsbreite werden und in der Mitte ihrer Zellen ausgerichtet werden.

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
- {{CSSxRef("place-items")}} Kurzschrift
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
