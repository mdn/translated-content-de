---
title: "ARIA: listitem Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die ARIA `listitem`-Rolle kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle verwendet, die dazu dient, einen Listen-Container zu identifizieren.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann für unterstützende Technologien durch die Verwendung der `list`- und `listitem`-Container identifiziert werden.

Es gibt keine strengen Regeln darüber, welche Elemente Sie verwenden sollten, um die Liste und Listenpunkte zu markieren. Sie sollten jedoch sicherstellen, dass die Listenpunkte im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte oder Wegbeschreibungen.

> [!NOTE]
> Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und ihre Listenelemente zu markieren — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine Sammlung verwandter Objekte, beschränkt auf Listenelemente, wenn sie in einer Liste verschachtelt sind, die nicht wichtig genug sind, um einen eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es unbedingt erforderlich ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit dynamisch im Nachhinein mit JavaScript zu verbessern.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und Listenelemente zu markieren — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

oder eine geordnete Liste verwenden, wenn die Reihenfolge der Listenelemente wichtig ist:

```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
```

> [!NOTE]
> Die ARIA `list`- / `listitem`-Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

> [!NOTE]
> Das Styling einer Liste mit `list-style: none;` in CSS entfernt die Listensemantik. Durch Hinzufügen von `role="listitem"` wird die Semantik zurückgegeben.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerschnittstelle fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `<li>`-Element](/de/docs/Web/HTML/Reference/Elements/li)
- [HTML `<ul>`-Element](/de/docs/Web/HTML/Reference/Elements/ul)
- [HTML `<ol>`-Element](/de/docs/Web/HTML/Reference/Elements/ol)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `group` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
