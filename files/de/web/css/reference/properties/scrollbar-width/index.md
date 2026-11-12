---
title: "`scrollbar-width` CSS property"
short-title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Mit der Eigenschaft **`scrollbar-width`** können Autoren die gewünschte Breite der Scrollleisten eines Elements festlegen, wenn diese angezeigt werden.

`scrollbar-width` dient dazu, den Platzbedarf der Scrollleiste auf einer Seite oder in einem Element zu optimieren, nicht dazu, ihr Aussehen zu gestalten. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem User Agent vor, ob eine normale oder eine schmalere Scrollleiste dargestellt werden soll. Vermeiden Sie `none`, da das Ausblenden einer Scrollleiste die [Barrierefreiheit](#barrierefreiheit) beeinträchtigt.

> [!NOTE]
> Verwenden Sie für Elemente, die nur programmgesteuert und nicht durch direkte Benutzerinteraktion gescrollt werden können, die Eigenschaft {{cssxref("overflow")}} mit dem Wert `hidden` statt `scrollbar-width: none`.

> [!NOTE]
> Browser ignorieren die nicht standardisierte Pseudoelement-Familie {{cssxref("::-webkit-scrollbar")}} bei jedem Element, dessen _berechneter_ `scrollbar-width`-Wert nicht `auto` ist.
> Anders als {{cssxref("scrollbar-color")}} wird `scrollbar-width` nicht vererbt; der Wert eines Vorfahren wirkt sich daher nicht auf seine Nachfahren aus.
> Wenn Sie für ein Element `scrollbar-width: auto` festlegen, wird dessen `::-webkit-scrollbar-*`-Styling wiederhergestellt.
> Siehe [Fallback für Scrollleisten-Stile hinzufügen](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#adding_a_fallback_for_scrollbar_styles).

## Syntax

```css
/* Keyword values */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Global values */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### Werte

- `auto`
  - : Die standardmäßige Scrollleistenbreite der Plattform.
- `thin`
  - : Eine schmale Variante der Scrollleistenbreite auf Plattformen, die diese Option anbieten, oder eine Scrollleiste, die schmaler ist als die standardmäßige Scrollleiste der Plattform.
- `none`
  - : Es wird keine Scrollleiste angezeigt; das Element bleibt jedoch scrollbar.

> [!NOTE]
> User Agents müssen jeden auf dem Wurzelelement festgelegten `scrollbar-width`-Wert auf den Viewport anwenden.

## Barrierefreiheit

Verwenden Sie diese Eigenschaft mit Vorsicht: Wenn `scrollbar-width` auf `thin` oder `none` gesetzt wird, können Inhalte schwer oder gar nicht scrollbar sein, sofern kein alternativer Scrollmechanismus bereitgestellt wird. Wischgesten oder Mausräder können das Scrollen solcher Inhalte ermöglichen, doch auf manchen Geräten gibt es keine alternative Möglichkeit zum Scrollen.

Das WCAG-Kriterium 2.1.1 (Tastatur) enthält seit Langem Anforderungen an die grundlegende Zugänglichkeit per Tastatur. Dazu sollte auch das Scrollen von Inhaltsbereichen gehören. Das mit WCAG 2.1 eingeführte Kriterium 2.5.5 (Zielgröße) empfiehlt, dass Touch-Ziele mindestens 44px breit und hoch sein sollten. Auf hochauflösenden Bildschirmen verschärft sich das Problem; gründliches Testen ist daher ratsam.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 2.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 2.5](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Erfolgskriterium 2.1.1 verstehen | W3C: WCAG 2.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Erfolgskriterium 2.5.5 verstehen | W3C: WCAG 2.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Breite von Scrollleisten bei überlaufendem Inhalt festlegen

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
  scrollbar-width: thin;
}
```

#### Ergebnis

{{EmbedLiveSample("Sizing_overflow_scrollbars")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS scrollbars styling](/de/docs/Web/CSS/Guides/Scrollbars_styling)
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
