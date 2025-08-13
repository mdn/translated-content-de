---
title: Paginierung
slug: Web/CSS/Layout_cookbook/Pagination
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Dieses Cookbook-Muster demonstriert das Navigationsmuster, das zur Anzeige von Seitennummerierungen verwendet wird, bei dem der Benutzer zwischen Seiten mit Inhalten wie Suchergebnissen navigieren kann.

![Links zu Seiten in einer paginierten Liste](pagination.png)

## Anforderungen

Das Paginierungs-Muster zeigt normalerweise Elemente in einer Reihe an. Um sicherzustellen, dass die Paginierung für Personen, die einen Screenreader verwenden, verständlich ist, kennzeichnen wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell als Reihe darzustellen.

In der Regel wird die Paginierungskomponente horizontal unterhalb des Inhalts zentriert.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___pagination-example
<nav aria-label="pagination">
  <ul class="pagination">
    <li>
      <a href="">
        <span aria-hidden="true">&laquo;</span>
        <span class="visuallyhidden">previous set of pages</span>
      </a>
    </li>
    <li>
      <a href=""><span class="visuallyhidden">page </span>1</a>
    </li>
    <li>
      <a href="" aria-current="page">
        <span class="visuallyhidden">page </span>2
      </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">page </span>3 </a>
    </li>
    <li>
      <a href=""> <span class="visuallyhidden">page </span>4 </a>
    </li>
    <li>
      <a href="">
        <span class="visuallyhidden">next set of pages</span
        ><span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

```css live-sample___pagination-example
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

nav {
  border-top: 1px solid #eeeeee;
  margin-top: 1em;
  padding-top: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  justify-content: center;
}

.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.pagination li {
  margin: 0 1px;
}

.pagination a {
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999999;
  border-radius: 0.2em;
  text-decoration: none;
}

.pagination a[aria-current="page"] {
  background-color: #333333;
  color: white;
}
```

{{EmbedLiveSample("pagination-example")}}

## Getroffene Entscheidungen

Dieses Muster wird mithilfe von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellt – ein Flex-Container, der in einem anderen geschachtelt ist. Das {{htmlelement("nav")}}-Element wird als Flex-Container festgelegt, damit wir die Liste mithilfe der {{cssxref("justify-content")}}-Eigenschaft zentrieren können.

Die Liste selbst wird ebenfalls zu einem Flex-Container, um die Elemente als Reihe darzustellen. Um die Elemente zu verteilen, können wir entweder einen {{cssxref("margin")}} auf die Flex-Elemente anwenden oder einen {{cssxref("gap")}} auf den Flex-Container hinzufügen.

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

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation bewirkt und wohin sie gelangt, wenn sie auf einen Link klickt. Dazu haben wir [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) auf dem `<nav>`-Element hinzugefügt.

Wir haben auch einige zusätzliche Inhalte hinzugefügt, die von einem Screenreader gelesen werden, aber visuell verborgen sind, und das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut auf den Pagination-Pfeilen gesetzt.

Der Abschnitt "Siehe auch" am Ende dieses Dokuments enthält Links zu verwandten Themen der Barrierefreiheit.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Invisible content just for screen reader users](https://webaim.org/techniques/css/invisiblecontent/#techniques) über WebAIM.org (2020)
- [Writing CSS with accessibility in mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
