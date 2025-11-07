---
title: Paginierung
slug: Web/CSS/How_to/Layout_cookbook/Pagination
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieses Kochbuchmuster demonstriert das Navigationsmuster, das genutzt wird, um eine Seitennummerierung anzuzeigen, bei der Benutzer zwischen verschiedenen Seiten von Inhalten wie Suchergebnissen navigieren können.

![Links zu Seiten in einer unterteilten Liste](pagination.png)

## Anforderungen

Das Paginierungsmuster zeigt normalerweise Elemente in einer Reihe an. Um sicherzustellen, dass die Paginierung für Personen, die einen Screenreader verwenden, verständlich ist, markieren wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell als Reihe darzustellen.

Normalerweise wird die Paginierungskomponente horizontal zentriert unter dem Inhalt angezeigt.

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

Dieses Muster wird mit [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) gestaltet — ein Flex-Container wird in einen anderen verschachtelt. Das {{htmlelement("nav")}}-Element wird als Flex-Container festgelegt, damit wir die Liste mithilfe der {{cssxref("justify-content")}}-Eigenschaft zentrieren können.

Die Liste selbst wird auch zu einem Flex-Container, um die Elemente in einer Reihe anzuordnen. Um die Elemente zu verteilen, können wir entweder ein {{cssxref("margin")}} an den Flex-Items verwenden oder einen {{cssxref("gap")}} am Flex-Container hinzufügen.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Barrierefreiheitserwägungen

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation bewirkt und wohin sie geht, wenn sie auf einen Link klickt. Um dies zu unterstützen, haben wir dem `<nav>`-Element das [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzugefügt.

Wir haben auch zusätzlichen Inhalt hinzugefügt, der von einem Screenreader gelesen, aber visuell verborgen wird, und das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut auf die Pfeile der Seitennummerierung gesetzt.

Der Abschnitt "Siehe auch" am Ende dieses Dokuments enthält Links zu verwandten Barrierefreiheitsthemen.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Invisible content just for screen reader users](https://webaim.org/techniques/css/invisiblecontent/#techniques) über WebAIM.org (2020)
- [Writing CSS with accessibility in mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
