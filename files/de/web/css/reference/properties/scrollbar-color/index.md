---
title: "`scrollbar-color` CSS property"
short-title: scrollbar-color
slug: Web/CSS/Reference/Properties/scrollbar-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Farbe der Scrollbar-Leiste und des Scrollbalkens.

Die **Leiste** bezieht sich auf den Hintergrund der Scrollbar, der im Allgemeinen unabhängig von der Scrollposition fest bleibt.

Der **Balken** bezieht sich auf den beweglichen Teil der Scrollbar, der normalerweise über der Leiste schwebt.

Wenn der `scrollbar-color`-Wert auf das Root-Element des Dokuments gesetzt ist, werden die Werte auf die Scrollleisten des Ansichtsfensters angewendet.

## Syntax

```css
/* Keyword values */
scrollbar-color: auto;

/* <color> values */
scrollbar-color: rebeccapurple green; /* Two valid colors.
The first applies to the thumb of the scrollbar, the second to the track. */

/* Global values */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
scrollbar-color: unset;
```

### Werte

- `<scrollbar-color>`
  - : Definiert die Farbe der Scrollbar.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standardmäßige Plattformdarstellung des Leistenteils der Scrollbar, falls keine anderen verwandten Farbei-Eigenschaften der Scrollbar vorhanden sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollbalken und die zweite auf die Scrollbar-Leiste an.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der `scrollbar-color`-Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben genug Kontrast zueinander haben. Bei Schlüsselwortwerten sollten Benutzeragenten sicherstellen, dass die verwendeten Farben ausreichend Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Färbung von Überlauf-Scrollleisten

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #000077 #bada55;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### Ergebnis

{{EmbedLiveSample("Coloring_overflow_scrollbars")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Scrollbars Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling)-Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
