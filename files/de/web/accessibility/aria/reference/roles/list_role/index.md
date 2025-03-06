---
title: "ARIA: list Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/list_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA `list` Rolle kann verwendet werden, um eine Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der `listitem` Rolle verwendet, die ein Listenelement identifiziert, das innerhalb der Liste enthalten ist.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jeglicher Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann Assistenztechnologien mithilfe der `list` und `listitem` Container identifiziert werden. Eine `list` kann nur null oder mehr `listitem` Kinder enthalten.

Es gibt keine festen Regeln darüber, welche Elemente Sie verwenden sollten, um die Liste und Listenelemente auszumarkieren. Sie sollten jedoch sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Best Practices empfehlen, die entsprechenden semantischen HTML-Elemente anstelle von ARIA-Rollen zu verwenden, um Listen und Listenelemente auszuzeichnen — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) Rolle
  - : Ein einzelnes Element in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn unbedingt notwendig — zum Beispiel, wenn Sie keinen Einfluss auf Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit nachträglich dynamisch mit JavaScript zu verbessern.

Im Gegensatz zu den HTML-Elementen {{HTMLElement("ol")}} und {{HTMLElement("ul")}} unterscheidet die ARIA `list` Rolle nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listenelemente ({{HTMLElement("li")}}) auszuzeichnen. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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

Nebenbei bemerkt, beachten Sie, dass wenn Sie die semantischen HTML-Elemente `<ol>` oder `<ul>` verwenden und eine Rolle von [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) anwenden, jedes Kind `<li>` Element die `presentation` Rolle erbt, da ARIA von den `listitem` Elementen verlangt, das übergeordnete `list` Element zu haben. Daher werden die `<li>` Elemente nicht an Assistenztechnologien weitergegeben, aber Elemente, die innerhalb dieser `<li>` Elemente enthalten sind, einschließlich verschachtelter Listen, sind für Assistenztechnologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen auszeichnen, die als Registerkartenschnittstelle funktionieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) verwenden.

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
