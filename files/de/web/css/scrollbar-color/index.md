---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Scroll-Leiste und des Daumens fest.

Der **Track** bezieht sich auf den Hintergrund der Scroll-Leiste, der im Allgemeinen unabhängig von der Scroll-Position fest bleibt.

Der **Thumb** bezieht sich auf den beweglichen Teil der Scroll-Leiste, der in der Regel über dem Track "schwebt".

Wenn der Wert von `scrollbar-color` auf dem Stamm-Element des Dokuments gesetzt ist, werden die Werte auf die Scroll-Leisten des Ansichtsfensters angewendet.

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

  - : Definiert die Farbe der Scroll-Leiste.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standardmäßige Plattform-Darstellung für den Track-Teil der Scroll-Leiste, wenn keine anderen scrollbar-bezogenen Farbeigenschaften vorhanden sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scroll-Leisten-Thumb an, die zweite auf den Scroll-Leisten-Track.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE] > [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der `scrollbar-color` Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben einen ausreichenden Kontrast zueinander haben. Bei Schlüsselwortwerten sollten die Benutzeragenten sicherstellen, dass die verwendeten Farben einen ausreichenden Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwenden eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Färben von Überlauf-Scroll-Leisten

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

- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scroll-Leisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
