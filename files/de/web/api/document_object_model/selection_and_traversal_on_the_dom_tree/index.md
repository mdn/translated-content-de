---
title: Auswahl und Traversieren im DOM-Baum
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{DefaultAPISidebar("DOM")}}

Die Selectors-API bietet Methoden, mit denen Sie schnell und einfach [`Element`](/de/docs/Web/API/Element)-Knoten aus dem DOM abrufen können, indem sie mit einem Satz von [Selektoren](/de/docs/Web/CSS/CSS_selectors) verglichen werden. Dies ist viel schneller als frühere Techniken, bei denen es beispielsweise notwendig war, eine Schleife in JavaScript-Code zu verwenden, um die spezifischen Elemente zu finden, die Sie benötigen.

## Die NodeSelector-Schnittstelle

Diese Spezifikation fügt zwei neue Methoden zu allen Objekten hinzu, die die [`Document`](/de/docs/Web/API/Document)-, [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)- oder [`Element`](/de/docs/Web/API/Element)-Schnittstellen implementieren:

- [`querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten passenden [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des Unterbaums des Knotens zurück. Wenn kein passender Knoten gefunden wird, wird `null` zurückgegeben.
- [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle passenden `Element`-Knoten innerhalb des Unterbaums des Knotens enthält, oder eine leere `NodeList`, wenn keine Übereinstimmungen gefunden werden.

> [!NOTE]
> Die von [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) ist nicht live, was bedeutet, dass Änderungen im DOM nicht in der Sammlung reflektiert werden. Dies unterscheidet sich von anderen DOM-Abfragemethoden, die Live-Node-Listen zurückgeben.

Sie finden Beispiele und Details, indem Sie die Dokumentation für die Methoden [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) lesen.

## Selektoren

Die Selektormethoden akzeptieren [Selektoren](/de/docs/Web/CSS/CSS_selectors), um zu bestimmen, welches Element oder welche Elemente zurückgegeben werden sollen. Dies schließt [Selektorliste](/de/docs/Web/CSS/Selector_list) ein, damit Sie mehrere Selektoren in einer einzelnen Abfrage gruppieren können.

Um die Privatsphäre des Benutzers zu schützen, werden einige [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) nicht unterstützt oder verhalten sich anders. Zum Beispiel wird {{cssxref(":visited")}} keine Übereinstimmungen zurückgeben und {{cssxref(":link")}} wird als {{cssxref(":any-link")}} behandelt.

Es können nur Elemente ausgewählt werden, daher werden [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) nicht unterstützt.

## Beispiele

Um alle Paragraphen (`p`)-Elemente in einem Dokument auszuwählen, deren Klassen `warning` oder `note` enthalten, können Sie Folgendes tun:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Sie können auch nach ID abfragen. Zum Beispiel:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Nach der Ausführung des obigen Codes enthält `el` das erste Element im Dokument, dessen ID `main`, `basic` oder `exclamation` ist.

## Siehe auch

- [Selektor-Spezifikation](https://drafts.csswg.org/selectors/)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
