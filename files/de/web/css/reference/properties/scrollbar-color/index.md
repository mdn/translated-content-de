---
title: "`scrollbar-color` CSS property"
short-title: scrollbar-color
slug: Web/CSS/Reference/Properties/scrollbar-color
l10n:
  sourceCommit: 2e2dfb27a085911dd64aa4798d4a1071660c2397
---

Die **`scrollbar-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Scrollbar-Spur und des Daumens fest.

Die **Spur** bezieht sich auf den Hintergrund der Scrollbar, der im Allgemeinen unabhängig von der Scrollposition fixiert ist.

Der **Daumen** bezieht sich auf den beweglichen Teil der Scrollbar, der normalerweise über der Spur schwebt.

Wenn der Wert von `scrollbar-color` auf dem Wurzelelement des Dokuments gesetzt wird, werden die Werte auf die Viewport-Scrollleisten angewendet.

> [!NOTE]
> Browser ignorieren die nicht standardmäßige {{cssxref("::-webkit-scrollbar")}} Familie von Pseudoelementen auf jedem Element, dessen _berechneter_ `scrollbar-color` Wert etwas anderes als `auto` ist.
> Da `scrollbar-color` vererbt wird, betrifft dies auch Elemente, die es nicht selbst setzen, sondern einen nicht-`auto` Wert von einem Vorfahren erben.
> Wenn auf ein solches Element `scrollbar-color: auto` gesetzt wird, wird dessen `::-webkit-scrollbar-*` Stil wiederhergestellt, falls er zuvor durch eine `scrollbar-color` Einstellung auf einem Vorfahren entfernt wurde.
> Siehe [Hinzufügen eines Fallbacks für Scrollbar-Stile](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#adding_a_fallback_for_scrollbar_styles).

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
            Standard-Plattform-Rendering für den Spurteil der Scrollleiste, in
            Ermangelung anderer verwandter Scrollleisten-Farbeigenschaften.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollbar-Daumen an, die zweite auf die
            Scrollbar-Spur.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Beim Verwenden der `scrollbar-color` Eigenschaft mit spezifischen Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben genügend Kontrast zueinander haben. Für Schlüsselwortwerte sollten UAs sicherstellen, dass die von ihnen verwendeten Farben genügend Kontrast bieten. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

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

- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
