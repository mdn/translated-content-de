---
title: Auswahl und Traversierung im DOM-Baum
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{DefaultAPISidebar("DOM")}}

Die Selectors-API bietet Methoden, die es schnell und einfach machen, [`Element`](/de/docs/Web/API/Element)-Knoten aus dem DOM abzurufen, indem sie mit einer Reihe von [Selektoren](/de/docs/Web/CSS/CSS_selectors) verglichen werden. Dies ist viel schneller als frühere Techniken, bei denen es beispielsweise notwendig war, eine Schleife im JavaScript-Code zu verwenden, um die spezifischen Elemente zu finden, die Sie benötigten.

## Das NodeSelector-Interface

Diese Spezifikation fügt zwei neue Methoden zu allen Objekten hinzu, die die [`Document`](/de/docs/Web/API/Document)-, [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)- oder [`Element`](/de/docs/Web/API/Element)-Interfaces implementieren:

- [`querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten passenden [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des Knotensubbaums zurück. Wenn kein passender Knoten gefunden wird, wird `null` zurückgegeben.
- [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt ein [`NodeList`](/de/docs/Web/API/NodeList) zurück, das alle passenden `Element`-Knoten innerhalb des Knotensubbaums enthält, oder ein leeres `NodeList`, wenn keine Übereinstimmungen gefunden werden.

> [!NOTE]
> Die von [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) ist nicht live, was bedeutet, dass Änderungen im DOM nicht in der Sammlung reflektiert werden. Dies unterscheidet sich von anderen DOM-Abfragemethoden, die Live-Knotenlisten zurückgeben.

Sie finden Beispiele und Details, indem Sie die Dokumentation für die Methoden [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) lesen.

## Selektoren

Die Selektormethoden akzeptieren [Selektoren](/de/docs/Web/CSS/CSS_selectors), um zu bestimmen, welches Element oder welche Elemente zurückgegeben werden sollen. Dies schließt [Selektorenlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list) ein, sodass Sie mehrere Selektoren in einer einzigen Abfrage gruppieren können.

Zum Schutz der Privatsphäre des Benutzers werden einige [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) nicht unterstützt oder verhalten sich anders. Zum Beispiel wird {{cssxref(":visited")}} keine Übereinstimmungen zurückgeben und {{cssxref(":link")}} wird als {{cssxref(":any-link")}} behandelt.

Es können nur Elemente ausgewählt werden, daher werden [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) nicht unterstützt.

## Beispiele

Um alle Absatz- (`p`)-Elemente in einem Dokument auszuwählen, deren Klassen `warning` oder `note` beinhalten, können Sie Folgendes tun:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Sie können auch nach ID abfragen. Zum Beispiel:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Nach Ausführung des obigen Codes enthält `el` das erste Element im Dokument, dessen ID eine von `main`, `basic` oder `exclamation` ist.

## Siehe auch

- [Selektorspezifikation](https://drafts.csswg.org/selectors/)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
