---
title: justify-self
slug: Web/CSS/justify-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-self`**-Eigenschaft legt fest, wie eine Box innerhalb ihres Ausrichtungs-Containers entlang der entsprechenden Achse gerechtfertigt wird.

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

Die Wirkung dieser Eigenschaft hängt vom verwendeten Layout-Modus ab:

- In Block-Level-Layouts richtet sie ein Element auf der Inline-Achse innerhalb ihres umschließenden Blocks aus.
- Für absolut positionierte Elemente richtet sie ein Element auf der Inline-Achse innerhalb ihres umschließenden Blocks aus, wobei die Versatzwerte von oben, links, unten und rechts berücksichtigt werden.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_. Erfahren Sie mehr über [Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables).
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_. Erfahren Sie mehr über [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox).
- In Grid-Layouts richtet sie ein Element auf der Inline-Achse innerhalb seines Grid-Bereichs aus. Erfahren Sie mehr über [Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout).

## Syntax

```css
/* Grundlegende Schlüsselwörter */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positionelle Ausrichtung */
justify-self: center; /* Element um die Mitte herum anordnen */
justify-self: start; /* Element vom Anfang an anordnen */
justify-self: end; /* Element vom Ende an anordnen */
justify-self: flex-start; /* Entspricht 'start'. Beachten Sie, dass justify-self in Flexbox-Layouts ignoriert wird. */
justify-self: flex-end; /* Entspricht 'end'. Beachten Sie, dass justify-self in Flexbox-Layouts ignoriert wird. */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* Element von links an anordnen */
justify-self: right; /* Element von rechts an anordnen */
justify-self: anchor-center;

/* Baseline-Ausrichtung */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Überlauf-Ausrichtung (nur für positionelle Ausrichtung) */
justify-self: safe center;
justify-self: unsafe center;

/* Globale Werte */
justify-self: inherit;
justify-self: initial;
justify-self: revert;
justify-self: revert-layer;
justify-self: unset;
```

Diese Eigenschaft kann eine von drei verschiedenen Formen annehmen:

- Grundlegende Schlüsselwörter: eines der Schlüsselwortwerte `normal`, `auto` oder `stretch`.
- Baseline-Ausrichtung: das `baseline` Schlüsselwort, plus optional eines von `first` oder `last`.
- Positionelle Ausrichtung:

  - eines von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`.
  - Plus optional `safe` oder `unsafe`.

### Werte

- `auto`
  - : Der verwendete Wert ist der Wert der `justify-items`-Eigenschaft des übergeordneten Blocks, es sei denn, der Block hat keinen übergeordneten Block oder ist absolut positioniert; in diesen Fällen repräsentiert `auto` `normal`.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:

    - In Block-Level-Layouts ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Grid-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder intrinsischen Größen, wo es sich wie `start` verhält.

- `start`
  - : Das Element wird bündig zum Start des Ausrichtungs-Containers auf der entsprechenden Achse angeordnet.
- `end`
  - : Das Element wird bündig zum Ende des Ausrichtungs-Containers auf der entsprechenden Achse angeordnet.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `self-start`
  - : Das Element ist bündig zur Kante des Ausrichtungs-Containers auf der Startseite des Elements auf der entsprechenden Achse angeordnet.
- `self-end`
  - : Das Element ist bündig zur Kante des Ausrichtungs-Containers auf der Endseite des Elements auf der entsprechenden Achse angeordnet.
- `center`
  - : Die Elemente sind bündig zum Zentrum des Ausrichtungs-Containers angeordnet.
- `left`
  - : Die Elemente sind bündig zur linken Kante des Ausrichtungs-Containers angeordnet. Wenn die Achse dieser Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zur rechten Kante des Ausrichtungs-Containers auf der entsprechenden Achse angeordnet. Wenn die Achse dieser Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung an der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des Boxen-Erstes oder -Letztes Basissatz mit der entsprechenden Basislinie in der gemeinsamen erste oder letzte Basislinie der Boxen in ihrer Basislinien-Teilungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner als die Größe des Ausrichtungs-Containers ist, wird die Größe der `auto`-Größen-Elemente gleichmäßig (nicht proportional) erhöht, wobei die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen beachtet werden, sodass die kombinierte Größe genau den Ausrichtungs-Container füllt.
- `anchor-center`
  - : Im Falle von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sich das Element zur Mitte des zugehörigen Ankerelements in der Inline-Richtung aus. Siehe [Zentrieren auf dem Anker mithilfe von `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungs-Container überschreitet, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Ungeachtet der relativen Größe des Elements und des Ausrichtungs-Containers wird der angegebene Ausrichtungswert beachtet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Grid-Layout. Zunächst erhält der Grid-Container den `justify-items`-Wert `stretch` — der Standardwert —, wodurch sich die Grid-Items über die gesamte Breite ihrer Zellen strecken.

Das zweite, dritte und vierte Grid-Item erhalten dann unterschiedliche Werte von `justify-self`, um zu zeigen, wie diese den `justify-items`-Wert überschreiben. Diese Werte bewirken, dass sich die Grid-Items nur so weit wie ihre Inhalt-Breite erstrecken und in verschiedenen Positionen innerhalb ihrer Zellen ausgerichtet werden.

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

{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("justify-items")}}
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
