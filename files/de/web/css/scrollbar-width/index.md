---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Bildlaufleisten eines Elements festzulegen, wenn sie angezeigt werden.

Der Zweck von `scrollbar-width` besteht darin, den von der Bildlaufleiste auf einer Seite oder einem Element belegten Platz zu optimieren; der Zweck ist nicht mit der Ästhetik der Bildlaufleiste verbunden. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem Benutzeragenten an, ob eine normale oder kleinere Bildlaufleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Bildlaufleiste sich negativ auf die [Zugänglichkeit](#zugänglichkeit) auswirkt.

> [!NOTE]
> Für Elemente, die nur über programmatische Mittel und nicht durch direkte Benutzerinteraktion scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit einem Wert von `hidden` anstelle von `scrollbar-width: none`.

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
  - : Die standardmäßige Bildlaufleistenbreite für die Plattform.
- `thin`
  - : Eine dünne Bildlaufleistenbreitenvariante auf Plattformen, die diese Option bieten, oder eine dünnere Bildlaufleiste als die standardmäßige Bildlaufleistenbreite der Plattform.
- `none`
  - : Keine Bildlaufleiste wird angezeigt, das Element bleibt jedoch scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden auf das Wurzelelement angewandten `scrollbar-width`-Wert auf das Ansichtsfenster anwenden.

## Zugänglichkeit

Verwenden Sie diese Eigenschaft mit Vorsicht — das Setzen von `scrollbar-width` auf `thin` oder `none` kann es schwierig oder unmöglich machen, Inhalte zu scrollen, wenn der Autor keine alternative Scrollmethode bereitstellt. Während Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine alternative Scrollmöglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) gibt es schon lange, um auf grundlegende Tastaturzugänglichkeit hinzuweisen, und dies sollte auch das Scrollen von Inhaltsbereichen umfassen. Im WCAG 2.1 eingeführt, empfiehlt das Kriterium 2.5.5 (Zielgröße), dass Berührungsziele mindestens 44px breit und hoch sein sollten (obwohl das Problem auf hochauflösenden Bildschirmen verschärft wird; gründliches Testen wird empfohlen).

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.5](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis von Erfolgskriterium 2.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis von Erfolgskriterium 2.5.5 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größenanpassung von Überlauf-Bildlaufleisten

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

- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Bildlaufleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
