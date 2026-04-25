---
title: "`scrollbar-width` CSS property"
short-title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollbars eines Elements festzulegen, wenn sie angezeigt werden.

Der Zweck der `scrollbar-width`-Eigenschaft ist es, den Platzbedarf der Scrollbar auf einer Seite oder einem Element zu optimieren; der Zweck ist nicht auf ästhetische Gesichtspunkte der Scrollbar bezogen. Die vordefinierten Schlüsselwort-Werte von `scrollbar-width` zeigen dem User Agent an, ob eine normale oder kleinere Scrollbar gerendert werden soll. Verwenden Sie `none` möglichst nicht, da das Verbergen einer Scrollbar negative Auswirkungen auf die [Barrierefreiheit](#barrierefreiheit) hat.

> [!NOTE]
> Für Elemente, die nur über programmatische Mittel und nicht direkt durch Benutzerinteraktion scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit dem Wert `hidden` anstelle von `scrollbar-width: none`.

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
  - : Die standardmäßige Scrollbar-Dicke für die Plattform.
- `thin`
  - : Eine dünne Scrollbar-Variante auf Plattformen, die diese Option bieten, oder eine dünnere Scrollbar als die standardmäßige Plattform-Scrollbar-Dicke.
- `none`
  - : Keine Scrollbar wird angezeigt, das Element ist jedoch weiterhin scrollbar.

> [!NOTE]
> User Agents müssen jeden auf dem Root-Element gesetzten `scrollbar-width`-Wert auf den Viewport anwenden.

## Barrierefreiheit

Verwenden Sie diese Eigenschaft mit Vorsicht — das Setzen der `scrollbar-width` auf `thin` oder `none` kann das Scrollen von Inhalten erschweren oder unmöglich machen, wenn der Autor keine alternative Scrollmöglichkeit bereitstellt. Während Wischgesten oder Mausräder das Scrollen auf solchen Inhalten ermöglichen können, haben einige Geräte keine alternative Scrollmöglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) ist seit langem in Kraft, um grundlegende Tastaturzugänglichkeit zu empfehlen, und dies sollte das Scrollen von Inhaltsbereichen einschließen. Mit WCAG 2.1 wurde das Kriterium 2.5.5 (Zielgröße) eingeführt, das empfiehlt, dass Berührungsziele mindestens 44px in Breite und Höhe betragen sollten (obwohl das Problem auf hochauflösenden Bildschirmen verschärft wird; gründliche Tests werden empfohlen).

- [MDN Verständnis WCAG, Erklärung zu Leitlinie 2.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis WCAG, Erklärung zu Leitlinie 2.5](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis für Erfolgskriterium 2.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis für Erfolgskriterium 2.5.5 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Dimensionierung der Überlauf-Scrollbars

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
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

{{EmbedLiveSample("Sizing_overflow_scrollbars")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Scrollbars Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling)-Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
