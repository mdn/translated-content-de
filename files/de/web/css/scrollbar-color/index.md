---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des Scrollbalken-Hintergrunds und des Scrollbalken-Schiebers fest.

Der **Hintergrund** bezieht sich auf den Hintergrund des Scrollbalkens, der im Allgemeinen unabhängig von der Scrollposition fest ist.

Der **Schieber** bezieht sich auf den beweglichen Teil des Scrollbalkens, der normalerweise über dem Hintergrund schwebt.

Wenn der Wert von `scrollbar-color` am Wurzelelement des Dokuments festgelegt wird, werden die Werte auf die Ansicht-Scrollbalken angewendet.

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
  - : Definiert die Farbe des Scrollbalkens.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standard-Plattformdarstellung für den Hintergrundanteil des Scrollbalkens, falls keine anderen scrollbar-bezogenen Farbeigenschaften vorhanden sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Schieber des Scrollbalkens an, die zweite auf den Hintergrund des Scrollbalkens.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der `scrollbar-color` Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben ausreichend Kontrast zueinander haben. Bei Schlüsselwortwerten sollten Benutzeragenten sicherstellen, dass die von ihnen verwendeten Farben ausreichend Kontrast haben. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farbige Überlauf-Scrollbalken

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #007 #bada55;
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

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
