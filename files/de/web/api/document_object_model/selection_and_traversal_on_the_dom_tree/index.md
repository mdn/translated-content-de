---
title: Auswahl und Traversierung im DOM-Baum
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("DOM")}}

Die Selectors-API bietet Methoden, die es schnell und einfach machen, [`Element`](/de/docs/Web/API/Element)-Knoten aus dem DOM abzurufen, indem gegen eine Reihe von [Selektoren](/de/docs/Web/CSS/Guides/Selectors) verglichen wird. Dies ist viel schneller als frühere Techniken, bei denen es beispielsweise notwendig war, eine Schleife im JavaScript-Code zu verwenden, um die spezifischen Elemente zu finden, die Sie benötigten.

## Das NodeSelector-Interface

Diese Spezifikation fügt zwei neue Methoden zu allen Objekten hinzu, die die Schnittstellen [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder [`Element`](/de/docs/Web/API/Element) implementieren:

- [`querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten passenden [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des Teilbaums des Knotens zurück. Falls kein passender Knoten gefunden wird, wird `null` zurückgegeben.
- [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle passenden `Element`-Knoten innerhalb des Teilbaums des Knotens enthält, oder eine leere `NodeList`, wenn keine Übereinstimmungen gefunden werden.

> [!NOTE]
> Die von [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) ist nicht live, was bedeutet, dass Änderungen im DOM nicht in der Sammlung widergespiegelt werden. Dies unterscheidet sich von anderen DOM-Abfragemethoden, die live Node-Listen zurückgeben.

Sie finden Beispiele und Details, indem Sie die Dokumentation zu den Methoden [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) lesen.

## Selektoren

Die Selektormethoden akzeptieren [Selektoren](/de/docs/Web/CSS/Guides/Selectors), um zu bestimmen, welches Element oder welche Elemente zurückgegeben werden sollen. Dies umfasst [Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list), sodass Sie mehrere Selektoren in einer einzigen Anfrage gruppieren können.

Um die Privatsphäre des Benutzers zu schützen, werden einige [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) nicht unterstützt oder verhalten sich anders. Zum Beispiel wird {{cssxref(":visited")}} keine Übereinstimmungen zurückgeben und {{cssxref(":link")}} wird als {{cssxref(":any-link")}} behandelt.

Nur Elemente können ausgewählt werden, daher werden [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) nicht unterstützt.

## Beispiele

Um alle Absatz- (`p`-)Elemente in einem Dokument auszuwählen, deren Klassen `warning` oder `note` enthalten, können Sie Folgendes tun:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Sie können auch nach ID abfragen. Zum Beispiel:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Nach der Ausführung des obigen Codes enthält `el` das erste Element im Dokument, dessen ID `main`, `basic` oder `exclamation` ist.

## Siehe auch

- [Selectors-Spezifikation](https://drafts.csswg.org/selectors/)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
