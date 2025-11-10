---
title: "ARIA: list-Rolle"
short-title: list
slug: Web/Accessibility/ARIA/Reference/Roles/list_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA `list`-Rolle kann verwendet werden, um eine Liste von Elementen zu kennzeichnen. Sie wird normalerweise in Verbindung mit der `listitem`-Rolle verwendet, die dazu dient, ein Listenelement innerhalb der Liste zu identifizieren.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen besteht, kann für unterstützende Technologien mithilfe der `list`- und `listitem`-Container identifiziert werden. Eine `list` kann nur null oder mehr `listitem`-Kinder enthalten.

Es gibt keine festen Regeln, welche Elemente Sie verwenden sollten, um die Liste und Listenelemente zu markieren, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Best Practices besagen, dass die geeigneten semantischen HTML-Elemente über ARIA-Rollen verwendet werden sollten, um Listen und Listenelemente zu markieren — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) Rolle
  - : Ein einzelnes Element in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es unbedingt notwendig ist – zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Barrierefreiheit im Nachhinein dynamisch mit JavaScript zu verbessern.

Im Gegensatz zu den HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}}, unterscheidet die ARIA `list`-Rolle nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die geeigneten semantischen HTML-Elemente verwenden, um eine Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listeneinträge ({{HTMLElement("li")}}) zu markieren. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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
> Die ARIA `list` / `listitem`-Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

Nebenbei bemerkt: Wenn Sie die semantischen HTML-Elemente `<ol>` oder `<ul>` verwenden und eine Rolle von [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) anwenden, erbt jedes Kind `<li>`-Element die `presentation`-Rolle, da ARIA erfordert, dass die `listitem`-Elemente das übergeordnete `list`-Element haben. So werden die `<li>`-Elemente nicht an unterstützende Technologien weitergegeben, aber die in diesen `<li>`-Elementen enthaltenen Elemente, einschließlich verschachtelter Listen, sind für unterstützende Technologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen kennzeichnen, die als Registerkartenoberfläche fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement("ul")}} Element
- Das {{HTMLElement("ol")}} Element
- Das {{HTMLElement("li")}} Element
- [ARIA: listitem Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Lists Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
