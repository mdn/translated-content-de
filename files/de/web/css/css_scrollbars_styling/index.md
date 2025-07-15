---
title: CSS-Scrollbalken-Styling
slug: Web/CSS/CSS_scrollbars_styling
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Scrollbalken-Styling**-Modul definiert Eigenschaften, die Sie zur visuellen Gestaltung von Scrollbalken verwenden können. Sie können die Breite des Scrollbalkens nach Bedarf anpassen. Außerdem können Sie die Farbe des Scrollbalken-_Tracks_, also des Hintergrunds des Scrollbalkens, und die Farbe des Scrollbalken-_Thumbs_, also des ziehbaren Griffs des Scrollbalkens, anpassen.

## Scrollbalken-Styling in Aktion

Dieses Beispiel definiert einen schmalen Scrollbalken mit einem roten Thumb und einem orangefarbenen Track. Um den Thumb zu sehen, müssen Sie den Text scrollen. Nachdem der Scrollbalken sichtbar ist, bewegen Sie den Mauszeiger über ihn, um den Track zu sehen.

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
  scrollbar-color: red orange;
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
</pre
  >
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

> [!NOTE]
> Bei der Anpassung von Scrollbalken stellen Sie sicher, dass Thumb und Track ausreichend Kontrast zum umgebenden Hintergrund haben. Achten Sie auch darauf, dass der Trefferbereich des Scrollbalkens groß genug für Benutzer ist, die eine Touch-Eingabe verwenden.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Verwandte Konzepte

- {{CSSxRef("overflow-block")}} CSS-Eigenschaft
- {{CSSxRef("overflow-inline")}} CSS-Eigenschaft
- {{CSSxRef("overflow-x")}} CSS-Eigenschaft
- {{CSSxRef("overflow-y")}} CSS-Eigenschaft
- {{CSSxRef("overflow")}} CSS-Shorthand-Eigenschaft
- {{CSSxRef("overflow-clip-margin")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Shorthand-Eigenschaft
- {{cssxref("scroll-padding")}} CSS-Shorthand-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- {{Glossary("scroll_container", "scroll container")}} Glossarbegriff
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref('scroll-timeline')}}, {{cssxref('scroll-timeline-axis')}}, {{cssxref('scroll-timeline-name')}}
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
