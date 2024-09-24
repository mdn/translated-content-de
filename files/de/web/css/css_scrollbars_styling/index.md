---
title: CSS-Scrollleisten-Styling
slug: Web/CSS/CSS_scrollbars_styling
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Das Modul **CSS-Scrollleisten-Styling** definiert Eigenschaften, die Sie für die visuelle Gestaltung von Scrollleisten verwenden können. Sie können die Breite der Scrollleiste nach Bedarf anpassen. Sie können auch die Farbe der Scrollleisten-_Schiene_ anpassen, was den Hintergrund der Scrollleiste darstellt, sowie die Farbe des Scrollleisten-_Daumens_, der das verschiebbare Griffstück der Scrollleiste ist.

## Styling der Scrollleiste in Aktion

Dieses Beispiel definiert eine schmale Scrollleiste mit einem roten Daumen und einer orangefarbenen Schiene. Um den Daumen zu sehen, müssen Sie den Text scrollen. Nachdem die Scrollleiste sichtbar ist, bewegen Sie den Mauszeiger darüber, um die Schiene zu sehen.

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
> Beim Anpassen von Scrollleisten sollten Sie darauf achten, dass der Daumen und die Schiene einen ausreichenden Kontrast zum umgebenden Hintergrund haben. Stellen Sie auch sicher, dass der Berührungsbereich der Scrollleiste groß genug für Personen ist, die Touch-Eingaben verwenden.

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
- {{glossary("scroll container")}} Glossarbegriff
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref('scroll-timeline')}}, {{cssxref('scroll-timeline-axis')}}, {{cssxref('scroll-timeline-name')}}
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
