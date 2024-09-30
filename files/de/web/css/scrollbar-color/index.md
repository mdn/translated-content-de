---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`scrollbar-color`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe der Scrollleisten-Schiene und des Schiebers fest.

Die **Schiene** bezieht sich auf den Hintergrund der Scrollleiste, der normalerweise unabhängig von der Scrollposition fixiert ist.

Der **Schieber** bezieht sich auf den beweglichen Teil der Scrollleiste, der normalerweise über der Schiene schwebt.

Wenn der `scrollbar-color`-Wert auf das Wurzelelement des Dokuments gesetzt wird, werden die Werte auf die Scrollleisten des Ansichtsfensters angewendet.

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

  - : Definiert die Farbe der Scrollleiste.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standard-Plattform-Rendering für den Schienen-Abschnitt der Scrollleiste, falls keine anderen verwandten Eigenschaften der Scrollleistenfarbe vorliegen.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollleisten-Schieber an, die zweite auf die Scrollleisten-Schiene.
          </td>
        </tr>
      </tbody>
    </table>

> **Note:** [`@media (forced-colors: active)`](/de/docs/Web/CSS/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Beim Verwenden der `scrollbar-color`-Eigenschaft mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben einen ausreichenden Kontrast zueinander haben. Für Schlüsselwortwerte sollten Benutzeragenten sicherstellen, dass die verwendeten Farben einen ausreichenden Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwenden eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

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

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling)-Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
