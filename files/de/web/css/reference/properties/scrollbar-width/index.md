---
title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn diese angezeigt werden.

Der Zweck von `scrollbar-width` besteht darin, den von der Scrollleiste auf einer Seite oder einem Element belegten Platz zu optimieren; es geht nicht um die Ästhetik der Scrollleiste. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` weisen den Benutzeragenten an, ob eine normale oder kleinere Scrollleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Scrollleiste die [Barrierefreiheit](#barrierefreiheit) negativ beeinflusst.

> [!NOTE]
> Für Elemente, die nur über programmatische Mittel und nicht durch direkte Benutzerinteraktion scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit dem Wert `hidden` anstelle von `scrollbar-width: none`.

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
  - : Die Standardbreite der Scrollleiste für die Plattform.
- `thin`
  - : Eine dünne Variante der Scrollleistenbreite auf Plattformen, die diese Option bieten, oder eine dünnere Scrollleiste als die Standardbreite der Plattform.
- `none`
  - : Keine Scrollleiste wird angezeigt, das Element bleibt jedoch scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden auf dem Wurzelelement gesetzten `scrollbar-width`-Wert auf den Ansichtsbereich anwenden.

## Barrierefreiheit

Verwenden Sie diese Eigenschaft mit Vorsicht — die Einstellung von `scrollbar-width` auf `thin` oder `none` kann Inhalte nur schwer oder unmöglich scrollbar machen, wenn der Autor keinen alternativen Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine alternative Scrollmöglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) ist seit langem in Kraft, um auf die grundlegende Tastaturzugänglichkeit hinzuweisen, und dies sollte das Scrollen von Inhaltsbereichen einschließen. In WCAG 2.1 eingeführt, rät Kriterium 2.5.5 (Zielgröße), dass Touch-Ziele mindestens 44px in Breite und Höhe haben sollten (obwohl das Problem auf hochauflösenden Bildschirmen verstärkt wird; gründliche Tests werden empfohlen).

- [MDN Verständnis von WCAG, Erklärungen zu Richtlinie 2.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis von WCAG, Erklärungen zu Richtlinie 2.5](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis des Erfolgskriteriums 2.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis des Erfolgskriteriums 2.5.5 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größe von Überlauf-Scrollleisten

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

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling)-Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
