---
title: "`justify-items` CSS property"
short-title: justify-items
slug: Web/CSS/Reference/Properties/justify-items
l10n:
  sourceCommit: 07758d01509695fe45ccc3f7687f6597dc3d9e2a
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`justify-items`** definiert den Standardwert von {{CSSxRef("justify-self")}} für alle Elemente der Box, indem sie allen eine Standardmethode gibt, um jede Box entlang der entsprechenden Achse auszurichten.

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

Die Wirkung dieser Eigenschaft hängt vom Layoutmodus ab, in dem wir uns befinden:

- In Block-Level-Layouts richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus und berücksichtigt dabei die Offset-Werte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables))
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ (siehe [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox))
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Rasterbereiche auf der Inline-Achse aus (siehe [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout))

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
- Baseline-Ausrichtung: das Schlüsselwort `baseline`, zusätzlich optional `first` oder `last`.
- Positionelle Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, oder `right`. Zusätzlich optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von einem der Werte `left`, `right`, oder `center`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird zum Startende des Ausrichtungscontainers in der entsprechenden Achse bündig gepackt.
- `end`
  - : Das Element wird zum Endende des Ausrichtungscontainers in der entsprechenden Achse bündig gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig an die Kante des Ausrichtungscontainers auf der Startseite des Elements in der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig an die Kante des Ausrichtungscontainers auf der Endseite des Elements in der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander zur linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander zur rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten- oder letzten-Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline der ersten oder letzten Baseline-Gruppe des Boxsatzes mit der entsprechenden Baseline in der gemeinsamen ersten oder letzten Baseline-Gruppe aller Boxen in seiner Baseline-Teilungsgruppe aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe aller mit `auto`-größe versehenen Elemente gleich (nicht proportional) erhöht, wobei die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} auferlegten Einschränkungen (oder entsprechenden Funktionen) respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Im Fall von [Anker-positionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet diese Option die Elemente in der Inline-Richtung an der Mitte des zugehörigen Ankerelements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert berücksichtigt.
- `legacy`
  - : Macht den Wert für die Nachfahren der Box vererbbar. Beachten Sie, dass wenn ein Nachkomme einen `justify-self: auto`-Wert hat, das `legacy`-Schlüsselwort vom Nachfahren nicht berücksichtigt wird, nur der damit verbundene Wert `left`, `right`, oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Grid-Layout. Zuerst wird dem Grid-Container ein `justify-items`-Wert von `stretch` (der Standardwert) zugewiesen, was bewirkt, dass die Grid-Elemente über die gesamte Breite ihrer Zellen gestreckt werden.

Wenn Sie jedoch mit der Maus darüber fahren oder den Fokus auf den Grid-Container legen, erhält er einen `justify-items`-Wert von `center`, wodurch die Grid-Elemente nur so breit spannt wie ihre Inhaltsbreite, und sie in der Mitte ihrer Zellen ausrichtet.

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
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
