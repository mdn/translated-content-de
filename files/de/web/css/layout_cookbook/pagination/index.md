---
title: Pagination
slug: Web/CSS/Layout_cookbook/Pagination
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Dieses Kochbuchmuster zeigt das Navigationsmuster zur Anzeige von Pagination, bei der der Benutzer zwischen Seiten von Inhalten wie Suchergebnissen wechseln kann.

![Links zu Seitengruppen in einer Paginierungsauflistung](pagination.png)

## Anforderungen

Das Paginierungsmuster zeigt typischerweise Elemente in einer Zeile an. Um sicherzustellen, dass die Paginierung für Personen, die einen Screenreader verwenden, verständlich ist, kennzeichnen wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell als Zeile darzustellen.

Typischerweise wird die Paginierungskomponente horizontal zentriert unter dem Inhalt angezeigt.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> [!CALLOUT]
>
> [Dieses Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html)

## Getroffene Entscheidungen

Dieses Muster ist mit [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gestaltet — ein Flex-Container, der in einem anderen verschachtelt ist. Das {{htmlelement("nav")}}-Element wird als Flex-Container bezeichnet, damit wir die Liste mithilfe der {{cssxref("justify-content")}}-Eigenschaft zentrieren können.

Die Liste selbst wird ebenfalls zu einem Flex-Container, um die Elemente als Zeile anzuordnen. Um die Elemente zu verteilen, können wir entweder einen {{cssxref("margin")}} auf die Flex-Elemente anwenden oder eine {{cssxref("gap")}} auf den Flex-Container hinzufügen.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Zugänglichkeitsaspekte

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation bewirkt und wohin sie gelangt, wenn sie auf einen Link klickt. Um dies zu unterstützen, haben wir [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) auf dem `<nav>`-Element hinzugefügt.

Wir haben auch zusätzlichen Inhalt hinzugefügt, der von einem Screenreader gelesen wird, aber visuell verborgen ist, und das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut auf die Paginierungspfeile gesetzt.

Der Abschnitt "Siehe auch" am Ende dieses Dokuments enthält Links zu verwandten Barrierefreiheitsthemen.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Unsichtbarer Inhalt nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/#techniques) über WebAIM.org (2020)
- [CSS mit Blick auf Barrierefreiheit schreiben](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
