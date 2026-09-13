---
title: "`scrollbar-width` CSS property"
short-title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: 2e2dfb27a085911dd64aa4798d4a1071660c2397
---

Die **`scrollbar-width`**-Eigenschaft ermöglicht es dem Autor, die gewünschte Dicke der Scrollleisten eines Elements festzulegen, wenn diese angezeigt werden.

Der Zweck der `scrollbar-width`-Eigenschaft besteht darin, den Platz zu optimieren, den die Scrollleiste auf einer Seite oder einem Element einnimmt; der Zweck ist nicht ästhetischer Natur. Die vordefinierten Schlüsselwortwerte von `scrollbar-width` geben dem Benutzeragenten an, ob eine normale oder kleinere Scrollleiste gerendert werden soll. Vermeiden Sie die Verwendung von `none`, da das Ausblenden einer Scrollleiste die [Zugänglichkeit](#zugänglichkeit) beeinträchtigt.

> [!NOTE]
> Für Elemente, die nur programmatisch und nicht durch direkte Benutzerinteraktion scrollbar sind, verwenden Sie die {{cssxref("overflow")}}-Eigenschaft mit einem Wert von `hidden` anstelle von `scrollbar-width: none`.

> [!NOTE]
> Browser ignorieren die nicht-standardmäßige {{cssxref("::-webkit-scrollbar")}}-Familie von Pseudoelementen bei jedem Element, dessen _berechneter_ `scrollbar-width`-Wert etwas anderes als `auto` ist.
> Im Gegensatz zu {{cssxref("scrollbar-color")}} wird `scrollbar-width` nicht vererbt, sodass der Wert eines Vorfahren seine Nachkommen nicht beeinflusst.
> Wenn Sie `scrollbar-width: auto` auf ein Element setzen, wird dessen `::-webkit-scrollbar-*`-Stil wiederhergestellt.
> Siehe [Hinzufügen eines Fallbacks für Scrollleistenstile](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar#adding_a_fallback_for_scrollbar_styles).

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
  - : Eine dünne Scrollleistenvariante auf Plattformen, die diese Option bieten, oder eine dünnere Scrollleiste als die Standardplattform-Scrollleistenbreite.
- `none`
  - : Keine Scrollleiste wird angezeigt, jedoch bleibt das Element scrollbar.

> [!NOTE]
> Benutzeragenten müssen jeden `scrollbar-width`-Wert anwenden, der auf das Wurzelelement gesetzt ist, auf den Viewport.

## Zugänglichkeit

Verwenden Sie diese Eigenschaft mit Vorsicht – das Setzen von `scrollbar-width` auf `thin` oder `none` kann es schwierig oder unmöglich machen, Inhalte zu scrollen, wenn der Autor keinen alternativen Scrollmechanismus bereitstellt. Während Wischgesten oder Mausräder das Scrollen solcher Inhalte ermöglichen können, haben einige Geräte keine alternative Scrollmöglichkeit.

Das WCAG-Kriterium 2.1.1 (Tastatur) ist seit langem vorhanden, um die grundlegende Tastaturzugänglichkeit zu fördern, und dies sollte auch das Scrollen von Inhaltsbereichen umfassen. Mit der Einführung von WCAG 2.1 rät das Kriterium 2.5.5 (Zielgröße), dass Touch-Ziele mindestens 44px in Breite und Höhe haben sollten (obwohl das Problem bei hochauflösenden Bildschirmen verstärkt wird; umfassende Tests werden empfohlen).

- [MDN Verständnis von WCAG, Leitfaden 2.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Verständnis von WCAG, Leitfaden 2.5 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard)
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

- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-color")}}
