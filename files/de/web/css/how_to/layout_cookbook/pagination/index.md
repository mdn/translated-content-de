---
title: Seitennummerierung
slug: Web/CSS/How_to/Layout_cookbook/Pagination
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Dieses Kochbuchmuster demonstriert das Navigationsmuster, das verwendet wird, um eine Seitennummerierung anzuzeigen, bei der der Benutzer zwischen Seiten von Inhalten wie Suchergebnissen wechseln kann.

![Links zu Seitensätzen in einer seitenweise Auflistung](pagination.png)

## Anforderungen

Das Seitennummerierungsmuster zeigt typischerweise Elemente in einer Reihe an. Um sicherzustellen, dass die Seitennummerierung für Personen, die einen Screenreader verwenden, verständlich ist, markieren wir die Elemente als Liste innerhalb eines {{htmlelement("nav")}}-Elements und verwenden dann CSS, um das Layout visuell als Reihe darzustellen.

Typischerweise wird die Seitennummerierungskomponente horizontal unterhalb des Inhalts zentriert.

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

Dieses Muster wird mit [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gestaltet — ein flexibles Container-Element, das innerhalb eines anderen verschachtelt ist. Das {{htmlelement("nav")}}-Element wird als flexibler Container definiert, damit wir die Liste mit der Eigenschaft {{cssxref("justify-content")}} zentrieren können.

Die Liste selbst wird auch zu einem flexiblen Container, um die Elemente als Reihe anzuordnen. Um die Elemente zu verteilen, können wir entweder einen {{cssxref("margin")}} auf den Flex-Elementen verwenden oder einen {{cssxref("gap")}} auf dem flexiblen Container hinzufügen.

```css
.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
}
```

## Zugänglichkeitsbedenken

Wir möchten sicherstellen, dass eine Person, die einen Screenreader verwendet, versteht, was diese Navigation macht und wohin sie gelangen wird, wenn sie auf einen Link klickt. Dazu haben wir [`aria-label="pagination"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) auf dem `<nav>`-Element hinzugefügt.

Wir haben auch zusätzlichen Inhalt hinzugefügt, der von einem Screenreader gelesen wird, aber visuell verborgen ist, und das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) auf den Seitennummerierungspfeilen gesetzt.

Der Abschnitt "Siehe auch" am Ende dieses Dokuments enthält Links zu verwandten Zugänglichkeitsthemen.

## Siehe auch

- {{Cssxref("justify-content")}}, {{Cssxref("gap")}}
- [Know your ARIA: 'hidden' vs 'none'](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) (2018)
- [Unsichtbare Inhalte nur für Screenreader-Benutzer](https://webaim.org/techniques/css/invisiblecontent/#techniques) über WebAIM.org (2020)
- [CSS mit Blick auf Barrierefreiheit schreiben](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939) (2017)
- [a11y style guide: pagination](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)
