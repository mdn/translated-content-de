---
title: "ARIA: list Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/list_role
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die ARIA `list` Rolle kann verwendet werden, um eine Liste von Elementen zu kennzeichnen. Sie wird normalerweise in Verbindung mit der `listitem` Rolle verwendet, die dazu dient, ein Listenelement innerhalb der Liste zu identifizieren.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer darin enthaltenen Liste von Elementen besteht, kann für unterstützende Technologien unter Verwendung der `list` und `listitem` Container identifiziert werden. Eine `list` kann nur null oder mehr `listitem` Kinder enthalten.

Es gibt keine strengen Regeln, welche Elemente Sie verwenden sollten, um die Liste und Listenelemente zu markieren, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Beste Praktiken diktieren, die entsprechenden semantischen HTML-Elemente über ARIA-Rollen zu verwenden, um Listen und Listenelemente zu markieren — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Beste Praktiken](#beste_praktiken) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) Rolle
  - : Ein einzelnes Element in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Beste Praktiken

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es unbedingt erforderlich ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit im Nachhinein dynamisch mit JavaScript verbessern können.

Im Gegensatz zu den HTML-Elementen {{HTMLElement("ol")}} und {{HTMLElement("ul")}} unterscheiden die ARIA `list` Rollen nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listenelemente ({{HTMLElement("li")}}) zu markieren. Zum Beispiel sollte unser obiges Beispiel folgendermaßen umgeschrieben werden:

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
> Die ARIA `list` / `listitem` Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

Nebenbei bemerkt, beachten Sie, dass wenn Sie die semantischen HTML-Elemente `<ol>` oder `<ul>` verwenden und eine Rolle von [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) anwenden, jedes Kind `<li>` Element die `presentation` Rolle erbt, da ARIA verlangt, dass die `listitem` Elemente das Elternelement `list` haben. So werden die `<li>` Elemente nicht den unterstützenden Technologien ausgesetzt, aber Elemente, die in diesen `<li>` Elementen enthalten sind, einschließlich verschachtelter Listen, sind für unterstützende Technologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkarten-Schnittstelle fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement("ul")}} Element
- Das {{HTMLElement("ol")}} Element
- Das {{HTMLElement("li")}} Element
- [ARIA: listitem Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Listen Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
