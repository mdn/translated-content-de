---
title: "ARIA: listitem-Rolle"
slug: Web/Accessibility/ARIA/Roles/listitem_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `listitem`-Rolle kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) Rolle verwendet, die dazu dient, einen Listen-Container zu kennzeichnen.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen besteht, kann für unterstützende Technologien durch die jeweiligen `list`- und `listitem`-Container identifiziert werden.

Es gibt keine strikten Regeln, welche Elemente Sie verwenden sollten, um die Liste und die Listenelemente zu markieren, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste Sinn ergeben, z.B. eine Einkaufsliste, Rezeptschritte, Fahranweisungen.

> [!NOTE]
> Wenn möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Liste und ihre Listenelemente zu markieren — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Beste Praktiken](#beste_praktiken) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben, oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der `listitem`-Rolle als Kinder haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : Eine Sammlung verwandter Objekte, begrenzt auf Listenelemente, wenn sie in einer Liste verschachtelt sind, die nicht wichtig genug sind, um ihren eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Beste Praktiken

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es notwendig ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Barrierefreiheit nachträglich mit JavaScript dynamisch zu verbessern.

Wenn möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Liste und Listenelemente zu markieren — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

oder verwenden Sie eine geordnete Liste, wenn die Reihenfolge der Listenelemente wichtig ist:

```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
```

> [!NOTE]
> Die ARIA `list` / `listitem` Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

> [!NOTE]
> Das Stylen einer Liste mit `list-style: none;` in CSS entfernt die Listen-Semantik. Das Hinzufügen von `role="listitem"` stellt die Semantik wieder her.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkartenoberfläche fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `<li>` Element](/de/docs/Web/HTML/Element/li)
- [HTML `<ul>` Element](/de/docs/Web/HTML/Element/ul)
- [HTML `<ol>` Element](/de/docs/Web/HTML/Element/ol)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `group` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Listen-Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
