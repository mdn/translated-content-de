---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert das Standard-{{CSSxRef("justify-self")}} für alle Elemente der Box und gibt ihnen allen eine Standardmethode, um jede Box entlang der entsprechenden Achse auszurichten.

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

Die Wirkung dieser Eigenschaft hängt vom Layout-Modus ab:

- In Blockebenen-Layouts richtet es die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet es die Elemente innerhalb ihres umgebenden Blocks auf der Inline-Achse aus, unter Berücksichtigung der Versatzwerte von oben, links, unten und rechts.
- In Tabellenelement-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über Ausrichtung in Block-, absolut positionierten und Tabellenlayouts)
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über Ausrichtung in Flexbox)
- In Grid-Layouts richtet es die Elemente innerhalb ihrer Gitterbereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über Ausrichtung in Gitterlayouts)

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
- Grundlinienausrichtung: das Schlüsselwort `baseline`, plus optional eines von `first` oder `last`.
- Positionsausrichtung: eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das `legacy` Schlüsselwort, gefolgt von einem von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom Layout-Modus ab:
    - In Blockebenen-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenelement-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich wie das von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder einer intrinsischen Größe, wo es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig zueinander an die Startkante des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig zueinander an die Endkante des Ausrichtungscontainers auf der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element wird bündig an die Kante des Ausrichtungscontainers der Startseite des Elements auf der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig an die Kante des Ausrichtungscontainers der Endseite des Elements auf der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente sind bündig zueinander in Richtung der Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente sind bündig zueinander in Richtung der linken Kante des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander in Richtung der rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundlinensatzes der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundlinensatz aller Boxen in seiner Grundlinienteilungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-größen Elemente gleichmäßig (nicht proportional) vergrößert, während dennoch die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen werden die Elemente zur Mitte des zugehörigen Ankerelements in der Inline-Richtung ausgerichtet. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert eingehalten.
- `legacy`
  - : Macht den Wert für die Box-Nachfahren erbbar. Beachten Sie, dass wenn ein Nachfahre den Wert `justify-self: auto` hat, das `legacy` Schlüsselwort von den Nachfahren nicht berücksichtigt wird, sondern nur den zugehörigen `left`, `right` oder `center` Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Gitterlayout. Der Gittercontainer hat zunächst den `justify-items` Wert `stretch` (der Standard), wodurch die Gitterelemente über die gesamte Breite ihrer Zellen gestreckt werden.

Wenn Sie jedoch über den Gittercontainer fahren oder ihn fokussieren, erhält er den `justify-items` Wert `center`, wodurch die Gitterelemente nur so breit wie ihr Inhalt sind und in der Mitte ihrer Zellen ausgerichtet werden.

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
- [Ausrichtung von Boxen in Gitterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
