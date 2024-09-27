---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Scrollbar-Leiste und des Schiebers fest.

Die **Leiste** bezieht sich auf den Hintergrund der Scrollbar, der im Allgemeinen unabhängig von der Scrollposition fest bleibt.

Der **Schieber** bezieht sich auf den beweglichen Teil der Scrollbar, der normalerweise über der Leiste schwebt.

Wenn der `scrollbar-color` Wert auf dem Root-Element des Dokuments gesetzt wird, werden die Werte auf die Viewport-Scrollbars angewendet.

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
            Standard-Plattform-Rendering für den Leistenanteil der Scrollbar, in
            Abwesenheit anderer verwandter Scrollbar-Farb-Eigenschaften.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollbar-Schieber an, die zweite auf die
            Scrollbar-Leiste.
          </td>
        </tr>
      </tbody>
    </table>

> **Note:** [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der `scrollbar-color` Eigenschaft mit spezifischen Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben ausreichend Kontrast zueinander haben. Für Schlüsselwortwerte sollten die Benutzeragenten sicherstellen, dass die von ihnen verwendeten Farben ausreichend Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwenden eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

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

- [Modul für CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)
- [Modul für CSS-Scrollbar-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling)
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
