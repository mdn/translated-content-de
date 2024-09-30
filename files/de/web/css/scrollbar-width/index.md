---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
l10n:
  sourceCommit: 57cfc73ac05802d7e7bc78ceed4fe7a207323946
---

{{CSSRef}}

Die **`scrollbar-width`** Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn sie angezeigt werden.

Der Zweck von `scrollbar-width` liegt darin, den von der Scrollleiste auf einer Seite oder einem Element eingenommenen Platz zu optimieren; das Ziel ist nicht mit dem Aussehen der Scrollleiste verbunden. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem User-Agent an, ob eine normale oder kleinere Scrollleiste angezeigt werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Scrollleiste sich negativ auf die [Zugänglichkeit](#zugänglichkeit) auswirkt.

> [!NOTE]
> Für Elemente, die nur programmgesteuert und nicht durch direkte Benutzerinteraktion gescrollt werden können, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit einem Wert von `hidden` anstelle von `scrollbar-width: none`.

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
  - : Eine dünne Scrollleistenvariante auf Plattformen, die diese Option unterstützen, oder eine dünnere Scrollleiste als die Standardplattformbreite.
- `none`
  - : Keine Scrollleiste wird angezeigt, das Element bleibt jedoch scrollbar.

> [!NOTE]
> User Agents müssen jeden `scrollbar-width` Wert, der auf dem Root-Element gesetzt ist, auf den Viewport anwenden.

## Zugänglichkeit

Verwenden Sie diese Eigenschaft mit Vorsicht – das Setzen von `scrollbar-width` auf `thin` oder `none` kann das Scrollen von Inhalten erschweren oder unmöglich machen, wenn der Autor keinen alternativen Scroll-Mechanismus bereitstellt. Obwohl Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine alternative Scrolloption.

Das WCAG-Kriterium 2.1.1 (Tastatur) ist seit langem vorhanden, um auf grundlegende Tastaturzugänglichkeit hinzuweisen, und dies sollte das Scrollen von Inhaltsbereichen umfassen. Und eingeführt in WCAG 2.1, rät Kriterium 2.5.5 (Zielgröße), dass Berührungsziele mindestens 44px in Breite und Höhe betragen sollten (obwohl das Problem auf hochauflösenden Bildschirmen verstärkt wird; gründliche Tests werden empfohlen).

- [MDN Verstehen von WCAG, Richtlinie 2.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verstehen von WCAG, Richtlinie 2.5 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
- [Verstehen des Erfolgskriteriums 2.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Verstehen des Erfolgskriteriums 2.5.5 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

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

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
