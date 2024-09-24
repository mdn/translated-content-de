---
title: "ARIA: list-Rolle"
slug: Web/Accessibility/ARIA/Roles/list_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `list`-Rolle kann verwendet werden, um eine Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der `listitem`-Rolle verwendet, die einen Listeneintrag innerhalb der Liste identifiziert.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jegliche Inhalte, die aus einem äußeren Container mit einer Liste von Elementen bestehen, können durch Verwendung der `list`- und `listitem`-Container für unterstützende Technologien identifiziert werden. Eine `list` kann nur null oder mehr `listitem`-Kinder enthalten.

Es gibt keine festen Regeln, welche Elemente Sie zur Markierung der Liste und der Listeneinträge verwenden sollten, aber Sie sollten sicherstellen, dass die Listeneinträge im Kontext einer Liste sinnvoll sind, z. B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Beste Praktiken besagen, dass Sie über ARIA-Rollen hinaus die entsprechenden semantischen HTML-Elemente zur Markierung von Listen und Listeneinträgen verwenden sollten — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Beste Praktiken](#beste_praktiken) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)-Rolle
  - : Ein einzelner Eintrag in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Beste Praktiken

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn Sie es müssen — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit im Nachhinein dynamisch mit JavaScript zu verbessern.

Im Gegensatz zu den HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}}, unterscheidet die ARIA `list`-Rolle nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente zur Markierung einer Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listeneinträgen ({{HTMLElement("li")}}) verwenden. Beispielsweise sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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

Nebenbei bemerkt, beachten Sie, dass wenn Sie die semantischen HTML-Elemente `<ol>` oder `<ul>` verwenden und eine Rolle von [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) anwenden, jedes Kind-`<li>`-Element die `presentation`-Rolle erbt, da ARIA erfordert, dass die `listitem`-Elemente das übergeordnete `list`-Element haben. Somit werden die `<li>`-Elemente nicht an unterstützende Technologien übermittelt, aber die innerhalb dieser `<li>`-Elemente enthaltenen Elemente, einschließlich verschachtelter Listen, sind für unterstützende Technologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkarten-Schnittstelle fungieren soll, sollten Sie stattdessen die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement("ul")}}-Element
- Das {{HTMLElement("ol")}}-Element
- Das {{HTMLElement("li")}}-Element
- [ARIA: listitem-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA-Listen-Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
