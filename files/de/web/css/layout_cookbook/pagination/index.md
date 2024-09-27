---
title: Paginierung
slug: Web/CSS/Layout_cookbook/Pagination
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Dieses Cookbook-Muster demonstriert das Navigationsmuster zur Anzeige der Paginierung, bei dem der Benutzer zwischen Seiten von Inhalten, wie z.B. Suchergebnissen, navigieren kann.

![Links zu Seiten in einer paginierten Auflistung](pagination.png)

## Anforderungen

Das Paginierungsmuster zeigt typischerweise Elemente in einer Reihe an. Um sicherzustellen, dass die Paginierung für Personen, die einen Screenreader verwenden, verständlich ist, markieren wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell in einer Reihe darzustellen.

Typischerweise wird die Paginierungskomponente horizontal unter dem Inhalt zentriert.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/pagination.html", '100%', 720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/pagination--download.html)

## Getroffene Entscheidungen

Dieses Muster wird mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellt – ein Flex-Container, der in einen anderen eingebettet ist. Das {{htmlelement("nav")}}-Element wird als Flex-Container definiert, um die Liste mit der {{cssxref("justify-content")}}-Eigenschaft zentrieren zu können.

Die Liste selbst wird auch zu einem Flex-Container, um die Elemente in einer Reihe anzuordnen. Um die Elemente zu verteilen, können wir entweder einen {{cssxref("margin")}} auf die Flex-Elemente anwenden oder einen {{cssxref("gap")}} auf den Flex-Container setzen.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Barrierefreiheitsaspekte

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation macht und wohin sie gelangen, wenn sie auf einen Link klicken. Dafür haben wir [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) auf dem `<nav>`-Element hinzugefügt.

Wir haben auch zusätzlichen Inhalt hinzugefügt, der von einem Screenreader gelesen wird, aber visuell ausgeblendet ist und haben das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut auf die Pfeile der Seitenumblätterung gesetzt.

Der Abschnitt "Siehe auch" am Ende dieses Dokuments enthält Links zu verwandten Themen der Barrierefreiheit.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Unsichtbarer Inhalt nur für Screenreader-Nutzer](https://webaim.org/techniques/css/invisiblecontent/#techniques) über WebAIM.org (2020)
- [CSS mit Barrierefreiheit im Hinterkopf schreiben](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
