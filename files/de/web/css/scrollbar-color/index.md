---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Scrollbar-Spur und des Daumens fest.

Die **Spur** bezieht sich auf den Hintergrund der Scrollbar, der generell unabhängig von der Scrollposition fixiert ist.

Der **Daumen** bezieht sich auf den beweglichen Teil der Scrollbar, der normalerweise auf der Spur schwebt.

Wenn der `scrollbar-color` Wert auf das Root-Element des Dokuments gesetzt wird, werden die Werte auf die Scrollbars des Ansichtsfensters angewendet.

## Syntax

```css
/* Keyword-Werte */
scrollbar-color: auto;

/* <color> Werte */
scrollbar-color: rebeccapurple green; /* Zwei gültige Farben.
Die erste wird auf den Daumen der Scrollbar angewendet, die zweite auf die Spur. */

/* Globale Werte */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
scrollbar-color: unset;
```

### Werte

- `<scrollbar-color>`

  - : Bestimmt die Farbe der Scrollbar.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standard Darstellung der Plattform für den Spur-Teil der Scrollbar, wenn keine anderen entsprechenden Scrollbar-Farbeigenschaften vorhanden sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollbardaumen an und die zweite auf die Spur der Scrollbar.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE] [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der `scrollbar-color` Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben genügend Kontrast zueinander haben. Für Schlüsselwortwerte sollten die Benutzeragenten sicherstellen, dass die von ihnen verwendeten Farben genügend Kontrast haben. Siehe [Techniken für WCAG 2.0: G183: Verwenden eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Färbung von Überlauf-Scrollbars

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
