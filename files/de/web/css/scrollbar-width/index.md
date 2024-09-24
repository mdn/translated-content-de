---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: 57cfc73ac05802d7e7bc78ceed4fe7a207323946
---

{{CSSRef}}

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn sie angezeigt werden.

Der Zweck der `scrollbar-width`-Eigenschaft besteht darin, den von der Scrollleiste auf einer Seite oder einem Element eingenommenen Raum zu optimieren; der Zweck ist nicht mit der Ästhetik der Scrollleiste verbunden. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem Benutzeragenten an, ob eine normale oder kleinere Scrollleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Scrollleiste die [Barrierefreiheit](#barrierefreiheit) negativ beeinflusst.

> [!NOTE]
> Für Elemente, die nur programmatisch und nicht durch direkte Benutzerinteraktion scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit dem Wert `hidden`, anstatt `scrollbar-width: none`.

## Syntax

```css
/* Schlüsselwortwerte */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Globale Werte */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### Werte

- `auto`
  - : Die standardmäßige Scrollleistenbreite für die Plattform.
- `thin`
  - : Eine dünne Variante der Scrollleistenbreite auf Plattformen, die diese Option bieten, oder eine dünnere Scrollleiste als die standardmäßige Plattform-Scrollleistenbreite.
- `none`
  - : Keine Scrollleiste wird angezeigt, das Element ist jedoch weiterhin scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden `scrollbar-width`-Wert, der am Wurzelelement gesetzt wird, auf das Ansichtsfenster anwenden.

## Barrierefreiheit

Verwenden Sie diese Eigenschaft mit Vorsicht — das Setzen von `scrollbar-width` auf `thin` oder `none` kann dazu führen, dass Inhalte schwer oder unmöglich zu scrollen sind, wenn der Autor keinen alternativen Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen bei solchen Inhalten ermöglichen können, besitzen einige Geräte keine alternativen Scrollmöglichkeiten.

Das WCAG-Kriterium 2.1.1 (Tastatur) besteht schon seit langem, um auf grundlegende Tastaturzugänglichkeit hinzuweisen, und dies sollte das Scrollen von Inhaltsbereichen einschließen. In WCAG 2.1 wurde das Kriterium 2.5.5 (Zielgröße) eingeführt, das empfiehlt, dass Touchziele mindestens 44px breit und hoch sein sollten (obwohl das Problem auf hochauflösenden Bildschirmen noch verschärft wird; gründliches Testen wird empfohlen).

- [MDN Erläuterung der WCAG, Richtlinie 2.1](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Erläuterung der WCAG, Richtlinie 2.5](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis des Erfolgskriteriums 2.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis des Erfolgskriteriums 2.5.5 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größenanpassung von Überlauf-Scrollleisten

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

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
