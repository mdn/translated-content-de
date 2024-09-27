---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: 57cfc73ac05802d7e7bc78ceed4fe7a207323946
---

{{CSSRef}}

Die Eigenschaft **`scrollbar-width`** ermöglicht es dem Autor, die gewünschte Dicke der Bildlaufleisten eines Elements festzulegen, wenn diese angezeigt werden.

Der Zweck von `scrollbar-width` besteht darin, den von der Bildlaufleiste auf einer Seite oder einem Element eingenommenen Raum zu optimieren; der Zweck steht nicht im Zusammenhang mit der Ästhetik der Bildlaufleiste. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem Benutzeragent an, ob eine normale oder kleinere Bildlaufleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Bildlaufleiste die [Zugänglichkeit](#zugänglichkeit) negativ beeinflusst.

> [!NOTE]
> Für Elemente, die nur auf programmatische Weise und nicht durch direkte Benutzerinteraktion scrollbar sind, verwenden Sie die Eigenschaft {{cssxref("overflow")}} mit dem Wert `hidden` anstelle von `scrollbar-width: none`.

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
  - : Die Standardbreite der Bildlaufleiste für die Plattform.
- `thin`
  - : Eine schmalere Variante der Bildlaufleiste auf Plattformen, die diese Option bieten, oder eine dünnere Bildlaufleiste als die Standardbreite der Plattform-Bildlaufleiste.
- `none`
  - : Keine Bildlaufleiste wird angezeigt, jedoch bleibt das Element scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden auf das Wurzelelement angewendeten `scrollbar-width`-Wert auf das Ansichtsfenster anwenden.

## Zugänglichkeit

Verwenden Sie diese Eigenschaft mit Vorsicht – das Festlegen von `scrollbar-width` auf `thin` oder `none` kann es schwierig oder unmöglich machen, Inhalte zu scrollen, wenn der Autor keinen alternativen Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine alternative Scrolling-Möglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) gibt seit langem Hinweise zur grundlegenden Tastaturzugänglichkeit, und dies sollte auch das Scrollen von Inhaltsbereichen umfassen. Und eingeführt in WCAG 2.1, rät Kriterium 2.5.5 (Zielgröße), dass Touch-Ziele mindestens 44px in Breite und Höhe haben sollten (obwohl das Problem auf hochauflösenden Bildschirmen verstärkt wird; gründliches Testen wird empfohlen).

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.1](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.5](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis des Erfolgskriteriums 2.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis des Erfolgskriteriums 2.5.5 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größe von Überlauf-Bildlaufleisten

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

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
