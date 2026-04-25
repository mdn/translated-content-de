---
title: "`justify-self` CSS property"
short-title: justify-self
slug: Web/CSS/Reference/Properties/justify-self
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die [CSS](/de/docs/Web/CSS) **`justify-self`**-Eigenschaft legt die Ausrichtung einer Box innerhalb ihres Ausrichtungscontainers entlang der entsprechenden Achse fest.

{{InteractiveExample("CSS Demo: justify-self")}}

```css interactive-example-choice
justify-self: stretch;
```

```css interactive-example-choice
justify-self: center;
```

```css interactive-example-choice
justify-self: start;
```

```css interactive-example-choice
justify-self: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 220px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In block-level Layouts richtet sie ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse aus und berücksichtigt dabei die Versatzwerte von top, left, bottom und right.
- In Tabellenzell-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox).
- In Grid-Layouts richtet sie ein Element innerhalb seines Grid-Bereichs auf der Inline-Achse aus. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout).

## Syntax

```css
/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center; /* Pack item around the center */
justify-self: start; /* Pack item from the start */
justify-self: end; /* Pack item from the end */
justify-self: flex-start; /* Equivalent to 'start'. Note that justify-self is ignored in flexbox layouts. */
justify-self: flex-end; /* Equivalent to 'end'. Note that justify-self is ignored in flexbox layouts. */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* Pack item from the left */
justify-self: right; /* Pack item from the right */
justify-self: anchor-center;

/* Baseline alignment */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-self: safe center;
justify-self: unsafe center;

/* Global values */
justify-self: inherit;
justify-self: initial;
justify-self: revert;
justify-self: revert-layer;
justify-self: unset;
```

Diese Eigenschaft kann eine von drei verschiedenen Formen annehmen:

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal`, `auto` oder `stretch`.
- Grundlinienausrichtung: das `baseline` Schlüsselwort, optional mit `first` oder `last`.
- Positionelle Ausrichtung:
  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, oder `right`.
  - Optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items`-Eigenschaft des übergeordneten Blocks, es sei denn, der Block hat keinen übergeordneten oder ist absolut positioniert. In diesen Fällen entspricht `auto` `normal`.
- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom verwendeten Layout-Modus ab:
    - In block-level Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzell-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.

- `start`
  - : Das Element wird bündig zum Startpunkt des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig zum Endpunkt des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines flex Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines flex Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Startseite des Elements auf der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig zur Kante des Ausrichtungscontainers der Endseite des Elements auf der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander in der Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander an der linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander an der rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensets der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundlinienset aller Boxen in ihrer Grundlinien-Austauschgruppe aus.
    Die Ersatzausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe aller `auto`-großen Elemente gleichmäßig (nicht proportional) erhöht, unter Beachtung der durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionen) auferlegten Beschränkungen, sodass die kombinierte Größe den Ausrichtungscontainer genau ausfüllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet dieses Element das Element in der Inline-Richtung zum Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container einen `justify-items` Wert von `stretch` — der Standard —, der bewirkt, dass sich die Grid-Elemente über die gesamte Breite ihrer Zellen strecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items` Wert überschreiben. Diese Werte führen dazu, dass die Grid-Elemente nur so breit wie ihre Inhaltsbreite sind und an verschiedenen Positionen in ihren Zellen ausgerichtet werden.

#### HTML

```html
<article class="container">
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

span:nth-child(2) {
  justify-self: start;
}

span:nth-child(3) {
  justify-self: center;
}

span:nth-child(4) {
  justify-self: end;
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

- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- {{CSSxRef("justify-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
