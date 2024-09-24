---
title: Paginierung
slug: Web/CSS/Layout_cookbook/Pagination
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Dieses Kochbuch-Muster zeigt das Navigationsmuster, das zur Anzeige der Paginierung verwendet wird, bei dem der Benutzer zwischen Seiten von Inhalten wie Suchergebnissen wechseln kann.

![Links zu Seitensätzen in einer paginierten Liste](pagination.png)

## Anforderungen

Das Paginierungsmuster zeigt Elemente normalerweise in einer Reihe an. Um sicherzustellen, dass die Paginierung von Personen, die einen Screenreader verwenden, verstanden wird, markieren wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell als Reihe darzustellen.

Typischerweise wird die Paginierungskomponente horizontal zentriert unterhalb des Inhalts angezeigt.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html)

## Getroffene Entscheidungen

Dieses Muster wird mithilfe von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angelegt – ein flexibler Container, der innerhalb eines anderen verschachtelt ist. Das {{htmlelement("nav")}}-Element wird als flexibler Container gekennzeichnet, damit wir die Liste mithilfe der {{cssxref("justify-content")}}-Eigenschaft zentrieren können.

Die Liste selbst wird ebenfalls zu einem flexiblen Container, um die Elemente als Reihe anzuordnen. Um die Elemente auseinanderzureihen, können wir entweder {{cssxref("margin")}} auf die flexiblen Elemente verwenden oder einen {{cssxref("gap")}} auf den flexiblen Container anwenden.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Barrierefreiheitsbedenken

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation tut und wohin sie gelangt, wenn sie auf einen Link klickt. Um dabei zu helfen, haben wir [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) auf dem `<nav>`-Element hinzugefügt.

Wir haben auch einige zusätzliche Inhalte hinzugefügt, die von einem Screenreader gelesen würden, aber visuell verborgen sind, und das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut auf die Seitennavigationspfeile gesetzt.

Der Abschnitt „Siehe auch“ am Ende dieses Dokuments enthält Links zu verwandten Barrierefreiheits-Themen.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Invisible content just for screen reader users](https://webaim.org/techniques/css/invisiblecontent/#techniques) via WebAIM.org (2020)
- [Writing CSS with accessibility in mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
