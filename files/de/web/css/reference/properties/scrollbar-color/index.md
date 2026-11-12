---
title: "`scrollbar-color` CSS property"
short-title: scrollbar-color
slug: Web/CSS/Reference/Properties/scrollbar-color
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`scrollbar-color`** legt die Farben der Bildlaufleistenspur und des Schiebereglers fest.

Die **Spur** ist der Hintergrund der Bildlaufleiste. Sie bleibt in der Regel unabhängig von der Scrollposition unverändert.

Der **Schieberegler** ist der bewegliche Teil der Bildlaufleiste, der sich normalerweise über der Spur befindet.

Wird `scrollbar-color` auf dem Wurzelelement des Dokuments gesetzt, gelten die Werte für die Bildlaufleisten des Viewports.

> [!NOTE]
> Browser ignorieren die nicht standardisierte Familie der {{cssxref("::-webkit-scrollbar")}}-Pseudoelemente bei jedem Element, dessen _berechneter_ Wert für `scrollbar-color` nicht `auto` ist.
> Da `scrollbar-color` vererbt wird, betrifft dies auch Elemente, die die Eigenschaft nicht selbst setzen, sondern einen anderen Wert als `auto` von einem Vorfahren erben.
> Wenn Sie für ein solches Element `scrollbar-color: auto` festlegen, wird dessen `::-webkit-scrollbar-*`-Styling wiederhergestellt, falls es zuvor durch eine `scrollbar-color`-Einstellung eines Vorfahren außer Kraft gesetzt wurde.
> Siehe [Fallback für Bildlaufleisten-Stile hinzufügen](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#adding_a_fallback_for_scrollbar_styles).

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
  - : Definiert die Farbe der Bildlaufleiste.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Standarddarstellung der Bildlaufleistenspur durch die Plattform,
            sofern keine anderen relevanten Eigenschaften für die Farbe der Bildlaufleiste festgelegt sind.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Wendet die erste Farbe auf den Schieberegler der Bildlaufleiste und die zweite
            auf die Bildlaufleistenspur an.
          </td>
        </tr>
      </tbody>
    </table>

> [!NOTE]
> [`@media (forced-colors: active)`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) setzt `scrollbar-color` auf `auto`.

## Barrierefreiheit

Wenn Sie die Eigenschaft `scrollbar-color` mit konkreten Farbwerten verwenden, sollten Sie sicherstellen, dass die festgelegten Farben einen ausreichenden Kontrast zueinander aufweisen. Bei Schlüsselwortwerten sollten User-Agents sicherstellen, dass die verwendeten Farben einen ausreichenden Kontrast aufweisen. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Bildlaufleisten bei überlaufendem Inhalt einfärben

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

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #000077 #bada55;
}
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
