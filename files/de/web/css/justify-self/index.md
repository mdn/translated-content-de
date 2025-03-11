---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`** Eigenschaft legt fest, wie ein Box-Element innerhalb seines Ausrichtungscontainers entlang der entsprechenden Achse gerechtfertigt wird.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Die Wirkung dieser Eigenschaft hängt vom Layout-Modus ab, in dem wir uns befinden:

- In Block-Layouts richtet sich ein Element innerhalb seines umschließenden Blocks auf der Inline-Achse aus.
- Bei absolut positionierten Elementen richtet sich ein Element innerhalb seines umschließenden Blocks auf der Inline-Achse aus, unter Berücksichtigung der Versatzwerte von Top, Left, Bottom und Right.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Lesen Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet sich ein Element innerhalb seines Gitternetzbereichs auf der Inline-Achse aus. Lesen Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

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
- Basislinienausrichtung: das Schlüsselwort `baseline`, optional ergänzt um `first` oder `last`.
- Positionelle Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Optional ergänzt um `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items` Eigenschaft des übergeordneten Elements, es sei denn, das Element hat kein übergeordnetes Element oder ist absolut positioniert. In diesen Fällen repräsentiert `auto` `normal`.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:

    - In Block-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` in _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.

- `start`
  - : Das Element wird bündig am Start-Rand des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet.
- `end`
  - : Das Element wird bündig am End-Rand des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet.
- `flex-start`
  - : Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig an der Kante des Ausrichtungscontainers an der Startseite des Elements entlang der entsprechenden Achse ausgerichtet.
- `self-end`
  - : Das Element wird bündig an der Kante des Ausrichtungscontainers an der Endseite des Elements entlang der entsprechenden Achse ausgerichtet.
- `center`
  - : Die Elemente werden bündig zueinander in der Mitte des Ausrichtungscontainers ausgerichtet.
- `left`
  - : Die Elemente werden bündig zueinander auf der linken Kante des Ausrichtungscontainers ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander auf der rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten bzw. letzten Basislinie an: Richtet die Ausrichtungsbasislinie des ersten oder letzten Baselinesatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Baselinesatz aller Boxen in seiner Basisliniengruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungscontainers ist, werden alle `auto`-dimensionierten Elemente gleichmäßig (nicht proportional) vergrößert, wobei die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder äquivalente Funktionalität) auferlegten Beschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `anchor-center`
  - : Im Falle von [anchor-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Element in der Inline-Richtung zur Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Gitterlayout. Zunächst erhält der Grid-Container einen `justify-items`-Wert von `stretch` — dem Standardwert —, der bewirkt, dass sich die Gitterelemente über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Gitterelemente erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items`-Wert überschreiben. Diese Werte bewirken, dass die Gitterelemente nur so breit wie ihre Inhaltsbreite sind und sich an verschiedenen Positionen in ihren Zellen ausrichten.

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

- [Ausrichtung von Boxen in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
- {{CSSxRef("justify-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
