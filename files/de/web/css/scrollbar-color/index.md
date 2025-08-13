---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Scrollbar-Leiste und des Schiebers fest.

Die **Leiste** bezieht sich auf den Hintergrund der Scrollbar, der im Allgemeinen unabhängig von der Scrollposition festgelegt ist.

Der **Schieber** bezieht sich auf den beweglichen Teil der Scrollbar, der normalerweise über der Leiste schwebt.

Wenn der `scrollbar-color` Wert auf das Wurzelelement des Dokuments gesetzt wird, werden die Werte auf die Viewport-Scrollbars angewendet.

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
            Standard-Plattformdarstellung für den Leistenabschnitt der Scrollbar, in
            Ermangelung anderer verwandter Scrollbar-Farbeigenschaften.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Schieber der Scrollbar an, die zweite auf die
            Scrollbar-Leiste.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Zugänglichkeit

Bei der Verwendung der `scrollbar-color` Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben genügend Kontrast zueinander haben. Bei Schlüsselwort-Werten sollten UAs sicherstellen, dass die von ihnen verwendeten Farben genügend Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Färben von Überlauf-Scrollbars

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

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
