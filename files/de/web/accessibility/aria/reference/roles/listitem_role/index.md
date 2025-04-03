---
title: "ARIA: Rolle listitem"
slug: Web/Accessibility/ARIA/Reference/Roles/listitem_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die ARIA-Rolle `listitem` kann verwendet werden, um ein Element innerhalb einer Liste von Elementen zu identifizieren. Sie wird normalerweise in Kombination mit der [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle verwendet, die verwendet wird, um einen Listcontainer zu identifizieren.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen besteht, kann mit den `list` und `listitem` Containern für unterstützende Technologien identifiziert werden.

Es gibt keine festen Regeln, welche Elemente Sie zum Auszeichnen der Liste und der Listenelemente verwenden sollten, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste Sinn ergeben, z.B. eine Einkaufsliste, Rezeptschritte, Fahranweisungen.

> [!NOTE]
> Wenn es in Ihrer Arbeit möglich ist, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und ihre Listenelemente auszuzeichnen — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
  - : Eine Liste von Elementen. Elemente mit der Rolle `list` müssen ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben, oder ein oder mehrere Elemente mit der Rolle `group`, die ein oder mehrere Elemente mit der Rolle `listitem` als Kinder haben.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Eine Sammlung von verwandten Objekten, die auf Listeneinträge beschränkt ist, wenn sie in einer Liste verschachtelt sind und nicht wichtig genug sind, um ihren eigenen Platz im Inhaltsverzeichnis einer Seite zu haben.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es erforderlich ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit nachträglich dynamisch mit JavaScript zu verbessern.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste und Listenelemente auszuzeichnen — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} und {{HTMLElement("li")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt neu geschrieben werden:

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
> Die ARIA-Rollen `list` / `listitem` unterscheiden nicht zwischen geordneten und ungeordneten Listen.

> [!NOTE]
> Wenn Sie eine Liste mit `list-style: none;` in CSS stylen, werden die Listen-Semantiken entfernt. Durch Hinzufügen von `role="listitem"` werden die Semantiken zurückgegeben.

> [!NOTE]
> Wenn Sie eine Liste von Elementen auszeichnen, die als Registerkarten-Schnittstelle fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

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
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
