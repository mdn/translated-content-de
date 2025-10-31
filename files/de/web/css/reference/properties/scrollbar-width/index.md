---
title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scrollbar-width`**-Eigenschaft erlaubt es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn diese angezeigt werden.

Der Zweck der `scrollbar-width`-Eigenschaft besteht darin, den Platz zu optimieren, den die Scrollleiste auf einer Seite oder einem Element einnimmt; Der Zweck bezieht sich nicht auf das Aussehen der Scrollleiste. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` zeigen dem Benutzeragent an, ob eine normale oder eine kleinere Scrollleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Verbergen einer Scrollleiste die [Zugänglichkeit](#zugänglichkeit) negativ beeinflusst.

> [!NOTE]
> Für Elemente, die nur programmatisch und nicht durch direkte Benutzerinteraktion gescrollt werden können, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit dem Wert `hidden` anstelle von `scrollbar-width: none`.

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
  - : Eine dünne Variante der Scrollleistenbreite auf Plattformen, die diese Option bieten, oder eine dünnere Scrollleiste als die Standardplattformbreite.
- `none`
  - : Keine Scrollleiste wird angezeigt, das Element bleibt jedoch scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden auf dem Stamm-Element festgelegten `scrollbar-width`-Wert auf das Ansichtsfenster anwenden.

## Zugänglichkeit

Verwenden Sie diese Eigenschaft mit Vorsicht — das Setzen von `scrollbar-width` auf `thin` oder `none` kann das Scrollen des Inhalts erschweren oder unmöglich machen, wenn der Autor keinen alternativen Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen bei solchen Inhalten ermöglichen können, haben manche Geräte keine alternative Scrollmöglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) besteht seit langem, um grundlegende Tastaturzugänglichkeit zu empfehlen, wozu auch das Scrollen von Inhaltsbereichen gehört. Und eingeführt in WCAG 2.1, empfiehlt das Kriterium 2.5.5 (Zielgröße), dass Berührungsziele mindestens 44px in Breite und Höhe haben sollten (obwohl das Problem auf Bildschirmen mit hoher Auflösung verschärft wird; gründliche Tests werden empfohlen).

- [MDN Verständnis von WCAG, Leitfaden 2.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis von WCAG, Leitfaden 2.5 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verständnis des Erfolgskriteriums 2.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verständnis des Erfolgskriteriums 2.5.5 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

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

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling)-Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
