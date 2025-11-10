---
title: "ARIA: listitem-Rolle"
short-title: listitem
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA-`listitem`-Rolle kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle verwendet, die dazu dient, einen Listencontainer zu identifizieren.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Jeglicher Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann mit den Containern `list` und `listitem` für unterstützende Technologien identifiziert werden.

Es gibt keine festen Regeln, welche Elemente Sie verwenden sollten, um die Liste und die Listenelemente zu markieren, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Wenn es in Ihrer Arbeit überhaupt möglich ist, sollten Sie die geeigneten semantischen HTML-Elemente verwenden, um eine Liste und deren Listenelemente zu markieren — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kind haben oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der Rolle `listitem` als Kind haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine Sammlung verwandter Objekte, die auf Listenelemente beschränkt ist, wenn sie in einer Liste verschachtelt sind, und die nicht wichtig genug sind, um einen eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn nötig — beispielsweise, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit nachträglich mit JavaScript dynamisch zu verbessern.

Wenn irgendwie möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Liste und deren Listenelemente zu markieren — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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
> Die ARIA-`list` / `listitem`-Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

> [!NOTE]
> Das Stylen einer Liste mit `list-style: none;` in CSS entfernt die Listensemantik. Das Hinzufügen von `role="listitem"` stellt die Semantik wieder her.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkartenschnittstelle fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `<li>`-Element](/de/docs/Web/HTML/Reference/Elements/li)
- [HTML `<ul>`-Element](/de/docs/Web/HTML/Reference/Elements/ul)
- [HTML `<ol>`-Element](/de/docs/Web/HTML/Reference/Elements/ol)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `group`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
