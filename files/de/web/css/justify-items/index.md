---
title: justify-items
slug: Web/CSS/justify-items
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-items`** Eigenschaft definiert den Standard-{{CSSxRef("justify-self")}} für alle Elemente des Kastens und gibt ihnen eine Standardweise, jeden Kasten entlang der entsprechenden Achse auszurichten.

{{EmbedInteractiveExample("pages/css/justify-items.html")}}

Die Wirkung dieser Eigenschaft hängt vom Layout-Modus ab, in dem wir uns befinden:

- In Block-Layout-Ebenen richtet sie die Elemente innerhalb ihres enthaltenden Blocks auf der Inline-Achse aus.
- Für absolut positionierte Elemente richtet sie die Elemente innerhalb ihres enthaltenden Blocks auf der Inline-Achse aus, wobei die Versatzwerte von oben, links, unten und rechts berücksichtigt werden.
- In Tabellenzellen-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables) über die Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts)
- In Flexbox-Layouts wird diese Eigenschaft _ignoriert_ ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox) über die Ausrichtung in Flexbox)
- In Gitter-Layouts richtet sie die Elemente innerhalb ihrer Gitterbereiche auf der Inline-Achse aus ([mehr](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout) über die Ausrichtung in Gitter-Layouts)

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

- Grundlegende Schlüsselwörter: eins der Schlüsselwortwerte `normal` oder `stretch`.
- Basislinienausrichtung: das Schlüsselwort `baseline`, plus optional `first` oder `last`.
- Positionsausrichtung: eins von: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left` oder `right`. Plus optional `safe` oder `unsafe`.
- Legacy-Ausrichtung: das Schlüsselwort `legacy`, gefolgt von `left` oder `right`.

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In Block-Layout-Ebenen ist das Schlüsselwort ein Synonym für `start`.
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In Tabellenzellen-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Flexbox-Layouts hat dieses Schlüsselwort keine Bedeutung, da diese Eigenschaft _ignoriert_ wird.
    - In Gitter-Layouts führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem Seitenverhältnis oder intrinsischen Größen, bei denen es sich wie `start` verhält.
- `start`
  - : Das Element wird bündig zueinander in Richtung der Startkante des Ausrichtungsbehälters auf der entsprechenden Achse gepackt.
- `end`
  - : Das Element wird bündig zueinander in Richtung der Endkante des Ausrichtungsbehälters auf der entsprechenden Achse gepackt.
- `flex-start`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert als `start` behandelt.
- `flex-end`
  - : Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert als `end` behandelt.
- `self-start`
  - : Das Element wird bündig an die Kante des Ausrichtungsbehälters der Startseite des Elements auf der entsprechenden Achse gepackt.
- `self-end`
  - : Das Element wird bündig an die Kante des Ausrichtungsbehälters der Endseite des Elements auf der entsprechenden Achse gepackt.
- `center`
  - : Die Elemente werden bündig zueinander in Richtung des Zentrums des Ausrichtungsbehälters gepackt.
- `left`
  - : Die Elemente werden bündig zueinander in Richtung der linken Kante des Ausrichtungsbehälters gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander in Richtung der rechten Kante des Ausrichtungsbehälters auf der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Basislinienausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinien-Sharing-Gruppe aus.
    Die Ausrichtungsalternative für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungsbehälters, wird die Größe der `auto`-größen Elemente gleichmäßig (nicht proportional) erhöht, wobei die Einschränkungen durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) respektiert werden, sodass die kombinierte Größe genau den Ausrichtungsbehälter füllt.
- `anchor-center`
  - : Im Fall von [Anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es die Elemente im Inline-Bereich zentriert zum zugehörigen Ankerelement aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungsbehälter überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungsbehälters wird der angegebene Ausrichtungswert beibehalten.
- `legacy`
  - : Macht den Wert für die Nachfahren des Kastens vererbbar. Beachten Sie, dass, wenn ein Nachfahre einen Wert `justify-self: auto` hat, das `legacy`-Schlüsselwort nicht vom Nachfahren berücksichtigt wird, sondern nur der damit verbundene Wert `left`, `right` oder `center`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein einfaches 2 x 2 Gitterlayout. Zunächst erhält der Gitter-Container einen `justify-items`-Wert von `stretch` (dem Standardwert), was bewirkt, dass die Gitterelemente sich über die gesamte Breite ihrer Zellen erstrecken.

Wenn Sie jedoch mit der Maus über den Gitter-Container fahren oder darauf tabben, erhält er einen `justify-items`-Wert von `center`, was dazu führt, dass sich die Gitterelemente nur so weit ausdehnen wie ihre Inhaltsbreite und in der Mitte ihrer Zellen ausgerichtet sind.

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
- [Box-Ausrichtung in CSS-Gitterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
