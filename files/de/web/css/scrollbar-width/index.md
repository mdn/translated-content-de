---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn diese angezeigt werden.

Der Zweck der `scrollbar-width` besteht darin, den Platz zu optimieren, den die Scrollleiste auf einer Seite oder einem Element einnimmt; der Zweck ist nicht auf die Ästhetik der Scrollleiste bezogen. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem Benutzeragent an, ob eine normale oder kleinere Scrollleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Scrollleiste die [Barrierefreiheit](#barrierefreiheit) negativ beeinflusst.

> [!NOTE]
> Bei Elementen, die nur programmgesteuert und nicht durch direkte Benutzerinteraktionen scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit einem Wert von `hidden` anstelle von `scrollbar-width: none`.

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
  - : Keine Scrollleiste angezeigt, jedoch bleibt das Element scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden auf das Root-Element angewendeten `scrollbar-width`-Wert auf das Ansichtsfenster anwenden.

## Barrierefreiheit

Verwenden Sie diese Eigenschaft mit Vorsicht — das Festlegen von `scrollbar-width` auf `thin` oder `none` kann Inhalte schwer oder unmöglich zu scrollen machen, wenn der Autor keine alternative Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine Alternative zum Scrollen.

Das WCAG-Kriterium 2.1.1 (Tastatur) ist seit langem im Einsatz, um auf die grundlegende Tastaturzugänglichkeit hinzuweisen, was das Scrollen von Inhaltsbereichen einschließen sollte. Und im WCAG 2.1 eingeführt, rät Kriterium 2.5.5 (Zielgröße), dass Berührungsziele mindestens 44px breit und hoch sein sollten (obwohl das Problem auf hochauflösenden Bildschirmen verstärkt wird; gründliches Testen wird empfohlen).

- [MDN Verständnis WCAG, Erläuterungen zu Richtlinie 2.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis WCAG, Erläuterungen zu Richtlinie 2.5](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verstehen des Erfolgskriteriums 2.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verstehen des Erfolgskriteriums 2.5.5 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größenänderung von Überlauf-Scrollleisten

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

- [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow)
- [CSS-Scrollleisten-Styling-Modul](/de/docs/Web/CSS/CSS_scrollbars_styling)
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
