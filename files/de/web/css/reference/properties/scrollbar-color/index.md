---
title: "`scrollbar-color` CSS property"
short-title: scrollbar-color
slug: Web/CSS/Reference/Properties/scrollbar-color
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`scrollbar-color`** legt die Farbe der Scrollleisten-Spur und des Scrollleisten-Reglers fest.

Die **Spur** bezieht sich auf den Hintergrund der Scrollleiste, der im Allgemeinen unabhängig von der Scrollposition fest bleibt.

Der **Regler** bezieht sich auf den beweglichen Teil der Scrollleiste, der normalerweise über der Spur schwebt.

Wenn der Wert von `scrollbar-color` auf dem Wurzelelement des Dokuments gesetzt wird, werden die Werte auf die Scrollleisten des Viewports angewendet.

> [!NOTE]
> Browser ignorieren die nicht standardisierte Familie von Pseudoelementen {{cssxref("::-webkit-scrollbar")}} auf jedem Element, dessen _berechneter_ `scrollbar-color`-Wert etwas anderes als `auto` ist.
> Da `scrollbar-color` vererbt wird, betrifft dies auch Elemente, die es nicht selbst festlegen, aber einen von einem Vorgängerelement geerbten Wert ungleich `auto` haben.
> Das Setzen von `scrollbar-color: auto` auf einem solchen Element stellt dessen `::-webkit-scrollbar-*`-Styling wieder her, falls es zuvor durch eine `scrollbar-color`-Einstellung auf einem Vorgängerelement entfernt wurde.
> Siehe [Hinzufügen eines Fallbacks für Scrollleisten-Stile](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#adding_a_fallback_for_scrollbar_styles).

## Syntax

```css
/* Keyword value */
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
            Standarddarstellung der Plattform für den Spurteil der Scrollleiste,
            sofern keine anderen zugehörigen Eigenschaften für die Scrollleistenfarbe vorhanden sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Scrollleisten-Regler und die zweite auf die
            Scrollleisten-Spur an.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Bei der Verwendung der Eigenschaft `scrollbar-color` mit bestimmten Farbwerten sollten Autoren sicherstellen, dass die angegebenen Farben ausreichend Kontrast zueinander aufweisen. Bei Schlüsselwortwerten sollten UAs sicherstellen, dass die von ihnen verwendeten Farben ausreichend Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Färben von Überlauf-Scrollleisten

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

- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS scrollbars styling](/de/docs/Web/CSS/Guides/Scrollbars_styling)
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
