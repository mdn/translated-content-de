---
title: Gestaltung von CSS-Scrollbalken
short-title: Gestaltung von Scrollbalken
slug: Web/CSS/Guides/Scrollbars_styling
l10n:
  sourceCommit: 553d17671f5fec31365fedfaad8e5343d14c0bd8
---

Das Modul **CSS scrollbars styling** definiert Eigenschaften, mit denen Sie Scrollbalken visuell gestalten können. Sie können die Breite des Scrollbalkens nach Bedarf anpassen. Außerdem können Sie die Farbe der Scrollbalken-**Spur** (des Hintergrunds) und des Scrollbalken-**Schiebers** (des verschiebbaren Griffs) anpassen.

## Scrollbalken-Gestaltung in Aktion

Dieses Beispiel definiert einen schmalen Scrollbalken mit einem blaugrünen Schieber und einer helleren blaugrünen Spur. Scrollen Sie durch den Text, um den Schieber zu sehen. Sobald der Scrollbalken sichtbar ist, bewegen Sie den Mauszeiger darüber, um die Spur zu sehen.

```css hidden
.poem {
  width: 300px;
  height: 100px;
  border: 1px solid;
}
```

```css
.poem {
  overflow: scroll;
  scrollbar-color: #0b4f4a #5f9e98;
  scrollbar-width: thin;
}
```

```html hidden
<blockquote class="poem">
  <h3>A Small Needful Fact</h3>
  <pre>
Is that Eric Garner worked
for some time for the Parks and Rec.
Horticultural Department, which means,
perhaps, that with his very large hands,
perhaps, in all likelihood,
he put gently into the earth
some plants which, most likely,
some of them, in all likelihood,
continue to grow, continue
to do what such plants do, like house
and feed small and necessary creatures,
like being pleasant to touch and smell,
like converting sunlight
into food, like making it easier
for us to breathe.
</pre>
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

> [!NOTE]
> Achten Sie beim Anpassen von Scrollbalken darauf, dass Schieber und Spur einen ausreichenden Kontrast zum umgebenden Hintergrund aufweisen. Stellen Sie außerdem sicher, dass der Interaktionsbereich des Scrollbalkens groß genug für Personen ist, die eine Touch-Eingabe verwenden.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Verwandte Konzepte

- {{CSSxRef("overflow-block")}} CSS-Eigenschaft
- {{CSSxRef("overflow-inline")}} CSS-Eigenschaft
- {{CSSxRef("overflow-x")}} CSS-Eigenschaft
- {{CSSxRef("overflow-y")}} CSS-Kurzschreibweise
- {{CSSxRef("overflow")}} CSS-Kurzschreibweise
- {{CSSxRef("overflow-clip-margin")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschreibweise
- {{cssxref("scroll-padding")}} CSS-Kurzschreibweise
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudoelement
- {{Glossary("scroll_container", "Scroll-Container")}}, Glossarbegriff
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), ARIA-Rolle

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref('scroll-timeline')}}, {{cssxref('scroll-timeline-axis')}}, {{cssxref('scroll-timeline-name')}}
- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
