---
title: CSS-Scrollbars-Styling
short-title: Scrollbars styling
slug: Web/CSS/Guides/Scrollbars_styling
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Das Modul **CSS-Scrollbars-Styling** definiert Eigenschaften, die Sie zur visuellen Gestaltung von Scrollbars verwenden können. Sie können die Breite der Scrollbar nach Bedarf anpassen. Sie können auch die Farbe des Scrollbar-_Tracks_, also des Hintergrunds der Scrollbar, und die Farbe des Scrollbar-_Thumbs_, also des verschiebbaren Griffs der Scrollbar, anpassen.

## Styling von Scrollbars in Aktion

Dieses Beispiel definiert eine dünne Scrollbar mit einem roten Thumb und einem orangefarbenen Track. Um den Thumb zu sehen, müssen Sie den Text scrollen. Nachdem die Scrollbar sichtbar ist, bewegen Sie den Mauszeiger darüber, um den Track zu sehen.

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
</pre>
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

> [!NOTE]
> Beim Anpassen von Scrollbars stellen Sie sicher, dass Thumb und Track genügend Kontrast zum umgebenden Hintergrund haben. Achten Sie auch darauf, dass der Berührungsbereich der Scrollbar groß genug für Benutzer ist, die Touch-Eingaben verwenden.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Verwandte Konzepte

- {{CSSxRef("overflow-block")}} CSS-Eigenschaft
- {{CSSxRef("overflow-inline")}} CSS-Eigenschaft
- {{CSSxRef("overflow-x")}} CSS-Eigenschaft
- {{CSSxRef("overflow-y")}} CSS-Eigenschaft
- {{CSSxRef("overflow")}} CSS-Kurzschreibweise
- {{CSSxRef("overflow-clip-margin")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschreibweise
- {{cssxref("scroll-padding")}} CSS-Kurzschreibweise
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
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
