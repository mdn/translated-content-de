---
title: CSS-Scrollleisten-Styling
short-title: Scrollbars styling
slug: Web/CSS/Guides/Scrollbars_styling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Scrollleisten-Styling**-Modul definiert Eigenschaften, die Sie für das visuelle Styling von Scrollleisten verwenden können. Sie können die Breite der Scrollleiste nach Bedarf anpassen. Sie können auch die Farbe der Scrollleisten-_Schiene_ anpassen, die der Hintergrund der Scrollleiste ist, sowie die Farbe der Scrollleisten-_Daumen_, der der ziehbare Griff der Scrollleiste ist.

## Scrollleisten-Styling in Aktion

Dieses Beispiel definiert eine dünne Scrollleiste mit einem roten Daumen und einer orangefarbenen Schiene. Um den Daumen zu sehen, müssen Sie den Text scrollen. Nachdem die Scrollleiste sichtbar ist, fahren Sie mit der Maus darüber, um die Schiene zu sehen.

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
> Wenn Sie Scrollleisten anpassen, stellen Sie sicher, dass der Daumen und die Schiene genügend Kontrast zum umgebenden Hintergrund haben. Stellen Sie auch sicher, dass der Bereich, in dem die Scrollleiste aktiv ist, groß genug für Personen ist, die Touch-Eingaben verwenden.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Verwandte Konzepte

- {{CSSxRef("overflow-block")}} CSS-Eigenschaft
- {{CSSxRef("overflow-inline")}} CSS-Eigenschaft
- {{CSSxRef("overflow-x")}} CSS-Eigenschaft
- {{CSSxRef("overflow-y")}} CSS-Eigenschaft
- {{CSSxRef("overflow")}} CSS-Kurzschrift-Eigenschaft
- {{CSSxRef("overflow-clip-margin")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschrift-Eigenschaft
- {{cssxref("scroll-padding")}} CSS-Kurzschrift-Eigenschaft
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
