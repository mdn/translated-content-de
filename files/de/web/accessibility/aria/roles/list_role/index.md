---
title: "ARIA: list Rolle"
slug: Web/Accessibility/ARIA/Roles/list_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `list`-Rolle kann verwendet werden, um eine Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der `listitem`-Rolle verwendet, die ein Listenelement innerhalb der Liste identifiziert.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann für unterstützende Technologien mit den Containern `list` und `listitem` identifiziert werden. Eine `list` kann nur null oder mehr `listitem`-Kinder enthalten.

Es gibt keine festen Regeln, welche Elemente Sie zum Markieren der Liste und der Listenelemente verwenden sollten, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z.B. eine Einkaufsliste, Rezeptschritte, Wegbeschreibungen.

> [!NOTE]
> Best Practices legen nahe, die entsprechenden semantischen HTML-Elemente anstelle von ARIA-Rollen zu verwenden, um Listen und Listenelemente zu markieren — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Siehe [Best Practices](#best_practices) für ein vollständiges Beispiel.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role) Rolle
  - : Ein einzelnes Element in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur, wenn es unbedingt nötig ist – zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber dennoch die Barrierefreiheit mit JavaScript nachträglich dynamisch verbessern können.

Im Gegensatz zu den HTML-Elementen {{HTMLElement("ol")}} und {{HTMLElement("ul")}} unterscheidet die ARIA `list`-Rolle nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listenelemente ({{HTMLElement("li")}}) zu markieren. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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

Nebenbei bemerkt, beachten Sie, dass wenn Sie die semantischen HTML-Elemente von `<ol>` oder `<ul>` verwenden und eine Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) anwenden, jedes `<li>`-Kindelement die `presentation`-Rolle erbt, da ARIA verlangt, dass die `listitem`-Elemente das übergeordnete `list`-Element haben. So werden die `<li>`-Elemente nicht an unterstützende Technologien weitergegeben, aber Elemente innerhalb dieser `<li>`-Elemente, einschließlich verschachtelter Listen, sind für unterstützende Technologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkarten-Schnittstelle funktionieren soll, sollten Sie stattdessen die [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), und [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) Rollen verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement("ul")}}-Element
- Das {{HTMLElement("ol")}}-Element
- Das {{HTMLElement("li")}}-Element
- [ARIA: listitem Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Lists Beispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
