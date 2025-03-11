---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`**-Eigenschaft definiert das Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box und gibt ihnen eine standardmäßige Möglichkeit, jede Box entlang der entsprechenden Achse zu rechtfertigen.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft hängt vom Layout-Modus ab, in dem wir uns befinden:

- In Block-Level-Layouts richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus, berücksichtigt jedoch die Versatzwerte von oben, links, unten und rechts.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über Ausrichtung in Block, absolute Positionierung und Tabellenlayout)
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über Ausrichtung in Flexbox)
- In Grid-Layouts richtet sie die Elemente innerhalb ihrer Gitterbereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über Ausrichtung in Grid-Layouts)

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

Diese Eigenschaft kann in eine von vier verschiedenen Formen angenommen werden:

- Basis-Schlüsselwörter: eines der Schlüsselwortwerte `normal` oder `stretch`.
- Baseline-Ausrichtung: das `baseline`-Schlüsselwort, plus optional `first` oder `last`.
- Positionelle Ausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das `legacy`-Schlüsselwort, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element ist bündig zu jedem anderen zum Anfangsrand des Ausrichtungscontainers entlang der entsprechenden Achse.
- `end`
  - : Das Element ist bündig zu jedem anderen zum Endrand des Ausrichtungscontainers entlang der entsprechenden Achse.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element ist bündig zum Rand des Ausrichtungscontainers auf der Startseite des Elements entlang der entsprechenden Achse.
- `self-end`
  - : Das Element ist bündig zum Rand des Ausrichtungscontainers auf der Endseite des Elements entlang der entsprechenden Achse.
- `center`
  - : Die Elemente sind bündig zueinander in der Mitte des Ausrichtungscontainers.
- `left`
  - : Die Elemente sind bündig zueinander am linken Rand des Ausrichtungscontainers. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander am rechten Rand des Ausrichtungscontainers entlang der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Satzes der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Satz aller Boxen in ihrer Baseline-Teilungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe der `auto`-Größe-Elemente gleichmäßig (nicht proportional) erhöht, wobei die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, damit die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet die Elemente zur Mitte des zugehörigen Anchor-Elements in der Inlinerichtung aus. Siehe [Ausrichtung am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert eingehalten.
- `legacy`
  - : Macht den Wert für die Box-Nachkommen vererbbar. Beachten Sie, dass, wenn ein Nachkomme einen `justify-self: auto`-Wert hat, das `legacy`-Schlüsselwort beim Nachkommen nicht berücksichtigt wird, sondern nur der mit ihm verbundene Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

In diesem Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items`-Wert von `stretch` (der Standardwert), wodurch die Grid-Elemente die gesamte Breite ihrer Zellen einnehmen.

Wenn Sie jedoch auf den Grid-Container zeigen oder ihn auswählen, wird ihm ein `justify-items`-Wert von `center` zugewiesen, wodurch die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und in der Mitte ihrer Zellen ausgerichtet werden.

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
- [Box-Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
