---
title: "ARIA: list Rolle"
slug: Web/Accessibility/ARIA/Roles/list_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `list`-Rolle kann verwendet werden, um eine Liste von Elementen zu identifizieren. Sie wird normalerweise in Verbindung mit der `listitem`-Rolle verwendet, die ein Listenobjekt innerhalb der Liste identifiziert.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Beschreibung

Jeder Inhalt, der aus einem äußeren Container mit einer Liste von Elementen darin besteht, kann mit Hilfe der `list`- und `listitem`-Container für unterstützende Technologien identifiziert werden. Eine `list` kann nur null oder mehr `listitem`-Kinder enthalten.

Es gibt keine festen Regeln darüber, welche Elemente Sie verwenden sollten, um die Liste und die Listenelemente zu markieren, aber Sie sollten sicherstellen, dass die Listenelemente im Kontext einer Liste sinnvoll sind, z.B. eine Einkaufsliste, Rezeptschritte, Fahranweisungen.

> [!NOTE]
> Best Practices empfehlen, die entsprechenden semantischen HTML-Elemente statt ARIA-Rollen zu verwenden, um Listen und Listenelemente zu markieren — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} und {{HTMLElement("li")}}. Sehen Sie sich [Best Practices](#best_practices) für ein vollständiges Beispiel an.

### Zugehörige WAI-ARIA-Rollen, Status und Eigenschaften

- [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role) Rolle
  - : Ein einzelnes Element in einer Liste. Elemente mit der Rolle `listitem` können nur in einem Element mit der Rolle `list` gefunden werden.

## Best Practices

Verwenden Sie `role="list"` und `role="listitem"` nur bei Notwendigkeit — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit nachträglich mit JavaScript dynamisch verbessern können.

Im Gegensatz zu den HTML-Elementen {{HTMLElement("ol")}} und {{HTMLElement("ul")}} unterscheidet die ARIA `list`-Rolle nicht zwischen geordneten und ungeordneten Listen. Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Liste ({{HTMLElement("ol")}} und {{HTMLElement("ul")}}) und Listenelemente ({{HTMLElement("li")}}) zu markieren. Unser obiges Beispiel sollte zum Beispiel wie folgt umgeschrieben werden:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

Oder verwenden Sie eine geordnete Liste, wenn die Reihenfolge der Listenelemente wichtig ist:

```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
```

> [!NOTE]
> Die ARIA `list` / `listitem`-Rollen unterscheiden nicht zwischen geordneten und ungeordneten Listen.

Nebenbei bemerkt, beachten Sie, dass wenn Sie die semantischen HTML-Elemente `<ol>` oder `<ul>` verwenden und eine Rolle von [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) anwenden, jedes untergeordnete `<li>`-Element die `presentation`-Rolle erbt, weil ARIA verlangt, dass `listitem`-Elemente ein `list`-Elternteil haben. So werden die `<li>`-Elemente nicht für unterstützende Technologien sichtbar gemacht, aber Elemente, die innerhalb dieser `<li>`-Elemente enthalten sind, einschließlich verschachtelter Listen, sind für unterstützende Technologien sichtbar.

> [!NOTE]
> Wenn Sie eine Liste von Elementen markieren, die als Registerkarten-Schnittstelle fungieren soll, sollten Sie stattdessen die [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) und [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) Rollen verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement("ul")}}-Element
- Das {{HTMLElement("ol")}}-Element
- Das {{HTMLElement("li")}}-Element
- [ARIA: listitem-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA-Listenbeispiele](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — von Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
