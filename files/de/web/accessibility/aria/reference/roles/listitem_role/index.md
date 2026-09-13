---
title: "ARIA: listitem Rolle"
short-title: listitem
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

Die ARIA `listitem` Rolle kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Normalerweise wird sie in Verbindung mit der [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle verwendet, die dazu dient, einen Listencontainer zu identifizieren.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann durch die `list`- und `listitem`-Container für unterstützende Technologien identifiziert werden.

Es gibt keine festen Regeln dafür, welche Elemente Sie verwenden sollten, um die Liste und die Listeneinträge zu markieren, aber Sie sollten sicherstellen, dass die Listeneinträge im Kontext einer Liste Sinn ergeben, z. B. eine Einkaufsliste, Schritte in einem Rezept, Wegbeschreibungen.

> [!NOTE]
> Wenn es in Ihrer Arbeit überhaupt möglich ist, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Liste und deren Listeneinträge zu markieren — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Beste Praktiken](#beste_praktiken) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine Sammlung verwandter Objekte, die auf Listeneinträge begrenzt ist, wenn sie in einer Liste verschachtelt sind und nicht wichtig genug sind, um ihren eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Beste Praktiken

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn Sie müssen — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Barrierefreiheit nachträglich dynamisch mit JavaScript zu verbessern.

Wenn irgendwie möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Liste und deren Listeneinträge zu markieren — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

oder verwenden Sie eine geordnete Liste, wenn die Reihenfolge der Listeneinträge wichtig ist:

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
> Wenn Sie eine Liste mit `list-style: none;` in CSS stylen, entfernen Sie die Listensemantik. Durch Hinzufügen von `role="listitem"` stellen Sie die Semantik wieder her.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkartenoberfläche funktionieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `<li>` Element](/de/docs/Web/HTML/Reference/Elements/li)
- [HTML `<ul>` Element](/de/docs/Web/HTML/Reference/Elements/ul)
- [HTML `<ol>` Element](/de/docs/Web/HTML/Reference/Elements/ol)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `group` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
