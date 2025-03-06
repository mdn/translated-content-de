---
title: "ARIA: listitem Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA `listitem` Rolle kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle verwendet, die zur Identifizierung eines Listenkontextes dient.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Beliebiger Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann mithilfe der `list` und `listitem` Container assistiven Technologien zugänglich gemacht werden.

Es gibt keine festen Regeln, welche Elemente Sie zur Auszeichnung der Liste und Listenelemente verwenden sollten, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z.B. eine Einkaufsliste, Rezeptschritte, Fahranweisungen.

> [!NOTE]
> Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und deren Listenelemente auszuzeichnen — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben, oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine Sammlung verwandter Objekte, begrenzt auf Listenelemente, wenn sie in einer Liste verschachtelt sind und nicht wichtig genug sind, um ihren eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es notwendig ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit im Nachhinein dynamisch mit JavaScript verbessern können.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und Listenelemente auszuzeichnen — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Unser obiges Beispiel sollte beispielsweise wie folgt umgeschrieben werden:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

oder nutzen Sie eine geordnete Liste, wenn die Reihenfolge der Listenelemente von Bedeutung ist:

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
> Das Styling einer Liste mit `list-style: none;` in CSS entfernt die Listensemantik. Durch das Hinzufügen von `role="listitem"` wird die Semantik wiederhergestellt.

> [!NOTE]
> Wenn Sie eine Liste von Elementen auszeichnen, die als Tab-Interface fungiert, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `<li>` Element](/de/docs/Web/HTML/Element/li)
- [HTML `<ul>` Element](/de/docs/Web/HTML/Element/ul)
- [HTML `<ol>` Element](/de/docs/Web/HTML/Element/ol)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `group` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
